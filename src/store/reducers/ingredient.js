import { ADD, REMOVE } from "../type";

const initialState = {
    Items: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD:
            const updateIdItem = {
                id: state.Items.length + 1,
                name: action.addItem.name,
                unit: action.addItem.unit
            }
            return{
                Items: [...state.Items, updateIdItem]
            };

        case REMOVE: 
            return{
                Items: state.Items.filter(item=> item.id !== action.removeItem)
            }
        default:
            return{Items: state.Items};
    }
}
