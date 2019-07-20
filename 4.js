class Animal{
    constructor(name,color)
    {
        this.name=name;
        this.color=color;
    } 
    getProperties(){
        return this.name + " " + this.color ;
    };

}
class Dog extends Animal{
    constructor(voice){
        super("oscar","brown");
        this.voice="bark";
    }
}
let cat =new Animal("kitty","black");
console.log(cat);
console.log(cat.getProperties());
let newDog= new Dog("oscar","brown");
console.log(newDog);
