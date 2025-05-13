import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "/logo-horizontal.png";

export default function Header() {
  return (
    <header className="w-full bg-gray-100 shadow-md px-6 py-4 flex flex-wrap items-center justify-between">
      <div className="flex items-center">
        <img src={LogoImg} alt="Logotipo da empresa" className="h-10" />
      </div>
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link
            to="/"
            className="text-gray-700 font-semibold hover:text-blue-900 hover:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-700 font-semibold hover:text-blue-900 hover:underline"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="/solution"
            className="text-gray-700 font-semibold hover:text-blue-900 hover:underline"
          >
            Solução
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex space-x-4">
        <Link to="/register">
          <button className="px-4 py-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-700">
            Cadastrar
          </button>
        </Link>
        <Link to="/login">
          <button className="px-4 py-2 border border-purple-500 text-purple-500 font-semibold rounded hover:bg-purple-100">
            Entrar
          </button>
        </Link>
      </div>
      <div className="flex md:hidden">
        <button className="text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
