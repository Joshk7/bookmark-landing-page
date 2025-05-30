import bookmark from "/src/assets/logo-bookmark.svg";
import hamburger from "/src/assets/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className="w-[75%] mx-auto flex justify-between">
      <a href="#Home">
        <img src={bookmark} height={25} alt="Bookmark" />
      </a>
      <button className="md:hidden">
        <img src={hamburger} height={15} alt="" />
      </button>
      <ul className="hidden md:flex gap-x-12">
        <li>
          <a
            className="text-[0.875rem] text-[var(--blue-950)] hover:text-[var(--red)] leading-loose uppercase"
            href="#features"
          >
            Features
          </a>
        </li>
        <li>
          <a
            className="text-[0.875rem] text-[var(--blue-950)] hover:text-[var(--red)] leading-loose uppercase"
            href="#pricing"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            className="text-[0.875rem] text-[var(--blue-950)] hover:text-[var(--red)] leading-loose uppercase"
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className="px-8 py-2 text-[0.875rem] text-[var(--white)] hover:text-[var(--red)] bg-[var(--red)] hover:bg-[var(--white)] hover:outline-2 leading-loose uppercase rounded-[0.3125rem]"
            href="#login"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
