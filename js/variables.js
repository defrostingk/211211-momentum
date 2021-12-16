// background.js
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

// clock.js
const clock = document.querySelector("h2#clock");

// greeting.js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// quotes.js
const quotes = [
  {
    quote: "Where there is no desire, there will be no industry.",
    author: "none",
  },
  {
    quote: "Waste not fresh tears over old griefs.",
    author: "none",
  },
  {
    quote: "Let thy speech be short, comprehending much in few words.",
    author: "none",
  },
  {
    quote: "We never know the worth of water till the well is dry.",
    author: "none",
  },
  {
    quote: "Weakness of attitude becomes weakness of character.",
    author: "none",
  },
  {
    quote: "Never leave that 'till tomorrow which you can do today.",
    author: "none",
  },
  {
    quote: "An optimist is the human personification of spring.",
    author: "none",
  },
  {
    quote: "While there's life, there's hope.",
    author: "none",
  },
  {
    quote: "It is a bad plan that admits of no modification.",
    author: "none",
  },
  {
    quote: "Well done is better than well said.",
    author: "none",
  },
];

const quote = document.querySelector(".quote__quote");
const author = document.querySelector(".quote__author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// todo.js
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// weather.js
const API_KEY = "156f2afe71534d2733a43a1a552a59b5";
