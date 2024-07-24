import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { formataValorEmRealBrasileiro } from '@/app/utils';

interface Produto {
    id: number;
    tipo: number;
    descricao: string;
    valor: number;
    valorIndividual?: number;
}

interface ProductListProps {
    tiposProduto: { id: number, descricao: string }[];
    produtos: Produto[];
    filtroTexto: string;
    getFoto: (descricao: string) => string;
}

const ProductList: React.FC<ProductListProps> = ({ tiposProduto, produtos, filtroTexto, getFoto }) => {
    return (
        <div className="product-list w-full flex-col items-center gap-2 p-4">
            <div className="bloco-produtos">
                <div>
                    {tiposProduto.map(item => (
                        <div key={item.id} className="categoria flex-col bg-gray-100 p-4 mb-2">
                            <div className="font-bold text-xl">{item.descricao}</div>
                            <div className="ml-4 flex flex-wrap items-center justify-evenly">
                                {
                                    produtos
                                        .filter(produto => produto.tipo === item.id)
                                        .filter(produto => produto.descricao.toLowerCase().includes(filtroTexto))
                                        .map(produtoFiltrado => (
                                            <div key={produtoFiltrado.id} className="produto-item p-2">
                                                <a href={`/produtos/${produtoFiltrado.id}`}>
                                                    <Card className="w-60 p-0 m-0">
                                                        <CardHeader className="items-center w-full p-0 m-0">
                                                            <img
                                                                className="w-32"
                                                                src={getFoto(produtoFiltrado.descricao)}
                                                                alt="Image" />
                                                        </CardHeader>
                                                        <CardContent className="text-blue-950 text-xl">
                                                            {produtoFiltrado.descricao}
                                                        </CardContent>
                                                        <CardFooter className="flex-col gap-1 items-center justify-center">
                                                            <div className="font-semibold text-xl text-center">
                                                                Valor no kit: {formataValorEmRealBrasileiro(produtoFiltrado.valor)}
                                                            </div>
                                                            {
                                                                produtoFiltrado.valorIndividual ?
                                                                    <div className="text-center">
                                                                        <span>
                                                                            Valor individual: {formataValorEmRealBrasileiro(produtoFiltrado.valorIndividual)}
                                                                        </span>
                                                                    </div>
                                                                    : <></>
                                                            }
                                                        </CardFooter>
                                                    </Card>
                                                </a>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
