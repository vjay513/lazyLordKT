function idTotinyUrl(n) {  
    // Map to store 62 possible characters  
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var map = str.split('');  
    
    tinyUrl = '';  
    var i = 0;
    // Convert given integer id to a base 62 number  
    while (n > 0)  
    {  
        // use above map to store actual character  
        // in short url
        tinyUrl += map[n % 62] 
        n = Math.floor(n /62)
    }

    // Reverse tinyUrl to complete base conversion  
    return tinyUrl.split("").reverse().join("");  
}  
      
// Function to get integer ID back from a short url  
function tinyUrltoID(tinyUrl)  {  
    var id = 0; // initialize result  
    
    // A simple base conversion logic  
    for (var i = 0; i < tinyUrl.length; i++)  
    {  
        if ('a' <= tinyUrl.charAt(i) &&  tinyUrl.charAt(i) <= 'z'){
            id = id * 62 + tinyUrl.charAt(i).charCodeAt() - 'a'.charCodeAt();  
        }

        if ('A' <= tinyUrl.charAt(i) &&  tinyUrl.charAt(i) <= 'Z'){
            id = id * 62 + tinyUrl.charAt(i).charCodeAt() - 'A'.charCodeAt() + 26;  
        }

        if ('0' <= tinyUrl.charAt(i) &&  tinyUrl.charAt(i) <= '9'){
            id = id * 62 + tinyUrl.charAt(i).charCodeAt() - '0'.charCodeAt() + 52;  
        }
    }  
    return id;  
} 
function main (){ 
    var database = [123456, 1345272]
    var uniqKey = 12345;  
    if(database.indexOf(uniqKey) > 0){
        console.log("we already have record with same unique key")
    } else{
        var tinyUrl = idTotinyUrl(n);  
        console.log("Generated short url is " + tinyUrl);  
        console.log("Id from url is " +  tinyUrltoID(tinyUrl));  
    }

} 