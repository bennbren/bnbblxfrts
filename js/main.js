const titles = document.querySelector("#output")

const fruits = [
        { 
          stock:0,  
          name: "Dragon",      
          price: 190,
          igPrice:00,
          fval:00,
          type:"Beast",
          rarity:"Mythical"
          },
          
        {
        stock:1,  
        name: "Kitsune",      
        price: 190,
        igPrice:00,
        fval:00,
        type:"Beast",
        rarity:"Mythical"
        },
        
        { 
        stock:0,  
        name: "Leopard",    
        price: 70,
        igPrice:00,
        fval:00,
        type:"Beast",
        rarity:"Mythical"
        },
        
        { 
        stock:1,  
        name: "Dough",      
        price: 60,
        igPrice:00,
        fval:00,
        type:"Elemental",
        rarity:"Mythical"
        },
        
        { 
        stock:0,  
        name: "T-Rex",       
        price: 50,
        igPrice:00,
        fval:00,
        type:"Beast",
        rarity:"Mythical"
        },
        
        { 
        stock:1,  
        name: "Mammoth",  
        price: 40,
        igPrice:00,
        fval:00,
        type:"Beast",
        rarity:"Mythical"
        },
        
        { 
        stock:0,  
        name: "Spirit",        
        price: 30,
        igPrice:00,
        fval:00,
        type:"Natural",
        rarity:"Mythical"
        },
        
        { 
        stock:1,  
        name: "Venom",      
        price: 25,
        igPrice:00,
        fval:00,
        type:"Natural",
        rarity:"Mythical"
        },
        
        { 
        stock:2,  
        name: "Shadow",   
        price: 25,
        igPrice:00,
        fval:00,
        type:"Natural",
        rarity:"Mythical"
        },
        
        {
        stock:2,  
        name: "Control",     
        price: 30,
        igPrice:00,
        fval:00,
        type:"Natural",
        rarity:"Mythical"
        },
        
        { 
        stock:2,  
        name: "Rumble",     
        price: 25,
        igPrice:00,
        fval:00,
        type:"Elemental",
        rarity:"Legendary"
        },
        
        { 
        stock:2,  
        name: "Buddha",     
        price: 30,
        igPrice:00,
        fval:00,
        type:"Beast",
        rarity:"Legendary"
        },
        
        { 
        stock:1,  
        name: "Portal",       
        price: 30,
        igPrice:00,
        fval:00,
        type:"Natural",
        rarity:"Legendary"
        },
        
        { 
        stock:2,  
        name: "Blizzard",    
        price: 15,
        igPrice:00,
        fval:00,
        type:"Elemental",
        rarity:"Legendary"
        },
       
        { 
        stock:2,  
        name: "Phoenix",     
        price: 10,
        igPrice:00,
        fval:00,
        type:"Beast",
        rarity:"Legendary"
        },
       
        { 
        stock:1,  
        name: "Sound",        
        price: 10,
        igPrice:00,
        fval:00,
        type:"Natural",
        rarity:"Legendary"
        },
      
        { 
        stock:1,  
        name: "Love",          
        price: 5,
        igPrice:00,
        fval:00,
        type:"Natural",
        rarity:"Legendary"
        },
     
        { 
        stock:2,  
        name: "Gravity",     
        price: "--",
        igPrice:00,
        fval:00,
        type:"Natural",
        rarity:"Mythical"
        },
 
        { 
        stock:1,  
        name: "Pain",          
        price: "--",
        igPrice:00,
        fval:00,
        type:"Natural",
        rarity:"Legendary"
        },
  
       { 
       stock:1,  
       name: "Spider",        
       price: "--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Legendary"
       },

       { 
       stock:1,  
       name: "Quake",        
       price: "--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Legendary"
       },
 
       { 
       stock:2,  
       name: "Magma",      
       price: "--",
       igPrice:00,
       fval:00,
       type:"Elemental",
       rarity:"Rare"
       },
  
       { 
       stock:2,  
       name: "Ghost",         
       price: "--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Rare"
       },
  
       { 
       stock:1,  
       name: "Barrier",      
       price: "--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Rare"
       },
  
       { 
       stock:1,  
       name: "Rubber",      
       price: "--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Rare"
       },
 
       { 
       stock:2,  
       name: "Light",         
       price: "--",
       igPrice:00,
       fval:00,
       type:"Elemental",
       rarity:"Rare"
       },
  
       { 
       stock:1,  
       name: "Diamond",    
       price: "--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Uncommon"
       },
  
       { 
       stock:1,  
       name: "Dark", 
       price: "--",
       igPrice:00,
       fval:00,
       type:"Elemental",
       rarity:"Uncommon"
       },
  
       { 
       stock:1,  
       name: "Sand", 
       price: "--",
       igPrice:00,
       fval:00,
       type:"Elemental",
       rarity:"Uncommon"
       },
  
       { 
       stock:2,  
       name: "Ice", 
       price: "--",
       igPrice:00,
       fval:00,
       type:"Elemental",
       rarity:"Uncommon"
       },
       
       { 
       stock:0,  
       name: "Falcon", 
       price: "--",
       igPrice:00,
       fval:00,
       type:"Beast",
       rarity:"Uncommon"
       },
 
       { 
       stock:1,  
       name: "Flame", 
       price: "--",
       igPrice:00,
       fval:00,
       type:"Elemental",
       rarity:"Uncommon"
       },
  
       { 
       stock:1, 
       name: "Spike", 
       price: "--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Common"
       },

       { 
       stock:1,  
       name: "Smoke", 
       price: "--",
       igPrice:00,
       fval:00,
       type:"Elemental",
       rarity:"Common"
       },
 
       { 
       stock:2,  
       name: "Bomb", 
       price: "--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Common"
       },
 
       { 
       stock:2,  
       name: "Spring", 
       price: "--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Common"
       },
 
       { 
       stock:2,  
       name: "Chop", 
       price: "--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Common"
       },
 
       { 
       stock:2,  
       name: "Spin", 
       price: "--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Common"
       },
  
       { 
       stock:2,  
       name: "Rocket", 
       price:"--",
       igPrice:00,
       fval:00,
       type:"Natural",
       rarity:"Common"
       }
    ]
    
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
            <th colspan="7" class="text-center">PHYSICAL FRUITS</th>
        </tr>
                                <tr>
                                    <th>Stock</th>
                                    <th>Fruit</th>
                                    <th>Sale Price</th>
                                    <th>In-Game Price</th>
                                    <th>Fruit Value</th>
                                    <th>Type</th>
                                    <th>Rarity</th>
                                </tr>`;

        fruits.forEach(fruit => {
            table += `   <tr>
                                     <td class="text-center">${fruit.stock}</td>
                                     <td><img src="./fruits/${fruit.name}Fruit.png"class="avatar"> ${fruit.name}</td>
                                     <td class="text-right">₱${fruit.price}.00</td>
                                     <td class="text-right">${fruit.igPrice}</td>
                                     <td class="text-right">${fruit.fval}</td>
                                     <td>${fruit.type}</td>
                                     <td id="rrty">${fruit.rarity}</td>
                                     
                                     
                                     
                               </tr>`;

        });

        table += '</table>';
        container.innerHTML = table;
    }

    generateTable(fruits);
    
     
 //Date
 /*
let currentDateTime = new Date();
  let options = { weekday: 'long', 
                       year: 'numeric', 
                       month: 'long', 
                       day: 'numeric', 
                       hour: '2-digit', 
                       minute: '2-digit', 
                       second: '2-digit', 
                       hour12: true ,
                       timezone: 'Asia/Manila'
                        };
                        
let formattedDateTime = currentDateTime.toLocaleString('en-US',options);
const upDates = document.querySelector("#upDate")
.innerText = "Current Date and Time:"+ formattedDateTime;

*/
//endOfTheCodeOnTop


//Date And Time auto update

     function getNewDateTime() {
            let options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit', 
                hour12: true, 
                timeZone: 'Asia/Manila' 
            };

            let currentDateTime = new Date();
            let formattedDateTime = currentDateTime.toLocaleString('en-US', options);
            return formattedDateTime;
        }

        function updateDateTime() {
            document.querySelector("#upDate")
            .innerText = "As of: "+getNewDateTime();
        }

        setInterval(updateDateTime, 1000);
        updateDateTime();

