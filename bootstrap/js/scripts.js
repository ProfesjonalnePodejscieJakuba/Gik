const osoby = [
    {
        imie: "Jan",
        wiek: 30,
        miasto: "Warszawa"
    },
    {
        imie: "Anna",
        wiek: 25,
        miasto: "Kraków"
    },
    {
        imie: "Piotr",
        wiek: 35,
        miasto: "Gdańsk"
    }
];

document.getElementById("button").addEventListener("click", () => {
    const container = document.createElement("div");
    container.className = "mt-4";

    osoby.forEach((osoba) => {
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.style = "max-width: 540px;";
        card.innerHTML = `
            <div class="row no-gutters">
                <div class="col-md-4 bg-primary text-white text-center d-flex justify-content-center align-items-center">
                    <h4>${osoba.imie}</h4>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p class="card-text"><strong>Wiek:</strong> ${osoba.wiek}</p>
                        <p class="card-text"><strong>Miasto:</strong> ${osoba.miasto}</p>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    document.querySelector(".container").appendChild(container);
});
