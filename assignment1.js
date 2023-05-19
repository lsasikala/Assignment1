/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: LAVANYA SASIKALA Student ID: 156621211 Date: 20/05/2023
*
********************************************************************************/ 



var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];     //Initializing an array of HTTP verbs.
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];   //Initializing an array of server path.
var serverResponses = ["Welcome to Web700 Assignment1", "This assignment was prepared by Lavanya Sasikala", "Lavanya Sasikala:lsasikala@myseneca.ca", "User Logged In", "Main Panel","Logout Complete"];   //Initializing an array of serverResponses.



function httpRequest(httpVerb, path) {
    //Creating a web servr simulator function to do the task of a simple web server.The function accepts 2 parameters httpVerb and httpPath.
    for(var i = 0; i < serverPaths.length; i++) {
        //Iterating through the server path array to see if the same position in the serverPath array and serverVerbs array corresponds to httpVerb and path
        if (serverPaths[i] == path && serverVerbs[i] == httpVerb) {
            // If the match is found, display the success message by dispalying the serverResponseArray at the same index / position.
                    return console.log(`200:${serverResponses[i]}`);
        }
    }
        
    return console.log(`404:Unable to process ${httpVerb} request for ${path}`);  //If no match is found, display the failure message.
}


httpRequest("GET", "/");   //Calling the function httprewuest with parameters "GET" and "/"
httpRequest("GET", "/about"); //Calling the function httprewuest with parameters "GET" and "/about"
httpRequest("PUT", "/");  //Calling the function httprewuest with parameters "GET" and "/"



function getRandomInt(max) {
    //The function to generate random number.
    return Math.floor(Math.random() * max);
  }


function automateTests() {
    /*This function will continiously invoke the httpRequest function with a random  request 
    that consists of a "GET" or "POST" verb along with one of the predefined paths */

    var testVerbs = ["GET", "POST"]; // //Initializing an array of HTTP verbs.
    var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"]; ////Initializing an array of server path.
    function randomRequest() {
        //This function generates random element from the arrays testVerbs and testPaths and calls the function httpRequest

        var randVerb = testVerbs[getRandomInt(testVerbs.length)]; // Generating a random element from the array testVerbs
        var randPath = testPaths[getRandomInt(testPaths.length)]; // Generating a random element from the array testPaths
        httpRequest(randVerb,randPath); // Calling httepRequest function
    }
    setInterval(randomRequest,1000) //This function  execute the randomRequest function over and over again every 1 second (1000 milliseconds)
}
automateTests();  //Calling the function automateTest()