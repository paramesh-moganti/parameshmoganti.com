"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const systems = [
  {
    id: "01",
    label: "React & TypeScript",
    detail: "Building reliable, maintainable UI.",
    path: "M 200 175 C 155 145, 120 100, 88 75",
    dotPath: "M 200 175 C 155 145, 120 100, 88 75",
    x: "2%",
    y: "5%",
  },
  {
    id: "02",
    label: "Micro-frontends",
    detail: "Independent applications, clear boundaries.",
    path: "M 200 175 C 245 145, 280 100, 312 75",
    dotPath: "M 200 175 C 245 145, 280 100, 312 75",
    x: "55%",
    y: "5%",
  },
  {
    id: "03",
    label: "Design systems",
    detail: "Reusable components and consistent experiences.",
    path: "M 200 235 C 200 285, 200 315, 200 345",
    dotPath: "M 200 235 C 200 285, 200 315, 200 345",
    x: "29%",
    y: "76%",
  },
];

export default function ArchitectureVisual() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="architecture-visual">
      <div className="architecture-label">
        <span className="architecture-pulse" />
        FRONTEND SYSTEMS
        <span className="architecture-live">LIVE MAP</span>
      </div>

      <div className="architecture-canvas">
        <svg
          className="architecture-wires"
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <filter id="signal-glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {systems.map((system, index) => {
            const highlighted = active === system.id;

            return (
              <g key={system.id}>
                <path
                  d={system.path}
                  fill="none"
                  stroke={highlighted ? "#e44b2c" : "#c9c6bd"}
                  strokeWidth={highlighted ? 2.5 : 1.5}
                  strokeDasharray={highlighted ? "none" : "4 6"}
                />

                {!reduceMotion && (
                  <motion.circle
                    r="4"
                    fill="#e44b2c"
                    stroke="#f3f1eb"
                    strokeWidth="1.5"
                    filter="url(#signal-glow)"
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{
                      duration: 2.2,
                      delay: index * 0.8,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      ease: "linear",
                    }}
                    style={{
                      offsetPath: `path("${system.dotPath}")`,
                      opacity: highlighted || active === null ? 1 : 0.25,
                    }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        <motion.div
          className="architecture-hub"
          style={{ x: "-50%", y: "-50%" }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="architecture-hub-icon">
            <span />
            <span />
            <span />
            <span />
          </div>

          <span className="architecture-hub-label">THE PLATFORM</span>
          <strong>Frontend</strong>
          <strong className="architecture-accent">Architecture</strong>

          <span className="architecture-hub-caption">
            One system. Clear boundaries.
          </span>
        </motion.div>

        {systems.map((system, index) => (
          <motion.button
            key={system.id}
            type="button"
            className={`architecture-system architecture-system-${index + 1} ${
              active === system.id ? "is-active" : ""
            }`}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            onMouseEnter={() => setActive(system.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(system.id)}
            onBlur={() => setActive(null)}
            whileHover={reduceMotion ? undefined : { y: -3 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            aria-pressed={active === system.id}
          >
            <span>{system.id}</span>
            <strong>{system.label}</strong>
            <small>{system.detail}</small>
          </motion.button>
        ))}
      </div>

      <div className="architecture-footer">
        <span>DESIGN</span>
        <span className="architecture-footer-dot">✳</span>
        <span>ARCHITECT</span>
        <span className="architecture-footer-dot">✳</span>
        <span>DELIVER</span>
      </div>
    </div>
  );
}
