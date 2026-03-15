import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MainContent } from './components/MainContent';

// Páginas temporárias para teste
const ChatPage = () => <div style={{padding: '20px'}}><h1>Página de Chat</h1><p>Em construção...</p></div>;
const CalendarPage = () => <div style={{padding: '20px'}}><h1>Calendário</h1> <p>Em construção...</p> </div>;
const SeePage = () => <div style={{padding: '20px'}}><h1>Página de Visualização</h1><p>Em construção...</p></div>;
const PagesPage = () => <div style={{padding: '20px'}}><h1>Página de Páginas</h1><p>Em construção...</p></div>;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* O Layout envolve todas as rotas abaixo */}
        <Route path="/" element={<Layout />}>
          {/* Rota inicial (Página de Escrita) */}
          <Route index element={<MainContent />} />
          
          {/* Outras páginas */}
          <Route path="chat" element={<ChatPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="see" element={<SeePage />} />
          <Route path="pages" element={<PagesPage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;