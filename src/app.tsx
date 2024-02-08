import logo from '@assets/logo-nlw-expert.svg';

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 p-3">
      <img src={logo} alt="NLW Expert logo" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas"
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />
      {/* Colchete aqui no Tailwind serve para colocarmos valores arbitrarios,
      não valores pre determinado pelo tailwind */}
      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-200">Adicionar uma nota</span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em audio que será convertida para texto automaticamente.
          </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">Há 2 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem
            quo recusandae et nostrum, eveniet enim corporis provident tempora totam culpa
            molestias! Vitae officia ducimus doloribus sit similique voluptatum soluta?
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">Há 4 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum animi
            molestias labore perspiciatis. Veritatis culpa maxime reprehenderit
            consequuntur eaque, dignissimos voluptatibus enim eligendi est ratione optio
            tenetur magnam veniam!
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">há 7 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis commodi
            doloribus illo ipsam voluptatum velit at quas praesentium id, incidunt aut
            vitae eveniet mollitia, ipsa eum ea nihil, cupiditate cumque?
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
