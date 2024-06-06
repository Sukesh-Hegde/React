import express from 'express';

const server = express();

server.get("/",(req,res)=>{
    res.send("Welcome to NodeJs")
})

let notes = [];

server.post("/notes", (req,res) => {
    const{title,content} = req.body;
    const id = notes.length?notes[notes.length].id+1:1
    const newNote = {id, title,content};
    notes.push(newNote)
    res.status(201).json(newNote)
})

server.put("/notes/:id", (req,res) =>{
    const { title, content } = req.body;
    const note = notes.find((n) => n.id === parseInt(req.params.id))
    if(note){
        note
    }
})


const port = process.env.PORT || 3000;
server.listen(port, () =>{
    console.log(`Server is runnig on port ${port}`);
})