import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk'

import SavedReducer from './reducers/save';
import IngredientReduer from './reducers/ingredient';
import LikeReducer from './reducers/like';
import RecipeReducer from './reducers/recipe';
import ProfileReducer from './reducers/profile';

const rootReducer = combineReducers({
    RecipeList: RecipeReducer,
    LikedList: LikeReducer,
    SavedList: SavedReducer,
    ItemList: IngredientReduer,
    UserDataList: ProfileReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store;