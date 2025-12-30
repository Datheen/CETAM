import { useNavigate } from "react-router-dom";
import produtos from "../json/data.json/produtos.json";

type Produto = {
  id: number;
  name: string;
  price: string;
  image: string;
};

type CardsProdutosProps = {
  ids: number[];
};

function CardsProdutos({ ids }: CardsProdutosProps) {
  const filtrados = (produtos as Produto[]).filter((p) => ids.includes(p.id));
  const navigate = useNavigate();
  return (
    <>
      {filtrados.map((product) => (
        <div
          key={product.id}
          className="scale-110 h-[584px] w-[366px] bg-white rounded-2xl flex flex-col justify-center items-center gap-5"
        >
          <img src={product.image} alt={product.name} />

          <div className="w-full flex flex-col ml-17">
            <h2 className="text-2xl font-bold text-zinc-800">{product.name}</h2>
            <p className="text-2xl mt-1 text-zinc-600">{product.price}</p>
          </div>

          <div
            onClick={() => navigate(`/comprar/${product.id}`)}
            className="bg-green-700 h-16 w-[326px] rounded-full hover:bg-green-950 hover:scale-105 transition-all text-white font-bold flex items-center justify-center cursor-pointer text-2xl"
          >
            Comprar
          </div>
        </div>
      ))}
    </>
  );
}

export default CardsProdutos;
