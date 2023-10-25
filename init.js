const mongoose = require("mongoose");
const Chat = require("./models/chat");
main().then(() => {
    console.log("connection was sucessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allchats = [{
    from:"neha",
    to:"Priya",
    msg:"send your new sheets",
    created_at:new Date() //utc
},{
    from:"Rahul",
    to:"Sohan",
    msg:"hi buddy how are you ",
    created_at:new Date() //utc
},
{
    from:"govind",
    to:"monu",
    msg:"kaha hai re tu",
    created_at:new Date() //utc
},
{
    from:"abhishek",
    to:"bicky",
    msg:"jayenga ghumna",
    created_at:new Date() //utc
},
{
    from:"Rahul",
    to:"SONAM",
    msg:"Kya hai bro",
    created_at:new Date() //utc
},

];
 
Chat.insertMany(allchats);