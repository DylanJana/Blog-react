import React from 'react';
// Permettra d'avoir accès aux state qu'on lui passe
import { useLocation } from 'react-router-dom';
import './Article.css'

export default function Article() {
  // Cela va me permettre de récupérer un objet contenant le state qu'on lui a passé
  const location = useLocation();
  return (
    <div className='article-content'>
      {/* Je récupére dans l'objet location la propriété title de son state */}
      <h2>Votre article : {location.state.title}</h2>
           {/* Je récupére dans l'objet location la propriété body de son state */}
      <p>{location.state.body}</p>
    </div>
  )
}
