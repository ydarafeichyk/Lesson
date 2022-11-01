class Vegetables {
    constructor (name,weight, calories) {
        this.name = name;
        this.weight = weight;
        this.calories = calories;
    }
    getCalories() {
        return this.calories*this.weight/100 || 0;
    }
    getWeight() {
        return this.weight || 0;
    }
    getName() {
            return this.name;
    }
    setName(name) {
            this.name = name;
    }
    setCalories(calories) {
        return this.calories = calories;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    }
   
const cabbage = new Vegetables('cabbage',200, 25);
const onion = new Vegetables('onion',100, 40);
const carrot = new Vegetables('carrot',400, 20);
const cucumber = new Vegetables('cucumber',400, 23);
const tomato = new Vegetables('tomato',400, 18);

class SaladVitamin {
    constructor() {
        this.cabbage = true;
        this.onion = true;
        this.carrot = true;
        this.cucumber = true;
        this.tomato = true;
        }
}

class SaladBuilder {
    constructor() {
        this.salad = new SaladVitamin();
        this.vegetables = [];
    }
    addComponent(component) {
        this.vegetables.push(component);
    }
    getCalories() {
        return this.vegetables
            .map(component => component.getCalories())
            .reduce((a, b) => a + b)
    }
    getSortByCalories()  {
        return this.vegetables
            .sort(function(a, b){return a.calories-b.calories}
            );

    } 
    getFindVegetableByNameAndCalories()  {
        return this.vegetables
            .filter(function(item){
            return item.name === 'carrot' && item.calories < 30;
        });

    }   
            
    addCabbage(cabbage) {
        this.salad.cabbage = cabbage;
        return this;
    }

    addOnion(onion) {
        this.salad.onion = onion;
        return this;
    }

    addCarrot(carrot) {
        this.salad.carrot = carrot;
        return this;
    }

    addCucumber(cucumber) {
        this.salad.cucumber = cucumber;
        return this;
    }

    addTomato(tomato) {
        this.salad.tomato = tomato;
        return this;
    }
    
    build() {
        return this.salad;
    }
}

let salad = new SaladBuilder().addCabbage(true).addOnion(true).addCarrot(true).addCucumber(true).addTomato(true).build();
let saladForCount = new SaladBuilder();
saladForCount.addComponent(cabbage);
saladForCount.addComponent(onion);
saladForCount.addComponent(carrot);
saladForCount.addComponent(cucumber);
saladForCount.addComponent(tomato);

console.log(`calories is ${saladForCount.getCalories()}`);
console.log(saladForCount.getSortByCalories());
console.log(saladForCount.getFindVegetableByNameAndCalories());
   
    