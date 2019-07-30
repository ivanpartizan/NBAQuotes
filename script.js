const quotes = [
  {
    name: "Michael Jordan",
    quote:
      "I can accept failure, everyone fails at something. But I can't accept not trying."
  },
  {
    name: "Michael Jordan",
    quote:
      "Some people want it to happen, some wish it would happen, others make it happen."
  },
  {
    name: "Larry Bird",
    quote:
      "A winner is someone who recognizes his God-given talents, works his tail off to develop them into skills, and uses these skills to accomplish his goals."
  },
  {
    name: "Dennis Rodman",
    quote: "Don't let what other people think decide who you are."
  },
  {
    name: "Magic Johnson",
    quote:
      "You're the only one who can make the difference. Whatever your dream is, go for it."
  }
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
