const generate = document.querySelector(".quoteGen");
const paraQuotee = document.querySelector(".quotee");
const author = document.querySelector('.author');

const testFunc = () => {

  fetch("https://api.quotable.io/random")
    .then((data) => data.json())
    .then((item) => {
      paraQuotee.innerText = item.content;
      author.innerText = '-' + item.author;
      console.log(item.content);
    });
};

generate.onclick = () => testFunc();


window.addEventListener("load", testFunc);