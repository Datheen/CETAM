import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import plantasData from "../json/data.json/plantas.json";

function Comprar() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [productName, setProductName] = useState("Planta a ser vendida");
  const [productImg, setProductImg] = useState("https://placehold.co/526x597");
  const [productPrice, setProductPrice] = useState("R$ 79,99");
  const [productDesc, setProductDesc] = useState(
    "Selecione uma planta para ver a descrição."
  );

  useEffect(() => {
    const data = searchParams.get("data");
    if (data) {
      try {
        const decoded = JSON.parse(atob(data));
        if (decoded.name) {
          setProductName(decoded.name);

          const plantData =
            plantasData[decoded.name as keyof typeof plantasData];
          if (plantData) {
            setProductPrice(plantData.preco);
            setProductDesc(plantData.descricao);
          }
        }
        if (decoded.imgSrc) setProductImg(decoded.imgSrc);
        if (decoded.preco) setProductPrice(decoded.preco);
      } catch (e) {
        console.error("Error decoding product data:", e);
      }
    }
  }, [searchParams]);

  return (
    <div id="comprar" className="relative flex justify-center">
      <div className="left-[175px] top-20 absolute inline-flex flex-col justify-start items-start ">
        <button
          onClick={() => navigate("/")}
          className="mb-4 px-6 py-2 cursor-pointer bg-green-700 text-white rounded-full hover:bg-green-800 transition-all"
        >
          Voltar
        </button>
        <div className="inline-flex gap-6">
          <div
            data-property-1="Default"
            className="flex justify-start items-start gap-6 mr-60"
          >
            <img
              id="produto"
              className="w-[626px] h-[597px] object-cover rounded-lg"
              src={productImg}
            />
          </div>
          <div
            id="painel-buy"
            className="w-[526px] px-2 inline-flex flex-col justify-center items-start gap-8"
          >
            <div className="self-stretch flex flex-col justify-center items-start gap-2">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div
                  id="nome"
                  className="justify-start text-Text-Primary text-3xl font-semibold font-['Poppins'] leading-10"
                >
                  {productName}
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2">
                  <div className="flex justify-start items-center gap-2">
                    <div
                      data-checked="4*"
                      data-label="false"
                      data-size="M*"
                      data-state="Enabled"
                      className="flex justify-start items-center gap-2"
                    >
                      <div className="flex justify-start items-center">
                        <img src="/src/assets/img/Produtos/Comprar/Rating.png" />
                      </div>
                    </div>
                    <div className="justify-start text-Text-Secondary text-2xl font-medium font-['Poppins'] leading-7">
                      4.5
                    </div>
                    <div className="justify-start text-Text-Secondary text-2xl font-medium font-['Poppins'] leading-7">
                      (212 avaliações)
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="flex justify-start items-center gap-4 mt-5">
                  <div className="justify-start text-Text-Primary text-4xl font-bold font-['Poppins'] leading-7">
                    {productPrice}
                  </div>
                </div>
                <div
                  data-color="Inherit"
                  data-darkmode="False"
                  data-end-icon="false"
                  data-label="true"
                  data-size="L"
                  data-start-icon="true"
                  data-state="Enabled"
                  data-variant="Text"
                  className="p-2.5 flex justify-center items-center gap-2"
                >
                  <div className="w-6 h-6 relative overflow-hidden"></div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-center items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-end gap-10">
                <div className="self-stretch flex flex-col justify-start items-end gap-4">
                  <div className="self-stretch pr-4 py-2 border-b border-Outline-Outline inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-1">
                      <div className="justify-start text-Text-Secondary text-base font-semibold font-['Poppins'] leading-5">
                        Tipo:
                      </div>
                      <div className="justify-start text-Text-Primary text-base font-semibold font-['Poppins'] leading-5">
                        Alocasias
                      </div>
                    </div>
                    <div className="w-6 h-6 relative overflow-hidden"></div>
                  </div>
                  <div className="self-stretch py-2 border-b border-Outline-Outline flex flex-col justify-center items-start gap-2">
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className="flex justify-start items-center gap-1">
                        <div className="justify-start text-Text-Secondary text-base font-semibold font-['Poppins'] leading-5">
                          Condições:
                        </div>
                        <div className="justify-start text-Text-Primary text-base font-['Poppins'] leading-5">
                          Planta externa/interna
                        </div>
                      </div>
                      <div
                        data-color="Inherit"
                        data-darkmode="False"
                        data-end-icon="false"
                        data-label="true"
                        data-size="M*"
                        data-start-icon="false"
                        data-state="Enabled"
                        data-variant="Text"
                        className="px-2 py-1.5 rounded-lg flex justify-center items-center gap-2"
                      >
                        <div className="text-center justify-center text-gray-800 text-base font-medium font-['Poppins'] underline">
                          Ver mais sobre
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch pr-2 py-5 inline-flex justify-around items-center">
                      <div id="icones">
                        <img
                          className="w-10"
                          src="/src/assets/img/Produtos/Conditions/chuva.webp"
                        />
                      </div>

                      <img
                        className="w-10"
                        src="/src/assets/img/Produtos/Conditions/sol.webp"
                      />
                      <img
                        className="w-10"
                        src="/src/assets/img/Produtos/Conditions/neve.webp"
                      />
                      <img
                        className="w-10"
                        src="/src/assets/img/Produtos/Conditions/temp.webp"
                      />
                    </div>
                  </div>
                </div>
                <div onClick={() => window.location.href = "https://docs.pagar.me/"} className="self-stretch inline-flex justify-between items-center">
                  <div className="w-64 h-12 relative rounded-full bg-green-800 cursor-pointer hover:bg-green-950 ">
                    <div
                      data-color="Inherit"
                      data-darkmode="False"
                      data-end-icon="false"
                      data-label="true"
                      data-size="L"
                      data-start-icon="true"
                      data-state="Enabled"
                      data-variant="Contained*"
                      className="w-64 px-5 py-2.5 left-0 top-0 absolute bg-Brand-Primary inline-flex justify-center items-center gap-2"
                    >
                      <div className="w-6 h-6 relative overflow-hidden">
                        <img src="/src/assets/img/Produtos/Comprar/Buy.png" />
                      </div>
                      <div className="justify-start mt-0.5 text-white text-base font-semibold font-['Poppins'] leading-6">
                        Comprar
                      </div>
                    </div>
                  </div>
                  <div
                    data-color="Inherit"
                    data-darkmode="False"
                    data-end-icon="false"
                    data-label="true"
                    data-size="L"
                    data-start-icon="true"
                    data-state="Enabled"
                    data-variant="Text"
                    className="px-2 py-2.5 flex justify-center items-center gap-2"
                  >
                    <div className="w-6 h-6 relative overflow-hidden">
                      <div className="w-3.5 h-4 left-[5px] top-[3px] absolute outline-[1.50px] outline-offset-[-0.75px] outline-neutral-900" />
                    </div>
                    <div className="justify-start text-gray-800 text-base font-medium font-['Poppins'] leading-6">
                      Lista de desejos
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-6">
                <div className="self-stretch pl-2 py-3.5 flex flex-col justify-center items-start gap-2.5">
                  {productDesc}
                </div>
                <div className="w-[514px] flex flex-col justify-start items-start gap-4">
                  <div className="justify-start text-Text-Secondary text-base font-semibold font-['Poppins'] leading-5">
                    Método de pagamento
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="flex justify-start items-center gap-9">
                      <img src="/src/assets/img/Produtos/Pagamentos/pix.webp" />
                      <img src="/src/assets/img/Produtos/Pagamentos/card.webp" />
                      <img src="/src/assets/img/Produtos/Pagamentos/boleto.webp" />
                    </div>
                    <div
                      data-color="Inherit"
                      data-darkmode="False"
                      data-end-icon="false"
                      data-label="true"
                      data-size="M*"
                      data-start-icon="false"
                      data-state="Enabled"
                      data-variant="Text"
                      className="px-2 py-1.5 rounded-lg flex justify-center items-center gap-2"
                    >
                      <div className="text-center justify-center text-gray-800 text-base font-medium font-['Poppins'] underline leading-5">
                        Saiba mais
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" left-[242px] top-[934px] absolute inline-flex -mt-20 flex-col justify-start items-start gap-6">
        <div
          id="delivery"
          className="-ml-20 w-[1496px] flex flex-col justify-start items-start"
        >
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch px-2 bg-green-900 border-b border-Outline-Outline inline-flex justify-start items-start gap-6">
              <div className="p-4  border-Text-Primary flex justify-center items-center gap-2.5">
                <div className="justify-start text-white text-Text-Primary text-2xl font-medium font-['Poppins'] leading-7">
                  Condições de recebimento
                </div>
              </div>
            </div>
            <div className="mb-20 self-stretch inline-flex justify-center items-center gap-2.5">
              <div id="sobre-planta" className="flex-1 justify-start">
                <span className="text-Text-Secondary text-base font-normal font-['Poppins'] leading-5">
                  Ao receber sua planta do{" "}
                  <span className="text-green-900">Encanto Amazônico</span>,
                  desembale com cuidado e verifique se ela chegou em boas
                  condições. Recomendamos colocá-la em local adequado, conforme
                  a necessidade de luz e rega de cada espécie, evitando
                  exposição imediata ao sol forte ou excesso de água. Caso
                  identifique qualquer avaria no momento do recebimento, entre
                  em contato conosco em até 24 horas, enviando fotos do produto
                  e da embalagem. A devolução ou troca será avaliada conforme as
                  condições de transporte e manuseio, respeitando o prazo e as
                  políticas do Encanto Amazônico. Nosso compromisso é garantir
                  que sua planta chegue saudável e pronta para encantar seu
                  ambiente 🌿
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comprar;
