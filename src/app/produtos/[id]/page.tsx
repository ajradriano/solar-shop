'use client'
import { redirect, useParams } from "next/navigation";
import produtos from '@/data/db'
import { Button } from "@/components/ui/button"
import { adicionarProdutoAoCarrinho, formataValorEmRealBrasileiro, getFoto } from "@/app/utils";
import router from "next/router";

export default function Produtos() {
    const param = useParams();
    const produto = produtos.find(x => x.id === parseInt(param.id, 10))

    const handleAdicionarAoCarrinho = () => {
        if (produto) {
            adicionarProdutoAoCarrinho(produto.id);
            alert('Produto adicionado ao carrinho!');
        }
    };

    return (
        <main>
            <div className="header w-screen h-12 p-2 text-white font-bold bg-sky-800 flex items-center">
                Solar Shop
            </div>
            <div className="link-voltar flex-1 w-1/2 p-2">
                <a href="/" className='hover:text-blue-700 hover:font-bold'>{'<-'} Voltar</a>
            </div>
            <div className="produto-detalhe flex items-center justify-center m-4">
                <div className="produto-foto">
                    <img src={getFoto(produto?.descricao)} alt="Imagem Produto" />
                </div>
                <div className="produto-detalhes">

                    <div className="produto-descricao font-bold text-xl">
                        {produto?.descricao}
                    </div>
                    {
                        produto?.valorIndividual
                            ? <div className="produto-valor text-xl font-semibold">
                                {formataValorEmRealBrasileiro(produto?.valorIndividual)}
                            </div>
                            : <></>
                    }

                    <div className="produto-valor font-semibold">
                        <span>Valor no Kit:&nbsp;</span>
                        {formataValorEmRealBrasileiro(produto?.valor)}
                    </div>
                    <div className="produto-cta mt-4">
                        <Button onClick={handleAdicionarAoCarrinho} variant="outline" className="text-green-200 bg-green-900">Comprar</Button>
                    </div>
                </div>

            </div>
        </main>
    )
}