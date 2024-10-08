
const titles = document.querySelector("#output")


    const fruits = [
        
        { stock:"Unavailable", name: "Dragon", price: 190},
        { stock:1, name: "Kitsune", price: 190},
        { stock:"Unavailable", name: "Leopard", price: 70},
        { stock:1, name: "Dough", price: 60},
        { stock:"Unavailable", name: "T-Rex", price: 50},
        { stock:1, name: "Mammoth", price: 40},
        { stock:"Unavailable", name: "Spirit", price: 30},
        { stock:1, name: "Venom", price: 25},
        { stock:2, name: "Shadow", price: 25},
        { stock:2, name: "Control", price: 30},
        { stock:2, name: "Rumble", price: 25},
        { stock:2, name: "Buddha", price: 30},
        { stock:1, name: "Portal", price: 30},
        { stock:2, name: "Blizzard", price: 15},
        { stock:2, name: "Phoenix", price: 10},
        { stock:1, name: "Sound", price: 10},
        { stock:1, name: "Love", price: 5},
        { stock:2, name: "Gravity", price: "--"},
        { stock:1, name: "Pain", price: "--"},
       { stock:1, name: "Spider", price: "--"},
       { stock:1, name: "Quake", price: "--"},
       { stock:2, name: "Magma", price: "--"},
       { stock:2, name: "Ghost", price: "--"},
       { stock:1, name: "Barrier", price: "--"},
       { stock:1, name: "Rubber", price: "--"},
       { stock:2, name: "Light", price: "--"},
       { stock:1, name: "Diamond", price: "--"},
       { stock:1, name: "Dark", price: "--"},
       { stock:1, name: "Sand", price: "--"},
       { stock:2, name: "Ice", price: "--"},
       { stock:1, name: "Flame", price: "--"},
       { stock:1, name: "Spike", price: "--"},
       { stock:1, name: "Smoke", price: "--"},
       { stock:2, name: "Bomb", price: "--"},
       { stock:2, name: "Spring", price: "--"},
       { stock:2, name: "Chop", price: "--"},
       { stock:2, name: "Spin", price: "--"},
       { stock:2, name: "Rocket", price:"--"}
    ];
    /*
    const fruits = [
    { stock:"Unavailable", name: "Spin", price: 1},
    ];
    */

    function generateTable(fruits) {
        const container = document.getElementById('table-container');
        let table = `
        <h1 class="text-center">BenNBren's Inventory</h1>
        <table class="table table-bordered table-info">
        <tr>
            <th colspan="5" class="text-center">PHYSICAL FRUITS</th>
        </tr>
                                <tr>
                                    <th>Stock</th>
                                    <th>Fruit</th>
                                    <th>Price</th>
                                    <th>In-Game Price</th>
                                    <th>Fruit Value</th>
                                </tr>`;

        fruits.forEach(fruit => {
            table += `   <tr>
                                     <td class="text-center">${fruit.stock}</td>
                                     <td><img src="./fruits/${fruit.name}Fruit.png" class="avatar"> ${fruit.name}</td>
                                     <td class="text-right">₱${fruit.price}.00</td>
                                     <td class="text-right">$0.00</td>
                                     <td class="text-right">$0.00</td>
                                     
                                     
                               </tr>`;
        });

        table += '</table>';
        container.innerHTML = table;
    }

    generateTable(fruits);
