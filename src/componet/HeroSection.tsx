import wallpaper from "./assets/wallpaper.png";

export default function HeroSection() {
  return (
    <div className="mb-100 p-0 mt-12">
      <h1 className="text-3xl font-bold text-purple-300 animate-pulse">
        About Neuville
      </h1>
      <p>
        Hi, I'm Neuville, a full-stack developer specializing in building
        modern, scalable web applications. My core expertise lies in JavaScript
        and TypeScript, where I leverage React and the TanStack ecosystem to
        create fast, type-safe user interfaces. On the backend, I build robust
        APIs and server-side architectures using PHP, Laravel, and Python. Hi,
        I'm Neuville, a full-stack developer specializing in building modern,
        scalable web applications. My core expertise lies in JavaScript and
        TypeScript, where I leverage React and the TanStack ecosystem to create
        fast, type-safe user interfaces. On the backend, I build robust APIs and
        server-side architectures using PHP, Laravel, and Python. Hi, I'm
        Neuville, a full-stack developer specializing in building modern,
        scalable web applications. My core expertise lies in JavaScript and
        TypeScript, where I leverage React and the TanStack ecosystem to create
        fast, type-safe user interfaces. On the backend, I build robust APIs and
        server-side architectures using PHP, Laravel, and Python. Hi, I'm
        Neuville, a full-stack developer specializing in building modern,
        scalable web applications. My core expertise lies in JavaScript and
        TypeScript, where I leverage React and the TanStack ecosystem to create
        fast, type-safe user interfaces. On the backend, I build robust APIs and
        server-side architectures using PHP, Laravel, and Python.Hi, I'm
        Neuville, a full-stack developer specializing in building modern,
        scalable web appliy.
      </p>
      <img
        src={wallpaper}
        alt="Neshville's wallpaper"
        className="w-full h-80 mt-14"
      />
      <div className="flex items-center gap-6 pt-4 text-sm text-slate-400">
        <a
          href="https://github.com"
          target="_blank"
          className="hover:text-white transition"
        >
          GitHub ↗
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="hover:text-white transition"
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:hello@example.com"
          className="hover:text-white transition"
        >
          Email Me ↗
        </a>
      </div>
    </div>
  );
}
