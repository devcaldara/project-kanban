import Column from '../Column/Column';
import './Board.css'

const Board = () => {

    return(

        <div className="board">
            <Column title="To Do"/>
            <Column title="Doing"/>
            <Column title="Done"/>
        </div>

    );

}

export default Board;