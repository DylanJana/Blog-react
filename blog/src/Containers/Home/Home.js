import React from 'react';
import './Home.css';
// Import de la card type
import Card from '../../Components/Card/Card';
// Import useSelector, pour utiliser le state, useDispatch pour envoyer des dispatch
import { useSelector, useDispatch } from 'react-redux';
// useEffect, permet d'envoyer une fonction lors de la première génération du composant
// useState permet de créer le state + la méthode pour le modifer
import { useEffect, useState } from 'react';
// Fct asynchrone
import { getArticles } from '../../redux/article/articleReducer';
// Permet de générer des id uniquement pour chaque élément d'une liste react
import {v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';

export default function Home() {

  // Je dois le présenter de cette façon, car on a un combineReducers
  const {articles} = useSelector( state => ({
    // Récupére le reducer articleReducer du state
    ...state.articleReducer
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    // Lors de la première génération du composant, je verifie si j'ai des articles
    // dans mon stata, si j'en ai pas alors, j'utilise la fct api getArticles
    if(articles.length === 0) {
      dispatch(getArticles());
    }
  }, [])
  return (
    <>
      <h1 className='home-title'>Tous les articles</h1>
      <div className="container-cards">
        {/* J'itére sur chaque article, pour chaque item du tableau je génére un composant
        Card avec une props key={uuidv4()} qui lui permet d'obtenir une clef unique pour
        chaque article.  */}
        {articles.map(item => {
          return (
            <Card key={uuidv4()}>
              {/* Pour chaque article, je récupére la propriéte title, et l'affiche */}
              <h2>{item.title}</h2>
              {/* Pour chaque article je crée un lien */}
              <Link to={{
                //replace(/\s+/g) repère tous les espaces de manière global
                // Que je remplace par un tire '-'
                //.trim() supprimer les espaces avant et après
                pathname: `articles/${item.title.replace(/\s+/g, '-').trim()}`,
              }}
            // En plus du pathname je dois lui passe du state pour afficher du
              // contenu dans mon article
              state={{
                title: item.title,
                body: item.body
              }
              }>
                Lire l'article
              </Link>
            </Card>
          )
        })}
      </div>
    </>
  )
}
