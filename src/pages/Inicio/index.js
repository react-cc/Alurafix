import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card"
import categorias from "../../data/db.json"
import Categoria from "../../components/Categoria"

const categoryColors = {
    "Front End": "#6BD1FF",
    "Back End": "#00C86F",
    "UX e Design": "#DC6EBE",
    "Data Science": "#9CD33B",
    "Innovación y Gestión": "#FF8C2A",
  }
  

function Inicio() {
    return (
        <>
        <Banner img="web" 
            color="#000"  
            title="Front End"
            subtitle="Challenge React"
            description="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
            overlayImage="http://localhost:3000/img/category/imagen2.webp" 
        />
        
        {categorias.map((categoria) => (
          <Categoria 
            key={categoria.title} 
            title={categoria.title} 
            cards={categoria.cards} 
            color={categoryColors[categoria.title]}
          />
        ))}
        </>
    )
}   

export default Inicio   