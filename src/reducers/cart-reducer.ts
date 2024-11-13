import { Patch, CartItem } from "../types/types";
import { db } from "../data/db";

export type CartActions =
  | {
      type: "ADD_TO_CART";
      payload: { item: Patch };
    }
  | {
      type: "REMOVE_FROM_CART";
      payload: { id: Patch["id"] };
    }
  | {
      type: "ADD_UNIT";
      payload: { id: Patch["id"] };
    }
  | {
      type: "REMOVE_UNIT";
      payload: { id: Patch["id"] };
    }
  | {
      type: "CLEAR_CART";
    };

export type CartState = {
  data: Patch[];
  cart: CartItem[];
};

const initialCart = (): CartItem[] => {
  const localStorageCart = localStorage.getItem("cart");
  return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const initialState: CartState = {
  data: db,
  cart: initialCart(),
};

const MAX_ITEMS = 5;
const MIN_ITEMS = 1;

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemExists = state.cart.find(
        (patch) => patch.id === action.payload.item.id
      );
      console.log(itemExists);

      let updatedCart: CartItem[] = [];

      if (itemExists) {
        updatedCart = state.cart.map((item) => {
          if (item.id === action.payload.item.id) {
            if (item.quantity < MAX_ITEMS) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else {
              return item;
            }
          } else {
            return item;
          }
        });
      } else {
        const newItem: CartItem = {
          ...action.payload.item,
          quantity: 1,
        };
        updatedCart = [...state.cart, newItem];
      }

      return {
        ...state,
        cart: updatedCart,
      };
    case "REMOVE_FROM_CART":
      const cart = state.cart.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        cart,
      };
    case "ADD_UNIT":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id && item.quantity < MAX_ITEMS) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case "REMOVE_UNIT":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id && item.quantity > MIN_ITEMS) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
