"use client";

import { useState } from "react";

type Axis = {
  label: string;
  value: number;
  description: string;
};

const SIZE = 340;
const CENTER = SIZE / 2;
const MAX_RADIUS = 120;
const RINGS = [0.25, 0.5, 0.75, 1];

function pointFor(index: number, count: number, radius: number) {
  const angle = (-90 + index * (360 / count)) * (Math.PI / 180);
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}

function labelAnchor(x: number) {
  if (x > 10) return "start";
  if (x < -10) return "end";
  return "middle";
}

export function RadarChart({ axes }: { axes: Axis[] }) {
  const [hovered, setHovered] = useState<Axis | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const dataPoints = axes.map((axis, i) => ({
    axis,
    ...pointFor(i, axes.length, (axis.value / 100) * MAX_RADIUS),
  }));

  const polygonPoints = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({ x: e.clientX - rect.left + 15, y: e.clientY - rect.top + 15 });
  }

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center rounded-lg border border-tertiary/5 bg-surface"
      onMouseMove={handleMouseMove}
    >
      {hovered && (
        <div
          className="pointer-events-none absolute z-[100] whitespace-nowrap rounded-md bg-primary-container px-3 py-2 font-body-md text-xs text-cream-foam shadow-lg"
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        >
          <strong>{hovered.label}</strong>
          <br />
          {hovered.description}
        </div>
      )}
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width={SIZE}
        height={SIZE}
        className="h-full w-full max-w-[340px] object-contain"
      >
        <g transform={`translate(${CENTER}, ${CENTER})`}>
          {RINGS.map((ring) => (
            <polygon
              key={ring}
              fill="none"
              stroke="#e4e2de"
              strokeWidth={1}
              points={axes
                .map((_, i) => {
                  const p = pointFor(i, axes.length, ring * MAX_RADIUS);
                  return `${p.x},${p.y}`;
                })
                .join(" ")}
            />
          ))}

          {axes.map((axis, i) => {
            const p = pointFor(i, axes.length, MAX_RADIUS);
            const labelP = pointFor(i, axes.length, MAX_RADIUS + 15);
            const isActive = hovered?.label === axis.label;
            return (
              <g
                key={axis.label}
                onMouseEnter={() => setHovered(axis)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer"
              >
                <line
                  x1={0}
                  y1={0}
                  x2={p.x}
                  y2={p.y}
                  stroke={isActive ? "#C6A664" : "#3e2723"}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray="4"
                  className="transition-all duration-300"
                />
                <text
                  x={labelP.x}
                  y={labelP.y}
                  fill="#3e2723"
                  fontFamily="Plus Jakarta Sans"
                  fontSize={12}
                  fontWeight={600}
                  textAnchor={labelAnchor(labelP.x)}
                >
                  {axis.label}
                </text>
              </g>
            );
          })}

          <polygon
            points={polygonPoints}
            fill="#3e2723"
            fillOpacity={0.15}
            stroke="#3e2723"
            strokeWidth={2}
          />

          {dataPoints.map(({ axis, x, y }) => {
            const isActive = hovered?.label === axis.label;
            return (
              <circle
                key={axis.label}
                cx={x}
                cy={y}
                r={isActive ? 6 : 4}
                fill={isActive ? "#C6A664" : "#3e2723"}
                className={isActive ? "cursor-pointer" : "radar-point cursor-pointer"}
                onMouseEnter={() => setHovered(axis)}
                onMouseLeave={() => setHovered(null)}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
