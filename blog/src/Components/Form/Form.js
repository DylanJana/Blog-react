import React, {useState} from 'react';
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
    // J'envoye  à mon reducer l'action ADDARTICLE, les infos de l'objet article (dans la propriété payload)
    dispatch({
      type: 'ADDARTICLE',
      payload: article
    })

    // Je remet mon state à 0
    setArticle({
      title: '',
      body: ''
    })
  }

  const handleInputs = (e) => {
    if(e.target.classList.contains('inp-title')) {
      // Je ne change pas le state directement je crée donc un nouvel objet.
      const newObjState = {
        // Je copie le state article
        ...article,
        // J'attribue à la propriété title du state article, la valeur courante de mon input
        title: e.target.value
      }
      // Je passe en argument de ma méthode qui me permet de changer le state, newObjState
      // Le state sera modifié
      setArticle(newObjState)
    } else if(e.target.classList.contains('inp-body')) {
      const newObjState = {
        // Je copie le state article
        ...article,
        // J'attribue à la propriété title du state article, la valeur courante de mon input
        body: e.target.value
      }
      // Je passe en argument de ma méthode qui me permet de changer le state, newObjState
      // Le state sera modifié
      setArticle(newObjState)
    }
  }
  return (
    <>
      <h1 className='title-form'>Écrivez un article</h1>
      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input
          // onInput trigger l'évènement à chaque fois que j'écris quelque chose dans l'input
          //onChange trigger uniquement quand je perds le focus
          onChange={handleInputs}
          // La valeur entré dans l'input donnera la valeur de la propriété title de mon state
          value={article.title}
          type="text" 
          id='title' 
          placeholder='Entrez votre nom'
          className='inp-title' 
        />
        <label htmlFor="article">Votre article</label>
        <textarea 
          onChange={handleInputs}
          // La valeur entré dans le textarea donnera la valeur de la propriété body de mon state
          value={article.body}
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
