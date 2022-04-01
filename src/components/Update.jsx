import {useState} from 'react';
import { useParams } from 'react-router-dom';
import { updateNote } from './../helpers/updateNote';

function Update(){

    const { id } = useParams();
    const [form, setForm] = useState({
	name: '',
	description: '',
	status: false
    });


    const handleChange = (event)=>{
	setForm({
	    ...form,
	    [event.target.name] : event.target.value 
	});
    }

    const handleClick = ()=>{
	//send new changes xd
	const result = updateNote(id, form);
	console.log(result);
    }

    return (
	<>
	    <div className="container mx-auto mt-4">
		<h2 className="title-card text-center">Nuevos Datos</h2>
		<div className="card mx-auto">
		    <div className="card-body col-md-15">
			<input type="text" onChange={handleChange} name="name" 
			className="form-control" placeholder="Nombre de la tarea"/>
			<textarea className="form-control mt-2" placeholder="Descripcion" 
			cols="30" rows="10" onChange={handleChange} name="description"></textarea>
			<div className="row mt-4">
			    <div className="col">
				    <div className="form-check form-switch">
				      <input className="form-check-input" onChange={handleChange} 
					  type="checkbox" name="status" id="flexSwitchCheckDefault"/>
				      <label className="form-check-label" 
					  htmlFor="flexSwitchCheckDefault">Estado</label>
				    </div>
			    </div>
			    <div className="col">
				<button className="btn btn-success mt-2" onClick={handleClick} >Guardar</button>
			    </div>
			</div>
		    </div>
		</div>
	    </div>
	</>
    )
}

export default Update;
