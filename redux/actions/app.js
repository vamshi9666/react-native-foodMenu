import axios from 'axios'
import BASE_URL from '../../src/config';
import _ from 'lodash'
export const get_data = () => {
    return (dispatch, getState) => {
        axios.get(BASE_URL, {})
            .then(res => {
                const data = [];
                res.data.data.sections.map(section => {
                    section.dishes = res.data.data.dishes.filter(dish => dish.sectionId == section.id)
                    data.push(section);
                })
                dispatch({
                    type:"GET_ITEMS",
                    sections: data,
                    offersNo:res.data.data.offersAvailable
                })
        })
            .catch(err => {
                console.log(err);
            })
    }
}

export const add_item_cart = (item) => {
    return (dispatch, getState) => {
        dispatch({
            type:"ADD_ITEM_CART",
            payload: item
        })
    }
}

export const remove_item_Cart = (item) => {
    return (dispatch, getState) => {

        
        dispatch({
            type:"REMOVE_ITEM_CART",
            payload:item.id
        })
    }
} 