import type { Patch } from "../types/types";

type PatchProps = {
  patch: Patch;
  addToCart: (item: Patch) => void;
};

//Sintaxis para tipado en TypeScript

// //Inline Type
// const Patch = ({
//   patch,
//   addToCart,
// }: {
//   patch: Patch;
//   addToCart: (item: Patch) => void;
// }) => {

//Separate Type

const Patch = ({ patch, addToCart }: PatchProps) => {
  //Destructuring
  const { name, price, description, image } = patch;

  return (
    <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
      <div className='col-4'>
        <img
          className='img-fluid'
          src={`./img/${image}.jpg`}
          alt='patch image'
        />
      </div>
      <div className='col-8'>
        <h3 className='text-black fs-4 fw-bold'>{name}</h3>
        <p>{description}</p>
        <p className='fw-black text-primary fs-3'>{price}€</p>

        <button
          type='button'
          className='btn btn-dark w-100'
          onClick={() => addToCart(patch)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Patch;
