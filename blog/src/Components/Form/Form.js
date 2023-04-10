import React from 'react';
import './Form.css'

export default function Form() {
  return (
    <>
      <h1 className='title-form'>Écrivez un article</h1>
      <form className="container-form">
        <label htmlFor="title">Titre</label>
        <input 
          type="text" 
          id='title' 
          placeholder='Entrez votre nom' 
        />
        <label htmlFor="article">Votre article</label>
        <textarea 
          id="article"
          placeholder='Votre article'
        ></textarea>
        <button type='submit'>Envoyer l'article</button>
      </form>
    </>
  )
}
