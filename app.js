const AllCounteryApiURL = "https://restcountries.com/v3.1/all";

//select some elements

let counteryList = document.querySelector("#countery-list");

//featcing all countery data........
async function allCunteryFun() {
    let response = await fetch(AllCounteryApiURL);
    let data = await response.json();
    if (!response.ok) {
        alert("Something Wrong Here !!");
    };
    data.map((value) => {
        if (value.coatOfArms.png === undefined) {
            value.coatOfArms.png = "";
        };
        counteryList.innerHTML += `
        <div class="container">
        <div class="img">
                  <img src="${value.flags.png}" alt="">
                    </div>
                 <div class="info">
                 <h3>${value.name.common}</h3>
                  <p>Population:<span>${value.population}</span></p>
                <p>Region:<span>${value.continents}</span></p>
                <p>Capital:<span>${value.capital}</span></p>
                  <img id= "coatOfArms" src="${value.coatOfArms.png}" alt"img">
            </div>
            </div>`
    });
};
allCunteryFun();

//searching api ..............

// select elements......................

const searchIcon = document.querySelector("#secrch-icon");
const input = document.querySelector("#input");

searchIcon.addEventListener("click", () => {

    let inputValue = input.value.toLowerCase();
    counteryList.innerHTML = "";
    searchByName();
    async function searchByName() {

        var response = await fetch(`https://restcountries.com/v3.1/name/${input.value}?fullText=true`);
        var data = await response.json();

        if (!response.ok) {
            alert("Enter Currect Countery Name !!");
            allCunteryFun();
            input.value = "";
        };
        if (response.ok) {
            data.map((value) => {

                if (value.coatOfArms.png === undefined) {
                    value.coatOfArms.png = "";
                };

                counteryList.innerHTML += `
        <div class="container">
        <div class="img">
                  <img src="${value.flags.png}" alt="img">
                    </div>
                 <div class="info">
                 <h3>${value.name.common}</h3>
                  <p>Population:<span>${value.population}</span></p>
                <p>Region:<span>${value.continents}</span></p>
                <p>Capital:<span>${value.capital}</span></p>
                
                <img id= "coatOfArms" src="${value.coatOfArms.png}" alt"img">
            </div>
            </div>`;
                console.log(value.coatOfArms.png);
            });
        };
        if (inputValue == "nepal") {
            const container = document.querySelector(".container");
            container.style.height = "60vh";
        };
    };
});

//Featcing Api for Region...............

const secect = document.querySelector("#secect");

secect.addEventListener("change", (e) => {

    console.log(e.target.value);
    (async function () {
        counteryList.innerHTML = "";
        let response = await fetch(`https://restcountries.com/v3.1/region/${e.target.value}`);
        let data = await response.json();
       
        data.map((value) => {

            if (value.coatOfArms.png === undefined) {
                value.coatOfArms.png = "";
            };
            counteryList.innerHTML += `
            <div class="container">
        <div class="img">
                  <img src="${value.flags.png}" alt="img">
                    </div>
                 <div class="info">
                 <h3>${value.name.common}</h3>
                  <p>Population:<span>${value.population}</span></p>
                <p>Region:<span>${value.continents}</span></p>
                <p>Capital:<span>${value.capital}</span></p>
                
                <img id= "coatOfArms" src="${value.coatOfArms.png}" alt"img">
            </div>
            </div>`;

        });
    })();
});
const dropDownArrow = document.querySelector("#dowm-arrow");

dropDownArrow.addEventListener("click" , () =>{
    secect.focus();
});


