let a={firstName:"ryan",lastName:'gosling',yearsOfExperience:32,noOfMovies:50,latestMovie:'first man',noOfAwards:20,
bio:"hi i am ryan gosling",getfullname(){
    return `${this.firstName} ${this.lastName}`;
}
,getBio(){
    return `${this.yearsOfExperience} ${this.noOfMovies} ${this.bio}`}
,getinfo(){`${this.latestMovie} ${this.noOfAwards} ${this.noOfMovies} ${this.yearsOfExperience}`

}
};
console.log(a.getBio());
console.log(a.getinfo());
console.log(a.getfullname());
console.log(a.firstName);
let b={name:"khushi",last:"kapoor"};
let c={...a,...b}
console.log(c);


