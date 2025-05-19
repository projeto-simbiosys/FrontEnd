export default function Heading({
  level,
  weight,
  children,
  className,
  ...props
}) {
  const Tag = `h${level}`;

  const headingSizes = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  };

  const weightMapping = {
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <Tag
      className={`${weightMapping[weight]} ${headingSizes[level]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
