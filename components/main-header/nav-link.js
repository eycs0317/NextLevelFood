"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./nav-link.module.css";
export default function NavLink({ children, href }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active} ` : styles.link
      }
    >
      {children}
    </Link>
  );
}
