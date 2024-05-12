 import './Card.css'

const Card = (props) => {
    let status = ""

    const nomeStatus = () => {
        if(props.type == 1){
            status = " to do";
        }
        if(props.type == 2){
            status = " doing";
        }
        if(props.type == 3){
            status = " done";
        }
    }

    nomeStatus();

    return (
        <div className="card-container">
          <p>status:{status}</p>
          <div className="card-content">
                <input 
                    type="text" 
                    id={`text-${props.id}`} 
                    name="text" 
                    value={`Card ${props.id}`} /* Adiciona o ID ao valor do input */
                    style={{ height: "20px", marginLeft: "5px", borderRadius: "4px", border: "none", color:"gray" }} 
                />
            <button className="card-button">=</button>
          </div>
        </div>
      );

}

export default Card;

/*<label for="text">TEXT</label>

          <p>{props.texto}</p>

<h3 style={{justifyContent: "center"}}>{props.title}</h3>


            <input type="text" id="text" name="text" style={{height:"20px", marginLeft:"5px",borderRadius:"4px", border:"none"}}/>*/