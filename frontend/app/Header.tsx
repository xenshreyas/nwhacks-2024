import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-1 p-10 items-center">
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center text-white">
            The News Nugget
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
