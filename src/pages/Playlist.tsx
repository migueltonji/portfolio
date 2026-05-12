import { Link } from 'react-router-dom';

export function Playlist() {
  const PLAYLIST_ID = '70bSPzMqSj4r15JDPnD8QK';

  return (
    <main className="flex-grow flex items-center justify-center pt-[100px] min-h-[calc(100vh-100px)] p-4 md:p-10">
      
      <section className="glass-card w-full max-w-[120vh] min-h-[65vh] md:min-h-[70vh] rounded-[24px] p-6 flex flex-col animate-fade-up">
        
        <div className="mb-8">
          <h1 className="font-fredoka text-3xl md:text-4xl tracking-wide text-white drop-shadow-[2px_2px_0px_rgba(15,163,217,0.4)] mb-2">
            Minha Playlist
          </h1>
          <p className="text-[14px] text-text-soft opacity-80">
            A trilha sonora por trás do código.
          </p>
        </div>

        <div className="flex-grow glass-card rounded-xl overflow-hidden">
          <iframe
            src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            style={{ minHeight: '600px', border: 'none', borderRadius: '12px' }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

      </section>

      <Link 
        to="/"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-2 px-6 py-3 text-[11px] md:text-[13px] tracking-widest font-medium text-text-soft border border-brand-cyan/45 rounded-2xl bg-brand-cyan/10 backdrop-blur-sm transition-all duration-300 animate-fade-up hover:bg-brand-cyan/20 hover:border-brand-gold/80 hover:shadow-[0_0_0_1px_rgba(255,217,102,0.25),0_8px_24px_rgba(15,163,217,0.35)] hover:-translate-y-1 z-50"
      >
        VOLTAR
      </Link>

    </main>
  );
}