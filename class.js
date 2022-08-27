//syntactic sugar

class Instructor{
    name;
    designation ='web course instructor'
    team =  'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location =location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`create the quiz ${module}`)
    }

}

const amir  = new Instructor('amir', 'mumbai');
console.log(amir);
amir.startSupportSession(9.00);
amir.createQuiz(60);

const suleiman = new Instructor('suleiman', 'Dhaka');
console.log(suleiman);