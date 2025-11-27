export function BookIcon({ className = "w-6 h-6" }) {
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
      <path d="M3 4.5A2.5 2.5 0 015.5 2h5.5v17H5.5A2.5 2.5 0 013 16.5v-12z" />
      <path d="M21 4.5A2.5 2.5 0 0018.5 2H13v17h5.5A2.5 2.5 0 0021 16.5v-12z" />
      <line x1="12" y1="2" x2="12" y2="19" />
    </svg>
  );
}

export default BookIcon;
