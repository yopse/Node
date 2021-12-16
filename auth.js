const register  = function (username) {


    console.log(`${username} has been registered` );
}



const login = function(username, password)
{

    console.log(`${username} is logged in`);
}


module.exports = {

     register,
    login
}