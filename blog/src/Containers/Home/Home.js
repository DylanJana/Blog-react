import React from 'react';
import './Home.css';
// Import de la card type
import Card from '../../Components/Card/Card';

export default function Home() {
  return (
    <>
      <h1 className='home-title'>Tous les articles</h1>
      <div className="container-cards">
        <Card>
          <h2>Hello Card</h2>
        </Card>
      </div>
    </>
  )
}
