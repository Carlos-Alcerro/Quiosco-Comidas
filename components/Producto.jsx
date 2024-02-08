import { formatearDinero } from "@/helpers";
import useQuiosco from "@/hook/useQuiosco";
import Image from "next/image";

const Producto = ({ prod }) => {
  const { handleSetProducto, handleChangeModal } = useQuiosco();
  const { nombre, imagen, precio } = prod;
  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen Platillo ${nombre}`}
        width={400}
        height={500}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-400">
          {formatearDinero(precio)}
        </p>
        <button
          onClick={() => {
            handleChangeModal(), handleSetProducto(prod);
          }}
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 w-full p-3 text-white font-semibold text-lg mt-5 uppercase"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
