const mongo = require("mongoose");
const schema= mongo.Schema;

const interns = new schema({
    name:{ type:String, required:true},
    email:{ type:String, required:true},
    clss:{ type:String, required:true},
    section:{ type:String, required:true},
    DOB:{ type:String, required:true},
    contact_no:{ type:Number, required:true},
    scholarship:{ type:Boolean, required:true}
})
module.exports= mongo.model("notes",interns)