import NavBar from "./nav-bar";

export default function Header() {
  return (
    <nav className="flex px-16 mt-2 justify-between items-center">
      <label className="font-bold">Zay Yar Tun</label>
      <NavBar />
    </nav>
  );
}
