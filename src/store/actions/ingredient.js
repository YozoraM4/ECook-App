import {ADD, REMOVE} from '../type';

export const add = data => {
    console.log(data)
    return {
        type: ADD,
        addItem: data,
    };
};

export const remove = data => {
    return {
        type: REMOVE,
        removeItem: data,
    }
}