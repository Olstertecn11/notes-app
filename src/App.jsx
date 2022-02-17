import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import CreateNote from './components/createNote';
import NoteList from './components/noteList';


function App() {
  return (
      <>
	  <Navigation />	
	  <Routes>
	      <Route path="/" exact element={<NoteList />} />
	      <Route path="/create"  element={<CreateNote />} />
	  </Routes>
      </>
  );
}

export default App;
