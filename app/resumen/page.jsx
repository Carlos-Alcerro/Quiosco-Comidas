"use client";
import ResumenProductos from "@/components/ResumenProductos";
import useQuiosco from "@/hook/useQuiosco";
import Layout from "@/layout/Layout";

const Resumen = () => {
  const { pedido } = useQuiosco();
  return (
    <Layout>
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu pedido</p>
      {pedido.length === 0 ? (
        <p className="text-center text-4xl font-bold">
          No se encuentran pedidos aun
        </p>
      ) : (
        pedido.map((producto) => (
          <ResumenProductos key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
};

export default Resumen;
