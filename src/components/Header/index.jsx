import React from 'react';
import logo from "/logo-horizontal.png";

export default function Header({ children }) {
  return (
    <header className="w-full bg-white shadow-md py-4 lg:py-5 px-4 md:px-6 lg:px-8 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logotipo da empresa"
          className="h-8 md:h-10 lg:h-12" 
        />
        {children && <div className="hidden lg:flex items-center ml-8">{children}</div>}
      </div>
      {children && <div className="lg:hidden">{children}</div>}
    </header>
  );
}

