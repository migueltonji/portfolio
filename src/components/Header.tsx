import { useState } from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

export function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
   <header className="fixed top-0 left-0 w-full h-[70px] flex items-center justify-between px-4 md:px-10 z-50 bg-bg-main/20 backdrop-blur-md border-b border-[#91a5d3]/10 shadow-sm">
      
      {/* ================= LOGO & ABOUT ================= */}
      <div 
        className="relative group cursor-pointer"
        onClick={() => setIsAboutOpen(!isAboutOpen)}
        onMouseLeave={() => setIsAboutOpen(false)}
      >
        {/* Usando a fonte 'Luckiest Guy' com drop-shadow estilo Cartoon */}
      
        <h2 className="font-fredoka text-[15px] md:text-[36px] tracking-widest drop-shadow-[1px_1px_0px_rgba(15,163,217,0.6)] hover:brightness-125 transition-all">
          MiguelTonji
        </h2>
      
       
        {/* POPOVER ABOUT */}
        <div className={`absolute top-[130%] left-0 w-[260px] p-3.5 bg-bg-main/90 backdrop-blur-md border border-[#91a5d3]/35 rounded-xl text-[15111111111111 px] text-text-popover z-20 transition-all duration-300 ${isAboutOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1.5 pointer-events-none'} group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}>
          <p className="mb-2 text-[15px]">
            Olá, me chamo Miguel. <br></br>
            Sou Formado em Análise e Desenvolvimento de Sistemas (USF), desenvolvo aplicações modernas e responsivas utilizando React, Next.js e TypeScript. 
            Tenho experiência prática por meio de projetos, aplicando boas práticas de desenvolvimento, organização de código e princípios 
            de UX para entregar interfaces eficientes, escaláveis e centradas no usuário.
          </p>
        </div>
      </div>

{/* ================= BADGES (TECNOLOGIAS) ================= */}
      <div className="hidden md:flex justify-center gap-4">
        {[
          { icon: 'html5-plain', title: 'HTML5' },
          { icon: 'javascript-plain', title: 'JavaScript' },
          { icon: 'css3-plain', title: 'CSS3' },
          { icon: 'typescript-plain', title: 'TypeScript' },
          { icon: 'react-original', title: 'React' },
          { icon: 'tailwindcss-original', title: 'Tailwind CSS' }
        
        ].map((tech) => (
          <i 
            key={tech.icon}
            // 👇 CORREÇÃO 1: Aumentamos para text-[36px] para recuperar o tamanho original!
            className={`devicon-${tech.icon} text-[36px] animate-gradient transition-transform hover:scale-125 hover:-translate-y-1`} 
            style={{ 
              background: 'linear-gradient(90deg, var(--color-badge-1), var(--color-badge-2), var(--color-badge-3), var(--color-badge-2), var(--color-badge-4))', 
              WebkitBackgroundClip: 'text', 
              color: 'transparent', 
              backgroundSize: '400% auto' 
            }} 
            title={tech.title}
          ></i>
        ))}
      </div>

      {/* ================= MENUS DIRETOS (PLAYLIST & CONTACT) ================= */}
      {/* 👇 MUDANÇA 3: O gap diminuiu no mobile (gap-3) e aumenta no desktop (md:gap-10) */}
      <div className="flex items-center justify-end gap-3 md:gap-10">
        
        {/* BOTÃO CURRÍCULO */}
        {/* 👇 MUDANÇA 4: Fonte menor no mobile (text-[10px]) para caber direitinho */}
        
        <button className="text-[10px] md:text-[13px] tracking-widest font-medium text-text-soft hover:text-brand-gold transition-colors uppercase">
          <a
            href='/CVfrontEnd.pdf'
            target="_blank"
            rel="noopener noreferrer"
  
          >Currículo</a>
        </button>
       {/* BOTÃO PLAYLIST (Agora funcional!) */}
        <Link 
          to="/playlist" 
          className="text-[10px] md:text-[13px] tracking-widest font-medium text-text-soft hover:text-brand-gold transition-colors uppercase cursor-pointer"
        >
          Playlist
        </Link>

        {/* CONTAINER CONTACT */}
        <div 
          className="relative"
          onMouseEnter={() => setIsContactOpen(true)}
          onMouseLeave={() => setIsContactOpen(false)}
        >
          <span 
            className="flex items-center justify-center px-4 py-2 md:px-[30px] md:py-[12px] text-[10px] md:text-[13px] tracking-widest font-medium text-text-soft border border-brand-cyan/45 rounded-2xl bg-brand-cyan/10 backdrop-blur-sm cursor-default transition-all duration-300 opacity-0 animate-fade-up hover:bg-brand-cyan/20 hover:border-brand-gold/80 hover:shadow-[0_0_0_1px_rgba(255,217,102,0.25),0_8px_24px_rgba(15,163,217,0.35)] hover:-translate-y-[1px]"
            style={{ animationDelay: '0.5s' }}
          >
            CONTACT
          </span>

          {/* POPOVER CONTACT (Com a Ponte Invisível) */}
          {/* top-full faz colar no botão. pt-3 cria a ponte invisível para o mouse não cair no buraco */}
          <div className={`absolute top-full right-0 pt-[12px] z-20 transition-all duration-300 ${isContactOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1.5 pointer-events-none'}`}>
            
            {/* A caixa visual real com o fundo e a borda */}
            <div className="flex gap-5 p-4 bg-bg-main/80 backdrop-blur-md border border-[#91a5d3]/35 rounded-xl">
              
              {/* WhatsApp */}
              <a href="https://wa.me/5519987807748" target="_blank" rel="noreferrer" className="hover:-translate-y-1 hover:scale-110 transition-transform">
                <FaWhatsapp className="text-[22px] text-white opacity-75 hover:opacity-100 hover:brightness-200 transition-all drop-shadow-[0_0_4px_rgba(15,163,217,0.35)]" />
              </a>
              
              {/* Gmail */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=guilherme7carmo@gmail.com" target="_blank" rel="noreferrer" className="hover:-translate-y-1 hover:scale-110 transition-transform">
                <SiGmail className="text-[22px] text-white opacity-75 hover:opacity-100 hover:brightness-200 transition-all drop-shadow-[0_0_4px_rgba(15,163,217,0.35)]" />
              </a>
              
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/migueltonji" target="_blank" rel="noreferrer" className="hover:-translate-y-1 hover:scale-110 transition-transform">
                <FaLinkedin className="text-[22px] text-white opacity-75 hover:opacity-100 hover:brightness-200 transition-all drop-shadow-[0_0_4px_rgba(15,163,217,0.35)]" />
              </a>

              {/* GitHub */}
              <a href="https://github.com/migueltonji" target="_blank" rel="noreferrer" className="hover:-translate-y-1 hover:scale-110 transition-transform">
                <FaGithub className="text-[22px] text-white opacity-75 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(15,163,217,0.8)] transition-all" />
              </a>
              
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}