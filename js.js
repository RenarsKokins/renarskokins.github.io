var currentIndex = 0;
var lastIndex = currentIndex;
var fileName = location.pathname.split("/").slice(-1);

function validateForm() {
    if (document.forms["emailForm"]["fname"].value == "") {
        alert("First name must be filled out!");
        return false;
    } else if(document.forms["emailForm"]["lname"].value == "") {
        alert("Last name must be filled out!");
        return false;
    } else if(document.forms["emailForm"]["email"].value == ""){
        alert("Email must be filled out!");
        return false;
    }else if(document.forms["emailForm"]["subject"].value == ""){
        alert("Subject must be filled out!");
        return false;
    }

    if(/^[a-zA-Z]+$/.test(document.forms["emailForm"]["fname"].value) != true){
        alert("First name must consist of letters only!");
        return false;
    }
    else if(/^[a-zA-Z]+$/.test(document.forms["emailForm"]["lname"].value) != true){
        alert("Last name must consist of letters only!");
        return false;
    }
    else if((!document.forms["emailForm"]["email"].value.includes("@")) || (!document.forms["emailForm"]["email"].value.includes("."))){
        alert("Email must be valid!");
        return false;
    }

    return true;
}

function checkGuess(){
    let message = "";
    let correct = false;

    try{
        var element = document.getElementById("guessTemp");
        element.parentNode.removeChild(element);
    } catch(ex){

    }
    const newDiv = document.createElement("div");

    let val = document.getElementById("guess").value;

    if(val == "") message = "You should try harder... at least enter a value";
    else if(val == 19) {message = "You are a wizard!"; correct = true;}
    else if(val < 0) message = "That's just impossible...";
    else if(val >= 16 && val <= 25) message = "Preety close!";
    else if(val < 16) message = "I'M NOT A KID!!! :(";
    else if(val > 100) message = "Just... no";
    else if(val > 25) message = "Dang, I should really take care of my body I guess...";
    
    if(correct) newDiv.className = "correct";
    else newDiv.className = "incorrect";

    newDiv.setAttribute("id", "guessTemp");

    const newContent = document.createTextNode(message);
    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("guess-part");
    currentDiv.insertAdjacentElement("beforeend",newDiv);
    
}

function updateGlow(index){
    for(let i=1;i<document.getElementById("nav").childElementCount+1;i++){
        document.getElementById(i).lastElementChild.classList.add("inactive");
    }
    document.getElementById(index).lastElementChild.classList.remove("inactive");

    lastIndex = currentIndex;
}

window.onscroll = function() {
    if(fileName == "tutorial-csdd"){
        var rect1 = document.getElementById("start").getBoundingClientRect();
        var rect2 = document.getElementById("setup").getBoundingClientRect();
        var rect3 = document.getElementById("use").getBoundingClientRect();
        var rect4 = document.getElementById("contacts").getBoundingClientRect();

        if(rect1.top > -rect1.height+100 && rect1.top < 100){
            currentIndex = 1;
        } else if(rect2.top > -rect2.height+100 && rect2.top < 100){
            currentIndex = 2;
        }else if(rect3.top > -rect3.height+100 && rect3.top < 100){
            currentIndex = 3;
        }else if(rect4.top > -rect4.height+100 && rect4.top < 100){
            currentIndex = 4;
        }
        if(currentIndex!=lastIndex) updateGlow(currentIndex);

    } else if(fileName == "index"){
        var rect1 = document.getElementById("landing").getBoundingClientRect();
        var rect2 = document.getElementById("about").getBoundingClientRect();
        var rect3 = document.getElementById("projects").getBoundingClientRect();
        var rect4 = document.getElementById("contacts").getBoundingClientRect();

        if(rect1.top > -rect1.height+100 && rect1.top < 100){
            currentIndex = 1;
        } else if(rect2.top > -rect2.height+100 && rect2.top < 100){
            currentIndex = 2;
        }else if(rect3.top > -rect3.height+100 && rect3.top < 100){
            currentIndex = 3;
        }else if(rect4.top > -rect4.height+100 && rect4.top < 100){
            currentIndex = 4;
        }
        if(currentIndex!=lastIndex) updateGlow(currentIndex);
    }
};

// function updateGlow(index){
//     for(let i=1;i<5;i++){
//         document.getElementById(i).lastElementChild.classList.add("inactive");
//     }
//     document.getElementById(index).lastElementChild.classList.remove("inactive");

//     lastIndex = currentIndex;
// }

// window.onscroll = function() {
//     var rect1 = document.getElementById("landing").getBoundingClientRect();
//     var rect2 = document.getElementById("about").getBoundingClientRect();
//     var rect3 = document.getElementById("projects").getBoundingClientRect();
//     var rect4 = document.getElementById("contacts").getBoundingClientRect();

//     if(rect1.top > -rect1.height+100 && rect1.top < 100){
//         currentIndex = 1;
//     } else if(rect2.top > -rect2.height+100 && rect2.top < 100){
//         currentIndex = 2;
//     }else if(rect3.top > -rect3.height+100 && rect3.top < 100){
//         currentIndex = 3;
//     }else if(rect4.top > -rect4.height+100 && rect4.top < 100){
//         currentIndex = 4;
//     }
//     if(currentIndex!=lastIndex) updateGlow(currentIndex);
// };

$(document).ready(function() {
    $('#easter-egg').remove();
});