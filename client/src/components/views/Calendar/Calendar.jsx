import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import AddEventModal from "./AddEventModal";
import Axios from "axios";
import moment from "moment";
function CalendarSection(){
    const [modalOpen, setModalOpen]=useState(false);
    const [events,setEvents]=useState([]);
    const calendarRef=useRef(null);

    console.log(events)
    //set the title, start amd end time on adding the event
    const onEventAdded=(event)=>{
        let calendarApi=calendarRef.current.getApi()
        calendarApi.addEvent({
            start:moment(event.start).toDate(),
            end:moment(event.end).toDate(),
            title:event.title
        });
    };
    //create the event
    async function handleEventAdd(data){
        console.log(data.event)
        await Axios.post("/api/calendar/create-event",data.event);
    }
    //set the start and end date
    async function handleDateSet(data){
        const response=await Axios.get("/api/calendar/get-events?start="+moment(data.start).toISOString
        +"&end="+moment(data.end.toISOString()))
        setEvents(response.data);
    }

    return(
        <section>
            <button onClick={()=>setModalOpen(true)}>Add Event</button>
            <div style={{position:"relative",zIndex:0}}>
                <FullCalendar
                    ref={calendarRef}
                    events={events}
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    eventAdd={event=>handleEventAdd(event)}
                    dateSet={(date)=>handleDateSet(date)}
                />
            </div>

            <AddEventModal isOpen={modalOpen} 
                onClose={()=>setModalOpen(false)} 
                onEventAdded={event=>onEventAdded(event)}
            />
        </section>
    )
}
export default CalendarSection