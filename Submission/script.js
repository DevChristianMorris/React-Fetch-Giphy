const renderRandomGif = async () => {
  // TODO: Make a fetch request to the Giphy API to get a random GIF
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=G4Pk1JwuIs5x0pnwyK7nN8rDI21bnPDY&tag=burrito&rating=g"
  );
  const gif = await response.json();

  // TODO: Update the 'src' variable below to be a URL to a GIF from the Giphy API
  const src = gif.data.fixed_height_downsampled_url;

  // Update the existing <img> tag with the new src
  const imgEl = document.querySelector("#random-gif");
  imgEl.setAttribute("src", src);
};

// Display a random GIF when the page loads
renderRandomGif();

// Display a random GIF when the button is clicked
const btn = document.querySelector("#fetch-random-gif-btn");
btn.addEventListener("click", renderRandomGif);
