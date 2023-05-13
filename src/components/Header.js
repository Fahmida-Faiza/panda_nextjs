import styles from "../app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="">
        <Image src="/logo.jpg" alt="this is logo"  width={100}
        height={60} />
        </Link>



      </div>

      <Nav/>
    </header>
  );
};

export default Header;
