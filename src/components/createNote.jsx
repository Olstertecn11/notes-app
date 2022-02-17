import {useState} from 'react';

function CreateNote(){
    // http://localhost:3000/Olstertecn11/ChurchApp#/
    
    const [message, setMessage] = useState('Tarea sin comenzar');

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
		    <input type="text" className="form-control mt-2" placeholder="Nombre de la nota"/>
		    <textarea cols="30" rows="10" className="form-control mt-2" 
		    placeholder="Descripcion"></textarea>
		    <div className="row mt-4">

			<div className="col">
			    <div class="form-check form-switch">
			      <input class="form-check-input" onChange={handleChange} type="checkbox" 
				id="flexSwitchCheckDefault"/>
			      <label class="form-check-label" 
				  for="flexSwitchCheckDefault">{message}</label>
			    </div>
			</div>
			<div className="col">
			    <button className="btn btn-success">Guardar Tarea</button>
			</div>
		    </div>
		    
		</div>
	</div>
    )
}

export default CreateNote;
