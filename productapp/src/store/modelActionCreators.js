import { PRODUCTS, SUPPLIERS } from "./dataTypes"
import { DELETE, STORE, UPDATE } from "./modelActionTypes"

let idCounter = 100

export const saveProduct = p => createSaveEvent(PRODUCTS, p)

export const saveSupplier = s => createSaveEvent(SUPPLIERS, s)

const createSaveEvent = (dataType, payload) => {
    if(payload.id) {
        return {
            type: UPDATE,
            dataType: dataType,
            payload: payload
        }
    } 

    return {
        type: STORE,
        dataType: dataType,
        payload: {...payload, id: idCounter++}
    }
}

export const deleteProduct = p => ({
    type: DELETE,
    dataType: PRODUCTS,
    payload: p.id
})

export const deleteSupplier = s => ({
    type: DELETE,
    dataType: SUPPLIERS,
    payload: s.id
})