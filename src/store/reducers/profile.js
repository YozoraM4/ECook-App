import { ACCUPDATE, ACCADD } from "../type";

const initialState = {
    userData: [],
};
export default (state = initialState, action) => {

    switch(action.type) {
        case ACCADD:
            return{
                ...state,
                userData: [action.addData]
            };

        case ACCUPDATE:
            const updateUserData = {
                name: action.updateData.name,
                password: action.updateData.password,
                image: action.updateData.image
            }
            return{
                userData: [updateUserData]
            };
            
        default:
            return{userData: state.userData};
    }
}
