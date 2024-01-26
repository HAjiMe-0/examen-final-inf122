import Image from "next/image";
import styles from "./page.module.css";
import Mypokemon from "./components/mypokemon";

export default function Home() {
  return (
    <main className={styles.main}>
     <Mypokemon/>
     
    </main>
  );
}
