import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Produtos() {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll(".mostrar");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.remove("opacity-0", "translate-y-11");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    
    const scrollToCategory = (categoryId: string) => {
      const section = document.getElementById(categoryId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const categoryImages = [
      { img: document.querySelector('img[src*="ball1.jpeg"]'), section: 'SECTION-ORQUIDEAS' },
      { img: document.querySelector('img[src*="ball2.jpg"]'), section: 'SECTION-SAMAMBAIAS' },
      { img: document.querySelector('img[src*="ball3.webp"]'), section: 'SECTION-BROMELIAS' },
      { img: document.querySelector('img[src*="ball4.jpg"]'), section: 'SECTION-SUCULENTAS' },
      { img: document.querySelector('img[src*="ball5.jpg"]'), section: 'SECTION-BEGONIAS' },
      { img: document.querySelector('img[src*="ball6.jpg"]'), section: 'SECTION-ALOCASIAS' },
    ];

    categoryImages.forEach(({ img, section }) => {
      if (img) {
        img.addEventListener('click', () => scrollToCategory(section));
      }
    });

    const handler = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;

      const card = btn.closest(
        '[data-type="Default"], [data-type="Overlay"]'
      ) as HTMLElement | null;
      let name = "";
      let imgSrc = "";
      let preco = "";

      if (card) {
        const img = card.querySelector("img") as HTMLImageElement | null;
        if (img) imgSrc = img.src;

        const divs = Array.from(card.querySelectorAll("div"));
        for (const d of divs) {
          const t = d.textContent?.trim();
          if (t && t.includes("R$")) {
            preco = t;
          } else if (
            t &&
            t.length > 0 &&
            !t.includes("R$") &&
            t !== "Comprar" &&
            t.length < 40 &&
            !name
          ) {
            name = t;
          }
        }
      }

      if (name && imgSrc) {
        const productData = btoa(JSON.stringify({ name, imgSrc, preco }));
        navigate(`/comprar?data=${productData}`);
      }
    };

    const attached: HTMLElement[] = [];
    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>("div,button,span,a")
    );
    candidates.forEach((el) => {
      if (el.textContent && el.textContent.trim() === "Comprar") {
        el.classList.add("buy");
        el.addEventListener("click", handler);
        attached.push(el);
      }
    });

    return () => {
      observer.disconnect();
      attached.forEach((el) => el.removeEventListener("click", handler));
      
      
      categoryImages.forEach(({ img, section }) => {
        if (img) {
          img.removeEventListener('click', () => scrollToCategory(section));
        }
      });
    };
  }, [navigate]);

  return (
    <div id="loja" className="relative flex-1">
      <div
        id="BACKGROUD"
        className=" z-2 w-full h-[6950px] relative top-[1148px] bg-green-950"
      ></div>

      <div
        id="alternative"
        className=" z-2 w-[1920px] h-[6950px] left-[-100px] relative top-[-5802px] opacity-0 bg-green-950"
      ></div>

      <div
        id="PRINCIPAL"
        className="z-2 flex flex-col items-center justify-center w-[1540px] h-[9840px] bottom-[13600px] relative bg-[#E8F3DF] overflow-hidden mx-auto"
      >
        <div className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 absolute top-2 left-26 z-2">
          <div
            id="BANNER"
            className="left-[-30px] top-12 absolute inline-flex flex-col justify-start items-start gap-12"
          >
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="w-[600px] justify-start text-green-800 text-6xl font-extrabold font-['Poppins'] leading-16">
                Compre a planta dos seus sonhos!
              </div>
              <div className="inline-flex justify-start items-center gap-12">
                <img className="w-50" src="/src/assets/img/logo-w -alt.png" />
              </div>
            </div>
            <div className="w-96 h-16 relative bg-white rounded-xl overflow-hidden">
              <div className="left-[18px] top-[18px] absolute justify-start text-stone-900/50 text-lg font-medium font-['Poppins']">
                Oque você está proucurando?
              </div>
              <div className="w-12 h-12 left-[393px] top-2 absolute bg-slate-300 rounded-xl" />
              <div className="w-5 h-5 left-[407px] top-[22px] absolute overflow-hidden"></div>
            </div>
          </div>
          <div className="w-96 ml-30 h-96 left-[726px] top-[123px] absolute bg-stone-800 rounded-tl-[200px] rounded-tr-[200px] rounded-bl-[200px]" />
          <img
            className="ml-217 top-[-52px] relative z-10"
            src="/src/assets/img/Produtos/banner.webp"
          />
          <div className="w-28 h-44 left-[638px] top-[359.19px] absolute origin-top-left rotate-[-53.14deg]  outline-4 -outline-offset-2 outline-green-800" />
          <div className="w-28 h-36 left-[1227px] top-[13px] absolute origin-top-left rotate-[18.13deg]  outline-[5px] outline-offset-[-2.50px] outline-green-800" />
        </div>

        <div className="cursor-pointer  left-[120px] top-[592px] absolute inline-flex flex-col justify-center items-center gap-7">
          <div className="flex justify-between gap-16 ml-[-59px]">
            <div className="flex-1 h-56 inline-flex flex-col justify-center items-center gap-6">
              <img
                id="goto-orquideas"
                className="cursor-pointer hover:scale-120 translate-y-11 transition-all duration-700 ease-out mostrar self-stretch h-44 w-[178px] shadow-[0px_8px_23px_0px_rgba(80,107,82,0.16)] rounded-full"
                src="/src/assets/img/Produtos/Ball/ball1.jpeg"
              />
              <div className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 self-stretch text-center justify-start text-green-900 text-base font-bold font-['Poppins'] uppercase tracking-[3.20px]">
                Orquideas
              </div>
            </div>
            <div className="flex-1 h-56 inline-flex flex-col justify-center items-center gap-6">
              <img
                className="cursor-pointer translate-y-11 hover:scale-120 transition-all w-[178px] duration-700 ease-out mostrar self-stretch h-44 rounded-[125px] shadow-[0px_8px_23px_0px_rgba(80,107,82,0.16)]"
                src="/src/assets/img/Produtos/Ball/ball2.jpg"
              />
              <div className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 self-stretch text-center justify-start text-green-900 text-base font-bold font-['Poppins'] uppercase tracking-[3.20px]">
                Samambaias
              </div>
            </div>
            <div className="flex-1 h-56 inline-flex flex-col justify-center items-center gap-6">
              <img
                className="w-[178px] cursor-pointer hover:scale-120 translate-y-11 transition-all duration-700 ease-out mostrar self-stretch h-44 rounded-[125px] shadow-[0px_8px_23px_0px_rgba(80,107,82,0.16)]"
                src="/src/assets/img/Produtos/Ball/ball3.webp"
              />
              <div className=" mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 self-stretch text-center justify-start text-green-900 text-base font-bold font-['Poppins'] uppercase tracking-[3.20px]">
                Bromélias
              </div>
            </div>
            <div className="flex-1 h-56 inline-flex flex-col justify-center items-center gap-6">
              <img
                className="w-[178px] cursor-pointer hover:scale-120 translate-y-11 transition-all duration-700 ease-out mostrar self-stretch h-44 rounded-[125px] shadow-[0px_8px_23px_0px_rgba(80,107,82,0.16)]"
                src="/src/assets/img/Produtos/Ball/ball4.jpg"
              />
              <div className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 self-stretch text-center justify-start text-green-900 text-base font-bold font-['Poppins'] uppercase tracking-[3.20px]">
                Suculentas
              </div>
            </div>
            <div className="flex-1 h-56 inline-flex flex-col justify-center items-center gap-6">
              <img
                className="cursor-pointer hover:scale-120 translate-y-11 transition-all duration-700 ease-out mostrar self-stretch h-44 rounded-[125px] shadow-[0px_8px_23px_0px_rgba(80,107,82,0.16)]"
                src="/src/assets/img/Produtos/Ball/ball5.jpg"
              />
              <div className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 self-stretch text-center justify-start text-green-900 text-base font-bold font-['Poppins'] uppercase tracking-[3.20px]">
                Begônias
              </div>
            </div>
            <div className="flex-1 h-56 inline-flex flex-col justify-center items-center gap-6">
              <img
                className="w-[178px] cursor-pointer hover:scale-120 translate-y-11 transition-all duration-700 ease-out mostrar self-stretch h-44 rounded-[125px] shadow-[0px_8px_23px_0px_rgba(80,107,82,0.16)]"
                src="/src/assets/img/Produtos/Ball/ball6.jpg"
              />
              <div className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 self-stretch text-center justify-start text-green-900 text-base font-bold font-['Poppins'] uppercase tracking-[3.20px]">
                Alocasias
              </div>
            </div>
          </div>
        </div>
        <div
          id="INNER-BACKGROUND"
          className="h-[6950px] w-full bg-green-950 absolute top-212"
        ></div>
        <div className="w-[1200px] h-[536px] left-[120px] top-[867px] absolute inline-flex flex-col justify-start items-center gap-7">
          <div className="flex flex-col justify-start items-center gap-3.5">
            <div className="ml-22 mt-20 text-center justify-start text-white text-4xl font-bold font-['Poppins']">
              Mais Vendidos
            </div>

            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="scale-120 ml-10 self-stretch flex-1 inline-flex justify-start items-start gap-15 w-full">
            <div
              data-type="Overlay"
              className="flex-1 self-stretch p-5 inline-flex flex-col justify-start items-start gap-4"
            >
              <div className="self-stretch flex-1 p-2 bg-white  inline-flex justify-center items-center gap-2.5">
                <div className="flex-1 self-stretch text-center justify-center text-green-800 text-1xl font-semibold font-['Poppins'] uppercase tracking-[4.80px] [text-shadow:_0px_4px_4px_rgb(52_52_52_/_0.25)]poppins">
                  Cabará
                  <img src="/src/assets/img/Produtos/Trending/cabará.webp" />
                </div>
              </div>
              <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch rounded-full h-16 p-2 bg-white shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                <div className="flex-1 text-center justify-start text-green-800 text-xl font-bold font-['Poppins']">
                  Comprar
                </div>
              </div>
            </div>
            <div
              data-type="Overlay"
              className=" scale-120 flex-1 self-stretch p-5 bg- inline-flex flex-col justify-start items-start gap-4"
            >
              <div className=" self-stretch flex-1 p-2 bg-white  inline-flex justify-center items-center gap-2.5">
                <div className="flex-1 self-stretch text-center justify-center text-green-800 text-1xl font-semibold font-['Poppins'] uppercase tracking-[4.80px] [text-shadow:0px_4px_4px_rgb(52_52_52/0.25)]">
                  Caladium
                  <img src="/src/assets/img/Produtos/Trending/tironhão.webp" />
                </div>
              </div>
              <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch rounded-full h-16 p-2 bg-white shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                <div className="flex-1 text-center justify-start text-green-800 text-xl font-bold font-['Poppins']">
                  Comprar
                </div>
              </div>
            </div>
            <div
              data-type="Overlay"
              className="flex-1 self-stretch p-5 inline-flex flex-col justify-start items-start gap-4"
            >
              <div className="self-stretch flex-1 p-2 bg-white  inline-flex justify-center items-center gap-2.5">
                <div className="flex-1 self-stretch text-center justify-center text-green-800 text-1xl font-semibold font-['Poppins'] uppercase tracking-[4.80px] [text-shadow:0px_4px_4px_rgb(52_52_52/0.25)]">
                  Rosa do deserto
                  <img src="/src/assets/img/Produtos/Trending/rosa-do-deserto.webp" />
                </div>
              </div>
              <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch rounded-full h-16 p-2 bg-white shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                <div className="flex-1 text-center justify-start text-green-800 text-xl font-bold font-['Poppins']">
                  Comprar
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="SECTION-ALOCASIAS"
          className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 w-[1200px] h-[861px] left-[120px] top-[1723px] absolute inline-flex flex-col justify-start items-center gap-7"
        >
          <div className="flex flex-col justify-start items-center gap-3.5">
            <div className="ml-22 text-center justify-start text-white mt-10 text-5xl font-bold font-['Poppins']">
              Alocasias
            </div>
            <div className="ml-22 w-48 h-0 outline-2 mb-10 -outline-offset-1 outline-white/80" />
          </div>
          <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6 ml-[-120px] w-[1540px]">
            <div className="self-stretch flex-1 inline-flex justify-start items-start gap-6">
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia - Cuprea.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Cuprea
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 79,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia - Odora.jpg" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Odora
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 29,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia - Polly.jpeg" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Polly
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 69,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia Clypeolata.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Clypeolata
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 49,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
            </div>

            <div
              id="GRADE-2"
              className="self-stretch flex-1 inline-flex justify-start items-start gap-6"
            >
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img
                  className="w-[230px] ml-12 mb-2"
                  src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia - Black Velvet.webp"
                />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Black Velvet
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 49,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img
                  className="w-[285px] ml-5 mb-4"
                  src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia - Dragon Scale.webp"
                />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Dragon Scale
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 79,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img
                  className="w-[280px] ml-5"
                  src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia - Zebrina.webp"
                />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Zebrina
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 49,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img
                  className="w-[245px] ml-10"
                  src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia -Sinuata.webp"
                />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Sinuata
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 39,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="SECTION-BROMELIAS"
          className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 w-[1200px] h-[561px] left-[120px] top-[3123px] absolute inline-flex flex-col justify-start items-center gap-7"
        >
          <div className="flex flex-col justify-start items-center gap-3.5">
            <div className="ml-22   text-center justify-start text-white mt-10 text-5xl font-bold font-['Poppins']">
              Bromelias
            </div>
            <div className="ml-22   w-48 h-0 outline-2 mb-10 -outline-offset-1 outline-white/80" />
          </div>
          <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6 ml-[-120px] w-[1540px]">
            <div className="self-stretch flex-1 inline-flex justify-start items-start gap-6">
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Bromelias/Bromelias - Aechmea chantinii.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Aechmea chantinii
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 79,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Bromelias/Bromelias - Guzmania.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Guzmania
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 59,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Bromelias/Bromelias - Aechmea.jpg" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Aechmea
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 69,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Bromelias/Bromelias - Tillandsia.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Tillandsia
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 49,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="SECTION-SUCULENTAS"
          className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 w-[1200px] h-[561px] left-[120px] top-[3900px] absolute inline-flex flex-col justify-start items-center gap-7"
        >
          <div className="flex flex-col justify-start items-center gap-3.5">
            <div className="ml-22  text-center justify-start text-white mt-10 text-5xl font-bold font-['Poppins']">
              Suculentas
            </div>
            <div className="ml-22  w-48 h-0 outline-2 mb-10 -outline-offset-1 outline-white/80" />
          </div>
          <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6 ml-[-120px] w-[1540px]">
            <div className="self-stretch flex-1 inline-flex justify-start items-start gap-6">
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Suculentas/Suculenta - Gasteria Maculata.jpg" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Gasteria Maculata
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 79,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img
                  className="w-[260px] ml-8 mb-7"
                  src="/src/assets/img/Produtos/Categorias/Suculentas/Suculentas - Aeonium.jpg"
                />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Aeonium
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 29,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Suculentas/Suculentas - Echeveria Agavoides.jpg" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Echeveria Agavoides
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 69,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Suculentas/Suculentas - Echeveria.jpg" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Echeveria
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 49,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="SECTION-ORQUIDEAS"
          className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 mostrar w-[1200px] h-[861px] left-[120px] top-[4713px] absolute inline-flex flex-col justify-start items-center gap-7"
        >
          <div className="flex flex-col justify-start items-center gap-3.5">
            <div className="ml-22 text-center justify-start text-white mt-20 text-5xl font-bold font-['Poppins']">
              Orquídeas
            </div>
            <div className="ml-22 w-full h-0 outline-2 mb-10 -outline-offset-1 outline-white/80" />
          </div>
          <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6 ml-[-120px] w-[1540px]">
            <div className="self-stretch flex-1 inline-flex justify-start items-start gap-6">
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img
                  className="ml-12 w-[230px]"
                  src="/src/assets/img/Produtos/Categorias/Orquideas/Orquideas - Chomthong.webp"
                />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Chomthong
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 69,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img
                  className="w-[235px] ml-10"
                  src="/src/assets/img/Produtos/Categorias/Orquideas/Orquideas - Looge Tone Red.webp"
                />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Looge Tone Red
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 49,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img
                  className="w-[238px] ml-10"
                  src="/src/assets/img/Produtos/Categorias/Orquideas/Orquideas - Phalaenopsis Manchada.jpg"
                />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Phalaenopsis Manchada
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 69,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img
                  className="w-[236px] ml-10 mb-1"
                  src="/src/assets/img/Produtos/Categorias/Orquideas/Orquideas - Sophoronitis.webp"
                />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Sophoronitis
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 49,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
            </div>

            <div
              id="GRADE-2"
              className="self-stretch flex-1 inline-flex justify-start items-start gap-6"
            >
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Orquideas/Orquidea - Alpino.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Alpino
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 39,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Orquideas/Orquidea - Blanca Phalaenopsis.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Blanca Phalaenopsis
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 59,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Orquideas/Orquidea - Cascatas.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Cascatas
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 29,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Orquideas/Orquidea - Phalaenopsis.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Phalaenopsis
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 39,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="SECTION-BEGONIAS"
          className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 w-[1200px] h-[561px] left-[120px] top-[6110px] absolute inline-flex flex-col justify-start items-center gap-7"
        >
          <div className="flex flex-col justify-start items-center gap-3.5">
            <div className="ml-22 text-center justify-start text-white mt-10 text-5xl font-bold font-['Poppins']">
              Begônias
            </div>
            <div className="ml-22 w-48 h-0 outline-2 mb-10 -outline-offset-1 outline-white/80" />
          </div>
          <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6 ml-[-120px] w-[1540px]">
            <div className="self-stretch flex-1 inline-flex justify-start items-start gap-6">
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia - Cuprea.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Cuprea
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 79,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia - Odora.jpg" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Odora
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 29,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia - Polly.jpeg" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Polly
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 69,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Alocacias/Alocasia Clypeolata.png" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Clypeolata
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 49,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="SECTION-SAMAMBAIAS"
          className="mostrar translate-y-11 duration-700 ease-out transition-all opacity-0 w-[1200px] h-[561px] left-[120px] top-[6900px] absolute inline-flex flex-col justify-start items-center gap-7"
        >
          <div className="flex flex-col justify-start items-center gap-3.5">
            <div className="ml-22 text-center justify-start text-white mt-10 text-5xl font-bold font-['Poppins']">
              Samambaias
            </div>
            <div className="ml-22 w-48 h-0 outline-2 mb-10 -outline-offset-1 outline-white/80" />
          </div>
          <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6 ml-[-120px] w-[1540px]">
            <div className="self-stretch flex-1 inline-flex justify-start items-start gap-6">
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Samambaias/Samambaias - Americana.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Americana
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 39,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Samambaias/Samambaias - De Sol.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    De Sol
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 29,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Samambaias/Samambaias - Gleichenia.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Gleichenia
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 99,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
              <div
                data-type="Default"
                className="flex-1 self-stretch p-5 bg-white rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex flex-col justify-start items-start gap-4"
              >
                <div className="self-stretch flex-1 p-2 rounded-lg flex flex-col justify-start items-start"></div>
                <img src="/src/assets/img/Produtos/Categorias/Samambaias/Samambaias - Prata.webp" />
                <div className="self-stretch px-2 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-neutral-700 text-xl font-bold font-['Poppins']">
                    Prata
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-700 text-xl font-normal font-['Poppins']">
                      R$ 49,99
                    </div>
                  </div>
                </div>
                <div className="buy cursor-pointer hover:scale-105 transition-all self-stretch h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                    Comprar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="DEPOIMENTOS"
          className="w-[1340px] left-[120px] top-[8100px] absolute inline-flex justify-start items-center gap-6"
        >
          <div className="flex-1 inline-flex flex-col justify-center items-start gap-7">
            <div className="self-stretch flex flex-col justify-start items-start gap-5">
              <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                <div className="self-stretch justify-start text-neutral-700 text-5xl font-bold font-['Unna']">
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
            <div className="cursor-pointer hover:bg-amber-950 transition-all w-72 h-16 p-2 bg-green-700 rounded-lg shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] inline-flex justify-center items-center gap-2.5">
              <div className="flex-1 text-center justify-start text-white text-xl font-bold font-['Poppins']">
                Agende Agora!
              </div>
            </div>
          </div>
          <img
            className="flex-1 self-stretch rounded-2xl shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)] border border-green-700"
            src="/src/assets/img/Galeria/Section.webp"
          />
        </div>
        <div
          id="GALERIA"
          className="mt-350 w-[1200px] left-[175px] top-[7343px] absolute inline-flex flex-col justify-center items-center gap-7"
        >
          <div className="flex flex-col justify-start items-center gap-3.5">
            <div className="justify-start text-green-900 text-5xl font-bold font-['Poppins']">
              Experiências de quem ama nossas plantas
            </div>
            <div className="w-48 h-0 outline-2 -outline-offset-1 outline-green-900" />
          </div>
          <div className="scale-120 mt-20 self-stretch h-[640px] rounded-2xl shadow-[0px_8px_23px_0px_rgba(59,130,62,0.13)] flex flex-col justify-center items-center gap-5">
            <div className="self-stretch flex-1 inline-flex justify-start items-start gap-5">
              <div className="hover:scale-120 hover:z-10 transition-all flex-1 self-stretch relative bg-linear-to-l from-black/40 to-neutral-700/0 rounded-lg overflow-hidden shadow-[0px_8px_23px_0px_rgba(80,107,82,0.13)]">
                <img
                  id="japa"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/src/assets/img/Galeria/1.webp"
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
                  src="/src/assets/img/Galeria/2.webp"
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
                  src="/src/assets/img/Galeria/3.webp"
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
                  src="/src/assets/img/Galeria/4.webp"
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
                  src="/src/assets/img/Galeria/5.webp"
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
                  src="/src/assets/img/Galeria/6.webp"
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
                  src="/src/assets/img/Galeria/7.webp"
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
    </div>
  );
}

export default Produtos;
