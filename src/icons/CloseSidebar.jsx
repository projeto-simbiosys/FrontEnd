const CloseSidebar = ({ width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 40 40"
  >
    <path
      stroke="#04047D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M36.617 25V15c0-8.333-3.334-11.667-11.667-11.667h-10C6.617 3.333 3.283 6.667 3.283 15v10c0 8.333 3.334 11.667 11.667 11.667h10c8.333 0 11.667-3.334 11.667-11.667M24.95 3.333v33.334"
    ></path>
    <path
      stroke="#04047D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M17.55 15.733 13.283 20l4.267 4.267"
    ></path>
  </svg>
);

export default CloseSidebar;
