'use client'
import produtos from '@/data/db'
import { Button } from "@/components/ui/button"
import { getCarrinho, formataValorEmRealBrasileiro, getFoto, removerProdutoDoCarrinho } from "@/app/utils";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from 'react';


export default function Carrinho() {
    const [carrinhoCompras, setCarrinhoCompras] = useState<any[]>([])
    const [valorTotal, setValorTotal] = useState<number>(0)
    const [valorTotalIndividual, setValorTotalIndividual] = useState<number>(0)

    function handleRemoverDoCarrinho(id: string) {
        removerProdutoDoCarrinho(parseInt(id, 10));
        setCarrinhoCompras(carrinhoCompras.filter(item => item.id !== id));
        alert('Produto removido do carrinho!');
    };

    function handleFinalizaCompra() {
        alert('Fim da Aplicação!');
    }

    function getValorTotal(carrinhoCompras: any): void {
        const total = carrinhoCompras.reduce((acc, item) => acc + (item.valor || 0), 0);
        const totalIndividual = carrinhoCompras.reduce((acc, item) => acc + (item.valorIndividual || 0), 0);

        setValorTotal(total);
        setValorTotalIndividual(totalIndividual);
    }
    useEffect(() => {
        const produtosSelecionados = getCarrinho();
        const produtosFiltrados = produtos.filter(produto => produtosSelecionados.includes(produto.id));
        setCarrinhoCompras(produtosFiltrados);
    }, []);

    useEffect(() => {
        getValorTotal(carrinhoCompras);
    }, [carrinhoCompras]);

    return (
        <main className='flex flex-col items-center justify-center'>
            <div className="header w-screen h-12 p-2 text-white font-bold bg-sky-800 flex items-center">
                Solar Shop
            </div>
            <div className="link-voltar flex-1 w-1/2 p-2">
                <a href="/" className='hover:text-blue-700 hover:font-bold'>{'<-'} Voltar</a>
            </div>
            <div className="carrinho-lista flex w-1/2 items-center justify-center m-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Foto</TableHead>
                            <TableHead>Descrição</TableHead>
                            <TableHead>Valor Individual</TableHead>
                            <TableHead>Valor Kit</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            carrinhoCompras.length > 0 ?
                                carrinhoCompras.map(item => (
                                    <TableRow key={item?.id}>
                                        <TableCell className="font-medium">
                                            <img src={getFoto(item.descricao)} alt="" />
                                        </TableCell>
                                        <TableCell>{item.descricao}</TableCell>
                                        <TableCell className="text-right">{item.valorIndividual ? formataValorEmRealBrasileiro(item.valorIndividual) : ''}</TableCell>
                                        <TableCell className="text-right">{formataValorEmRealBrasileiro(item.valor)}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="produto-cta mt-4">
                                                <Button
                                                    onClick={() => handleRemoverDoCarrinho(item.id)}
                                                    variant="outline"
                                                    className="text-red-900 bg-red-200">
                                                    Remover
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                                : <>
                                    <TableRow>
                                        <TableCell className="font-medium">
                                        </TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </>
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>Total</TableCell>
                            <TableCell className="text-right">{carrinhoCompras.length} item(s)</TableCell>
                            <TableCell className="text-right font-bold">{formataValorEmRealBrasileiro(valorTotalIndividual)}</TableCell>
                            <TableCell className="text-right font-bold">{formataValorEmRealBrasileiro(valorTotal)}</TableCell>
                            <TableCell className="text-right">
                                <Button
                                    onClick={() => handleFinalizaCompra()}
                                    variant="outline"
                                    className="text-blue-200 bg-blue-900 font-bold">
                                    Finalizar
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>

        </main >

    )
}