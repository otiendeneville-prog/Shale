import { Link } from "@tanstack/react-router";

function Header() {
  return (
    <header className="justify-between flex  border-newtrol-800  mb-8">
      <Link to="/">
        <h1 className="text-4xl font-bold text-purple-500 hover:text-purple-400">
          Neuville
        </h1>
      </Link>
      <nav className="flex gap-6 mt-4 0 bg-gray-950 border-gray-800">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tapascript"
          className="hover:text-amber-100 cursor-pointer"
        >
          Github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/tapascript"
          className="hover:text-amber-100 cursor-pointer"
        >
          Instagram
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ww.linkedin.com/in/tapasadhikary"
          className="hover:text-amber-100 cursor-pointer"
        >
          Linkedin
        </a>
        <Link to="/about" className="hover:text-amber-100 cursor-pointer">
          About
        </Link>
        <Link
          to="/org/activities/posts"
          className="hover:text-amber-100 cursor-pointer"
        >
          Posts
        </Link>
      </nav>
    </header>
  );
}

export default Header;
