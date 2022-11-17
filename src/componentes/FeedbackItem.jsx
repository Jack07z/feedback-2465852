import { useState } from "react"

const FeedbackItem = () =>{

    //Estados: presisten informacion a traves del ciclo de vida
    //de un unico componente

    //estados iniciales
    const[rating, setRating] = useState(2)
    const[text, setText] = useState("Mejorar Curso,mejores recursos")

    const addNota=()=>{
        //Cambiar estado a setRating
        setRating((prev)=>{
            return prev +1
        })
    }
    const restNota=()=>{
        //Cambiar estado a setRating
        setRating((prev)=>{
            return prev -1
        })
    }

    return (
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                {text}
            </div>
            <button onClick={ addNota } className="btn">
                Cambiar nota
            </button>
            <button onClick={ restNota } className="btn">
                Bajar nota
            </button>
        </div>
    )
}

export default FeedbackItem