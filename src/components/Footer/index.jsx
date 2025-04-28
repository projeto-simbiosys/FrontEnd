import React from "react";
import { Link } from "react-router-dom"; // 👈 Importante
import LogoImg from "/logo-horizontal.png"; // 👈 Mesma logo do header

export default function Footer() {
  return (
    <footer className="bg-white py-20 border-t border-gray-300">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Logo e Slogan */}
        <div className="flex items-center justify-between">
          <img src={LogoImg} alt="Simbiosys Logo" className="h-10" />
          <h2 className="text-purple-700 font-bold text-lg lg:text-xl">
            Evolução através da conexão
          </h2>
        </div>

        {/* Linha divisória */}
        <hr className="my-6 border-gray-300" />

        {/* Links e Redes sociais */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Links de navegação */}
          <ul className="flex flex-col space-y-2 text-blue-900 font-semibold">
            <li>
              <Link to="/" className="hover:underline hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline hover:text-blue-700">
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/solution"
                className="hover:underline hover:text-blue-700"
              >
                Solução
              </Link>
            </li>
          </ul>

          {/* Ícones de redes sociais */}
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#whatsapp" className="text-green-500 hover:text-green-600">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a href="#instagram" className="text-pink-500 hover:text-pink-600">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#linkedin" className="text-blue-700 hover:text-blue-800">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500">
          <p>&copy; simbiosys 2025</p>
        </div>
      </div>
    </footer>
  );
}
