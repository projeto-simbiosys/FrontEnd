export default function Tabs({
  orientation = "horizontal",
  children,
  className,
}) {
  return (
    <div
      className={`flex gap-2.5 w-fit ${className} ${
        orientation === "horizontal" ? "flex-row" : "flex-col"
      }`}
    >
      {children}
    </div>
  );
}
