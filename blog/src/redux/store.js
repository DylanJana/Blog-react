// createStore -> Pour créer mon store ou il y aura les données
// applyMiddleware permet de faire un appel asynchrone avec thunk
// combineReducers -> Me permet d'avoir plusieurs reducers dans mon app
import {createStore, applyMiddleware, combineReducers} from 'redux';
// Import du reducer des articles
import articleReducer from './article/articleReducer';
// Je passe en paramètre de applyMiddleware, thunk pour faire un appel asynchrone
import thunk from 'redux-thunk';

// Import tous les reducers de l'app
const rootReducer = combineReducers({
  articleReducer
})

// Me permet de créer mon store, grâce à deux arguments, les reducers dans rootReducer
// Ainsi que applyMiddleware pour un appel asynchrone
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;