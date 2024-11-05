//Archivo de definicion de tipos de TypeScript - No recomendado por desarrolladores

/*
En un proyecto pequeño, un solo archivo types.d.ts podría ser suficiente. 
Sin embargo, a medida que el proyecto crece, puede acumular una gran cantidad de 
declaraciones de tipos, lo que dificulta encontrar, entender y modificar tipos específicos. 
Dividir las declaraciones de tipos en varios archivos, organizados en carpetas según el 
dominio o la funcionalidad, ayuda a mantener el código modular y fácil de gestionar.

Un archivo types.d.ts suele ser un archivo de declaraciones globales, lo cual significa que los 
tipos que contiene se aplican a todo el proyecto automáticamente. Esto es útil en algunos casos 
(como declarar módulos CSS o tipos de librerías), pero puede llevar a conflictos de nombres o 
problemas de mantenimiento si el proyecto crece. Si los tipos específicos de un módulo están 
definidos en un archivo global, otros módulos pueden usar esos tipos accidentalmente o sin saberlo.
*/
export type Patch = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  };

//Herencia en types en TypeScript  
export type CartItem = Patch & {
  quantity: number;
}

//Lookup types en TypeScript(solo para un atributo)
export type PatchID = Patch["id"];

//Si por ejemplo, añadimos en el nuevo tipo un id que sea string, 
// se suprime el de la clase padre

//Utility types en TypeScript(solo con types) -> https://www.typescriptlang.org/docs/handbook/utility-types.html
//Sirven para quedarnos solo con los atributos que necesitamos y añadir atributos adicionales
export type UCartItem = Pick<Patch, "id" | "name" | "price"> & {
  quantity: number;
}

//Igual pero omitiendo uno, en lugar de seleccionar los que queremos
export type UPatch = Omit<Patch, "id">

// //Herencia en interfaces en TypeScript(similar a Java)  
// export interface ICartItem extends Guitar {
//   quantity: number;
// }


