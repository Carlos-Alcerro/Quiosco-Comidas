"use client";
import useQuiosco from "@/hook/useQuiosco";
import Image from "next/image";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();
  return (
    <>
      <Image
        width={150}
        height={50}
        src="/assets/img/logo.svg"
        alt="Imagen Logo"
      />
      <nav className="mt-10 ">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
