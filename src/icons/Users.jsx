export function UsersIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M17 21v-2a4 4 0 00-3-3.87" />
      <path d="M7 21v-2a4 4 0 013-3.87" />
      <circle cx="5.5" cy="8" r="2.5" />
      <path d="M2 21v-2a4 4 0 013-3.5" />
      <circle cx="18.5" cy="8" r="2.5" />
      <path d="M22 21v-2a4 4 0 00-3-3.5" />
    </svg>
  );
}

export default UsersIcon;
