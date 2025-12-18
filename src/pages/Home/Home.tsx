import CountUp from "react-countup";
import { useEffect } from "react";
import styles from "./Home.module.css";
import planta from "../../assets/img/planta-hero.webp";
import pattern from "../../assets/img/pattern.webp";
import retangule from "../../assets/img/Rectangle.png";

function Home() {
  useEffect(() => {
    const classes = [
      styles.secaoBadgeTexto,
      styles.secaoTitulo,
      styles.secaoSubtitulo,
      styles.numeroDestaque,
      styles.itemDestaque,
    ];

    const itens = document.querySelectorAll(
      classes.map((c) => `.${c}`).join(", ")
    );

    if (!itens.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.mostrare);
          else entry.target.classList.remove(styles.mostrare);
        });
      },
      { threshold: 0.2 }
    );

    itens.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="inicio" className="relative h-[1430px] flex justify-center">
      <div id="Home" className="absolute">
        <div className={styles.hero}>
          <div className={styles.heroEsquerda}>
            <div className={styles.conteudo}>
              <div className={styles.secaoTexto}>
                <div className={styles.grupoTitulo}>
                  <div className={styles.titulo}>
                    criando um visual bonito & Natural
                  </div>
                  <div className={styles.subtitulo}>
                    Eleve o seu ambiente e experimente o encanto da natureza no
                    seu próprio quintal
                  </div>
                </div>
                <div className={styles.botoes}>
                  <div
                    data-property-1="primary"
                    className={styles.botaoPrimario}
                  >
                    <div className={styles.botaoPrimarioTexto}>
                      Fale conosco
                    </div>
                  </div>
                  <div
                    data-property-1="Secondary"
                    className={styles.botaoSecundario}
                  >
                    <div className={styles.botaoSecundarioTexto}>Ver mais</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.heroImagem} src={planta} />
          <img
            className={styles.vtImagem}
            src="img/vt.webp"
            alt="Vitória Régia"
          />
        </div>
        <div className={styles.padraoContainer}>
          <img className={styles.padraoImagem} src={pattern} />
        </div>
        <div id="big-card" className={styles.cardGrande}>
          <div>
            <div className={styles.sobreposicaoTopo} />
            <div className={styles.sobreposicaoBase} />
            <h1 className={styles.numero200}>
              <CountUp end={200} duration={2} enableScrollSpy />+
            </h1>

            <p className={styles.texto200}>Mais de 200 espécies</p>
            <h1 className={styles.numero100}>
              <CountUp end={100} duration={2} enableScrollSpy />%
            </h1>
            <p className={styles.texto100}>Clientes satisfeitos</p>

            <img className={styles.cardImagem} src={retangule} />
          </div>

          <div className={styles.secaoFlutuante}>
            <div className={styles.secaoBadge}>
              <div className={styles.secaoBadgeTexto}>
                Venha conhecer o Encanto Amazônico
              </div>
            </div>
            <div className={styles.secaoTitulo}>
              Semeando sonhos, cultivando paisagens
            </div>
            <div className={styles.secaoSubtitulo}>
              Eleve o seu ambiente e experimente o encanto da natureza no seu
              próprio quintal
            </div>
            <br />
            <br />

            <div className={styles.itemDestaque}>
              <span className={styles.numeroDestaque}>01.</span> "O Encanto
              Amazônico traz a biodiversidade e o mistério da maior floresta do
              mundo, cultivando em sua casa a beleza e a raridade das
              verdadeiras plantas da Amazônia."
            </div>
            <br />
            <br />

            <div className={styles.itemDestaque}>
              <span className={styles.numeroDestaque}>02.</span> "Mais que
              plantas, entregamos um pedaço da natureza pura: cada espécie do
              Encanto Amazônico é um tesouro com garantia de origem e cuidado
              sustentável."
            </div>
            <br />
            <br />

            <div className={styles.itemDestaque}>
              <span className={styles.numeroDestaque}>03.</span> "Descubra as
              cores vibrantes e as formas únicas que só a Amazônia pode
              oferecer. Seu próximo refúgio verde começa com uma planta do
              Encanto Amazônico."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
