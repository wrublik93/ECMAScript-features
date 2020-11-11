// 1. пусть есть 2 объекта
// у каждого есть одинаковая функция say, которая использует поля объектов

/* const dog = {
    name: 'dog',
    voice: 'woof',
    say: function() {
        console.log(this.name, 'goes', this.voice);
    }
};

const cat = {
    name: 'cat',
    voice: 'meow',
    say: function() {
        console.log(this.name, 'goes', this.voice);
    }
};

dog.say();
cat.say(); */

// 2. создадим еще один объект, в который выносим одинаковую функцию say
/* const animal = {
    say: function() {
        console.log(this.name, 'goes', this.voice);
    }
};

const dog = {
    name: 'dog',
    voice: 'woof',
};

const cat = {
    name: 'cat',
    voice: 'meow',
};
 */

 // 3. Необходимо установить связь между animal и другими объектами

 ///////////////////////
 // первый способ
 ///////////////////////

 // Object.setPrototypOf()
 // ОЧЕНЬ ПЛОХО СКАЗЫВАЕТСЯ НА ПРОИЗВОДИТЕЛЬНОСТИ ПРИЛОЖЕНИЯ!
/*  const animal = {
    say: function() {
        console.log(this.name, 'goes', this.voice);
    }
};

const dog = {
    name: 'dog',
    voice: 'woof',
};

// делаем связь прототипа и объекта (animal - прототип объекта dog)
Object.setPrototypeOf(dog, animal)

const cat = {
    name: 'cat',
    voice: 'meow',
};
Object.setPrototypeOf(cat, animal);
dog.say();
cat.say(); */

 ///////////////////////
 // второй способ
 ///////////////////////

 // Object.create()
/*  const animal = {
    say: function() {
        console.log(this.name, 'goes', this.voice);
    }
}; */

/*  const dog = Object.create(animal);
 dog.name = 'dog';
 dog.voice = 'woof';

 dog.say(); */

 // фактически это функция конструктор
 /* function createAnimal (name, voice) {
     const result = Object.create(animal);
     result.name = name;
     result.voice = voice;
     return result;
 } */

 // можно переписать код выше через new, теперь больше объект animal вообще не нужен
 function Animal (name, voice) {
     this.name = name;
     this.voice = voice; 
};

Animal.prototype.say = function() {
    console.log(this.name, 'goes', this.voice);
}

 const dog = new Animal('dog', 'woof');
 const cat = new Animal('cat', 'meow');
 dog.say();
 cat.say();

 // ИТОГО
 // 1. Object.setPrototypeOf
 // 2. Object.create()
 // 3. new