function Footer() {
  return (
    <div id="footer" className="bg-green-900 text-white w-full h-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Encanto Amazônico</h3>
          <p className="text-sm leading-relaxed opacity-90">
            O Encanto Amazônico é uma das maiores lojas de paisagismo e
            jardinagem de Manaus – Amazonas.
          </p>
          <img className="w-40 mt-5" src={`${import.meta.env.BASE_URL}img/logo-footer.webp`} loading="lazy" />
        </div>

        <div className="w-60">
          <h3 className="text-xl font-semibold mb-3">Nossas Lojas</h3>
          <ul className="text-sm space-y-2 opacity-90">
            <li>📍 Unidade Vieiralves</li>
            <li>Rua Rio Purus, 1158</li>
            <li>📞 (92) 99999-8898</li>
            <li>📞 (92) 99794-4391</li>
            <li className="mt-3">📍 Unidade Compensa</li>
            <li>Av. João Ramalho, 1371</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Acesse</h3>
          <p className="text-sm opacity-90 mb-4">
            Acompanhe dicas, informações e promoções nas nossas redes sociais.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-green-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm5.25-.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-green-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H8.08V12h2.42V9.8c0-2.4 1.43-3.73 3.62-3.73c1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.2 0-1.57.74-1.57 1.5V12h2.67l-.43 2.91h-2.24v7.04A10 10 0 0 0 22 12Z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-green-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.43 0 .06 5.37.06 12c0 2.11.55 4.18 1.6 6.01L0 24l6.15-1.6A11.94 11.94 0 0 0 12.06 24C18.69 24 24.06 18.63 24.06 12c0-3.2-1.25-6.21-3.54-8.52ZM12.06 22a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.65.95.98-3.56-.23-.37A9.94 9.94 0 1 1 12.06 22Zm5.47-7.46c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.13 3.26 5.16 4.57.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        id="texto-footer"
        className="-mt-2.5 bg-zinc-800 text-center py-4 text-sm"
      >
        © Encanto Amazônico 2025 | Design by Estudantes do Curso de Front-End -
        CETAM
      </div>
    </div>
  );
}

export default Footer;
