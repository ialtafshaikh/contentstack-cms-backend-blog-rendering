import Link from "next/link";
import Image from "next/image";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation({ navbarContent }) {
  // console.log(navbarContent.nav_links);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="px-5"
      >
        <Navbar.Brand href="/">
          <Image src={navbarContent.company_logo.url} height="50" width="200" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="px-2">
          <Nav className="ml-auto">
            {navbarContent.nav_links.map((link, index) => {
              return (
                <Link href={link.href}>
                  <a className={["nav-link"]} key={index}>
                    {link.title}
                  </a>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
