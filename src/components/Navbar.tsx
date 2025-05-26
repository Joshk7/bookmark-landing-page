import bookmark from "../assets/logo-bookmark.svg";
import hamburger from "../assets/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <a href="#Home">
        <img src={bookmark} height={25} alt="" />
      </a>
      <button>
        <img src={hamburger} height={15} alt="" />
      </button>
    </nav>
  );
};

export default Navbar;
