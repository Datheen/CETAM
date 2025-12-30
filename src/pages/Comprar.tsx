import { useHref, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import Footer from "../components/Footer/Footer";
import produtos from "../json/data.json/produtos.json";

type Produto = {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: string;
  description: string;
};

function Comprar() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const produto = (produtos as Produto[]).find((p) => p.id === Number(id));

  if (!produto) {
    return <div className="p-10">Produto não encontrado</div>;
  }

  const productImg = produto.image;
  const productName = produto.name;
  const productPrice = produto.price;
  const productRating = produto.rating;
  const productDesc = produto.description;

  return (
    <>
      <div className="mt-20 h-20 flex items-center justify-start">
        <div
          id="VOLTAR"
          className="flex w-29 opacity-60 ml-32 h-12 bg-green-900 text-white font-semibold text-center items-center justify-center rounded-3xl hover:cursor-pointer hover:opacity-100 transition-all duration-700 active:bg-zinc-700"
          onClick={() => navigate("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
          Voltar
        </div>
      </div>
      <div id="COMPRAR" className="flex flex-col items-center">
        <div id="PAINEL" className="flex w-[1635px] h-[700px] justify-between ">
          <div id="IMAGEM">
            <img
              className="w-[726px] m-5 rounded-2xl shadow-2xl shadow-green-900"
              src={productImg}
            />
          </div>
          <div id="DESCRI" className="mt-10 flex flex-col">
            <h1 className="text-5xl font-bold text-green-900">{productName}</h1>
            <div id="rating" className="flex gap-2 mt-2">
              <img src={productRating} />
              <p className="text-1xl font-medium">4.5 (212 avaliações)</p>
            </div>
            <h1 className="text-5xl font-bold mt-7">{productPrice}</h1>
            <p className="text-1xl font-medium mt-5">
              Tipo: Definir tipo de planta
            </p>
            <div
              id="card-painel"
              className="w-[590px] h-auto bg-green-900 mt-5"
            >
              <p className="text-white flex items-center mt-3 gap-2 mx-5">
                <span className="font-bold">Condições:</span> Planta Interna -
                Externa{" "}
                <a onClick={()=> window.open("https://www.google.com")}
                  className="font-bold underline ml-auto hover:cursor-pointer active:text-amber-300"
                  
                >
                  Ver mais
                </a>
              </p>

              <div
                id="conditions"
                className="flex justify-center gap-20 h-15 my-10 invert-100"
              >
                <img src="/img/Produtos/Conditions/chuva.webp" />
                <img src="/img/Produtos/Conditions/neve.webp" />
                <img src="/img/Produtos/Conditions/sol.webp" />
                <img src="/img/Produtos/Conditions/temp.webp" />
              </div>
            </div>

            <div id="line">
              <div
                id="line"
                className="w-[592px] bg-green-900 rounded-full h-1 mt-4"
              ></div>

              <div
                id="area-comprar"
                className="flex items-center gap-4 mt-10 mx-7"
              >
                <div onClick={()=> window.open("https://docs.bankly.com.br/v2/reference/simulacao-pagamento")} className="w-35 h-12 flex items-center rounded-3xl text-white font-semibold justify-center bg-green-900 hover:cursor-pointer hover:bg-green-950 active:bg-zinc-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                  </svg>
                  Comprar
                </div>

                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="ml-auto h-4 w-4 accent-green-900 hover:cursor-pointer"
                />
                <p className="font-medium">Lista de desejos</p>
              </div>
            </div>

            <div id="DESCRIÇÃO">
              <p className="w-[590px] mt-5">{productDesc}</p>
            </div>
            <hr className="mt-5" />

            <div id="pagamentos" className="mt-5">
              <h2 className="font-semibold text-1xl">Metodos de pagamento</h2>
              <div className="flex h-10 gap-6 mt-5">
                <img src="/img/Produtos/Pagamentos/pix.webp" />
                <img src="/img/Produtos/Pagamentos/Mastercard-Logo.png" />
                <img src="/img/Produtos/Pagamentos/Boleto-Logo-Vector.svg-.png" />

                <a onClick={()=> window.open("https://www.google.com")} className="ml-auto underline mr-4 hover:cursor-pointer hover:text-green-800">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="RECEBIMENTO" className="w-[1635px] mt-30">
          <h1 className="w-full bg-green-900 text-white p-2 text-[14pt] pl-5">
            Condições de recebimento
          </h1>
          <hr />

          <p className="my-10">
            Ao receber sua planta do Encanto Amazônico, desembale com cuidado e
            verifique se ela chegou em boas condições. Recomendamos colocá-la em
            local adequado, conforme a necessidade de luz e rega de cada
            espécie, evitando exposição imediata ao sol forte ou excesso de
            água. Caso identifique qualquer avaria no momento do recebimento,
            entre em contato conosco em até 24 horas, enviando fotos do produto
            e da embalagem. A devolução ou troca será avaliada conforme as
            condições de transporte e manuseio, respeitando o prazo e as
            políticas do Encanto Amazônico. Nosso compromisso é garantir que sua
            planta chegue saudável e pronta para encantar seu ambiente 🌿
          </p>
        </div>
      </div>

      <div className="bg-green-900 -mx-42 ">
        <Footer />
      </div>
    </>
  );
}

export default Comprar;
