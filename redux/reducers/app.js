const initialState = {
    cart :[],
    sections:[],
    offersNo:''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_ITEM_CART":
            return {
                ...state,
                cart:[...state.cart, action.payload]
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
                offersNo:action.offersNo
            }
        }
        default:
            return {
                ...state
            }
    }
}