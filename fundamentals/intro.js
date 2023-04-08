console.log("Hello you tube: ");
let a ;
console.log("hwllo", a);
a= 10;
a= 10.1
a='absccc'
a= true
console.log("Hello" ,a);
//function 
function fn (){
    console.log("Hello I ran");
    return "In JSX i will return HTML"
}
let container =fn() ;
console.log(container); //goes to your html page
fn();

// objects-> collection of key value pair
//key : string /number
// value => any valid in js type
// object is nothing but a collectio n of key value pair a key can be string or number but value can be anything
let cap = {
    name: "Steve",
    lastname: "Rogers",
    age: 40,
    isAvenger : true,
    movies: ["first Avenger", "winter solder", "Civil war"],
    saysHi: function (){
        console.log("hello I ran");
    },
    address: {
        city: "Manhatten",
        state: "New work"
    }

}
console.log("name", cap.name);
console.log("lastName",cap.lastname);
console.log("firstMovie", cap.movies[0]);
console.log("firstMovie", cap.movies[2]);

cap.saysHi();


// Arrays
let arr=[];
arr=[1,2,34,5];

//HOC, import and exports ES6