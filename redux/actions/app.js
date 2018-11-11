import axios from 'axios'
import BASE_URL from '../../src/config';

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
                    sections: data
                })
        })
            .catch(err => {
                console.log(err);
            })
    }
}

