export function Hero() {
  return (
    <header id="top" className="mx-auto max-w-4xl scroll-mt-16 px-6 pb-16 pt-20">
      <p className="text-sm font-medium text-stone-500">Hi, I'm</p>
      <h1 className="mt-2 text-5xl font-semibold tracking-tight">Juan dela Cruz</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
        A third year IT student who builds small web apps for the people around me.
      </p>
      <div className="mt-8 flex gap-3">
        <a href="#projects" className="rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-700">See my projects</a>
        <a href="#contact" className="rounded-lg border border-stone-300 px-5 py-2.5 text-sm font-medium hover:bg-stone-50">Contact me</a>
      </div>
    </header>
  );
}