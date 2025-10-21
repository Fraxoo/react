import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/user/42">Profil utilisateur</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

// Page d'accueil
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>🏠 Page d’accueil</h1>
      <p>Clique pour aller sur la page "À propos".</p>
      <button onClick={() => navigate("/about")}>Aller à propos</button>
    </div>
  );
}

// Page "À propos"
function About() {
  return (
    <div>
      <h1>ℹ️ À propos</h1>
      <p>Ce site démontre le fonctionnement du routeur React.</p>
    </div>
  );
}

// Page avec paramètre dynamique
function User() {
  const { id } = useParams();
  return (
    <div>
      <h1>👤 Profil utilisateur</h1>
      <p>ID reçu dans l’URL : <strong>{id}</strong></p>
    </div>
  );
}

export default App;
