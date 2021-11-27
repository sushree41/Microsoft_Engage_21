mongoose = require('mongoose');
const Schema = mongoose.Schema;
//schema of event
const EventSchema=mongoose.Schema({
    title:{
        type:String,
        required:false
    },
    start:{
        type:Date,
        required:false
    },
    end:{
        type:Date,
        required:false
    }
})

const Event=mongoose.model('Event',EventSchema);
module.exports=Event;