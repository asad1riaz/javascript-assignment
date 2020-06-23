// CHAPTER 21 TO 25 
// Task #1
function myFunction(){
    var firstName=prompt("Enter First Name!");
    var lastName = prompt("Enter Last Name!");
    var fullName= firstName+ " " +lastName;
    document.write("<h1> Welcome " + fullName);
}

// Task #2
function myFunction(){
    var mobile = prompt("Enter your favourite mobile phone model!")

    document.write("<h1> My favorite phone is: " + mobile);
    document.write("<br>Length of string "+ mobile.length);
}

// Task #3
function search(searchWord){
    var word="Pakistani";
    var searchedIndex=0
    for (let i=0; i<=word.length; i++){
        if (word[i] === searchWord)
            {
                searchedIndex=i;
                break;
            }
    }
    document.write("<h1> String: "+word );
    document.write("<br> Index of 'n': " + searchedIndex);
}

// Task #4
function searchByIndex(){
    var str = "Hello world.";
    var searchedIndex=0
    // var n = str.indexOf("e", 5);
    // document.write(n);
    var indexArr=[];
    var searchWord='l'
    for (let i=0; i<=str.length; i++){
        if (str[i] === searchWord)
            {
                indexArr.push(i);
            }
    }
    document.write("<h1> String: "+str + "<br> Last index of 'l': " + indexArr[indexArr.length-1]);
}

// Task #5
function searchByIndex3(){
    var str="Pakistan";
    var searchWord;
    document.write("<h1>String: " +str);
    document.write("<br> Character at index 3:" +str[3]);

}

// Task #6
function concatination(){
    var str1 = "Hello ";
    var str2 = "world!";
    var str3 = " Have a nice day!";
    var res = str1.concat(str2, str3);
    var firstName=prompt("Enter First Name!");
    var lastName = prompt("Enter Last Name!");
    var fullName=firstName.concat(lastName);
    document.write("<h1> Welcome " + fullName);
}

// Task #7
function  stringReplace(){
    var str = "Hyderabad";
    var res = str.replace("Hyder", "Islam");
    document.write("<h1> City: " + str +"<br> After Replacement: " + res);
}

// task #8
function  stringReplaceAll(){
    var str = "Ali and Sami are best friends. They play cricket and football together.";
    var res = str.replace(/and/g, "&");
    document.write("<h1> Actual string: " + str +"<br> After replacement: " + res);
}

// Task #9
function stringToNumber(){
    var str = "472";
    var num=parseInt(str);
    document.write("<h1> Value: "+str + "<br> Type: String");
    document.write("<h1> <br> Value: "+ num + "<br> Type: Number");
}

// Task #10
function capitalization(){
    var str=prompt("Enter any text!");
    var res = str.toLocaleUpperCase();
    document.write("<h1> User Input: " + str);
    document.write("<br>Upper Case: "+ res);
}

// Task #11
function stringTitalCase(){
    var str=prompt("Enter any text!");
    document.write("<h1> User input: " + str);

    str = str.toLowerCase();   
    str = str.split(' ');
 
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 

    }
    str.join(' '); 

    document.write("<br>Title case: "+ str);
}

// Task #12
function numbertoString(){
    var num = 35.36;
    var myTrunc = num.toFixed(4);

    document.write("<h1> Number: "+num );
    document.write("<br> Result: "+ myTrunc);
}

// Task #13
function inputUserName(){
    var userName=prompt("Enter Username!");
    var found=0
    for (let i=0; i<=userName.length; i++){
        if (userName[i] === '@' || userName[i] === '.' || userName[i] === ',' || userName[i] === '!')
            {
                found=1;
                break;
            }
        }
    if (found)
    document.write("Please enter a valid username!");
    else
    document.write("Thank you! You entered a valid username");
}

// Task #14
function bakerySearch(){
    var a=["cake", "apple pie", "cookie", "chips", "patties"]
    var order=prompt("Welcoe to ABC Bakery. What do you want to order sir/Ma'am?");
    var found=0, i=0;

    for( i =0; i<a.length;i++){
        if(a[i] === order){
            found=1;
            break
        }

    }
    if(found){
        document.write(order+" is available at index "+ (i+1) +"in our bakery");
    }
    else{
        document.write("We are sorry. "+ order +" is not available in our bakery.")
    }
}

// Task #15
function passwordInputCheck(){
    var password=prompt("Enter valid passwordz");
    var found=0, i=0;

    for( i =0; i<a.length;i++){
        if(a[i] === order){
            found=1;
            break
        }

    }
    if(found){
        document.write(order+" is available at index "+ (i+1) +"in our bakery");
    }
    else{
        document.write("We are sorry. "+ order +" is not available in our bakery.")
    }
}


// Task #16
function stringSplit(){
    var str="University of Karachi";
  

    str = str.split('');
    
    for (let i =0; i<str.length; i++){
        document.write(str[i]+"<br>");
    }
}

// Task #17
function printLastCharacter(){
    var str=prompt("Enter any input?");
    document.write("<h1> User Input: " + str);
    document.write("<br> Last Character: " + str[str.length-1])
}
// Task #18
function wordCount(){
    var str="The quick brown fox jumps over the lazy dog.";
    var word="the";
    var a = str.toLowerCase();   
    var a = a.split(" "); 
  
    let count = 0; 
    for (let i = 0; i <= a.length; i++)  
    { 
    
    if (a[i] === word) 
        count++; 
    }
    document.write("<h1> Text: " + str);
    document.write("<br> There are " + count + " occurrence(s) of word" + word)
}







































































































































