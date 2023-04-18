const swatchData = [
  {
    hex: "#fde2e4",
    rgb: "rgb(253, 226, 228)",
  },
  {
    hex: "#e2ece9",
    rgb: "rgb(226, 236, 233)",
  },
  {
    hex: "#bee1e6",
    rgb: "rgb(190, 225, 230)",
  },
  {
    hex: "#cddafd",
    rgb: "rgb(205, 218, 253)",
  },
];

// Select the html element
const swatchContainer = document.querySelector("#swatch-container");

//  Loop through the swatchData array and create a swatch-card element for each color:
swatchData.forEach((color) => {
  // Create a swatch-card element
  const swatchCard = document.createElement("div");
  swatchCard.className = "swatch-card";

  // Create a swatch-color element and set the color to the one provided by swatchData
  const swatchColor = document.createElement("div");
  swatchColor.className = "swatch-color";
  swatchColor.style.backgroundColor = color.hex;

  // Create the Article element that will contain the text:
  const article = document.createElement("article");

  // Create the two paragraphs containing the color codes
  const hexParagraph = document.createElement("p");
  hexParagraph.innerHTML = color.hex;
  article.appendChild(hexParagraph);

  const rgbParagraph = document.createElement("p");
  rgbParagraph.innerHTML = color.rgb;
  article.appendChild(rgbParagraph);

  // Add the swatch-color and article elements to the swatch-card element
  swatchCard.appendChild(swatchColor);
  swatchCard.appendChild(article);

  // Add the swatch-card element to the swatch-container element
  swatchContainer.appendChild(swatchCard);
});
