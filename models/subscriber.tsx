import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    subscribeAt:{
        type:Date,
        default:Date.now
    }
    });
    export default mongoose.models.Subscriber || mongoose.model('Subscriber',subscriberSchema);