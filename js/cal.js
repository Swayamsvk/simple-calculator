
var number=document.querySelectorAll(".number");
var symbol=document.querySelectorAll(".symbol");
var input=document.querySelector(".input");
var a=document.querySelector(".a");
var b=document.querySelector(".b");
var c=document.querySelector(".c");
var d=document.querySelector(".d");




function show(num)
{if(a.textContent==0)
    {
        a.textContent=num;
    }
    else{c.textContent=num;}
    
}


function symbolInit(symb){

    switch(symb){
        case '+':b.textContent=symb;
        break;
        case '-':b.textContent=symb;
        break;
        case '*':b.textContent=symb;
        break;
        case '/':b.textContent=symb;
        break;
        case '.C':b.textContent=symb;
        break;
        default: '';
    }

}
//switch case

function result(){
    num=a.textContent;
    num1=c.textContent;
    num2=num-(-num1);
    if(b.textContent=='+')
    {
        d.textContent=num2;
    }
    

   else if(b.textContent=='-')
    {
        d.textContent=a.textContent-c.textContent;
    }
    

    else if(b.textContent=='*')
    {
        d.textContent=a.textContent*c.textContent;
    }
    

    else if(b.textContent=='/')
    {
        d.textContent=a.textContent/c.textContent;
    }
    
   
    else{

    }
    
}

function reset()
{
    a.textContent=0;
    b.textContent=" ";
    c.textContent=0;
    d.textContent=0;
}




