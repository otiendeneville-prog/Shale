import { Link } from "@tanstack/react-router";

function Header() {
  return (
    <header className="justify-between flex  border-newtrol-800 pb-4 mb-8">
      <Link to="/">
        <h1 className="text-4xl">Tanstack Router!</h1>
      </Link>
      <nav className="flex gap-6 mt-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tapascript"
        >
          Github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/tapascript"
        >
          Instagram
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ww.linkedin.com/in/tapasadhikary"
        >
          Linkedin
        </a>
        <Link to="/about">About</Link>
        <Link to="/org/activities/posts">Posts</Link>
      </nav>
    </header>
  );
}

export default Header;
