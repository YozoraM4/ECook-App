import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk'

import SavedReducer from './reducers/save';
import RecipeReducer from './reducers/recipe';
import IngredientReduer from './reducers/ingredient';

const rootReducer = combineReducers({
    SavedList: SavedReducer,
    RecipeList: RecipeReducer,
    ItemList: IngredientReduer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store;