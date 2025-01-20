import styles from "./Card.module.css";
import editarIcon from "./editar.png";
import eliminarIcon from "./eliminar.png";

function Card({ title, image, category, color }) {
  return (
    <div className={styles.card} style={{ borderColor: color }}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.buttons}>
        <button className={styles.editar }>
          <img src={editarIcon} alt="Editar" className={styles.icon} /> Editar
        </button>
        <button className={styles.delete}>
          <img src={eliminarIcon} alt="Eliminar" className={styles.icon} /> Eliminar
        </button>
      </div>
    </div>
  );
}

export default Card;
