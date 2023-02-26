import React, { useState } from 'react'
import Editmodal2 from './Components/Editmodal2'
import Home2 from './Components/Home2'
import Navbar from './Components/Navbar'
import Notes2 from './Components/Notes2'

function App2() {

    const [title, settitle] = useState("");
    const [note, setnote] = useState("");
    const [savenote, setsavenote] = useState(getValue);
    const [editId, seteditId] = useState("");
    localStorage.setItem("savenote",JSON.stringify(savenote));
    console.log(savenote)

    return (
        <>
            <Editmodal2 />
            <Navbar />
            <Home2 title={title} settitle={settitle} note={note} setnote={setnote} savenote={savenote} setsavenote={setsavenote} />
            {
                savenote.length === 0 ? <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Message</h5>
                        <p className="card-text">No Notes are available for Reading</p>
                    </div>
                </div> : savenote.map((element) => {
                    return (
                        <Notes2 element={element} key={element.id} saveNotes={savenote} setSaveNotes={setsavenote} seteditId={seteditId} />
                    )
                })
            }
        </>
    )
}

function getValue(){
   const not = JSON.parse(localStorage.getItem("savenote"));
   if(not){
    return not
   }
   else{
    return([])
   }
}

export default App2
