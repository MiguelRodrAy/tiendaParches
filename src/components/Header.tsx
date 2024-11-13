import { CartItem } from "../types/types";
import { useMemo } from "react";
import { CartActions } from "../reducers/cart-reducer";
import { Dispatch } from "react";

type HeaderProps = {
  cart: CartItem[];
  dispatch: Dispatch<CartActions>;
};

export default function Header({ cart, dispatch }: HeaderProps) {
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <>
      <header className='py-5 header'>
        <div className='container-xl'>
          <div className='row justify-content-center justify-content-md-between'>
            <div className='col-8 col-md-3'>
              <a href='index.html'>
                <img
                  className='img-fluid'
                  src='./img/logo.svg'
                  alt='imagen logo'
                />
              </a>
            </div>
            <nav className='col-md-6 a mt-5 d-flex align-items-start justify-content-end'>
              <div className='carrito'>
                <img
                  className='img-fluid'
                  src='./img/carrito.png'
                  alt='imagen carrito'
                />

                <div id='carrito' className='bg-white p-3'>
                  {isEmpty ? (
                    <p className='text-center'>El carrito esta vacío</p>
                  ) : (
                    <>
                      <table className='w-100 table'>
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((patch) => (
                            <tr key={patch.id}>
                              <td>
                                <img
                                  className='img-fluid'
                                  src={`./img/${patch.image}.jpg`}
                                  alt='patch image'
                                />
                              </td>
                              <td>{patch.name}</td>
                              <td className='fw-bold'>{patch.price}€</td>
                              <td className='flex align-items-start gap-4'>
                                <button
                                  type='button'
                                  className='btn btn-dark'
                                  onClick={() =>
                                    dispatch({
                                      type: "REMOVE_UNIT",
                                      payload: { id: patch.id },
                                    })
                                  }
                                >
                                  -
                                </button>
                                {patch.quantity}
                                <button
                                  type='button'
                                  className='btn btn-dark'
                                  onClick={() =>
                                    dispatch({
                                      type: "ADD_UNIT",
                                      payload: { id: patch.id },
                                    })
                                  }
                                >
                                  +
                                </button>
                              </td>
                              <td>
                                <button
                                  className='btn btn-danger'
                                  type='button'
                                  onClick={() =>
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: { id: patch.id },
                                    })
                                  }
                                >
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <p className='text-end'>
                        Total pagar:{" "}
                        <span className='fw-bold'>{cartTotal}€</span>
                      </p>
                      <button
                        className='btn btn-dark w-100 mt-3 p-2'
                        onClick={dispatch.bind(null, { type: "CLEAR_CART" })}
                      >
                        Vaciar Carrito
                      </button>
                    </>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
