import Link from "next/link";
import classes from "./main-header.module.scss";
import LogoIcon from "../../icons/logo";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <div className={classes.logo}>
        <Link href="/">
          <LogoIcon />
          <span>ilberto</span>
        </Link>
      </div>
      <nav className={classes["main-navigation"]}>
        <ul>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
