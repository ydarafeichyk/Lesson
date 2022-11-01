class Product {
    constructor (name, weight, caloriesInOneHundredGram, sugarInOneHundredGram) {
        this.name = name;
        this.weight = weight;
        this.caloriesInOneHundredGram = caloriesInOneHundredGram;
        this.sugarInOneHundredGram = sugarInOneHundredGram;
        
    }
    getSugar() {
        return this.sugarInOneHundredGram || 0;
    }

    getWeight() {
        return this.weight || 0;
    }
    getCalories() {
        return this.caloriesInOneHundredGram || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setCalories(caloriesInOneHundredGram) {
        this.caloriesInOneHundredGram = caloriesInOneHundredGram;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    setSugar(sugarInOneHundredGram) {
        this.sugarInOneHundredGram = sugarInOneHundredGram;
    }
}
class Sweet extends Product {
    constructor() {
        super();
        
    }
}
class Drinks extends Product {
        constructor() {
            super();
            
        }
}
class Caramel extends Sweet {
    constructor() {
        super();
        this.filling = 'mint';
        this.setName('Caramel');
        this.setWeight(2);
        this.setCalories(379);
        this.setSugar(60);
    }
}

class Chocolate extends Sweet {
    constructor() {
        super();
        this.setName('Milka');
        this.setWeight(300);
        this.setCalories(534);
        this.setSugar(50);
    }
}

class Marshmallow extends Sweet {
    constructor() {
        super();
        this.setName('Marshmallow');
        this.setWeight(200);
        this.setCalories(318);
        this.setSugar(10);
    }
}
class Truffle extends Sweet {
    constructor() {
        super();
        this.setName('Truffle');
        this.setWeight(3);
        this.setCalories(569);
        this.setSugar(38);
    }
}
class Juice extends Drinks {
    constructor() {
        super();
        this.setName('Apple');
        this.setWeight(100);
        this.setCalories(320);
        this.setSugar(70);
    }
}

class Composite extends Product {
    constructor() {
        super();
        this.products = [];
    }

    addComponent(component) {
        this.products.push(component);
    }

    getWeight() {
        return this.products
            .map(component => component.getWeight())
            .reduce((a, b) => a + b)
    }
    getSortByCalories()  {
        return this.products
        .sort(function(a, b){return a.caloriesInOneHundredGram-b.caloriesInOneHundredGram}
            );

    } 
    getFindSweetByCaloriesAndSugar()  {
        return this.products
            .filter(function(item){
            return item.sugarInOneHundredGram < 40 && item.caloriesInOneHundredGram < 400;
        });

    }        
}

class Gift extends Composite {
    constructor() {
        super();
        this.setName('NewYearGift');
    }

}

let gift = new Gift();
gift.addComponent(new Caramel());
gift.addComponent(new Chocolate());
gift.addComponent(new Marshmallow());
gift.addComponent(new Truffle());
gift.addComponent(new Juice());

console.log(`${gift.getName()} weight is ${gift.getWeight()} grams`);
console.log(gift.getSortByCalories());
console.log(gift.getFindSweetByCaloriesAndSugar());