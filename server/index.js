var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require('cors')
var http = require('http').Server(app);
var io = require('socket.io')(http);

var MessageSchema = new mongoose.Schema ({
    time: Number, sender : String, message : String, receiver: String
})
var Message = mongoose.model("Message", MessageSchema)
var Conversion = mongoose.model("Conversation", { participants: [String], messages: [MessageSchema]})
var dbUrl = "mongodb+srv://admin:MmdddcXdqGxpxBCs@cluster0.plqho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

var app = express();


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

var server = app.listen(4000, () => {
    console.log("server is running on port", server.address().port);
    mongoose.connect(dbUrl , (err) => {
        console.log("mongodb connected",err);
    })
});

app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
        res.send(messages);
    })
});

app.get('/conversations/:id', (req, res) => {
    console.log(req.params.id)
    Conversion.find({participants: { $in: [req.params.id]}}, (err, messages)=> {
        res.send(messages);
    })
});

app.post('/message', (req, res) => {
    var message = new Message(req.body);
    message.time = Math.round(Date.now() / 1000);

    const arr = [message.sender, message.receiver]

    Conversion.find({participants: { $all : arr}},(err, out)=> {
        console.log(out)
        if (out.length == 0) {
            var conv = Conversion({
                participants: arr
            })
            conv.messages.push(message)
            conv.save()
        } else {
            out[0].messages.push(message)
            out[0].save()
        }
        io.emit("newMessage", message)
        res.sendStatus(200)
    })

    // message.save((err) =>{
    //     if(err)
    //         sendStatus(500);
    //     res.sendStatus(200);
    // })
});