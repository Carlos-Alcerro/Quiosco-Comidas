"use client";
import useQuiosco from "../hook/useQuiosco";
import Layout from "@/layout/Layout";
import Producto from "@/components/Producto";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <Layout>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuacion
      </p>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {categoriaActual?.productos?.map((prod) => (
          <Producto key={prod.id} prod={prod} />
        ))}
      </div>
    </Layout>
  );
}
