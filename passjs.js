
    var totalScore = 0;
    var makeRand = false;
    var currentTotal = 0;
/*
    This function calculates the password score by going through each character in the string and store its
    values in an array. Once all values are stored the score will be calculated and a message will be shown
    on the password strength and it's score. If the paaswords don't match a message will also be shown. 
    If both password fields are blank it will print password strength too weak because they technically are 
    the same. 
*/
function calcScore(n){
    totalScore = 0;
    currentTotal = 0;
    var myInput = document.getElementById("psw1");
    var myInput2 = document.getElementById("psw2");
    var errorMessage = document.getElementById("error");
    var rand = document.getElementById("random");
    var pass1 = myInput.value;
    var pass2 = myInput2.value;
    var randVal = rand.value;
    /*first check if passwords match then if they do use a for loop to search every character in
    the password. when a certain value is found insert it into an assocative array where they 
    will have key-value pair equally N,U,D,S,D',S'.
    */
    var arr =[];
    arr["upper"]= 0 
    arr["lower"] =0; 
    arr["digits"] =0;
    arr["symbol"] = 0;
    arr["digitsMid"] =0;
    arr["symbolMid"] = 0;
    var midTotal=0;
    var numChar = 0;
    var midLen=0;

    //if generating random password need to make pass1 equal to the parameter n
    if(makeRand)
    {
        pass1 = n;
        
    }

    var totalLength = pass1.length; //keeps track of how many characters there are in password
     if(pass1 == pass2  || makeRand )
    {
        numChar = pass1.length *4;
 
        
        for(var i=0;i<pass1.length;i++)
        {
            //for middle digit and symbols, middle will start at the 3rd character if password is at
            //least of lenght 5. 
            midLen= pass1.length -2;

            //check for upperCase character
            if(pass1[i] >= "A" && pass1[i] <= "Z")
            {
                arr["upper"]+=1;
            } 

            //check for upperCase character
           else if(pass1[i] >="a" && pass1[i] <="z" )
            {
                arr["lower"] +=1;
            }
            //check for numbers
           else if(pass1[i] >= "0" && pass1[i] <= "9")
            {
                
                if(i > 1 && i< midLen)
                {
                    arr["digitsMid"]+=1;
                }
                else{
                arr["digits"] +=1;
                }
            }
            //check for everything else
            else{
                
                if(i > 1 && i< midLen )
                {

                    arr["symbolMid"]+=1;
                }
                else{
                arr["symbol"] +=1;
                }
            }

        }
      
        //calculate the scores of each character
        if(arr["digits"] == pass1.length)
        {
                arr["digits"] =0;
        }
        else{
            
            arr["digits"]*=4;
        }
        if(arr["upper"] > 0)
        {
           
            var u = (pass1.length - arr["upper"]) *2;
            arr["upper"] = u;
        }
        if(arr["lower"] > 0)
        {
            var low = (pass1.length - arr["lower"]) *2;
            arr["lower"] =low;
        }

      arr["symbol"] *=6;
      midTotal = (arr["symbolMid"] + arr["digitsMid"]) *2;
      totalScore = numChar + arr["digits"] + arr["upper"] + arr["symbol"]+ arr["lower"] + midTotal;
      currentTotal = totalScore;
      
      if(!makeRand)
      {
      makeRand = false
      color(totalScore)
      }

    else{makeRand = false;}
      event.preventDefault();
    }
    else{
     
        errorMessage.style.color = 'orange';
        errorMessage.style.fontSize = '55px';
        document.getElementById("error").innerHTML = "<br>passwords don't match<br>";
        event.preventDefault();
    }
}

    /*
    This function will generate the message regarding password strength
    */
    function color(num){
    var errorMessage = document.getElementById("error");
        if(num <= 20)
        {
            errorMessage.style.color = 'red';
            errorMessage.style.fontSize = '55px';
            document.getElementById("error").innerHTML = "<br>password's strength is too weak <br>" + 
            "Your password score is " + totalScore;

        }
        else if (num >20 && num <=40)
        {
            errorMessage.style.color = 'yellow';
            errorMessage.style.fontSize = '55px';
            document.getElementById("error").innerHTML = "<br>password's strength is moderate <br>" + 
            "Your password score is " + totalScore;

        }
        else 
        {
            errorMessage.style.color = 'green';
            errorMessage.style.fontSize = '55px';
            document.getElementById("error").innerHTML = "<br>password's strength is strong<br>"
            + "Your password score is " + totalScore;
        }
    }


