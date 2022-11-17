import Header from "./componentes/Header";
import FeedbackItem from "./componentes/FeedbackItem";

function App(){

        //objeto de estilos:
        const HeaderStyles = {
            backgroundColor: '#ed5bad',
            color: 'white'
        }

    return(
        <div className="container">
            {/* Props: atributos de etiqueta de un componente requerido*/}
            <Header bgColor={HeaderStyles.backgroundColor}
                    color={HeaderStyles.color}/>
            <FeedbackItem/>
            <FeedbackItem/>
            <FeedbackItem/>
        </div>
    )
}

export default App;