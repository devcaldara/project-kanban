import Column from '../Column/Column';
import './Board.css'

const Board = () => {

    return(

        <div className="board">
            <Column key= "1" title="To Do" type= "1"/>
            <Column key= "2" title="Doing" type= "2"/>
            <Column key= "3" title="Done"  type= "3"/>
        </div>

    );

}

export default Board;