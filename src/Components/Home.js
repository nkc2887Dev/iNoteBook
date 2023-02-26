import React from 'react';
function Home({ title, setTitle, note, setNote, saveNotes, setSaveNotes }) {

  const inputHandler = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value)
    }
    else {
      setNote(e.target.value)
    }
  }

  const addNotes = (e) => {
    e.preventDefault();
    if (title !== "" && note !== "") {
      setSaveNotes((nots) => {
        return ([...nots, {
          title: title,
          note: note,
          id: new Date().getTime()
        }])
      })
    }
    setTitle("")
    setNote("")
  }

  return (
    <>
      <div className='container d-flex justify-content-center py-5 mt-5 bg-secondary text-white'>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-12'>
            <form>
              <div className="form-group" style={{ width: "20rem" }}>
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" value={title} onChange={inputHandler} />
              </div>
              <div className="form-group" style={{ width: "20rem" }}>
                <label htmlFor="textarea">Notes</label>
                <textarea className="form-control" id="textarea" rows="3" value={note} onChange={inputHandler}></textarea>
              </div>
              <button style={{ width: "8rem" }} type="submit" className="btn btn-warning" onClick={addNotes}>ADD NOTE</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
