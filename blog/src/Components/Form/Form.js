import React, {useState, useRef} from 'react';
// Pour envoyer des infos
import {useDispatch} from 'react-redux';
import './Form.css'

export default function Form() {
  // Création du state + méthode de modification
  const [article, setArticle] = useState({
    title: '',
    body: ''
  })

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    // Je crée un nouvel objet
    const newArticle = {
      // Je prends la propriété du state correspondante et lui donne la valeur du bon input
      // La propriété title, prend en valeur le premier elmt du tableau
      // Dans notre exemple le title que j'ai reçu de l'API
      title: inputsRef.current[0].value,
      // La propriété body, prend en valeur le second elmt du tableau
      // Dans notre exemple le body que j'ai reçu de l'API
      body: inputsRef.current[0].value
    }
    // J'envoye  à mon reducer l'action ADDARTICLE, les infos de l'objet article (dans la propriété payload)
    dispatch({
      type: 'ADDARTICLE',
      // Je donne à mon payload le nouvel objet créé plus haut
      payload: newArticle
    })

    // Je remet à 0 mes inputs
    e.target.reset()
  };

  // J'initialise un tableau vide pour useRef, car je vais sélectionner plusieurs elmts
  const inputsRef = useRef([])

  const addRefs = el => {
    // Si l'élément existe et qu'il n'est pas présent dans la tableau
    if(el && !inputsRef.current.includes(el)) {
      // Alors j'ajoute l'input sélectionné à mon tableau
      inputsRef.current.push(el)
    }
  }

  return (
    <>
      <h1 className='title-form'>Écrivez un article</h1>
      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input
          // Je lance la fonction addRefs
          ref={addRefs}
          type="text" 
          id='title' 
          placeholder='Entrez votre nom'
          className='inp-title' 
        />
        <label htmlFor="article">Votre article</label>
        <textarea 
          // Je lance la fonction addRefs
          ref={addRefs}
          id="article"
          placeholder='Votre article'
          className='inp-body'
        >
        </textarea>
        <button type='submit'>Envoyer l'article</button>
      </form>
    </>
  )
}
