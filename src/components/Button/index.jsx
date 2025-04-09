export default function Button({ variant, children, ...props }) {
  const variantMapping = {
    "inst-primary": "bg-main text-white",
    "inst-secondary":
      "bg-white text-secondary border border-solid border-secondary",
    "inst-light": "bg-white text-main",
    "inst-link":
      "bg-transparent text-main !px-[0px] !py-[0px] shadow-none underline",
    "sys-primary": "bg-sys-main text-white",
    "sys-secondary":
      "bg-white text-sys-main border border-solid border-sys-main",
  };

  return (
    <button
      className={`${variantMapping[variant]} flex gap-[10px] items-center px-[20px] py-[10px] text-base font-semibold rounded-[5px] shadow-button cursor-pointer hover:brightness-95`}
      {...props}
    >
      {children}
    </button>
  );
}
