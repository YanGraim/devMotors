import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";

export function Services({ object }: HomeProps) {
  return (
    <>
      <section className={styles.containerAbout} id="servicos">
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
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>
      <section className={styles.services}>
        {object.metadata.services.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                src={service.image.url}
                alt="Imagem sobre o serviço"
                quality={100}
                fill={true}
                className={styles.imageService}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
              />
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
