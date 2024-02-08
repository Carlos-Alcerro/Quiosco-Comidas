"use client";
import AdminLayout from "@/layout/AdminLayout";
import useSWR from "swr";
import axios from "axios";
import Orden from "@/components/Orden";

export default function Admin() {
  const fetcher = () => axios("/api/ordenes").then((datos) => datos.data);

  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {
    refreshInterval: 100,
  });

  /* console.log(data);
  console.log(error);
  console.log(isLoading); */

  return (
    <AdminLayout>
      <h1 className="text-4xl font-black">Panel de Administracion</h1>
      <p className="text-2xl my-10">Administra las Ordenes</p>
      {data && data.length ? (
        data.map((orden) => <Orden key={orden.id} orden={orden} />)
      ) : (
        <p className="text-4xl font-bold text-center mt-10">
          No hay ordenes pendientes
        </p>
      )}
    </AdminLayout>
  );
}
