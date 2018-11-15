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
            const index = state.cart.map(x => x.id).indexOf(action.payload)
            return {
                ...state,
                cart:state.cart.slice(index)
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