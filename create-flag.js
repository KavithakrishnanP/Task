const countries = [
    {
      image: "https://flagpedia.net/data/flags/w580/de.png",
      country: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/au.png",
      country: "Australia",
      population: "91,657,312",
      region: "Aus",
      capital: "Canberra"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/in.png",
      country: "India",
      population: "1,3179,984,812",
      region: "Asia",
      capital: "New Delhi"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/kr.png",
      country: "South Korea",
      population: "40,400,000",
      region: "Asia",
      capital: "Seoul"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/us.png",
      country: "United States of America",
      population: "323,947,000",
      region: "North America",
      capital: "Washington,D.C"
    }
  ];

  document.body.innerHTML=`
  <section class="container">
     <div id="flags" class="row">
     </div>
     </section>`;

  countries.forEach((data)=> {
    //   console.log(data);
  const flags=document.querySelector(" #flags");


      flags.innerHTML +=`
      <div class="col-12 col-sm-56 col-md-3 space">
      <div class="flag-container">
      <img
      src=${data.image}
      class="flag"
      />
      <div class="details">
      <h3>${data.country}</h3>
      <p><b>Population:</b>${data.population}</p>
      <p><b>Region:</b>${data.region}</p>
      <p><b>Capital:</b>${data.capital}</p>
      </div>
      </div>
      </div>
      `;
  });