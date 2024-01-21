import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-1 p-10 items-center">
        <Link href="/" prefetch={false}>
          <br />
          <h1 className="font-sans text-5xl text-center text-gray">
          SNAP 💥 📰 NEWS 💥
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
