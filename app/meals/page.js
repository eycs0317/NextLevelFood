import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals. created{""}
          <span className={styles.highlight}>by you</span>
        </h1>
      </header>
      <p>
        Choose your favorite recipe and cook it yourself. It is easy and fun!
      </p>
      <p className={styles.cta}>
        <Link href='/meals/share'>Share your favorite Recipe</Link>
      </p>
      <main>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
