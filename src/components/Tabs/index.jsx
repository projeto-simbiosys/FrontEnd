export default function Tabs({ orientation = "horizontal", children }) {
  return (
    <div
      className={`flex gap-2.5 w-fit ${
        orientation === "horizontal" ? "flex-row" : "flex-col"
      }`}
    >
      {children}
    </div>
  );
}
