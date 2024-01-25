import Image from "next/image";
import styles from "./page.module.css";
import Foto from "./components/Foto";

export default function Home() {
  return (
    <main className={styles.main}>
      <Foto/>
      <Foto/>
      <Foto/>
      <Foto/>

    </main>
  );
}
