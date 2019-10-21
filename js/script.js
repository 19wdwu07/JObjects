console.log('Objects');

//Objects are a data type that can store different types of data
//Objects can contain functions called methods
//Objects have properties and its values
//called key-value pair
//Objects are declared with curly braces
//object property-value is separated by comma
//object property and its value is separated by colon
//An array of objects are separated by comma

//var dog = {name:"John", age:7, height:40};
//dog1
var dog = document.getElementById('dog1').addEventListener('click',function(){
//another way of declaring object
var dog1 = {
    name : "John",
    age  : 7,
    height: 40,
    photo : "images/John.jpeg"
};

//access property values


$('#result2').hide();
$('#result1').show();
document.getElementById('result1').innerHTML = "</br></br></br> The name of the dog is " + dog1.name;
document.getElementById('result1').innerHTML += '</br></br><img class="img-thumbnail" src="' + dog1.photo +'" alt="Dog1"/>';
document.getElementById('result1').innerHTML += "</br></br> The age of the dog is " + dog1.age + " years";
document.getElementById('result1').innerHTML += "</br> The height of the dog is " + dog1.height + " cm";


});





//dog2
document.getElementById('dog2').addEventListener('click',function(){

var dog2 = {
    name : "Sam",
    age  : 10,
    height: 45,
    breed:"labrador",
    male :false,
    photo:"images/lab.jpeg"
};

//access property values
$('#result1').hide();
$('#result2').show();
document.getElementById('result2').innerHTML = "</br></br></br> The name of the dog is " + dog2.name;
document.getElementById('result2').innerHTML += '</br></br><img class="img-thumbnail" src="' + dog2.photo +'" alt="Dog2"/>';
document.getElementById('result2').innerHTML += "</br></br> The age of the dog is " + dog2.age + " years";
document.getElementById('result2').innerHTML += "</br> The height of the dog is " + dog2.height + " cm";
document.getElementById('result2').innerHTML += "</br> The breed of the dog is " + dog2.breed;
// document.getElementById('result2').innerHTML += "</br> The gender of the dog is " + dog2.male;
if (dog2.male === true) {
document.getElementById('result2').innerHTML += "</br> The gender of the dog is male";
} else {
document.getElementById('result2').innerHTML += "</br> The gender of the dog is female";
}
});
