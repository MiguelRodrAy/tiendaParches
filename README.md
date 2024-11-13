# Proyecto 1 - Tienda Web con carrito

Este proyecto forma parte del curso **React y TypeScript - La Guía Completa** de
Udemy, impartido por **Juan Pablo De la torre Valdez**. A lo largo de este
curso, se desarrollan 10 mini proyectos que ayudan a profundizar en los
conocimientos y las posibilidades de React y TypeScript.

Este primer proyecto consiste en la implementación de una tienda online con un
carrito en el que se pueden añadir y quitar artículos de forma persistente y se
puede ver como se actualiza el precio al hacerlo.

El objetivo de este curso es aprender los fundamentos de React como el uso de
State y los Hooks más comunes como useState y useEffect además de la posibilidad
de crear Hooks personalizados como useCart en el caso de este proyecto.

Además, el proyecto parte de una implementación en JavaScript para
posteriormente convertirlo todo a TypeScript y comprender la importancia de
definir tipos en los estados, props y funciones, lo que ayuda a prevenir errores
y facilita el mantenimiento del código.

# Actualización: Sustitución del Hook useCart por el reducer cart-reducer

En la última versión del proyecto se sustituye el uso del hook personalizado
useCart por un reducer que cumple la misma función.

La implementación de useReducer permite gestionar las acciones del carrito de
una manera más estructurada y permite que gracias al uso de la función dispatch
no se tenga que estar pasando a través de los props cada una de las funciones
del carrito y en su lugar, solo pasemos dicha función.

Gracias a esta modificación se mejora la escalabilidad y se mantiene el código
del carrito más organizado y fácil de entender.
