import type { Patch } from "../types/types"

//Type en TS, similar a un interface
// type Patch = {
//     id : number;
//     name: string;
//     image : string;
//     description: string,
//     price: number
// } //any en TS es veneno

// interface IPatch {
//     id : number;
//     name: string;
//     image : string;
//     description: string,
//     price: number
// }

//Definimos db como un array de Type's Patch
export const db: Patch[] = [
    {
        id: 1,
        name: 'Rolling Stones',
        image: 'patch_01',
        description: 'Parche icónico de los Rolling Stones para fanáticos de la banda.',
        price: 5.99,
    },
    {
        id: 2,
        name: 'Spiderman',
        image: 'patch_02',
        description: 'Parche de tu amigo y vecino Spiderman.',
        price: 6.49,
    },
    {
        id: 3,
        name: 'Stormtrooper',
        image: 'patch_03',
        description: 'Parche clásico de Star Wars con el casco de un Stormtrooper',
        price: 4.99,
    },
    {
        id: 4,
        name: 'USA',
        image: 'patch_04',
        description: 'Para lucir las 13 barras',
        price: 6.99,
    },
    {
        id: 5,
        name: 'Valhalla',
        image: 'patch_05',
        description: 'Siéntete como un verdadero vikingo',
        price: 7.49,
    },
    {
        id: 6,
        name: 'Earth',
        image: 'patch_06',
        description: 'Parche de la Tierra, para los amantes de la naturaleza.',
        price: 5.49,
    },
    {
        id: 7,
        name: 'Rugby',
        image: 'patch_07',
        description: 'Parche de un balón de rugby.',
        price: 6.79,
    },
    {
        id: 8,
        name: 'Hellfish',
        image: 'patch_08',
        description: 'Parche del Hellfish, de la serie Los Simpsons',
        price: 8.99,
    },
    {
        id: 9,
        name: 'Dragón',
        image: 'patch_09',
        description: 'Parche de un dragón chino, símbolo de fuerza y misterio.',
        price: 3.99,
    }
];

