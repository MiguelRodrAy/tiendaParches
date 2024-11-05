//Hooks
import useCart from "./hooks/useCart.ts";

//Componentes
import Header from "./components/Header";
import Patch from "./components/Patch.tsx";
import Footer from "./components/Footer.tsx";

//Reglas de los Hooks
//1 - Siempre se ponen lo primero en la función
//2 - Nunca se registran con condicionales, se deben llamar siempre

function App() {
  //State
  //   const [auth, setAuth] = useState(false);
  //   const [total, setTotal] = useState(0);
  //   const [cart, setCart] = useState({});

  const {data, cart, addToCart, removeFromCart, addUnit, removeUnit, clearCart, cartTotal, isEmpty} = useCart()

  //Tipos de datos y Arrays en TS
  //const [auth, setAuth] = useState(20)


  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        addUnit={addUnit}
        removeUnit={removeUnit}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((patch) => (
            <Patch key={patch.id} patch={patch} 
            addToCart={addToCart} />
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
