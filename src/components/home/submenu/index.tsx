"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";

export function Submenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={24} color="#121212" />
        Serviços
      </div>
      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={34} color="#121212" />
          </button>
        )}

        <li>
          <Link href={"#"}>Teste 1</Link>
        </li>
        <li>
          <Link href={"#"}>Teste 2</Link>
        </li>
        <li>
          <Link href={"#"}>Teste 3</Link>
        </li>
      </ul>
    </section>
  );
}
