/* The class `Person` has a constructor that initializes `name` and `gender` properties. */
class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
};

/* The Apartment class manages a list of residents, allowing only instances of the Person class to be
added. */
class Apartment {
    flat = [];

    addResident(person) {
        if (person instanceof Person) {
            this.flat.push(person);
        }
        else {
            console.log('Invalid person type. Only Person instances are allowed.');
        }
    }
};


/* The `Building` class represents a building with a maximum number of apartments that can be added to
it. */
class Building {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (apartment instanceof Apartment) {
            if (this.apartments.length < this.maxApartments) {
                this.apartments.push(apartment);
            }
            else {
                console.log('Building is full. Maximum number of apartments reached.');
            }
        } else {
            console.log('Invalid apartment type. Only Apartment instances are allowed.');
        }
    }
}

/* The code `const person1 = new Person('Igor', 'man');` and `const person2 = new Person('Anna',
'woman');` is creating two instances of the `Person` class. */
const person1 = new Person('Igor', 'man');
const person2 = new Person('Anna', 'woman');


/* `const apartment1 = new Apartment();` and `const apartment2 = new Apartment();` are creating two
instances of the `Apartment` class. These instances represent two separate apartments, each with its
own list of residents. */
const apartment1 = new Apartment();
const apartment2 = new Apartment();

/* The code `apartment1.addResident(person1);` and `apartment2.addResident(person2);` are adding
residents to the respective apartments. */
apartment1.addResident(person1);
apartment2.addResident(person2);

/* `const building = new Building(2);` is creating a new instance of the `Building` class with a
maximum number of apartments set to 2. This means that the `building` object can hold up to 2
instances of the `Apartment` class. */
const building = new Building(2);

/* `building.addApartment(apartment1);` is adding the `apartment1` instance to the `building` object.
Since the `building` object has a maximum capacity of 2 apartments, this operation is successful. */
building.addApartment(apartment1);
building.addApartment(apartment2);

console.log(building);