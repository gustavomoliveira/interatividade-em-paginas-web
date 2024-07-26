//Ex.01

//objeto literal
const personagem = {
    nome: "Mario",
    size: "Short",
    color: "Red",
    italian: true,
    description: function() {
        return "The character " + personagem.nome + ", which is " + personagem.size + ", is Italian? " + personagem.italian;
    },
    moto: function() {
        return "Ohhh yeah! " + personagem.nome + " time! Woo hoo!";
    }
};

//mudando o valor das propriedades do objeto "personagem"
personagem.nome = "Luigi";
personagem.size = "tall";

console.log(personagem.description());
console.log(personagem.moto());

//Ex.02

//criação de objetos literal
const alfie = {
    name: "Alfie",
    gender: "male",
    hat: false,
    glasses: false,
    age: "adult"
}

const del = {
    name: "Del",
    gender: "male",
    hat: false,
    glasses: true,
    age: "adult"
}

// criação através do método construtor
function Person(name, gender, hat, glasses, age) {
    this.name = name;
    this.gender = gender;
    this.hat = hat;
    this.glasses = glasses;
    this.age = age;
}

let betty = new Person("Betty", "female", true, true, 68);
console.log(betty.name + " " + betty.gender + " " + betty.hat + " " + betty.glasses + " " + betty.age); 

let gemma = new Person("Gemma", "female", true, false, 40);
console.log(`A ${gemma.name} é uma ${gemma.gender}. Ela usa champéu? ${gemma.hat}. Ela usa óculos? ${gemma.glasses}. Ela tem ${gemma.age} anos de idade.`);

//Ex.03

/*
Create a circle object that has a radius property and calculates the circumference and area.
Hint: you might need to use the Math.PI constant for this challenge.
*/

let circle = new Object();
circle.radius = 5;
circle.circumference = function() {
    return Math.PI * circle.radius * 2;
}
circle.area = function() {
    return Math.PI * circle.radius ** 2;
}

console.log(circle.circumference());
console.log(circle.area());

//Ex.04

/*
Create a list object that has an array property called items and an add and remove() method
that can be used to add items to the list.
For example, list.add('Apples') should add Apples to the list.items array.
*/

const list = {
    items: [],
    add: function(items) {
        return this.items.push(items);
    },
    remove: function(s, n) {
        return this.items.splice(s, n);
    }
};

console.log(list.add("Apples"));
console.log(list.items);
console.log(list.add("Bananas"));
console.log(list.add("Oranges"));
console.log(list.items);
console.log(list.remove(1,1));
console.log(list.items);


    