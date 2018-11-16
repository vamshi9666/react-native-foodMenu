const initialState = {
    cart :[],
    sections:[],
    offersNo:''
}
const removeItem = (items, index) => ([ ...items.slice(0, index), ...items.slice(index + 1)]);
export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_ITEM_CART":
            return {
                ...state,
                cart:[...state.cart, action.payload]
            }

        case "REMOVE_ITEM_CART":{
            const index = state.cart.findIndex(one => one.id === action.payload)

            return {
                ...state,
                cart: [...removeItem(state.cart, index)]
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