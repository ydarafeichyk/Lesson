class Vegetables {
    constructor (name,weight, calories) {
        this.name = name;
        this.weight = weight;
        this.calories = calories;
    }
    getWeight() {
        return this.weight || 0;
    }
    getCalories() {
        return this.calories*this.weight/100 || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setCalories(calories) {
        this.calories = calories;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}

class Cabbage extends Vegetables {
    constructor() {
        super();
        this.setName('Cabbage');
        this.setWeight(200);
        this.setCalories(25);
    }
}

class Onion extends Vegetables {
    constructor() {
        super();
        this.setName('Onion');
        this.setWeight(100);
        this.setCalories(40);
    }
}

class Carrot extends Vegetables {
    constructor() {
        super();
        this.setName('Carrot');
        this.setWeight(400);
        this.setCalories(20);
    }
}
class Cucumber extends Vegetables {
    constructor() {
        super();
        this.setName('Cucumber');
        this.setWeight(400);
        this.setCalories(23);
    }
}
class Tomato extends Vegetables {
    constructor() {
        super();
        this.setName('Tomato');
        this.setWeight(400);
        this.setCalories(18);
    }
}

class Composite extends Vegetables {
    constructor() {
        super();
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
    getFindVegetable()  {
        return this.vegetables
            .filter(function(item){
            return item.name === 'Carrot' && item.calories < 30;
        });

    }        
}

class SaladVitamin extends Composite {
    constructor() {
        super();
        this.setName('SaladVitamin');
    }

}

let salad = new SaladVitamin();
salad.addComponent(new Cabbage());
salad.addComponent(new Onion());
salad.addComponent(new Carrot());
salad.addComponent(new Cucumber());
salad.addComponent(new Tomato());


console.log(`${salad.getName()} calories is ${salad.getCalories()}`);
console.log(salad.getSortByCalories());
console.log(salad.getFindVegetable());




