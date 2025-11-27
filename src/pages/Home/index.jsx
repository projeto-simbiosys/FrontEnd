import React from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnaliseImg from "@/assets/analise.png";
import SolucaoImg from "@/assets/solução.png";
import VetoresImg from "@/assets/vetores.png";
import EmpresaImg from "@/assets/empresa.png";
import CirculoImg from "@/assets/circulo.png";
import FerramentasImg from "@/assets/ferramentas.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header />

      {/* Banner 1 */}
      <section
        className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-white"
        style={{
          backgroundImage: `url(${VetoresImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
            Evolução através da conexão
          </h1>
          <p className="text-gray-600 mb-6 text-justify">
            Na Simbiosys, acreditamos que a verdadeira evolução acontece quando
            forças se unem. Nossa essência está na conexão, na colaboração e na
            inovação contínua. Criamos soluções que transformam desafios em
            oportunidades, impulsionando pessoas e negócios rumo a um futuro
            mais eficiente e sustentável. Juntos, evoluímos.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
            <button className="px-6 py-3 bg-blue-900 text-white font-semibold rounded hover:bg-blue-700 hover:scale-105 transform transition-transform duration-300">
              <Link to="/register" className="text-white">
                Cadastrar
              </Link>
            </button>
            <button className="px-6 py-3 border border-purple-500 text-purple-500 font-semibold rounded hover:bg-purple-100 hover:scale-105 transform transition-transform duration-300">
              <Link
                to="/login"
                className="text-purple-500 font-semibold rounded"
              >
                Entrar
              </Link>
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end">
          <img
            src={AnaliseImg}
            alt="Análise de dados"
            className="rounded-lg shadow-2xl w-90 max-w-md lg:max-w-full transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </section>

      {/* Banner 2 */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-blue-900 text-white">
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-items-start">
          <img
            src={EmpresaImg}
            alt="Nossa empresa"
            className="rounded-lg shadow-2xl w-90 max-w-md lg:max-w-full transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa empresa</h2>
          <p className="text-gray-300 mb-6 text-justify">
            A Simbiosys é uma empresa que nasce da conexão entre inovação e
            colaboração. Nosso propósito é desenvolver soluções inteligentes que
            impulsionam negócios e transformam desafios em crescimento.
            Acreditamos que a evolução acontece quando unimos tecnologia,
            estratégia e pessoas, criando um futuro mais eficiente e
            sustentável.
          </p>
          <Link to="/about">
            <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded flex items-center hover:scale-105 transform transition-transform duration-300">
              Saiba mais
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </Link>
          <img
            src={CirculoImg}
            alt="Círculo decorativo"
            className="absolute bottom-0 right-0 w-40 lg:w-48 opacity-50 translate-y-112"
          />
        </div>
      </section>

      {/* Banner 3 */}
      <section
        className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-white"
        style={{
          backgroundImage: `url(${VetoresImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
            Um pouco sobre nossa solução
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            A Simbiosys simplifica o gerenciamento educacional com uma solução
            eficiente para o cadastramento de alunos em cursos e a geração de
            relatórios mensais e anuais. Nossa plataforma automatiza processos,
            reduz burocracias e fornece dados precisos para tomadas de decisão
            estratégicas.
          </p>
          <Link to="/solution">
            <button className="px-6 py-3 bg-purple-700 text-white font-semibold rounded flex items-center hover:scale-105 transform transition-transform duration-300">
              Saiba mais
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
          <img
            img
            src={SolucaoImg}
            alt="Nossa solução"
            className="rounded-lg shadow-2xl w-90 max-w-md lg:max-w-full transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </section>

      {/* Banner 4 */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-blue-900 text-white">
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-items-start">
          <img
            img
            src={FerramentasImg}
            alt="Tecnologias"
            className="rounded-lg  w-90 max-w-md lg:max-w-full"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnologias Utilizadas
          </h2>
          <p className="text-gray-300 mb-6 text-justify">
            Na Simbiosys, utilizamos tecnologias inovadoras para desenvolver
            soluções eficientes e seguras. Com inteligência de dados, automação
            e plataformas intuitivas, transformamos desafios em oportunidades,
            otimizando processos e impulsionando resultados. Nosso compromisso é
            oferecer ferramentas ágeis e inteligentes, conectando pessoas e
            negócios à evolução digital.
          </p>
          <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded flex items-center hover:scale-105 transform transition-transform duration-300">
            <Link
              to={"/solution#TecnologiasUtilizadas"}
              className="text-blue-900 font-semibold rounded"
            >
              Saiba mais
            </Link>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
