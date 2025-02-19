// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(response => {
    console.log("response:", response.data);
    const articles = response.data.articles;
    console.log(articles);
    for (topic in articles) {
      console.log(topic);
      articles[topic].forEach(article => {
        cardsContainer.appendChild(createCard(article));
      });
    }
  })
  .catch(error => {
    console.log(
      "The Lambda Times api is currently down, please come back later.",
      error
    );
  });

const cardsContainer = document.querySelector(".cards-container");

function createCard(content) {
  console.log(content);
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const img = document.createElement("div");
  const imgLink = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  img.classList.add("img-container");
  card.classList.add("card");

  headline.textContent = content.headline;
  img.src = content.authorPhoto;
  authorName.textContent = `By + ${content.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(img);
  author.appendChild(imgLink);
  author.appendChild(authorName);

  return card;
}
