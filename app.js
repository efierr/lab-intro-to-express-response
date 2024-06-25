const express = require("express");

const app = express();


const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  
  ]

//ROUTES 

app.get("/", (req, res) => {
    res.send("Hello World");
  });

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
});

app.get("/Emeril", (req, res) => {
    res.send("Bam!")
});

app.get("/Bruce-Banner", (req, res)=> {
    res.send("Don't make me angry")
});

app.get("/Homer-Simpson", (req, res) => {
    res.send("D'Oh!")
});

app.get("/Fraiser", (req,res) => {
    res.send("I'm Listening")
});

app.get("/Borg", (req, res) => {
    res.send("Resistance is futile")
});

app.get("/Fox-mulder", (req, res) => {
    res.send("The truth is out there")
});

app.get("/regis", (req, res) => {
    res.send("Is that your final answer?")
});

app.get("/Harry-Callahan", (req,res)  => {
    res.send("Go ahead, make my day")
});

app.get("/Dorothy", (req, res) => {
    res.send("Toto, I've got a feeling we're not in Kansas anymore")
});

app.get("/Magic8", (req, res) => {
    res.send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}</h1>`)
});

  module.exports = app;