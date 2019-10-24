//Define a user variable and assign a literal object
let user = {
    username: '',
    password: '', 
    //Create a greet function on the user object that logs
    greet: function(){
        console.log(`Hello, I am ${this.username}`);
        //alert(`Hello, I am ${this.username}`);
    },
    // Create a function to update the username on this user object
    setUsername : function(userNameNew){
        this.username =userNameNew;
    }
}

//Show the user object as output
console.log(user);

//Show the user type as output using typeof
console.log(typeof(user));

//Set the following properties on the user
user.username = `batman`;
user.password = `hunter2`;

//Log the user variable again
console.log(user);

//Show the message "Access Granted" ..
user.checkAccess = function(){
    if(this.username ==`batman` && this.password==`********`){
        //alert(`Access Granted"`);
        console.log(`Access Granted"`);
    }else{
        //alert(`Access Denied"`);
        console.log(`Access Denied"`);
    }
}
user.checkAccess();

//Create a second user object
let userSecond = Object.assign({}, user);

userSecond.username = `wonderwoman`;
userSecond.password = `123123`;





//Call the greet method on the second user object
userSecond.greet();

// Call the update username method on the second user object to change the username
userSecond.setUsername('spiderman');

//Call the greet method one more time
userSecond.greet();