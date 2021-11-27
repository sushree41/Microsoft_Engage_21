import Modal from "react-modal";
import React, { useState } from "react";
import Datetime from "react-datetime"
function AddEventModal({isOpen,onClose,onEventAdded}){
    //set the title, start and end time of event
    const[title,setTitle]=useState("");
    const[start,setStart]=useState(new Date());
    const[end,setEnd]=useState(new Date());

    const onSubmit=(e)=>{
        e.preventDefault();
        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }

    return(
        //set the on change handle on adding the event
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/>
                <div>
                    <label>Start Date</label>
                    <Datetime value={start} onChange={date=>setStart(date)} />
                </div>
                <div>
                    <label>End Date</label>
                    <Datetime value={end} onChange={date=>setEnd(date)} />
                </div>
                <button>Add Event</button>
            </form>

        </Modal>
    )
}
export default AddEventModal