import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";

export function Services({ object }: HomeProps) {
  return (
    <section className={styles.containerAbout}>
      <article className={styles.innerAbout}>
        <h1 className={styles.title}>Sobre</h1>
        <p>{object.metadata.about.description}</p>
      </article>
      <div className={styles.bannerAbout}>
        <Image
          src={object.metadata.about.banner.url}
          alt="Imagem sobre a empresa"
          quality={100}
          fill={true}
          className={styles.imageAbout}
        />
      </div>
    </section>
  );
}
