import React from 'react'
import './articleReducer.css';

// Creation du state de base
const INITIAL_STATE = {
  articles : []
}

// Le reducer prend en argument le state = INITIAL_STATE, et action pour les actions
function articleReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'LOADARTICLES' : {
      return {
        ...state,
        articles: action.payload
      }
    }
    default : {
      return state
    }
  }
}

export default articleReducer;

// Fonction de l'appel API

export const getArticles = () => dispatch => {
  // Je fais une requête http à jsonplaceholder.typicode.com/posts
  fetch('https://jsonplaceholder.typicode.com/posts')
    // Je veux que l'on me retourne une réponse sous le format JSON
    .then(res => res.json())
    // Je vais envoyer la data à mon action de type LOADARTICLES, avec la valeur data comme payload
    .then(data => {
      dispatch({
        // Type de l'action
        type: 'LOADARTICLES',
        payload: data
      })
    })

}