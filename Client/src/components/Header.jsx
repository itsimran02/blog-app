import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 text-lg sm:text-xl font-semibold dark:text-white">
      <Link to="/">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white px-2 py-1">
          Daily
        </span>{" "}
        Blog
      </Link>
      <form>
        <TextInput
          className="hidden lg:inline"
          type="text"
          placeholder="Search..."
        />
      </form>
      <Button
        className="w-12 h-10 lg:hidden items-center"
        color="gray"
      >
        <AiOutlineSearch size={16} />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 items-center hidden sm:flex"
          color="gray"
        >
          <FaMoon size={16} />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse active={path == "/"} as={"div"}>
        <Navbar.Link>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path == "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>{" "}
        <Navbar.Link
          active={path == "/projects"}
          as={"div"}
        >
          <Link to="/projects">Projects</Link>
        </Navbar.Link>{" "}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
