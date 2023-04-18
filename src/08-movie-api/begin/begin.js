// Define an async function named fetchData that fetches data from the IMDB API and displays it on the page
const fetchData = async () => {
  try {
    // Send a GET request to the IMDB API endpoint
    const response = await axios.get(
      "https://imdb8.p.rapidapi.com/title/find?q=Star%20Wars",
      {
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "7dc4683476msh81675cd0e90bd2bp17842ejsn3357aee41f0a",
        },
      }
    );
    // Get the first 5 movie results from the API response
    const movies = response.data.results.slice(0, 10);
    console.log(movies);

    // Get the DOM element where we will append the movie posters
    const posterContainer = document.querySelector("#poster-container");

    // Loop through each movie in the results and create a new DOM element for it
    movies.forEach(({ title, year, image }) => {
      const movieContainer = document.createElement("div");
      movieContainer.classList.add("movie-container");

      // Create a new image element and set its source, alt text, width and height attributes
      const poster = document.createElement("img");
      poster.className = "poster-img";
      poster.src = image["url"];
      poster.alt = title;

      // Append the image element to the movie container element
      movieContainer.appendChild(poster);

      // Create a new heading element for the movie title and year
      const titleContainer = document.createElement("h2");
      titleContainer.className = "movie-title";
      titleContainer.innerHTML = `${title} - ${year}`;
      // Append the heading element to the movie container element
      movieContainer.appendChild(titleContainer);

      // Append the movie container element to the poster container element in the DOM
      posterContainer.appendChild(movieContainer);
    });
  } catch (error) {
    // Log any errors to the console
    console.error(error);
  }
};

// Call the fetchData function to start fetching and displaying the movie data
fetchData();
