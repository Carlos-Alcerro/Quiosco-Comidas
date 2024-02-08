"use client";
import { formatearDinero } from "@/helpers";
import useQuiosco from "@/hook/useQuiosco";
import Layout from "@/layout/Layout";
import { useState } from "react";

const Total = () => {
  const { pedido, handleOrdenSubmit, total, nombre, setNombre } = useQuiosco();

  return (
    <Layout>
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a Continuacio</p>
      <form onSubmit={handleOrdenSubmit}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="bg-gray-200 w-full lg:w-1/3  mt-3 p-2 rounded-md"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar{" "}
            <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            className={`${
              pedido.length === 0 || nombre.length === 0 || nombre.length < 3
                ? "bg-indigo-100 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-800 cursor-pointer"
            } w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
            value="Confirmar Pedido"
            disabled={
              pedido.length === 0 || nombre.length === 0 || nombre.length < 3
            }
          />
        </div>
      </form>
    </Layout>
  );
};

export default Total;
