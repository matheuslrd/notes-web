export default function NoteCard() {
  return (
    <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
      <span className="text-sm font-medium text-slate-300">Há 4 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum animi molestias
        labore perspiciatis. Veritatis culpa maxime reprehenderit consequuntur eaque,
        dignissimos voluptatibus enim eligendi est ratione optio tenetur magnam veniam!
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
    </div>
  );
}
