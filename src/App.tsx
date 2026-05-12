import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Playlist } from './pages/Playlist';

export default function App() {
  return (
    // O BrowserRouter é o motor que gerencia as URLs sem recarregar a tela
    <BrowserRouter>
      <div className="min-h-screen w-full relative bg-bg-main bg-[url('/img/img8.webp')] bg-cover bg-center bg-no-repeat overflow-x-hidden">
        
        {/* Overlay do Fundo */}
        <div className="absolute inset-0 z-0 backdrop-blur-[4px]" style={{ background: 'linear-gradient(234.23deg, rgba(25, 27, 44, 0.85) 65.77%, rgba(145, 165, 211, 0.35) 140.44%)' }}></div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          
          {/* As rotas dinâmicas entram aqui! */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<Playlist />} />
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  );
}