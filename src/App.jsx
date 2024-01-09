
import './App.css';
import React, { useState , useEffect } from 'react';


function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/151')
      .then(response => response.json())
      .then(data => {
        setPokemons(data);
      });
  }, []);

  return (
    <div>
      <h1>Pocket Monsters</h1>
      <div className="card-container">
        {pokemons.map((pokemon) => (
          <div key={pokemon.name} className="card">
            <img src={pokemon.image} alt={pokemon.name} className="card-image" />
            <div className="card-details">
              <h2 className="card-name">{pokemon.name}</h2>
              <div className="card-types">
                {pokemon.apiTypes.map((apiType) => (
                  <div key={apiType.name} className="card-type">
                    <img src={apiType.image} alt={apiType.name} className="type-image" />
                    <span className="type-name">{apiType.name}</span>
                  </div>
                ))}
              </div>
              <div className="card-stats">
                {Object.keys(pokemon.stats).map((statName) => (
                  <div key={statName} className="stat">
                    <div className="stat-name">{statName}</div>
                    <div className="stat-value">{pokemon.stats[statName]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
//créer le dossier de projet
//npm  create-react-app nom du projet
// installer le router
//npm install react-router-dom
//créer des dossier dans src : components, pages, styles

//en suite dans le app.js on importe les pages et on les mets dans des routes
//exemple : import Home from './pages/Home';
//          import About from './pages/About';
//          import Contact from './pages/Contact';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//dans le app.js on modifie la function App() pour mettre les routes
// function App() {
//   return (
// <BrowserRouter>
// <Header />
// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/about" element={<About />} />
// <Route path="/contact" element={<Contact />} />
// </Routes>
// <Footer />
// </BrowserRouter>
//   );

//Link permet de faire des liens entre les pages
//importer  import { Link } from 'react-router-dom'; 
//   <Link to="/">Home</Link>
export default App;
