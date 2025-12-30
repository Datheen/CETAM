import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mt-15 min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
     <img className="-mt-30 mb-10 w-20 invert-50" src="/img/logo-s.png"/> <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Página não encontrada</p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-600 rounded hover:bg-green-700 transition"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
