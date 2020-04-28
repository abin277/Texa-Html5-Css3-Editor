//Font Size (Maximum Size is 24)
function customFontSize(){
let customNum=prompt("Font Size in Px(Default 13px Max 24px)")
if(isNaN(customNum))
 {
 alert("You Have Entered A Wrong Value")
 }
 elseif (customNum>=25)
 {
alert("The Maximum Font Size is 24")
 }
else
 {
document.getElementById("field").style.fontSize=customNum+"px"
 }
 }
//FONT STYLE STARTS

function fontMono(){
document.getElementById("field").style.fontFamily="monospace"
}
function fontSans(){
document.getElementById("field").style.fontFamily="Sans-Serif"
}
function fontCursive(){
document.getElementById("field").style.fontFamily="cursive"
}
