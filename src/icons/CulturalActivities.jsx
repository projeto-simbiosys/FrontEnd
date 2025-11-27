export default function CulturalActivitiesIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />

      <path d="M3 4c3 2 3 6 0 8" />
      <path d="M21 4c-3 2-3 6 0 8" />

      <line x1="3" y1="16" x2="21" y2="16" />

      <line x1="3" y1="8" x2="21" y2="8" />
    </svg>
  );
}
