function customFontSize(){
let customNum=prompt("Font Size in Px(Default 13px Max 24px)");
if(isNaN(customNum))
{
 alert("Sorry This Value Is Not Valid");
}
else if(customNum>=25)
{
alert("The Maximum value is 24");
}
else
{
document.getElementById("field").style.fontSize=customNum+"px";
}
}
//FONT STYLE STARTS
function fontMono(){
document.getElementById("field").style.fontFamily="monospace";
}
function fontSans(){
document.getElementById("field").style.fontFamily="Sans-Serif";
}
function fontCursive(){
document.getElementById("field").style.fontFamily="cursive";
}
