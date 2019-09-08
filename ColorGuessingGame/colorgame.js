function generaterandomcolors(num)
    {
        var arr=[];
        for(i=0;i<num;i++)
        {           
            arr.push(randomcolor());
        }
        return arr;
        
    }

    function randomcolor()
    {
        var r=Math.floor(Math.random() * 256);
        var g=Math.floor(Math.random() * 256);
        var b=Math.floor(Math.random() * 256);

        return "rgb("+ r +", "+ g +", "+ b +")";
    }


    function pickcolor()
    {
        var index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }

    var numSq=6;
    var colors = generaterandomcolors(numSq);

var sq= document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay= document.getElementById("colordisplay");
colordisplay.textContent = pickedcolor;
var message= document.querySelector("#message");
var h1=document.querySelector("h1");
var h2=document.querySelector("h2");
var resetbutton = document.querySelector("#reset");
var easy = document.querySelector("#EasyBtn");
var hard = document.querySelector("#HardBtn");

easy.addEventListener("click",function()
{
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSq=3;
    colors = generaterandomcolors(numSq);
    pickedcolor=pickcolor();
    colordisplay.textContent= pickedcolor;
    for(var i=0;i<sq.length;i++)
    {
        if(colors[i])
        {
            sq[i].style.backgroundColor=colors[i];
        }
        else
        {
            sq[i].style.display="none";
        }   
    }
    resetbutton.textContent="Try again";
    message.textContent="";
});

hard.addEventListener("click",function()
{
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numSq=6;
    colors = generaterandomcolors(numSq);
    pickedcolor=pickcolor();
    colordisplay.textContent= pickedcolor;
    for(var i=0;i<sq.length;i++)
    {
        sq[i].style.backgroundColor=colors[i];
        sq[i].style.display="block";
    }
    resetbutton.textContent="Try again";
    message.textContent="";
});

resetbutton.addEventListener("click",function()
{
    colors=generaterandomcolors(numSq);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for (var i = 0; i < sq.length; i++)
     {
        sq[i].style.backgroundColor = colors[i];
     }
    h1.style.backgroundColor= "steelblue";
    h2.style.backgroundColor= "steelblue";
    resetbutton.textContent="NEW COLORS";
    message.textContent="";
});



for (var i = 0; i < sq.length; i++) {
    //to give color to the squares
    sq[i].style.backgroundColor = colors[i];
    //add click listeners
    sq[i].addEventListener("click", function()
    {
        //grap clicked colors
        var clickedcolor=this.style.backgroundColor;
        //check
        if(pickedcolor === clickedcolor )
        {
            message.textContent="Correct!";
            changecolors(clickedcolor);
            h1.style.backgroundColor=pickedcolor;
            h2.style.backgroundColor=pickedcolor;
            resetbutton.textContent="Play Again ?"
        }
        else
        {
            this.style.backgroundColor= "#232323";
            message.textContent="try again";
        
        }
    });

    function changecolors(color)
    {
        for (var i =0; i< sq.length; i++) {
            sq[i].style.backgroundColor= color; 
            
        }
    }

    function pickcolor()
    {
        var index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }
    
    
    
}