import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |
        <Link href="/">
          <a>Blogs</a>
        </Link>{" "}
      </nav>
    </>
  );
}
