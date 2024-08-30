import Link from "next/link";
import classes from "./main-header.module.scss";

const MainHeader = () => {
  return (
    <nav className={classes.blue}>
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainHeader;
