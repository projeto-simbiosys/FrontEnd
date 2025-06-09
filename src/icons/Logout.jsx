const Logout = ({ width, height, props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 50 50"
  >
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M6.25 25h16.667M12.5 31.25l-6.069-6.069c-.1-.1-.1-.262 0-.362L12.5 18.75M16.667 10.417V9.375c0-1.726 1.399-3.125 3.125-3.125h19.791a4.167 4.167 0 0 1 4.167 4.167v29.166a4.167 4.167 0 0 1-4.167 4.167H19.792a3.125 3.125 0 0 1-3.125-3.125v-1.042"
    />
  </svg>
);

export default Logout;
