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

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
