class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    doSomething() { 
        setTimeout(function() {
            console.log('Something async here');
        }, 100); 
    }
}