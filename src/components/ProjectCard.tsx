// Definimos quais "peças" esse card precisa receber para funcionar
type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
  stacks?: string[]; // 👈 Novo campo para as tecnologias (opcional)
};

export function ProjectCard({ title, description, link, stacks }: ProjectCardProps) {
  return (
    <article className="glass-card h-[85%] pb-[80px] md:pb-[150px] flex flex-col rounded-[18px] transition-all duration-350 hover:-translate-y-2 hover:border-brand-gold/50 hover:shadow-[0_20px_50px_rgba(15,163,217,0.25),inset_0_0_0_1px_rgba(255,255,255,0.03)] group">
      
      <div className="p-[28px_34px_36px] flex flex-col h-full">
        {/* Título com Gradiente */}
        <h3 className="text-[20px] font-bold mb-2 bg-gradient-to-r from-brand-cyan via-brand-gold to-brand-teal bg-clip-text text-transparent">
          {title}
        </h3>
        
        {/* Descrição */}
        <p className="text-[14px] leading-relaxed text-text-soft opacity-85 mb-5 flex-grow">
          {description}
        </p>

        {/* 👇 NOVA SEÇÃO: STACKS NEUTRAS 👇 */}
        {stacks && stacks.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {stacks.map((stackName) => (
              <i 
                key={stackName} 
                className={`devicon-${stackName} text-[20px] text-white/50`} 
                title={stackName.replace('-plain', '').replace('-original', '')}
              ></i>
            ))}
          </div>
        )}

        {/* Link / Em Construção */}
        {link ? (
          <div className="mt-auto">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[13px] tracking-widest text-text-soft no-underline relative underline-gradient py-1 inline-block"
            >
              Ver projeto &rarr;
            </a>
          </div>
        ) : (
          <div className="mt-auto">
            <span className="text-[13px] tracking-widest text-text-soft/40 italic">
              Em breve...
            </span>
          </div>
        )}
      </div>

    </article>
  );
}