const outputElement = document.querySelector('#output');
const btnCopy = document.querySelector('#cpy');
const passwordLengthElement = document.querySelector('#length');
const numberElement = document.querySelector('#number');
const capitalElement = document.querySelector('#capital');
const smallElement = document.querySelector('#small');
const symbolElement = document.querySelector('#symbol');
const frm = document.querySelector('#frm');


//Button Click to copy password
btnCopy.addEventListener('click',async()=>{
    const pass=outputElement.value;
    if(pass){
        console.log(pass);
await navigator.clipboard.writeText(pass);   //navigator refers to we have access or call the browser , and we choose clipboard to store the password in temporary manner , writeText is a function to print the password while we press ctrl+v and we give the variable pass as parameter.
alert("password copied");
    }
    else{
alert("There is no password to copy!");
    }
    
});

function generateRandomChar(min,max){  //here min,max refers to the limit of ASCII for example 65-90 - A-Z

    const limit=max-min+1;     //here , we can set limit for characters , 90-65=25 , total alphabets is 26 so we can add 1 so the formula is  limit =  (max-min)+1
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);    //fromCharCode converts ASCII value to Respective characters , ie ., 66-B,67-C.

}

function capitalValue(){
    return generateRandomChar(65,90);
}

function smallValue(){
    return generateRandomChar(97,122);
}

function numberValue(){
    return generateRandomChar(48,57);
}

function symbolValue(){
  const symbol="!@#$%^&*()-_=+/?.>,'<`~{}[]\|:;"
  return symbol[Math.floor(Math.random()*symbol.length)];
}

const functionArray = [
{
    checkbox:capitalElement,
    fun:capitalValue
},

{
    checkbox:smallElement,
    fun:smallValue
},

{
    checkbox:numberElement,
    fun:numberValue
},

{
    checkbox:symbolElement,
    fun:symbolValue
}

];

frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const limit =passwordLengthElement.value;


    if(numberElement.checked==false && capitalElement.checked==false && smallElement.checked==false && symbolElement.checked==false){
        alert("Please Select Atleast One box");  // If all the checkboxes are not selected , then this alert message will work.
    }


    let generatedPassword="";

  
const funArray=functionArray.filter(({checkbox})=>checkbox.checked);   //Here we can filter the function that is functionArray , in functionArray we can filter te checkbox(key name)which is consist of the variable of the checkbox, here we should check the checkboc if checked or not and if checked only the filter function will store it into the funArray variable otherwise not consider.
for(i=0;i<limit;i++){
    const index=Math.floor(Math.random()*funArray.length);
    const letter= funArray[index].fun();
    generatedPassword+=letter;
    
}

outputElement.value=generatedPassword;
});



