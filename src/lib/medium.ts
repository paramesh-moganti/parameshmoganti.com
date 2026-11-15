
import Parser from "rss-parser";

const parser = new Parser();

const MEDIUM_FEED_URL =
  "https://medium.com/feed/@parameshmoganti";

export type MediumArticle = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

export async function getMediumArticles(
  limit = 6
): Promise<MediumArticle[]> {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Medium RSS request failed: ${response.status}`
      );
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    return feed.items.slice(0, limit).map((item) => ({
      title: item.title?.trim() || "Untitled article",
      link:
        item.link || "https://medium.com/@parameshmoganti",
      pubDate: item.isoDate || item.pubDate || "",
      description: (item.contentSnippet || "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 180),
    }));
  } catch (error) {
    console.error("Failed to fetch Medium articles:", error);
    return [];
  }
}
