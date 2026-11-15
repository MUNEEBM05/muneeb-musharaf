type IconProps = { className?: string };

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Planet with craters, drawn to match the lucide line style
export const MarsIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="9" cy="9" r="1.5" />
    <circle cx="15.5" cy="13.5" r="2" />
    <circle cx="9.5" cy="16" r="1" />
  </svg>
);

// Horse head in profile, facing left
export const HorseIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M8 21l2.5-7.5L6 15.5c-1.5.5-3-.7-2.5-2.2L9 5l3-3 1.5 2.5C18 6 20 10 20 15v6" />
    <path d="M14.5 6.5c1.6 1.4 2.4 3.2 2.6 5.5" />
    <circle cx="9.6" cy="8" r=".6" fill="currentColor" />
  </svg>
);
