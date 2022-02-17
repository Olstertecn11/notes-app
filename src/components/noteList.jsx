import {useFetchNote} from './../hooks/useFetchNote';

function NoteList(){

    const {notes: notes, loading} = useFetchNote();  
    console.log(notes);

    return(
	<>
	    <div className="container">
		{loading && <p>Loading...</p>}
		{
		    notes.map(item => {
			return(
			    <div className="card" key={item.id+"2"}>
				<h1>{item.name}</h1>
			    </div>
			)	
		    
		    }) 
		}

	    </div>
	</>
    );
}

export default NoteList;
