import {ADD, REMOVE} from '../type';

export const add = data => {
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