/*
This function generates the random password by first creating a password lenght of at least 8
and a max of 25. All possible values will be stored in a string.To genereate the password this function will 
keep adding characters to the string storing the password.
*/
function randomPass(){
   
       var passLength= Math.floor(Math.random()*(25-8) +8);
        var pass= ''; //the random password
        //stores all a-z, A-Z, 0-9 and most, but not all symbols
        var str= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()-_=+<>|{}?/,.":;';
        var i;
   
    for(i=0; i<passLength;i++)
    {
        //get a random charachter from str
     var char = Math.floor(Math.random() * str.length + 1); 
     pass += str.charAt(char) 
     makeRand = true;
     calcScore(pass)
     if(currentTotal > 40 && passLength == i)
     {
        break;
     }

    }
    alert(" random pass generated is " + pass + " it's score is " + currentTotal)
}

    //the rest of the file creates the form 
    var newID = "newForm";
    var h = document.createElement("H2");
    var t = document.createTextNode("Login"); 
    h.appendChild(t); 
    document.body.appendChild(h);


    var newLabel = document.createElement('label');
	newLabel.setAttribute("for", newID);
	newLabel.innerHTML = "<b>UserName:</b> ";

    var newInput = document.createElement('input');
	newInput.setAttribute("type", "text");
	newInput.setAttribute("id", newID);
    newInput.setAttribute("name", newID);
    
    var newDiv = document.createElement('div');
	newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    
    //create password field
    var newID2 = "psw1";
    
    var newLabel2 = document.createElement('label');
	newLabel2.setAttribute("for", newID2);
	newLabel2.innerHTML = "<b>Password:</b>";
	
	var newInput2 = document.createElement('input');
	newInput2.setAttribute("type", "password");
	newInput2.setAttribute("id", newID2);
	newInput2.setAttribute("name", newID2);
    
    var newDiv2 = document.createElement('div');
	newDiv2.appendChild(newLabel2);
	newDiv2.appendChild(newInput2);
    
    //create textbox for password to be re-entered
    var newID3 = "psw2";
    
    var newLabel3 = document.createElement('label');
	newLabel3.setAttribute("for", newID3);
	newLabel3.innerHTML = "<b>Re-enter password:</b>";
	
	var newInput3 = document.createElement('input');
	newInput3.setAttribute("type", "password");
	newInput3.setAttribute("id", newID3);
	newInput3.setAttribute("name", newID3);
    
    var newDiv3 = document.createElement('div');
	newDiv3.appendChild(newLabel3);
	newDiv3.appendChild(newInput3);

    //create submit button
    var newID4 = "action_button";
	
	var newInput4 = document.createElement('input');
	newInput4.setAttribute("type", "submit");
    newInput4.setAttribute("value", "Submit");
	newInput4.setAttribute("id", newID4);
	newInput4.setAttribute("name", newID4);
    
     //create button for random password
    var newID5 = "random";
	
    var newInput5 = document.createElement('input');
    newInput5.setAttribute("type", "button");
    newInput5.setAttribute("value", "Make random password");
    newInput5.setAttribute("id", newID5);
    newInput5.setAttribute("name", newID5);

    var newID6 = "error";

    var newLabel6 = document.createElement('paragraph');
    var newInput6 = document.createElement('paragraph');

	newLabel6.setAttribute("for", newID6);
    newInput6.setAttribute("id", newID6);

    var passForm = document.querySelector("#passForm");
    passForm.appendChild(h);
    passForm.appendChild(newDiv);
 
    var passForm2 = document.querySelector("#passForm");
    passForm2.appendChild(newDiv2);

    var passForm3 = document.querySelector("#passForm");
    passForm3.appendChild(newDiv3);

    var passForm4 = document.querySelector("#passForm");
    passForm4.appendChild(newInput4);

    
    var passForm5 = document.querySelector("#passForm");
    passForm5.appendChild(newInput5);

    var passForm6 = document.querySelector("#passForm");
    document.body.appendChild(newInput6);
    passForm.addEventListener("submit", calcScore);
    newInput5.addEventListener("click", randomPass);


