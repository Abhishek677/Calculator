//celcius to farenheight

 document.getElementById("box").style.fontSize="20px";
 document.getElementById("reset").style.fontSize="15px"
 

document.getElementById("btn1").onclick = function ()
{
    var txt = parseInt(document.getElementById("box").value);
    var result = (document.getElementById("para1"));
    document.getElementById("para1").style.fontSize="20px";


    if (txt !== "" && !isNaN(txt))
    {
        result.innerHTML = ( (txt * 9 / 5) + 32 ).toFixed(2) + " °F (fahrenheit)";
        result.style.color = "yellowgreen";
    } else
    {
        result.innerHTML = "You Entered Invalid Input";
        result.style.color = "red";
    }

};  // fareheight to celcious 
document.getElementById("btn2").onclick = function ()
{
    var txt = parseInt(document.getElementById("box").value);
    var result = (document.getElementById("para2"));
     document.getElementById("para2").style.fontSize="20px";

    if (txt !== "" && !isNaN(txt))
    {
        result.innerHTML = ((txt - 32) * 5 / 9).toFixed(2) + " °C (celcius)";
        result.style.color = "DeepPink ";
    } else
    {
        result.innerHTML = "You Entered Invalid Input";
        result.style.color = "red";
    }

};

//feet to metres
document.getElementById("btn3").onclick = function ()
{
    var txt = parseInt(document.getElementById("box").value);
    var result = (document.getElementById("para3"));
     document.getElementById("para3").style.fontSize="20px";

    if (txt !== "" && !isNaN(txt))
    {
        result.innerHTML =(txt / 3.2808).toFixed(2) + " m (metres)";
        result.style.color = "DarkViolet ";
    } else
    {
        result.innerHTML = "You Entered Invalid Input";
        result.style.color = "red";
    }

};

//metres to feet
document.getElementById("btn4").onclick = function ()
{
    var txt = parseInt(document.getElementById("box").value);
    var result = (document.getElementById("para4"));
     document.getElementById("para4").style.fontSize="20px";


    if (txt !== "" && !isNaN(txt))
    {
        result.innerHTML =(txt / 0.3048).toFixed(2) + " ft (feet)";
        result.style.color = "Crimson ";
    } else
    {
        result.innerHTML = "You Entered Invalid Input";
        result.style.color = "red";
    }

};

//Inches to centimetres
document.getElementById("btn5").onclick = function ()
{
    var txt = parseInt(document.getElementById("box").value);
    var result = (document.getElementById("para5"));
     document.getElementById("para5").style.fontSize="20px";


    if (txt !== "" && !isNaN(txt))
    {
        result.innerHTML =(txt * 2.54).toFixed(2) + " cm (centimetres)";
        result.style.color = "Gold ";
    } else
    {
        result.innerHTML = "You Entered Invalid Input";
        result.style.color = "red";
    }

};

//centimetres to Inches
document.getElementById("btn6").onclick = function ()
{
    var txt = parseInt(document.getElementById("box").value);
    var result = (document.getElementById("para6"));
     document.getElementById("para6").style.fontSize="20px";


    if (txt !== "" && !isNaN(txt))
    {
        result.innerHTML = (txt * 0.39370).toFixed(2) + " inch (inches)";
        result.style.color = "LimeGreen ";
    } else
    {
        result.innerHTML = "You Entered Invalid Input";
        result.style.color = "red";
    }

};

//Pounds to Kilograms 

document.getElementById("btn7").onclick = function ()
{
    var txt = parseInt(document.getElementById("box").value);
    var result = (document.getElementById("para7"));
     document.getElementById("para7").style.fontSize="20px";


    if (txt !== "" && !isNaN(txt))
    {
        result.innerHTML = (txt * 0.45359237).toFixed(2) + " kg (kilograms)";
        result.style.color = "DarkCyan ";
    } else
    {
        result.innerHTML = "You Entered Invalid Input";
        result.style.color = "red";
    }

};

//kilo to pound

document.getElementById("btn8").onclick = function ()
{
    var txt = parseInt(document.getElementById("box").value);
    var result = (document.getElementById("para8"));
     document.getElementById("para8").style.fontSize="20px";


    if (txt !== "" && !isNaN(txt))
    {
        result.innerHTML =(txt * 2.2046).toFixed(2) + " lb (Pounds)";
        result.style.color = "Olive "
    } else
    {
        result.innerHTML = "You Entered Invalid Input";
        result.style.color = "red"
    }

};

//reset buuton

document.getElementById("reset").onclick = function ()
{   document.getElementById("box").focus();
    var txt = document.getElementById("box").value;
    var result1 = document.getElementById("para1");
    var result2 = document.getElementById("para2");
    var result3 = document.getElementById("para3");
    var result4 = document.getElementById("para4");
    var result5 = document.getElementById("para5");
    var result6 = document.getElementById("para6");
    var result7 = document.getElementById("para7");
    var result8 = document.getElementById("para8");
    
    //f to c
    
        if (txt !== "" || result1 !== "" && result1 == (document.getElementById("para1")))
        {
            
            result1.innerHTML = "";
            txt.value="";
        }
    

    //C TO F
    if (result2 == (document.getElementById("para2")))
    {
        if (txt !== "" && result2 !== "")
        {
            result2.innerHTML = "";
            txt.value="";
        }
    }

    //FEET TO METRES
    if (result3 == (document.getElementById("para3")))
    {
        if (txt !== "" || result3 !== "")
        {
            result3.innerHTML = "";
            txt.value="";
        }
    }

    //METRES TO FEET
    if (result4 == (document.getElementById("para4")))
    {
        if (txt !== "" || result4 !== "")
        {
            result4.innerHTML = "";
            txt.value="";
        }
    }

    //INCES TO CM
    if (result5 == (document.getElementById("para5")))
    {
        if (txt !== "" || result5 !== "")
        {
            result5.innerHTML = "";
            txt.value="";
        }
    }

    //CM TO INCHES
    if (result6 == (document.getElementById("para6")))
    {
        if (txt !== "" || result6 !== "")
        {
            result6.innerHTML = "";
            txt.value="";
        }
    }

    //KG TO LB
    if (result7 == (document.getElementById("para7")))
    {
        if (txt !== "" || result7 !== "")
        {
            result7.innerHTML = "";
            txt.value="";
        }
    }

    //LBTO KG
    if (result8 == (document.getElementById("para8")))
    {
        if (txt !== "" && result8 !== "")
        {
            result8.innerHTML = "";
            txt.value="";
        }
    }
};

            