import React from "react";
import styles from "./Categoria.module.css";
import Card from "../Card";

function Category({ title, cards, color }) {
  return (
    <div className={styles.category}>
      <h2 className={styles.title} style={{ backgroundColor: color }}>
        {title}
      </h2>
      <div className={styles.grid}>
            {cards.map((card, index) => (
                <Card 
                    key={index} 
                    title={card.title} 
                    image={card.image} 
                    category={title} 
                    color={color}
                />
            ))}
        </div>
    </div>
    
  );
}

export default Category;
