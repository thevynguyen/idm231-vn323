
//


// function fade2Content() {
//     console.log('fade2Content called');
//     document.main.classList.remove("blackScreen");
// }

var whiteObj = document.getElementById('white');

const displayObj = document.getElementById('display');


whiteObj.addEventListener('click', function (evt) {
    console.log('white button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

blackObj.addEventListener('click', function (evt) {
    console.log('black button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});


yellowObj.addEventListener('click', function (evt) {
    console.log('yellow button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});


function userPicked(whichOne) {
    console.log('userPicked called: ' + whichOne);
    switch (whichOne) {
        case 'white':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/white_card.svg';
            // display title
            zTitleObj.innerHTML = 'WHITE CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'December 22 - January 19';
            // display description
            zMoreInfo.innerHTML = '<p>Among the Crewmates, there’s nothing quite like, White. A sly dog at keeping hidden your true secret, knowing when to hide in a vent if you see someone headed your way. White is a great leader that is often independent, disciplined, and brave hence why they tend to lead the chat and organize who is safe and who isn’t, carefully slipping their name into the safe pile. <p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
            break;
        case 'black':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/black_card.svg';
            // display title
            zTitleObj.innerHTML = 'BLACK CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'November 22 - December 21';
            // display description
            zMoreInfo.innerHTML = '<p>Black, you are known to be a world-renowned hacker. Fingers are constantly pointed at you, however, due to your intelligent and strong-nature mind you are efficient and have the best detective skills. Although, that does make you a prime suspect a majority of the time, but you play it off well.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
                break;
        case 'yellow':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/yellow_card.svg';
            // display title
            zTitleObj.innerHTML = 'YELLOW CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'October 23 - November 21';
            // display description
            zMoreInfo.innerHTML = '<p>SpongeBob in space is what Yellow truly is at heart. Yellow, you’re good at hiding behind your words, but when the right time comes you have no problem whipping it a weapon and running away from a body or the truth. A big thanks to your passionate and assertive nature.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
                break;
        default:
            displayObj.src ='images/background.png';
    }
}



// Sound Controls TBD //




// Modal Controls

const modal = document.getElementById('modal');

const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function () {
    modal.hidden = !modal.hidden;
});

// // Link modal elements/objects to JS
const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');


// Calendar Input //

const userSubmitObj = document.getElementById('submit');

userSubmitObj.addEventListener('click', function() {
    console.log('User submit button clicked');

    // Get the user date and extract the month of year and day of month 
    const userBday = new Date(document.getElementById('bday').value);
    console.log('userBday is: ' + userBday);

    //Figure out the zodiac sign based on month and of year and day of month 
    let whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log('whichMonth is: ' + whichMonth);

    const whichDayOfMonth = userBday.getUTCDate();
    console.log('whichDayOfMonth is: ' + whichDayOfMonth);

    let AstroSign = "";

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "white";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "black";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "yellow";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "purple";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "pink";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "cyan";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 6 && whichDayOfMonth <= 22)) {
        AstroSign = "lime";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "red";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "orange";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "green";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "brown";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "blue";
    }

    console.log('AstroSign is: ' + AstroSign);

    userPicked(AstroSign);
    // Display custom image based on zodiac sign 

});
