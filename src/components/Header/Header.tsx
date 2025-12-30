import styles from "./Header.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProdutosClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Se estiver na página /comprar, navega para Home primeiro (By Ckristian)
    if (location.pathname.startsWith("/comprar/")) {
      navigate("/");
      setTimeout(() => {
        const principal = document.getElementById("LOJA");
        if (principal) {
          principal.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Se já estiver na Home, apenas rola (By Ckristian)
      const principal = document.getElementById("LOJA");
      if (principal) {
        principal.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div id="top-header" className="relative flex justify-center z-20">
      <header className={styles.header}>
        <span>
          <img
            src={`${import.meta.env.BASE_URL}img/logo-w.webp`}
            alt="Logotipo da Empresa"
            className={styles.logo}
          />
        </span>

        <nav className="z-10 font-bold text-green-900 flex gap-5">
          <a onClick={() => navigate("/")} href="">
            HOME
          </a>
          <a
            onClick={() => {
              document.getElementById("big-card")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="hover:cursor-pointer"
          >
            SOBRE
          </a>
          <a onClick={handleProdutosClick} href="">
            PRODUTOS
          </a>
          <a
            className="hover:cursor-pointer"
            onClick={() => {
              document.getElementById("agendar")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            CONTATO
          </a>
        </nav>
      </header>

      <div className="relative cursor-pointer flex-row gap-2 left-[740px] top-7 bg-green-800 h-[50px] w-40 flex items-center justify-center text-center rounded-4xl mt-2.5 font-bold text-white hover:bg-zinc-500 z-10">
        <a className="ml-2" href="https://wa.me/5592985355192">
          WhatsApp
        </a>
        <img
          className="w-6 mb-[]"
          src={`${import.meta.env.BASE_URL}img/whatsapp.webp`}
          alt="Whatsapp Icon"
        />
      </div>
    </div>
  );
}

export default Header;
