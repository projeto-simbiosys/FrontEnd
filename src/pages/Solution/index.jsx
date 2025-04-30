import React from "react";
import CadastroImg from "@/assets/cadastro.png";
import RelatorioImg from "@/assets/relatorio.png";
import DashboardImg from "@/assets/dash.png";
import VisualImg from "@/assets/visual.png";
import FuncionalImg from "@/assets/funcional.png";
import EstruturalImg from "@/assets/estutural.png";
import VetorImg from "@/assets/vetores.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Tela3() {
  return (
    <div>
      {/* Navbar */}
      <Header />

      {/* Banner Cards 1 */}

      <section
        className="px-100 lg:px-20 py-10 bg-white"
        style={{
          backgroundImage: `url(${VetorImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
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
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Cadastramento
              </h3>
              <p className="text-gray-600 text-justify">
                Um dos principais recursos da nossa solução é o cadastramento
                simplificado, que facilita a coleta e organização de dados de
                forma rápida e eficiente. Com uma interface intuitiva e segura,
                garantimos que todas as informações sejam registradas de maneira
                precisa e acessível, otimizando processos e permitindo um
                gerenciamento mais ágil e eficaz.
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
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Geração de Relatórios
              </h3>
              <p className="text-gray-600 text-justify">
                Nossa solução também oferece a geração de relatórios mensais e
                anuais de forma automática e detalhada. Sendo possível obter
                dados precisos sobre o desempenho e a evolução de processos em
                diferentes períodos, facilitando a análise e a tomada de
                decisões estratégicas.
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
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Dashboard
              </h3>
              <p className="text-gray-600 text-justify">
                Nossa solução conta com uma dashboard interativa que centraliza
                todas as informações essenciais em um único lugar. Com um design
                intuitivo e fácil de navegar, a dashboard permite acompanhar em
                tempo real o desempenho e as métricas mais importantes.
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
              <img src={VisualImg} alt="Visual" className="w-50 h-30" />
            </div>
            <p className="text-gray-300 text-justify">
              Na Simbiosys, usamos tecnologias modernas para criar experiências
              visuais envolventes e funcionais para a web. Com HTML, CSS,
              JavaScript e React, garantimos interfaces intuitivas, rápidas e
              dinâmicas, que proporcionam uma navegação fluida e agradável.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-transparent border-2 border-purple-500 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-110">
            <div className="flex justify-center mb-13">
              <img src={FuncionalImg} alt="Funcional" className="w-50 h-30" />
            </div>

            <p className="text-gray-300 text-justify">
              Na Simbiosys, utilizamos tecnologias robustas para garantir que o
              tratamento e a gestão de dados sejam feitos de forma eficiente e
              segura. Com Java, Spring Boot e MySQL, oferecemos soluções que
              processam grandes volumes de informações de maneira ágil e
              confiável.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-transparent border-2 border-purple-500 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-110">
            <div className="flex justify-center mb-13">
              <img src={EstruturalImg} alt="Estrutural" className="w-50 h-30" />
            </div>
            <p className="text-gray-300 text-justify">
              Na Simbiosys, contamos com tecnologias de infraestrutura que
              garantem a escalabilidade e a confiabilidade das nossas soluções.
              Usamos AWS e Docker para assegurar que nossas plataformas estejam
              sempre disponíveis e prontas para crescer conforme as necessidades
              dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
