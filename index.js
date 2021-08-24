var buttonColours=['red','blue','green','yellow'];
var level=0;
var l;
var start=false;
var gamePattern=[];
var userClickPattern=[];
$(document).keypress(function (){
    if(!start)
        nextSequence();
    start=true  
    
})
//var userColor;
function nextSequence()
{
    l=0;
    userClickPattern=[];
    var randomNumber=Math.floor(Math.random()*3)+1;
    randomColor=buttonColours[randomNumber]
    gamePattern.push(randomColor);
    playSound(randomColor);
    level++;
    $("#level-title").text("Level "+level);
    

}
$(".btn").click(handleClick);
function animatePress(color)
{
    $("#"+color).addClass("pressed");
    setTimeout(() => {  $("#"+color).removeClass("pressed"); }, 100);
}
function handleClick()
{
    userColor=$(this).attr("id");
    
    playSound(userColor);
    animatePress(userColor);
    if(start)
    {
        userClickPattern.push(userColor);
        if(userClickPattern[l]==gamePattern[l])
            console.log("true");
        else
            restart();

        l++;
        if(l==gamePattern.length)
            setTimeout(() => { nextSequence(); }, 1000);
    }
    
    console.log(userClickPattern);
    console.log(gamePattern);

}
function playSound(color)
{
    $("#"+color).fadeOut(100).fadeIn(100);
    var audio =new Audio('sounds/'+color+'.mp3');
    audio.play();
}

function restart()
{
    $("#level-title").text("Game over !! press any key to start over");
    start=false;
    playSound('wrong');
    userClickPattern=[];
    gamePattern=[];
    level=0;
    $("body").addClass("game-over");
    setTimeout(() => { $("body").removeClass("game-over"); }, 200);
    
}
