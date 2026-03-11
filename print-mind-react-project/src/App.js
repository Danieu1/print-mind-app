import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/AppLayout.css'; // Vamos criar este arquivo para o layout

// Importe suas futuras páginas/componentes aqui
import WriteScreen from './pages/WriteScreen'; // Vamos criar este primeiro!
// import SeeScreen from './pages/SeeScreen';
// import ChatScreen from './pages/ChatScreen';
// import PagesScreen from './pages/PagesScreen';
// import CalendarScreen from './pages/CalendarScreen';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Cabeçalho Principal com Navegação */}
        <header className="main-header">
          <h1>Print-Mind</h1>
          <nav className="main-nav">
            {/* Links de Navegação */}
            <Link to="/">Escrever</Link>
            <Link to="/see">Ver Mapa</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/pages">Páginas</Link>
            <Link to="/calendar">Calendário</Link>
          </nav>
        </header>

        {/* Conteúdo Principal (Onde as páginas serão renderizadas) */}
        <main className="main-content">
          <Routes>
            {/* Rotas para as suas páginas */}
            <Route path="/" element={<WriteScreen />} />
            <Route path="/see" element={<h2>Aqui será o Mapa Mental Emocional.</h2>} />
            <Route path="/chat" element={<h2>Aqui será a tela de Chat.</h2>} />
            <Route path="/pages" element={<h2>Aqui será a Gestão de Arquivos.</h2>} />
            <Route path="/calendar" element={<h2>Aqui será o Calendário.</h2>} />

            {/* Rota para 404 (Página não encontrada) */}
            <Route path="*" element={<h2>404 - Página não encontrada!</h2>} />
          </Routes>
        </main>

        {/* Rodapé */}
        <footer className="main-footer">
          <p>&copy; {new Date().getFullYear()} Print-Mind. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;