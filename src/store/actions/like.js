import {LIKE, UNLIKE} from '../type';

export const like = data => {
    return {
        type: LIKE,
        like: data,
    };
};

export const unlike = data => {
    return {
        type: UNLIKE,
        unlike: data,
    }
}