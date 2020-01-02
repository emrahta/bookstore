var database=[
{
        username:"twr",
        password:"twr"
}
];

function check () {

var userNamePrompt= prompt("What's your username?");
var passwordPrompt= prompt("What's your password?");

function signIn(user,pass){
    if (database[0].username===user&&
        database[0].password===pass){
        window.open("landing.html", "_blank");
    }else{
        alert("Sorry, wrong username and/or password");
    }
}
signIn(userNamePrompt, passwordPrompt)
}
