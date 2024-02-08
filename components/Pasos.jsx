import useQuiosco from "@/hook/useQuiosco";
import Link from "next/link";

const pasos = [
  { paso: 1, nombre: "Menu", url: "/" },
  { paso: 2, nombre: "Resumen", url: "resumen" },
  { paso: 3, nombre: "Datos y Total", url: "total" },
];

const Pasos = () => {
  const { handleChangePaso, paso } = useQuiosco();
  const calcularPorcentaje = () => {
    let valor;
    if (paso === 1) {
      valor = 10;
    } else if (paso === 2) {
      valor = 50;
    } else {
      valor = 100;
    }

    return valor;
  };
  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <Link
            onClick={() => handleChangePaso(paso.paso)}
            href={paso.url}
            alt={paso.nombre}
            className="text-2xl font-bold"
            key={paso.paso}
          >
            {paso.nombre}
          </Link>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center"
          style={{ width: `${calcularPorcentaje()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Pasos;
