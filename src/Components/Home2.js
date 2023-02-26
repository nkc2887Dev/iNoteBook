import React from 'react'

function Home2({ title, settitle, note, setnote, savenote, setsavenote }) {

    const inputHandler = (e) => {
        if (e.target.id === "title") {
            settitle(e.target.value);
        }
        else {
            setnote(e.target.value);
        }
    }

    const handleNote = (e) => {
        e.preventDefault();
        if (title !== "" && note !== "") {
            setsavenote((not) => {
                return ([...not, {
                    title: title,
                    note: note,
                    id: new Date().getTime()
                }])
            })
        }
       
        settitle("");
        setnote("");
    }

    return (
        <>
            <div className='container d-flex justify-content-center py-5 mt-5 bg-secondary text-white'>
                <div className="row">
                    <div className='col-lg-4'>
                        <form>
                            <div className="form-group" style={{ width: "20rem" }}>
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" value={title} onChange={inputHandler} />
                            </div>
                            <div className="form-group" style={{ width: "20rem" }}>
                                <label htmlFor="textarea">Your Note</label>
                                <textarea className="form-control" id="textarea" rows="3" value={note} onChange={inputHandler}></textarea>
                            </div>
                            <button style={{ width: "8rem" }} type="button" className="btn btn-warning" onClick={handleNote}>ADD NOTE</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home2
