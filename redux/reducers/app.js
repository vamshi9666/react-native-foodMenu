const initialState = {
    cart :[],
    sections:[],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_ITEM_CART":
            return {
                ...state,
                cart: cart.push(action.payload)
            }

        case "REMOVE_ITEM_CART":{
            return {
                ...state,
                cart: cart.filter(item => item.id == action.payload)
            }
        }
        case "GET_ITEMS":{
            return {
                ...state,
                sections:action.sections,
            }
        }
        default:
            return {
                ...state
            }
    }
}