
    const fruits = [
        
        { stock:1, name: "Dragon", price: 200 },
        { stock:1, name: "Kitsune", price: 200},
        { stock:1, name: "Leopard", price: 200},
        { stock:1, name: "Dough", price: 200},
        { stock:1, name: "T-Rex", price: 200},
        { stock:1, name: "Mammoth", price: 200},
        { stock:1, name: "Spirit", price: 200},
        { stock:1, name: "Venom", price: 200},
        { stock:1, name: "Shadow", price: 200},
        { stock:1, name: "Control", price: 200},
        { stock:1, name: "Rumble", price: 200},
        { stock:1, name: "Buddha", price: 200},
        { stock:1, name: "Portal", price: 200},
        { stock:1, name: "Blizzard", price: 200},
        { stock:1, name: "Phoenix", price: 200},
        { stock:1, name: "Sound", price: 200},
        { stock:1, name: "Love", price: 200},
       
    ];

    function generateTable(fruits) {
        const container = document.getElementById('table-container');
        let table = '<table class="table table-bordered border-primary"><tr><th>Stock</th><th>Fruit Name</th><th>Price</th></tr>';

        fruits.forEach(fruit => {
            table += `<tr><td class="text-center">${fruit.stock}</td><td> <img src="./fruits/${fruit.name}Fruit.png" class="avatar"> ${fruit.name}Fruit.png</td><td>${fruit.price}</td></tr>`;
        });

        table += '</table>';
        container.innerHTML = table;
    }

    generateTable(fruits);
