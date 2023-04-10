import './App.css';
import Navbar from './Components/Navbar/Navbar';
// Import des Routes et Route pour gérer la navigation de l'app
import {Routes, Route} from 'react-router-dom';
// Import des différents composants
import Home from './Containers/Home/Home'
import Article from './Containers/Article/Article';
import AddArticles from './Containers/AddArticle/AddArticle';
import Contact from './Containers/Contact/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ecrire' element={<AddArticles />} />
        {/* Ceci est un chemin dynamique, le path va accepter tout élément qui à un pathname
        articles/quelquesChose */}
        <Route path='/articles/:slug' element={<Article />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
