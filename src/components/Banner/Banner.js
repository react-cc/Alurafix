import styles from "./Banner.module.css";

function Banner({ img, color, title, subtitle, description, overlayImage }) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url("/img/banner-${img}.png")` }}
    >
      <div className={styles.gradient} style={{ background: `${color}` }}></div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={overlayImage} alt={title} className={styles.overlayImage} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
