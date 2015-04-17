var Person = function () {
    console.log('Constructor');
};

Person.prototype.doSomething = function () {
   setTimeout(function() {
        console.log('Something async here');
    }, 100); 
};