import {useRef, useState} from 'react';
import insertNote from '../helpers/insertNote';

function CreateNote(){
    // http://localhost:3000/Olstertecn11/ChurchApp#/
    
    const [message, setMessage] = useState('Tarea sin comenzar');
    const name = useRef(null);
    const description = useRef(null);
    const check = useRef(null);


    const handleClick = ()=>{
	const new_description = description.current.value;
	console.log(description.current.value);
	const new_name = name.current.value;
	const new_check = check.current.checked;
	const result = insertNote({
	    name: new_name,
	    description: new_description,
	    status: new_check
	});	
	console.log(result);
    }

    const handleChange = (event)=>{
	if(event.target.checked){
	    setMessage('Tarea finalizada');
	}
	else{
	    setMessage('Tarea sin comenzar')
	}
    }



    return(
	<div className="container">
		<div className="card-body col-md-5 mx-auto mt-4 border">
		    <h1 className="card-title text-center mt-2">Nueva Nota</h1>
		    <input type="text" ref={name} className="form-control mt-2" placeholder="Nombre de la nota"/>
		    <textarea cols="30" ref={description}  rows="10" className="form-control mt-2" 
		    placeholder="Descripcion"></textarea>
		    <div className="row mt-4">

			<div className="col">
			    <div className="form-check form-switch">
			      <input className="form-check-input" ref={check} onChange={handleChange} 
				  type="checkbox" id="flexSwitchCheckDefault"/>
			      <label className="form-check-label" 
				  htmlFor="flexSwitchCheckDefault">{message}</label>
			    </div>
			</div>
			<div className="col">
			    <button onClick={handleClick} className="btn btn-success">Guardar Tarea</button>
			</div>
		    </div>
		</div>
	</div>
    )
}

export default CreateNote;
