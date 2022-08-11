import {ACCUPDATE, ACCADD} from '../type';

export const add = data => {
    return {
        type: ACCADD,
        addData: data,
    };
};

export const update = data => {
    return {
        type: ACCUPDATE,
        updateData: data,
    };
};
