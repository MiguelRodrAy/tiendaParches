//Reducers
import { useEffect, useReducer } from "react";
import { cartReducer, initialState } from "./reducers/cart-reducer.ts";

//Hooks
//import useCart from "./hooks/useCart.ts";

//Componentes
import Header from "./components/Header";
import Patch from "./components/Patch.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <>
      <Header cart={state.cart} dispatch={dispatch} />
      <main className='container-xl mt-5'>
        <h2 className='text-center'>Nuestra Colección</h2>

        <div className='row mt-5'>
          {state.data.map((patch) => (
            <Patch key={patch.id} patch={patch} dispatch={dispatch} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
