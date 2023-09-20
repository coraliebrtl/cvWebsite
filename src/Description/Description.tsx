import styles from "./Description.module.scss";

const Description = () => (
  <>
    <h1 className={styles.title}>Coralie BROTEILLE</h1>
    <h2 className={styles.subtitle}>Développeuse web</h2>
    <h2 className={styles.subtitle}>Freelance</h2>

    <div className={styles.descriptionContainer}>
      <p className={styles.description}>
        Je suis une personne passionnée qui aime découvrir et apprendre, ce qui
        m'a mené vers le développement web. Aujourd'hui, bien que je sois
        spécialisée sur du <span className={styles.importantText}>React</span>,
        je monte en compétence en autonomie sur du back et du React Native. A
        côté de mon travail je suis aussi
        <span className={styles.importantText}>conférencière</span> et
        <span className={styles.importantText}>présidente</span> de
        l'association
        <a
          href="https://bdxio.fr/"
          target="_blank"
          className={styles.linkBdxio}
        >
          BDX I/O
        </a>
        .
      </p>
      <div className={styles.contact}>
        <p className={styles.importantText}>📧 Contact :</p>
        <p className={styles.contactInformation}>pro@coralie-brt.fr</p>
        <p className={styles.importantText}>📍 Localisation : </p>
        <p className={styles.contactInformation}>
          Localisation Bordeaux ou remote
        </p>
      </div>
    </div>
  </>
);

export default Description;
