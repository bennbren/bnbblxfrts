
    const fruits = [
        
        { stock:"Unavailable", name: "Dragon", price: 200},
        { stock:"Unavailable", name: "Kitsune", price: 200},
        { stock:1, name: "Leopard", price: 60},
        { stock:2, name: "Dough", price: 50},
        { stock:"Unavailable", name: "T-Rex", price: 45},
        { stock:1, name: "Mammoth", price: 40},
        { stock:2, name: "Spirit", price: 30},
        { stock:2, name: "Venom", price: 25},
        { stock:2, name: "Shadow", price: 25},
        { stock:1, name: "Control", price: 30},
        { stock:1, name: "Rumble", price: 25},
        { stock:2, name: "Buddha", price: 30},
        { stock:1, name: "Portal", price: 30},
        { stock:1, name: "Blizzard", price: 15},
        { stock:2, name: "Phoenix", price: 10},
        { stock:2, name: "Sound", price: 10},
        { stock:2, name: "Love", price: 5},
       
    ];

    function generateTable(fruits) {
        const container = document.getElementById('table-container');
        let table = '<table class="table table-bordered table-info"><tr><th>Stock</th><th>Fruit</th><th>Price</th></tr>';

        fruits.forEach(fruit => {
            table += `<tr><td class="text-center">${fruit.stock}</td><td><img src="./fruits/${fruit.name}Fruit.png" class="avatar"> ${fruit.name}</td><td class="text-right">₱${fruit.price}.00</td></tr>`;
        });

        table += '</table>';
        container.innerHTML = table;
    }

    generateTable(fruits);
