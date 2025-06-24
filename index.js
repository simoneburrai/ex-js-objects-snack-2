const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

function createDeepObject(obj){
    const newObj = {};

       if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if(typeof(obj)==="function"){
            return obj
        }

    for(const key in obj){
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            newObj[key]= createDeepObject(obj[key]);
        }
    }
    return newObj;
}

console.log(createDeepObject(chef))

// 🎯 Snack  (Bonus)
// Crea una funzione che permette la copia profonda 
// (deep copy) di un oggetto, che copia anche
//  i suoi metodi (proprietà che contengono funzioni).
//   Usa l’oggetto di Code Question 6 come test.

// ⚠️ Serve usare una funzione ricorsiva! (fai un po’ di
//      ricerca).