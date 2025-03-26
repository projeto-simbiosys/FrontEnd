import logo from "/logo-horizontal.png";

export default function Header({ children }) {
  return (
    <header className="w-screen flex items-center justify-between py-3.5 lg:py-5 px-4 md:px-5 lg:px-8">
      <img
        src={logo}
        alt="logo da empresa"
        className="w-[100px] md:w-[150px]"
      />
      {children}
    </header>
  );
}
