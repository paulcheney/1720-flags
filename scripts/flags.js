const showFlags = document.querySelector("#showFlags");

//Build an asynchronous function to grab the data from an external site
async function getData(url) {
  try {
    const response = await fetch(url);
    console.log(response);
    displayFlags(await response.json());
  } catch (error) {
    showFlags.innerText = error.message;
  }
}



//Call the function above on page load
getData("https://restcountries.com/v3.1/all?fields=name,flags,languages");




//Loop through all the Countries and display the flags on the page.
function displayFlags(countries) {
  console.log(countries);
  countries.forEach(item => {
    const card = document.createElement("section")

    card.innerHTML = `
      <h2>${item.name.common}</h2>
      <img src="${item.flags.svg}" alt="${item.flags.alt}">
      <p>${Object.values(item.languages).join(" & ")}</p>
    `
    showFlags.appendChild(card)
  });
}
