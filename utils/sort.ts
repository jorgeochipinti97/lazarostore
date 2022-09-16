import { IProduct } from "../interfaces"






export const capitalizarPrimeraLetraPalabras = (frase: string | any) => {
    if (typeof frase != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return frase.replace(/\w\S*/g, (palabra) => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
}

export const sortProductsByTerm = (products: IProduct[], palabra: string) => {

    return products.sort((a: IProduct, b: IProduct) => {
        if (a.slug.indexOf(palabra) < b.slug.indexOf(palabra)) {
            return 1
        } else if (a.slug.indexOf(palabra) > b.slug.indexOf(palabra)) {
            return -1
        }
        return 0
    })

}
export const sendLast = (products: IProduct[], palabra: string) => {

    return products.sort((a: IProduct, b: IProduct) => {
        if (a.slug.indexOf(palabra) < b.slug.indexOf(palabra)) {
            return -1
        } else if (a.slug.indexOf(palabra) > b.slug.indexOf(palabra)) {
            return 1
        }
        return 0
    })

}