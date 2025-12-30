import CardsProdutos from "../components/CardsProdutos";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

import logoWAlt from "../../public/img/logo-w -alt.png";
import bannerImg from "../../public/img/Produtos/banner.webp";
import cabara from "../../public/img/Produtos/Trending/caba.webp";
import tironhao from "../../public/img/Produtos/Trending/caba.webp";
import rosaDeserto from "../../public/img/Produtos/Trending/rosa.webp";

function Produtos() {
  

  useEffect(() => {
    const elements = document.querySelectorAll(".animar");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("translate-y-0");
        }
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="LOJA" className="w-full mt-80 h-screen">
      <div id="BANNER" className="grid grid-cols-2 gap-0">
        <div
          id="LADO-ESQUERDO"
          className="flex flex-col h-[400px] items-end justify-center "
        >
          <h1 className="text-green-700 font-bold text-6xl w-160">
            Compre a planta dos seus sonhos!
          </h1>
          <img
            className="relative right-[436px] w-[200px]"
            src={logoWAlt}
            alt=""
          />
          <div className="mr-83 mt-19 bg-white/70 h-15 w-[300px] rounded-full text-zinc-800/60 font-medium  text-[13pt] text-center flex items-center justify-center">
            <p>Oque você está proucurando?</p>
          </div>
        </div>

        <div id="LADO-DIREITO" className="flex h-[400px]">
          <div className="w-28 h-44 relative top-[165px] left-20 rotate-[-53.14deg]  outline-4 -outline-offset-2 outline-green-800 shrink-0" />
          <div className="w-96 ml-30 h-96 relative left-2 top-[15px] bg-stone-800 rounded-tl-[200px] rounded-tr-[200px] rounded-bl-[200px] shrink-0" />

          <img
            className="z-10 h-135 relative bottom-[141px] right-[345px]"
            src={bannerImg}
            alt=""
          />
          <div className="w-28 h-36 relative right-[400px] top-10 rotate-[18.13deg]  outline-[5px] outline-offset-[-2.50px] outline-green-800 shrink-0" />
        </div>
      </div>




      <div id="PAINEL-CATEGORIAS" className="flex justify-center gap-20 -mb-16 w-full h-60 mt-50 ">

       <div onClick={() => {document.getElementById("ORQUIDEAS")?.scrollIntoView({

        behavior:"smooth",
        block:"start"
       })}} className="flex flex-col w-[170px]">
        <img className="w-[170px] h-[170px] rounded-full hover:scale-110 transition-all cursor-pointer" src={`${import.meta.env.BASE_URL}img/Produtos/Ball/ball1.jpeg`} />
        <h2 className="flex justify-center mt-2 font-semibold text-[14pt] text-green-950">ORQUIDEAS</h2>
       </div>


        <div onClick={() => {document.getElementById("SAMAMBAIAS")?.scrollIntoView({
          behavior:"smooth",
          block:"start"
        })}} className="flex flex-col w-[170px]">
        <img className="w-[170px] h-[170px] rounded-full hover:scale-110 transition-all cursor-pointer" src={`${import.meta.env.BASE_URL}img/Produtos/Ball/ball2.jpg`} />
        <h2 className="flex justify-center mt-2 font-semibold text-[14pt] text-green-950">SAMAMBAIAS</h2>
       </div>


        <div onClick={()=> {document.getElementById("BROMELIAS")?.scrollIntoView({

          behavior:"smooth",
          block:"start"
        })}} className="flex flex-col w-[170px]">
        <img className="w-[170px] h-[170px] rounded-full hover:scale-110 transition-all cursor-pointer" src={`${import.meta.env.BASE_URL}img/Produtos/Ball/ball3.webp`} />
        <h2 className="flex justify-center mt-2 font-semibold text-[14pt] text-green-950">BROMÉLIAS</h2>
       </div>


        <div onClick={() => {document.getElementById("SUCULENTAS")?.scrollIntoView({

          behavior:"smooth",
          block:"start"
        })}} className="flex flex-col w-[170px]">
        <img className="w-[170px] h-[170px] rounded-full hover:scale-110 transition-all cursor-pointer" src={`${import.meta.env.BASE_URL}img/Produtos/Ball/ball4.jpg`} />
        <h2 className="flex justify-center mt-2 font-semibold text-[14pt] text-green-950">SUCULENTAS</h2>
       </div>

        <div onClick={()=>{document.getElementById("BEGONIAS")?.scrollIntoView({

          behavior:"smooth",
          block:"start"
        })}} className="flex flex-col w-[170px]">
        <img className="w-[170px] h-[170px] rounded-full hover:scale-110 transition-all cursor-pointer" src={`${import.meta.env.BASE_URL}img/Produtos/Ball/ball5.jpg`} />
        <h2 className="flex justify-center mt-2 font-semibold text-[14pt] text-green-950">BEGÔNIAS</h2>
       </div>

        <div onClick={()=>{document.getElementById("PRODUTOS")?.scrollIntoView({
          behavior:"smooth",
          block:"start"
        })}} className="flex flex-col w-[170px]">
        <img className="w-[170px] h-[170px] rounded-full hover:scale-110 transition-all cursor-pointer" src={`${import.meta.env.BASE_URL}img/Produtos/Ball/ball6.jpg`} />
        <h2 className="flex justify-center mt-2 font-semibold text-[14pt] text-green-950">ALOCASIAS</h2>
       </div>

      </div>
     

      <div
        id="MAIS-VENDIDOS"
        className="flex flex-col items-center justify-center bg-green-950 h-auto mt-10 z-8"
      >
        <div
          id="bug" //Eu coloquei isso para corrigir as cores do background em notebooks
          className="hidden w-[2000px] h-1800 bg-green-950 absolute top-0"
        ></div>
        <h1 className="text-4xl text-white font-semibold text-center mt-20 z-10">
          Mais vendidos
        </h1>
        <div
          id="CARDS-MAIS"
          className="max-w-[1920px] w-full mx-auto
 grid grid-cols-3 scale-85 gap-40 mt-20"
        >
          <div id="CARD" className="flex flex-col justify-center items-center">
            <div className="bg-white">
              <h2 className="text-green-900 font-semibold text-center text-2xl pt-4 tracking-[8px]">
                CABARÁ
              </h2>
              <img
                className="mt-3 pl-4 pr-4 pb-4 object-cover"
                src={cabara}
              />
            </div>
            <div
              id="button"
              className="flex text-3xl text-green-800 font-bold w-100 h-19 mt-7 bg-white rounded-full text-center justify-center items-center cursor-pointer hover:scale-105 transition-all"
            >
              Comprar
            </div>
          </div>

          <div
            id="CARD"
            className="flex flex-col justify-center items-center scale-115"
          >
            <div className="bg-white">
              <h2 className="text-green-900 font-semibold text-center text-2xl pt-4 tracking-[8px]">
                CALADIUM
              </h2>
              <img
                className="mt-3 pl-4 pr-4 pb-4 object-cover"
                src={tironhao}
              />
            </div>
            <div
              id="button"
              className="flex text-3xl text-green-800 font-bold w-100 h-19 mt-7 bg-white rounded-full text-center justify-center items-center cursor-pointer hover:scale-105 transition-all"
            >
              Comprar
            </div>
          </div>

          <div id="CARD" className="flex flex-col justify-center items-center">
            <div className="bg-white">
              <h2 className="text-green-900 font-semibold text-center text-2xl pt-4 tracking-[8px]">
                ROSA DO DESERTO
              </h2>
              <img
                className="mt-3 pl-4 pr-4 pb-4 object-cover"
                src={rosaDeserto}
              />
            </div>
            <div
              id="button"
              className="flex text-3xl text-green-800 font-bold w-100 h-19 mt-7 bg-white rounded-full text-center justify-center items-center cursor-pointer hover:scale-105 transition-all"
            >
              Comprar
            </div>
          </div>
        </div>
        <div id="PRODUTOS" className="scale-85 -mt-80">
          <div
            id="ALOCACIAS"
            className="max-w-[1920px] w-full mx-auto
"
          >
            <h1 className="text-center flex flex-col justify-center items-center text-5xl text-white font-bold mt-20">
              Alocasias
              <div id="outline" className="h-1 w-[1853px] bg-white mt-4"></div>
            </h1>

            <div
              id="GRADE-PRODUTOS"
              className="max-w-[1920px] w-full mx-auto
 grid grid-cols-4 gap-y-30 gap-3 ml-11 mt-30"
            >
              <CardsProdutos ids={[1, 2, 3, 4, 5, 6, 7, 8]} />
            </div>
          </div>

          <div
            id="BROMELIAS"
            className="max-w-[1920px] w-full mx-auto
 mt-50"
          >
            <h1 className="text-center text-5xl text-white font-bold mt-20 flex flex-col items-center">
              Bromélias
              <div id="outline" className="h-1 w-[1853px] bg-white mt-4"></div>
            </h1>
            <div
              id="GRADE-PRODUTOS"
              className="max-w-[1920px] w-full mx-auto
 grid grid-cols-4 gap-y-30 gap-3 ml-11 mt-30"
            >
              <CardsProdutos ids={[9, 10, 11, 12]} />
            </div>
          </div>

          <div
            id="ORQUIDEAS"
            className="max-w-[1920px] w-full mx-auto
 mt-50"
          >
            <h1 className="text-center text-5xl text-white font-bold mt-20 flex flex-col justify-center items-center">
              Orquídeas
              <div id="outline" className="h-1 w-[1853px] bg-white mt-4"></div>
            </h1>
            <div
              id="GRADE-PRODUTOS"
              className="max-w-[1920px] w-full mx-auto
 grid grid-cols-4 gap-y-30 gap-3 ml-11 mt-30"
            >
              <CardsProdutos ids={[13, 14, 15, 16, 17, 18, 19, 20]} />
            </div>
          </div>

          <div
            id="SAMAMBAIAS"
            className="max-w-[1920px] w-full mx-auto
 mt-50"
          >
            <h1 className="text-center text-5xl text-white font-bold mt-20 flex flex-col items-center">
              Samambaias{" "}
              <div id="outline" className="h-1 w-[1853px] bg-white mt-4"></div>
            </h1>
            <div
              id="GRADE-PRODUTOS"
              className="max-w-[1920px] w-full mx-auto
 grid grid-cols-4 gap-y-30 gap-3 ml-11 mt-30"
            >
              <CardsProdutos ids={[21, 22, 23, 24]} />
            </div>
          </div>

          <div
            id="SUCULENTAS"
            className="max-w-[1920px] w-full mx-auto
 mt-50"
          >
            <h1 className="text-center text-5xl text-white font-bold mt-20 flex flex-col items-center">
              Suculentas
              <div id="outline" className="h-1 w-[1853px] bg-white mt-4"></div>
            </h1>
            <div
              id="GRADE-PRODUTOS"
              className="max-w-[1920px] w-full mx-auto
 grid grid-cols-4 gap-y-30 gap-3 ml-11 mt-30"
            >
              <CardsProdutos ids={[25, 26, 27, 28]} />
            </div>
          </div>

          <div
            id="BEGONIAS"
            className="max-w-[1920px] w-full mx-auto
 mt-50 flex flex-col items-center"
          >
            <h1 className="text-center text-5xl text-white font-bold mt-20">
              Begônias
              <div id="outline" className="h-1 w-[1853px] bg-white mt-4"></div>
            </h1>
            <div
              id="GRADE-PRODUTOS"
              className="max-w-[1920px] w-full mx-auto
 grid grid-cols-4 gap-y-30 gap-3 ml-11 mt-30"
            >
              <CardsProdutos ids={[29, 30, 31, 32]} />
            </div>
          </div>
        </div>
      </div>

      <div
        id="SEGUNDA-PARTE"
        className="flex flex-col items-center justify-center bg-[#e8f3df] z-10 -mt-70"
      >
        <div
          id="DEPOIMENTOS"
          className="w-[1440px]  inline-flex justify-start items-center gap-6 mt-20 "
        >
          <div className="flex-1 inline-flex flex-col justify-center items-start gap-7">
            <div className="self-stretch flex flex-col justify-start items-start gap-5">
              <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                <div
                  id="agendar"
                  className="self-stretch justify-start text-neutral-700 text-5xl font-bold font-['Unna']"
                >
                  Jardinagem Paisagística
                </div>
                <div className="w-48 h-0 outline-2 -outline-offset-1 outline-neutral-700/80" />
              </div>
              <div className="self-stretch justify-start">
                <span className="text-neutral-700 text-2xl font-normal font-['Poppins']">
                  Seja cultivando sua própria comida ou montando <br />
                  seu jardim no telhado, fornecemos os mais altos <br />
                  padrões de serviços de paisagismo, contribuindo para um mundo
                  mais verde e uma vida substancial!
                  <br />
                </span>
                <span className="text-red-600 text-2xl font-normal font-['Poppins']">
                  <br />
                </span>
                <span className="text-neutral-700 text-2xl font-normal font-['Poppins']">
                  Agende seu compromisso de serviço hoje!
                  <br />
                  <br />
                </span>
              </div>
            </div>
            <div className="cursor-pointer hover:bg-green-500 transition-all w-72 h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
              <div
                onClick={() => {
                  window.open("https://wa.me/5592985355192");
                }}
                className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']"
              >
                Agende Agora!
              </div>
            </div>
          </div>
          <img
            className="flex-1 self-stretch rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] border border-green-700"
            src={`${import.meta.env.BASE_URL}img/Galeria/Section.webp`}
          />
        </div>
        <div
          id="GALERIA"
          className="my-40 w-[1300px] inline-flex flex-col justify-center items-center gap-7"
        >
          <div className="flex flex-col justify-start items-center gap-3.5">
            <div className="justify-start text-green-900 text-5xl font-bold font-['Poppins']">
              ‪‪❤︎‬ Experiências de quem ama nossas plantas ‪‪❤︎‬
            </div>
          </div>
          <div className="scale-120 mt-20 self-stretch h-[640px] rounded-2xl shadow-[0px_8px_23px_0px_rgba(59,130,62,0.13)] flex flex-col justify-center items-center gap-5">
            <div className="self-stretch flex-1 inline-flex justify-start items-start gap-5">
              <div className="hover:scale-120 hover:z-10 transition-all flex-1 self-stretch relative bg-linear-to-l from-black/40 to-neutral-700/0 rounded-lg overflow-hidden shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)]">
                <img
                  id="japa"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={`${import.meta.env.BASE_URL}img/Galeria/1.webp`}
                />
                <div className="relative z-10 p-4 flex justify-start items-end">
                  <div className="flex-1 justify-start text-white text-base font-normal font-['Poppins'] opacity-0">
                    Foto 1
                  </div>
                </div>
              </div>

              <div className="hover:scale-120 hover:z-10 transition-all flex-1 self-stretch relative bg-linear-to-l from-black/40 to-neutral-700/0 rounded-lg overflow-hidden shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)]">
                <img
                  id="japa"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={`${import.meta.env.BASE_URL}img/Galeria/2.webp`}
                />
                <div className="relative z-10 p-4 flex justify-start items-end">
                  <div className="flex-1 justify-start text-white text-base font-normal font-['Poppins'] opacity-0">
                    Foto 2
                  </div>
                </div>
              </div>

              <div className="hover:scale-120 hover:z-10 transition-all flex-1 self-stretch relative bg-linear-to-l from-black/40 to-neutral-700/0 rounded-lg overflow-hidden shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)]">
                <img
                  id="japa"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={`${import.meta.env.BASE_URL}img/Galeria/3.webp`}
                />
                <div className="relative z-10 p-4 flex justify-start items-end">
                  <div className="flex-1 justify-start text-white text-base font-normal font-['Poppins'] opacity-0">
                    Foto 3
                  </div>
                </div>
              </div>

              <div className="hover:scale-120 hover:z-10 transition-all flex-1 self-stretch relative bg-linear-to-l from-black/40 to-neutral-700/0 rounded-lg overflow-hidden shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)]">
                <img
                  id="japa"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={`${import.meta.env.BASE_URL}img/Galeria/4.webp`}
                />
                <div className="relative z-10 p-4 flex justify-start items-end">
                  <div className="flex-1 justify-start text-white text-base font-normal font-['Poppins'] opacity-0">
                    Foto 4
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 inline-flex justify-start items-start gap-5">
              <div className="hover:scale-120 hover:z-10 transition-all flex-1 self-stretch relative bg-linear-to-l from-black/40 to-neutral-700/0 rounded-lg overflow-hidden shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)]">
                <img
                  id="japa"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={`${import.meta.env.BASE_URL}img/Galeria/5.webp`}
                />
                <div className="relative z-10 p-4 flex justify-start items-end">
                  <div className="flex-1 justify-start text-white text-base font-normal font-['Poppins'] opacity-0">
                    Foto 5
                  </div>
                </div>
              </div>

              <div className="hover:scale-120 hover:z-10 transition-all flex-1 self-stretch relative bg-linear-to-l from-black/40 to-neutral-700/0 rounded-lg overflow-hidden shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)]">
                <img
                  id="japa"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={`${import.meta.env.BASE_URL}img/Galeria/6.webp`}
                />
                <div className="relative z-10 p-4 flex justify-start items-end">
                  <div className="flex-1 justify-start text-white text-base font-normal font-['Poppins'] opacity-0">
                    Foto 6
                  </div>
                </div>
              </div>

              <div className="w-200 hover:scale-120 hover:z-10 transition-all flex-1 self-stretch relative bg-linear-to-l from-black/40 to-neutral-700/0 rounded-lg overflow-hidden shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)]">
                <img
                  id="japa"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={`${import.meta.env.BASE_URL}img/Galeria/7.webp`}
                />
                <div className="relative z-10 p-4 flex justify-start items-end">
                  <div className="flex-1 justify-start text-white text-base font-normal font-['Poppins'] opacity-0">
                    Foto 7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-900 -mx-42 ">
        <Footer />
      </div>
    </div>
  );
}

export default Produtos;
