'use client'
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ProductList from '../components/ProductList'; // ajuste o caminho conforme necessário
import produtos from '@/data/db';
import { getFoto } from "./utils";

export default function Home() {
  const [tipoSelecionado, setTipoSelecionado] = useState<number | null>(null);
  const [filtroTexto, setFiltroTexto] = useState<string>("");

  const tipos = [
    { id: 1, descricao: 'Módulos' },
    { id: 2, descricao: 'Inversores' },
    { id: 3, descricao: 'Estruturas' },
    { id: 4, descricao: 'Elétricos' }
  ];

  const handleTipoChange = (event: any) => {
    const value = event.target.value;
    setTipoSelecionado(value ? parseInt(value) : null);
  };

  const handleFiltroTextoChange = (event: any) => {
    setFiltroTexto(event.target.value.toLowerCase());
  };

  const tiposProduto = tipoSelecionado
    ? tipos.filter(item => item.id === tipoSelecionado)
    : tipos;

  return (
    <main className="flex min-h-screen flex-col items-center bg-blue-200">
      <div className="header w-screen h-12 p-2 text-white font-bold bg-sky-800 flex items-center">
        Solar Shop
      </div>
      <div className="search flex h-22 m-4 gap-2 items-center justify-center">
        Filtro
        <Input type="text" placeholder="Filtrar" onChange={handleFiltroTextoChange} />
        <select onChange={handleTipoChange} className="p-2 border rounded">
          <option value="">Todos</option>
          {tipos.map(tipo => (
            <option key={tipo.id} value={tipo.id}>
              {tipo.descricao}
            </option>
          ))}
        </select>
      </div>
      <ProductList
        tiposProduto={tiposProduto}
        produtos={produtos}
        filtroTexto={filtroTexto}
        getFoto={getFoto}
      />
    </main>
  );
}
