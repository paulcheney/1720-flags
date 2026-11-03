const showFlags = document.querySelector("#showFlags");

//Build an asynchronous function to grab the data from an external site
async function getData() {
  try {
    const response = await fetch(
      `https://api.restcountries.com/countries/v5?response_fields=names.common,languages,flag.url_svg&limit=100`,
      { headers: { Authorization: `Bearer rc_live_381a7a03888845b08177c155467615c8` } }
    );
    console.log(response);
    const payload = await response.json();
    displayFlags(payload.data.objects);
  } catch (error) {
    showFlags.innerText = error.message;
  }
}

//Call the function above on page load
getData();


//Loop through all the Countries and display the flags on the page.
function displayFlags(countries) {
  console.log(countries);
  countries.forEach(item => {
    const card = document.createElement("section")
    // check to see if the flag image is valid.
    //console.log(item.flag.url_svg)
    let flagpath = item.flag?.url_svg;
    if (!flagpath) {
      flagpath = "../images/placeholder.svg";
    }



    card.innerHTML = `
      <h2>${item.names.common}</h2>
      <img src="${flagpath}" alt="${item.flag.description}">
      <p>${item.languages.map((language) => language.name).join(" & ")}</p>
    `
    showFlags.appendChild(card)
  });
}
