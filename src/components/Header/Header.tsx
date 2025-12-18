import styles from "./Header.module.css";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleProdutosClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Se estiver na página /comprar, navega para Home primeiro
    if (location.pathname === '/comprar') {
      navigate('/');
      setTimeout(() => {
        const principal = document.getElementById('PRINCIPAL');
        if (principal) {
          principal.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Se já estiver na Home, apenas rola
      const principal = document.getElementById('PRINCIPAL');
      if (principal) {
        principal.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  
  return (
    <div id="top-header" className="relative flex justify-center z-20">
      <header className={styles.header}>
        <span>
          <img
            src="img/logo-w.webp"
            alt="Logotipo da Empresa"
            className={styles.logo}
          />
        </span>

        <nav className="z-10 font-bold text-green-900 flex gap-5">
          <a onClick={() => navigate('/')}  href="">HOME</a>
          <a href="">SOBRE</a>
          <a onClick={handleProdutosClick} href="">PRODUTOS</a>
          <a href="">CONTATO</a>
        </nav>
      </header>

      <div className="relative cursor-pointer flex-row gap-2 left-[740px] top-7 bg-green-800 h-[50px] w-40 flex items-center justify-center text-center rounded-4xl mt-2.5 font-bold text-white hover:bg-zinc-500 z-10">
        <a className="ml-2" href="https://wa.me/5592985355192">
          WhatsApp
        </a>
        <img
          className="w-6 mb-[]"
          src="img/whatsapp.webp"
          alt="Whatsapp Icon"
        />
      </div>
    </div>
  );
}

export default Header;
