 import './Card.css'

const Card = (props) => {

    return (
        <div className="card-container">
          
          <div className="card-content">
            <input type="text" id="text" name="text" style={{height:"20px", marginLeft:"5px",borderRadius:"4px", border:"none"}}/>
            <button className="card-button">=</button>
          </div>
        </div>
      );

}

export default Card;

/*<label for="text">TEXT</label>

          <p>{props.texto}</p>

<h3 style={{justifyContent: "center"}}>{props.title}</h3>*/