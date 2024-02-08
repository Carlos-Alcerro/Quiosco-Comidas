"use client";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState([]);
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [paso, setPaso] = useState(1);
  const [total, setTotal] = useState(0);
  const [nombre, setNombre] = useState("");

  const obtenerCategorias = async () => {
    try {
      const { data } = await axios("/api/categorias");
      setCategorias(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );

    setTotal(nuevoTotal);
  }, [pedido]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      //ACTUALIZAR LA CANTIDAD DEL PRODUCTO

      const pedidoActualizado = pedido.map((productoState) =>
        productoState.id === producto.id ? producto : productoState
      );
      setPedido(pedidoActualizado);
      toast.success("Pedido Actualizado Correctamente");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al pedido");
    }
    setModal(false);
  };

  const handleChangePaso = (paso) => {
    setPaso(paso);
  };

  const handleEditarCantidad = (id) => {
    console.log(id);

    const productoActualizar = pedido.filter((producto) => producto.id === id);

    setProducto(productoActualizar[0]);

    setModal(!modal);
  };

  const handleEliminarProducto = (id) => {
    const productoEliminado = pedido.filter((producto) => producto.id !== id);
    setPedido(productoEliminado);
  };

  const handleOrdenSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/ordenes",
        { nombre, fecha: Date.now().toString(), total, pedido },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setCategoriaActual(categorias[0]);
      setPedido([]);
      setNombre("");
      setTotal(0);
      toast.success("Se agrego su pedido exitosamente");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        handleSetProducto,
        producto,
        handleChangeModal,
        modal,
        handleAgregarPedido,
        pedido,
        handleChangePaso,
        paso,
        handleEditarCantidad,
        handleEliminarProducto,
        handleOrdenSubmit,
        total,
        nombre,
        setNombre,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
