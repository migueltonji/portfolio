import { ProjectCard } from '../components/ProjectCard';

// O seu banco de dados de projetos veio para cá
const MEUS_PROJETOS = [
  {
    id: 1,
    title: 'Barbearia da Casa',
    description: 'Criei um sistema completo de agendamento. Pensando em resolver um problema real, desenvolvi um modelo completo de CRUD. Onde cada agendamento realizado, é inserido no painel de Administrador e também vinculado a uma tabela do google Sheets. Sendo uma das minhas prioridades a UX. ',
    link: 'https://agendamento-barbearia-mt.vercel.app/',
    stacks:['react-original', 'tailwindcss-original', 'typescript-plain', 'vitejs-plain', 'google-plain']
    // Se não passarmos a propriedade "stacks", ele simplesmente não renderiza o bloco, sem causar erros!
  },
  {
    id: 2,
    title: 'Card Profile Dinâmico',
    description: 'Automação e personalização de perfis profissionais, com identificação de competências e sistema de cores customizáveis para reforço da identidade visual.',
    link: 'https://card-migueltonji.vercel.app/',
    stacks: ['html5-plain', 'css3-plain', 'javascript-plain'] // 👈 Adicionado aqui
  },
 {
    id: 3,
    title: 'Landing Page CraftSix',
    description: 'Realizei um MVP com o intuito de apresentar uma solução digital moderna. Enfatizando UX/UI, com performance e identidade visual forte. Tendo como objetivo apresentar ao cliente, um design tecnológico e responsivo.',
    link: 'https://craftsix-landing.vercel.app/',
    stacks: ['html5-plain', 'css3-plain', 'javascript-plain'] // 👈 Adicionado aqui
  },
];

export function Home() {
  return (
    <main className="flex-grow flex items-center justify-center pt-[100px] min-h-[calc(100vh-100px)]">
      <section className="w-full h-full flex items-center justify-center px-5 md:px-[40px] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-[45px] w-full max-w-[1100px]">
          {MEUS_PROJETOS.map((projeto) => (
            <ProjectCard key={projeto.id} {...projeto} />
          ))}
        </div>
      </section>
    </main>
  );
}