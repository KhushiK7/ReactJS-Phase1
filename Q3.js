class Actor{
    constructor(name,last,bio,awards,experience){
        this.name=name;
        this.last=last;
        this.bio=bio;
        this.awards=awards;
        this.experience=experience;
    }
    getBio(){
        return `${this.bio} ${this.name}`
    }
    getInfo(){
        return `${this.experience} ${this.awards} ${this.bio} ${this.name} ${this.last}`
    }
}
let a= new Actor("Khushi","Kapoor","Hi this is khushi u can call me khush",100,"18 years");
console.log(a);
console.log(a.getBio());
console.log(a.getInfo());
let b=new Actor("zac","efron","hey",120,"25 years");
console.log(b);