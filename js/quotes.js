const quotes = [
  {
    quote: "You have to believe in yourself when no one else does",
    author: "Serena Williams",
  },
  {
    quote: "When you have a dream, you’ve got to grab it and never let go",
    author: "Carol Burnett",
  },
  {
    quote:
      "The most important thing is to enjoy your life—to be happy—it’s all that matters",
    author: "Steve Jobs",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come without leaving happier",
    author: "Mother Teresa",
  },
  {
    quote: "Be yourself; everyone else is already taken",
    author: "Oscar Wilde",
  },
  {
    quote:
      "The biggest adventure you can take is to live the life of your dreams",
    author: "Oprah Winfrey",
  },
  {
    quote: "The only thing we have to fear is fear itself",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "I can accept failure, everyone fails at something. But I can’t accept not trying",
    author: "Michael Jordan",
  },
  {
    quote: "You’ve got to be in it to win it",
    author: "Tony Robbins",
  },
  {
    quote: "It does not matter how slowly you go, as long as you do not stop",
    author: "Confucius",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
