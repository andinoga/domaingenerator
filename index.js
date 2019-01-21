window.onload = () => 
{
    document.querySelector('#domain').innerHTML = generateDomain();
    console.log('Hello'); 
    
}; 


let generateDomain = () => { 
    
    var pronoun = ["The", "Our"];
    var adjective = ["beautiful", "dangerous", "quaint"];
    var noun= ["symbols", "code"];
    var com= [".com"]; 

console.log (generateDomain);
        
        
        let pronounindex = Math.floor(Math.random() * pronoun.length);
        let adjectiveindex = Math.floor(Math.random() * adjective.length);
        let nounindex = Math.floor(Math.random() * noun.length);
        let comindex = Math.floor(Math.random() * com.length); 
        
        return pronoun[pronounindex]+adjective[adjectiveindex]+noun[nounindex]+com[comindex];
}; 

var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++)
{
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
}