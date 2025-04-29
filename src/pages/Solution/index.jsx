import React from "react";
import Card from "@/components/Card";
import { div } from "framer-motion/m";
import LogoImg from "@/assets/logo horizontal (2).png";
import CadastroImg from "@/assets/cadastro.png";
import RelatorioImg from "@/assets/relatorio.png";
import DashboardImg from "@/assets/dash.png";
import VisualImg from "@/assets/visual.png";
import FuncionalImg from "@/assets/funcional.png";
import EstruturalImg from "@/assets/estutural.png";
import VetorImg from "@/assets/vetores.png";
import TrianguloImg from "@/assets/triangulo.png";
import { Link } from "react-router-dom";

export default function Tela3() {

  return (
    <div>

      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
        <div className="flex items-center">
          <img src={LogoImg} alt="Simbiosys Logo" className="h-10" />

        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-gray-700 font-semibold hover:text-blue-900 hover:underline">
            <Link to="/home">
              Home
            </Link>
          </a></li>
          <li><a href="#about" className="text-gray-700 font-semibold hover:text-blue-900 hover:underline">
            <Link to="/about">
              Sobre
            </Link>
          </a></li>
          <li><a href="#solution" className="text-gray-700 font-semibold hover:text-blue-900 hover:underline">
            <Link to="/solution">
              Solução
            </Link>
          </a></li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-700">
            <Link to="/register" className="text-white">
              Cadastrar
            </Link>
          </button>
          <button className="px-4 py-2 border border-purple-500 text-purple-500 font-semibold rounded hover:bg-purple-100">
            <Link to="/login" className="text-purple-500 font-semibold rounded">
              Entrar
            </Link>
          </button>
        </div>
        <div className="flex md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Banner Cards 1 */}

      <section className="px-100 lg:px-20 py-10 bg-white"
        style={{
          backgroundImage: `url(${VetorImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-12">
          Um pouco sobre nossa solução
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">

          {/* Card 1 */}
          <div className="bg-white border-4 border-blue-900 rounded-2xl shadow-2xs overflow-hidden">
            <img
              src={CadastroImg}
              alt="Cadastramento"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Cadastramento</h3>
              <p className="text-gray-600 text-justify">
                Um dos principais recursos da nossa solução é o cadastramento simplificado, que facilita a coleta e organização de dados de forma rápida e eficiente. Com uma interface intuitiva e segura, garantimos que todas as informações sejam registradas de maneira precisa e acessível, otimizando processos e permitindo um gerenciamento mais ágil e eficaz.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-4 border-blue-900 rounded-2xl shadow-2xs overflow-hidden">
            <img
              src={RelatorioImg}
              alt="Geração de Relatórios"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Geração de Relatórios</h3>
              <p className="text-gray-600 text-justify">
                Nossa solução também oferece a geração de relatórios mensais e anuais de forma automática e detalhada. Sendo possível obter dados precisos sobre o desempenho e a evolução de processos em diferentes períodos, facilitando a análise e a tomada de decisões estratégicas.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-4 border-blue-900 rounded-2xl shadow-2xs overflow-hidden">
            <img
              src={DashboardImg}
              alt="Dashboard"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Dashboard</h3>
              <p className="text-gray-600 text-justify">
                Nossa solução conta com uma dashboard interativa que centraliza todas as informações essenciais em um único lugar. Com um design intuitivo e fácil de navegar, a dashboard permite acompanhar em tempo real o desempenho e as métricas mais importantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Cards 2 */}

      <section className="id=TecnologiasUtilizadas px-6 lg:px-20 py-20 bg-blue-900 text-white">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tecnologias usadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-transparent border-2 border-purple-500 rounded-lg shadow-lg p-10 transform transition-transform duration-300 hover:scale-110">
            <div className="flex justify-center mb-9">
              <img
                src={VisualImg}
                alt="Visual"
                className="w-50 h-30"
              />
            </div>
            <p className="text-gray-300 text-justify">
              Na Simbiosys, usamos tecnologias modernas para criar experiências visuais envolventes e funcionais para a web. Com HTML, CSS, JavaScript e React, garantimos interfaces intuitivas, rápidas e dinâmicas, que proporcionam uma navegação fluida e agradável.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-transparent border-2 border-purple-500 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-110">
            <div className="flex justify-center mb-13">
              <img
                src={FuncionalImg}
                alt="Funcional"
                className="w-50 h-30"
              />
            </div>

            <p className="text-gray-300 text-justify">
              Na Simbiosys, utilizamos tecnologias robustas para garantir que o tratamento e a gestão de dados sejam feitos de forma eficiente e segura. Com Java, Spring Boot e MySQL, oferecemos soluções que processam grandes volumes de informações de maneira ágil e confiável.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-transparent border-2 border-purple-500 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-110">
            <div className="flex justify-center mb-13">
              <img
                src={EstruturalImg}
                alt="Estrutural"
                className="w-50 h-30"
              />
            </div>
            <p className="text-gray-300 text-justify">
              Na Simbiosys, contamos com tecnologias de infraestrutura que garantem a escalabilidade e a confiabilidade das nossas soluções. Usamos AWS e Docker para assegurar que nossas plataformas estejam sempre disponíveis e prontas para crescer conforme as necessidades dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-white py-20 border-t border-gray-300">
        <div className="container mx-auto px-6 lg:px-20">

          <div className="flex items-center justify-between">
            <img src={LogoImg} alt="Simbiosys Logo" className="h-10" />
            <h2 className="text-purple-700 font-bold text-lg lg:text-xl">Evolução através da conexão</h2>
          </div>


          <hr className="my-6 border-gray-300" />


          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">

            <ul className="flex flex-col space-y-2  text-blue-900 hover:text-blue-700 font-semibold">
              <li><a href="#home" className="hover:underline">
                <Link to="/home">
                  Home
                </Link>
              </a></li>
              <li><a href="#about" className="hover:underline">
                <Link to="/about">
                  Sobre
                </Link>
              </a></li>
              <li><a href="#solution" className="hover:underline">
                <Link to="/solution">
                  Solução
                </Link>
              </a></li>
            </ul>


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


          <div className="mt-6 text-center text-gray-500">
            <p>&copy; simbiosys 2025</p>
          </div>
        </div>
      </footer>

    </div>
  )

}