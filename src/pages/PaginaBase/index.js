import { Outlet } from "react-router-dom"
import Cabecera from "../../components/Cabecera/Cabecera"
import Pie from "../../components/Pie"
import Container from "../../components/Container"

function PaginaBase(){
    return(
        <main>
            <Cabecera/>
            <Container>
                <Outlet/>
            </Container>
            <Pie/>
        </main>
    )
}

export default PaginaBase