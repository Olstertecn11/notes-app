import {Link} from 'react-router-dom';
import './style/Note.css';
import deleteNote from './../helpers/deleteNote';



function Note({id, name, description, status}){

    const handleSubmit = ()=>{
	const result = deleteNote(id);
	console.log(result);
    }

    return(
	<>
	    <div className="card">
	    	<div className="card-body">
		    <h5 className="card-title">{name}</h5>
		    <p className="card-text">{description}</p>

		    <Link to="/actualizar" className="btn btn-primary">Actualizar</Link>
		    <button className="btn btn-danger" onClick={handleSubmit}>Eliminar</button>
		    <input className="check" readOnly  type="checkbox" checked={status} />
		</div>
	    </div>
	</>
    );
}


export default Note;
