import React from "react";
import styles from "./InstituicaoEmpresa.module.css";
import imagem from "../../assets/institucional-empresa-sobre-nos.png";
import processo from "../../assets/processo-empresa.png";
import inovacao from "../../assets/inovacao-empresa.png";
import suporte from "../../assets/suporte-empresa.png";

function InstituicaoEmpresa() {
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <section className={styles.aboutUs}>
          <div className={styles.aboutUsImage}>
            <img src={imagem} alt="Imagem da Empresa" />
          </div>
          <div className={styles.aboutUsText}>
            <h2 className={styles.sectionTitle}>Sobre a nossa empresa</h2>
            <p>
              A Simbiosys é uma empresa comprometida em transformar o modo como
              negócios e instituições operam, oferecendo soluções inovadoras e
              personalizadas para otimizar processos e melhorar a eficiência. Com
              foco em tecnologia e colaboração, nossa missão é fornecer
              ferramentas que impulsionam o desenvolvimento e a evolução dos nossos
              clientes, guiando-os para um futuro mais inteligente e sustentável.
              Acreditamos que, para atingir a verdadeira evolução, é necessário
              integrar inovação e estratégia de forma harmônica, criando soluções
              que atendem as necessidades específicas de cada cliente e facilitam a
              tomada de decisões.
            </p>
            <p>
              Nossos produtos e serviços são desenvolvidos com as mais recentes
              tecnologias, como automação de processos, inteligência de dados e uma
              plataforma digital intuitiva, projetadas para oferecer resultados
              tangíveis. A Simbiosys também fornece uma poderosa ferramenta
              para a geração de relatórios detalhados e precisos, tanto
              mensais quanto anuais. Através de nossas soluções
              buscamos proporcionar mais controle, transparência e
              agilidade para nossos parceiros, ajudando-os a focar no
              crescimento e na excelência, enquanto cuidamos da
              complexidade tecnológica.
            </p>
          </div>
        </section>

        <section className={styles.ourMissions}>
          <h2 className={styles.sectionTitle}>Nossas missões</h2>
          <div className={styles.missionsGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionCardHeader}>
                <img
                  src={processo}
                  alt="Ícone de Otimização de Processos"
                  className={styles.missionIconLeft}
                />
                <h3 className={styles.missionTitle}>
                  Otimização de processos
                </h3>
              </div>
              <p>
                A Simbiosys tem como missão otimizar processos operacionais,
                oferecendo soluções que aumentam a eficiência e reduzem custos,
                permitindo que nossos clientes se concentrem no crescimento.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionCardHeader}>
                <img
                  src={inovacao}
                  alt="Ícone de Inovação Constante"
                  className={styles.missionIconLeft}
                />
                <h3 className={styles.missionTitle}>Inovação constante</h3>
              </div>
              <p>
                Estamos comprometidos em integrar as tecnologias mais avançadas,
                criando soluções inovadoras que atendem as necessidades de um
                mercado em constante evolução e permitem que nossos clientes se
                destaquem.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionCardHeader}>
                <img
                  src={suporte}
                  alt="Ícone de Suporte Estratégico"
                  className={styles.missionIconLeft}
                />
                <h3 className={styles.missionTitle}>Suporte estratégico</h3>
              </div>
              <p>
                Fornecendo ferramentas que oferecem relatórios detalhados e dados
                precisos, permitindo que nossos clientes tomem decisões
                estratégicas de forma rápida e assertiva para impulsionar o
                crescimento sustentável.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default InstituicaoEmpresa;