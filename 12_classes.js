// синтаксический сахар
// делают работу с прототипами намного более интуитивной

/* function Animal (name, voice) {
    this.name = name;
    this.voice = voice; 
};

Animal.prototype.say = function() {
   console.log(this.name, 'goes', this.voice);
}

const dog = new Animal('dog', 'woof');
dog.say(); */

// этот код можно переписать иначе
class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    };

    say() {
        console.log(this.name, 'goes', this.voice);
    }
};

// extends говорит что эти классы будут стоять в цепочке прототипов
class Bird extends Animal {
    constructor(name, voice, canFly) {
        // явное указание конструктора Animal
        super(name, voice);
        this.canFly = canFly;
    };
    // можно переопределить функцию say класса Animal
    say() {
        console.log(`Birds dont talk - ${this.canFly}`);
    }
}

// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
// если не указывать конструктор низшего класса, он наследет конструктор супер класса
const duck = new Bird('Duck', 'quack', true);
duck.say();