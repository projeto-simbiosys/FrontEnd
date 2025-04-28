import React from "react";
import Card from "@/components/Card";
import TeamMember from "@/components/TeamMember";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import inovacaoImg from "@/assets/inovacao-empresa.png";
import processoImg from "@/assets/processo-empresa.png";
import suporteImg from "@/assets/suporte-empresa.png";
import MarcelaImg from "@/assets/marcela.jpg";
import FerroImg from "@/assets/matheus-ferro.png";
import CintiaImg from "@/assets/cintia.jpg";
import CastroImg from "@/assets/matheus-castro.jpg";
import ReynaldImg from "@/assets/reynald.jpg";
import VitoriaImg from "@/assets/vitoria.jpg";
import EmpresaImg from "@/assets/institucional-empresa-sobre-nos.png";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <section className="px-6 py-12 md:px-20 bg-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src={EmpresaImg}
              alt="Reunião da equipe"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">
                Sobre a nossa empresa
              </h2>
              <p className="text-gray-700 text-justify">
              A Simbiosys é uma empresa comprometida em transformar o modo como negócios e instituições operam, oferecendo soluções inovadoras e personalizadas para otimizar processos e melhorar a eficiência. Com foco em tecnologia e colaboração, nossa missão é fornecer ferramentas que impulsionam o desenvolvimento e a evolução dos nossos clientes, guiando-os para um futuro mais inteligente e sustentável. Acreditamos que, para atingir a verdadeira evolução, é necessário integrar inovação e estratégia de forma harmônica, criando soluções que atendem às necessidades específicas de cada cliente e facilitam a tomada de decisões.
              </p>
              <br />
              <p className="text-gray-700 text-justify">
              Nossos produtos e serviços são desenvolvidos com as mais recentes tecnologias, como automação de processos, inteligência de dados e uma plataforma digital intuitiva, projetadas para oferecer resultados tangíveis. A Simbiosys também fornece uma poderosa ferramenta para a geração de relatórios detalhados e precisos, tanto mensais quanto anuais. Através de nossas soluções, buscamos proporcionar mais controle, transparência e agilidade para nossos parceiros, ajudando-os a focar no crescimento e na excelência, enquanto cuidamos da complexidade tecnológica
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-12 px-6 md:px-20 text-white overflow-hidden bg-blue-900" >
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-56 h-56 pointer-events-none z-0">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#4CAF50] opacity-20"
            >
              <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="100" cy="100" r="100" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center relative z-10">
            Nossas missões
          </h2>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <Card
              title="Conexão de processos"
              description="A Simbiosys tem como missão otimizar processos operacionais, oferecendo soluções que aumentam a eficiência e reduzem custos, permitindo que nossos clientes se concentrem no crescimento."
              image={processoImg}
            />
            <Card
              title="Inovação constante"
              description="Estamos comprometidos em integrar as tecnologias mais avançadas, criando soluções inovadoras que atendem às necessidades de um mercado em constante evolução e permitem que nossos clientes se destaquem."
              image={inovacaoImg}
            />
            <Card
              title="Suporte estratégico"
              description="Fornecendo ferramentas que oferecem relatórios detalhados e dados precisos, permitindo que nossos clientes tomem decisões estratégicas de forma rápida e assertiva para impulsionar o crescimento sustentável."
              image={suporteImg}
            />
          </div>
        </section>

        <section className="bg-gray-100 py-12 px-6 md:px-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-purple-600 mb-10">
            Nossa equipe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember name="Marcela Carneiro" role="Líder" img={MarcelaImg}/>
            <TeamMember name="Matheus Ferro" role="DBA" img={FerroImg}/>
            <TeamMember name="Cintia Ohara" role="Desenvolvedora" img={CintiaImg}/>
            <TeamMember name="Matheus Castro" role="Desenvolvedor" img={CastroImg}/>
            <TeamMember name="Reynald Albuquerque" role="Desenvolvedor" img={ReynaldImg}/>
            <TeamMember name="Vitória Suliman" role="Desenvolvedora" img={VitoriaImg}/>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 
