/*
  Punctuation to remove
  [!@#$%^&*()_+={}.,:'"/~`;[\[\]]
*/
const baseUrl = "https://www.myblog.com/x";
const regex = /[!@#$%^&*()_+={}.,:'"/~`;[\[\]]/g;

function blogify(title) {
  const noPunc = title.toLowerCase().replace(regex, "");
  const noSpaces = noPunc.split(" ").filter((word) => {
    return word !== "" && word !== "-";
  });
  const hyphens = noSpaces.join("-");
  const finalUrl = baseUrl.replace("x", hyphens);
  return finalUrl;
}

const blogs = [
  "My Summer Studying Abroad!!!",
  "Emma's Favorite Books :)",
  "Best Stockholm restaurants in 2021",
  "There  are a     ton of   spaces",
  'This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"',
];

//blogs.forEach((blog) => console.log(blogify(blog)));

const results = blogs.map((blog) => blogify(blog));
console.log(results);

// Select the html element
const urlContainer = document.querySelector("#url-container");

// Create the Article element that will contain the text:
const article = document.createElement("article");

//  Loop through the result array and create a h2 element for each blog:
results.forEach((blog) => {
  // Create a h2 element containing the blog url:
  const urlHeader = document.createElement("h2");
  urlHeader.innerHTML = blog;
  article.appendChild(urlHeader);
});

// Add the article element to the url-container element
urlContainer.appendChild(article);
