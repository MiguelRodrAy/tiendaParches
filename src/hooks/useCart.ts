import { useEffect, useState, useMemo } from "react";
import { db } from "../data/db";
import type { Patch, PatchID, CartItem } from "../types/types";

const useCart = () => {

  const initialCart = () : CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  //State en React es asíncrono, es decir, que el state se manda a actualizar inmediatamente
  //independientemente de si se han terminado de escribir los datos, para una mayor fluidez

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //Un useEffect siempre tiene un callback y array de dependencias. Se ejecuta cada vez que se modifica lo que
  // haya en las dependencias y siempre se ejecuta una vez al montar el componente
  //   useEffect(() => {
  //     setData(db);
  //   }, []);

  const addToCart = (item : Patch) => {
    // Inmutabilidad en React? =>
    // cart.push(item) estaría modificando(mutando) el array original
    // https://doesitmutate.xyz/

    const itemExists = cart.findIndex((Patch) => Patch.id === item.id);

    if (itemExists < 0) {
      const newItem : CartItem = {
        ...item, quantity: 1
      }

      setCart((prevCart) => [...prevCart, newItem]);
    } else {
      addUnit(item.id);
    }
  };

  //Eliminar elementos del carrito
  const removeFromCart = (itemId : PatchID) => {
    setCart((prevCart) => prevCart.filter((Patch) => Patch.id !== itemId));
  };

  //Eliminar elementos del carrito
  const addUnit = (itemId: number) => {
    const itemNumber = cart.findIndex((Patch) => Patch.id === itemId);

    const updatedCart = [...cart];
    if (updatedCart[itemNumber].quantity < MAX_ITEMS) {
      updatedCart[itemNumber].quantity++;
      setCart(updatedCart);
    }

    //Otra forma:

    /*
        const updatedCart = cart.map(item => {
          if(item.id === id){
          return{
            ...item,
            quantity: item.quantity + 1
            }
            }
            return item
          })
            setCart(updatedCart)
        */
  };

  const removeUnit = (itemId : PatchID) => {
    const itemNumber = cart.findIndex((Patch) => Patch.id === itemId);

    const updatedCart = [...cart];
    updatedCart[itemNumber].quantity--;

    if (updatedCart[itemNumber].quantity < MIN_ITEMS) {
      removeFromCart(itemId);
    } else {
      setCart(updatedCart);
    }

    //Otra forma:

    /*
        const updatedCart = cart.map(item => {
          if(item.id === id){
          return{
            ...item,
            quantity: item.quantity - 1
            }
            }
            return item
          })
            setCart(updatedCart)
        */
  };

  const clearCart = () => {
    setCart([]);
  };

  //State derivado
  //useMemo sirve para no renderizar la app de nuevo hasta que no
  // cambie la dependencia que le indicamos
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    addUnit,
    removeUnit,
    clearCart,
    isEmpty,
    cartTotal
  };
};

export default useCart;
