import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-blue-200">
      <div className="header w-screen h-12 p-2 text-white font-black bg-sky-800 flex items-center">
        Solar Shop
      </div>
      <div className="search flex h-32">
        Busca
      </div>
      <div className="product-list flex-col items-center gap-2 p-4">
        <div className="bloco-produtos">
          <div className="categoria flex">Categoria</div>
          <div className="card-itens flex items-center gap-10">
            <Card className="w-60 p-0 m-0">
              <CardHeader className="items-center w-full p-0 m-0">
                <img
                  className="w-full"
                  src="/nope-img.jpg"
                  alt="Image" />
              </CardHeader>
              <CardContent className="text-blue-950 text-xl">
                <p>Painel Solar Ja Solar 550w Bifacial</p>
              </CardContent>
              <CardFooter className="font-semibold">
                <p>R$472,32</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
