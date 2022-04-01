import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import './style/Note.css';



function Note({note, handleClick}){

    const {_id, name, description, status} = note;

    return(
	<Fade left>
	    <div className="card">
	    	<div className="card-body">
		    <h5 className="card-title">{name}</h5>
		    <p className="card-text">{description}</p>
		    <Link to={`/actualizar/${_id}`} className="btn btn-primary">Actualizar</Link>
		    <button className="btn btn-danger" onClick={()=>handleClick(_id)}>Eliminar</button>
		    <input className="check" readOnly  type="checkbox" checked={status} />
		</div>
	    </div>
	</Fade>
    );
}


export default Note;
