fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        list(data);
    })

function list(data) {
    for (let i = 0; i < data.length; i++) {
        let countryList = data[i].name;
        let ul = document.getElementById("ul");
        let li = document.createElement("li");
        li.innerText = countryList;
        ul.appendChild(li);
    }
    detailFunction()
}

function detailFunction() {
    document.querySelector("#ul").addEventListener('click', (event) => {
        event.stopImmediatePropagation();

        let target = event.target;
        let list = document.querySelectorAll('#ul li');
        target.style.background = 'linear-gradient(-45deg, rgb(99, 54, 241), rgb(95, 29, 232))';
        target.style.color = 'white';
        let countryName = target.innerText;
        fetch('https://restcountries.eu/rest/v2/name/' + countryName)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let { capital, area, callingCodes, flag, languages, nativeName, population, region, timezones, topLevelDomain } = data[0];
                let array = (languages.map((x) => { return x.name })).join(',');

                document.getElementById("flagImg").src = flag;
                document.getElementById("Country-Name").innerText = countryName;
                document.getElementById("Native-Name").innerText = nativeName;
                document.getElementById("Calling-Codes").innerText = callingCodes;
                document.getElementById("Capital").innerText = capital;
                document.getElementById("Area").innerText = area;
                document.getElementById("Languages").innerText = array;
                document.getElementById("Population").innerText = population;
                document.getElementById("Region").innerText = region;
                document.getElementById("Time-Zone").innerText = timezones;
                document.getElementById("Domain").innerText = topLevelDomain;

            })
    })
}