
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Notes from './Components/Notes';
import Home from './Components/Home';
import Editmodal from './Components/Editmodal';

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [saveNotes, setSaveNotes] = useState(getnotes);
  const [editId, seteditId] = useState("");
  localStorage.setItem("saveNotes", JSON.stringify(saveNotes))
  // console.log(saveNotes)

  return (
    <>
      <Editmodal editId={editId} saveNotes={saveNotes} setSaveNotes={setSaveNotes} />
      <Navbar />
      <Home title={title} note={note} setTitle={setTitle} setNote={setNote} saveNotes={saveNotes} setSaveNotes={setSaveNotes} />
      <div className='container mt-3'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <h1>Your Notes</h1>
            {
              saveNotes.length === 0 ? <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Message</h5>
                  <p className="card-text">No Notes are available for Reading</p>
                </div>
              </div> : saveNotes.map((element) => {
                return (
                  <Notes element={element} key={element.id} saveNotes={saveNotes} setSaveNotes={setSaveNotes} seteditId={seteditId} />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
  function getnotes() {
    const notes = JSON.parse(localStorage.getItem("saveNotes"))
    if (notes) {
      return notes
    }
    else {
      return [];
    }
  }
}

export default App;
