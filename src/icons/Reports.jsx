const Reports = ({ width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...props}
    fill="none"
    viewBox="0 0 29 29"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14.5 8.458a4.833 4.833 0 0 0-4.833-4.833h-7.25V21.75h8.458a3.625 3.625 0 0 1 3.625 3.625m0-16.917v16.917m0-16.917a4.833 4.833 0 0 1 4.833-4.833h7.25V21.75h-8.458a3.625 3.625 0 0 0-3.625 3.625"
    ></path>
  </svg>
);

export default Reports;
