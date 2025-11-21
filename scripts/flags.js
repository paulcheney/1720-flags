//Grab a location to display the data
const showFlags = document.querySelector("#showHere");

//function to grab the data from a remote site
async function getData() {
  const url = "https://restcountries.com/v3.1/all?fields=name,flags,languages";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    //console.log(result);
    displayFlags(result);
  } catch (error) {
    console.error(error.message);
    showFlags.innerText = error.message;
  }
}

//call the function
getData();

//Loop to display the data
function displayFlags(allData) {
  for (const item of allData) {
    //console.log(item);
    //build a card
    let countryCard = document.createElement("section");

    //build the image
    let countryFlag = document.createElement("img");
    countryFlag.src = item.flags.svg;
    countryFlag.alt = item.name.common;

    //build the heading
    let countryName = document.createElement("h2");
    countryName.innerText = item.name.common;

    //build the language
    let countryLang = document.createElement("p");
    countryLang.innerText = Object.values(item.languages).join(", ");

    countryCard.appendChild(countryFlag);
    countryCard.appendChild(countryName);
    countryCard.appendChild(countryLang);

    showFlags.appendChild(countryCard);
  }
}
