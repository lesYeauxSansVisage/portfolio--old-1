"use client";

import Link from "next/link";
import classes from "./main-header.module.scss";
import LogoIcon from "../../icons/logo";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <header className={classes["main-header"]}>
      <div className={classes.logo}>
        <Link href="/" className={pathname == "/" ? classes.active : undefined}>
          <LogoIcon />
          <span>ilberto</span>
        </Link>
      </div>
      <nav className={classes["main-navigation"]}>
        <ul>
          <li>
            <Link
              href="/projects"
              className={pathname == "/projects" ? classes.active : undefined}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname == "/about" ? classes.active : undefined}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
