
//


// function fade2Content() {
//     console.log('fade2Content called');
//     document.main.classList.remove("blackScreen");
// }

var whiteObj = document.getElementById('white');
var blackObj = document.getElementById('black');
var yellowObj = document.getElementById('yellow');
var purpleObj = document.getElementById('purple');
var pinkObj = document.getElementById('pink');
var cyanObj = document.getElementById('cyan');
var limeObj = document.getElementById('lime');
var redObj = document.getElementById('red');
var orangeObj = document.getElementById('orange');
var greenObj = document.getElementById('green');
var brownObj = document.getElementById('brown');
var blueObj = document.getElementById('blue');
var sosObj = document.getElementById('sos');


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

purpleObj.addEventListener('click', function (evt) {
    console.log('purple button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

pinkObj.addEventListener('click', function (evt) {
    console.log('pink button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

cyanObj.addEventListener('click', function (evt) {
    console.log('cyan button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

limeObj.addEventListener('click', function (evt) {
    console.log('lime button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

redObj.addEventListener('click', function (evt) {
    console.log('red button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

orangeObj.addEventListener('click', function (evt) {
    console.log('orange button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

greenObj.addEventListener('click', function (evt) {
    console.log('green button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

brownObj.addEventListener('click', function (evt) {
    console.log('brown button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

blueObj.addEventListener('click', function (evt) {
    console.log('blue button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

sosObj.addEventListener('click', function (evt) {
    console.log('sos button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});


// Sound Controls TBD //

function stopAllAudio() {
    startRoundObj.pause();
    startRoundObj.currentTime = 0;
    //
    crisisObj.pause();
    crisisObj.currentTime = 0;
    //
    stabbingObj.pause();
    stabbingObj.currentTime = 0;
    //
    doorOpenObj.pause();
    doorOpenObj.currentTime = 0;
    //
    joinLobbyObj.pause();
    joinLobbyObj.currentTime = 0;
    //
    killObj.pause();
    killObj.currentTime = 0;
    //
    reportObj.pause();
    reportObj.currentTime = 0;
    //
    victoryObj.pause();
    victoryObj.currentTime = 0;
    //
    rejectedObj.pause();
    rejectedObj.currentTime = 0;
    //
    scanObj.pause();
    scanObj.currentTime = 0;
    //
    deathObj.pause();
    deathObj.currentTime = 0;
    //
    voteObj.pause();
    voteObj.currentTime = 0;

    // SOS Sound Button
    emergencyMeetObj.pause();
    emergencyMeetObj.currentTime = 0;
}

const startRoundObj = document.getElementById('startRound');
const crisisObj = document.getElementById('crisis');
const stabbingObj = document.getElementById('stabbing');
const doorOpenObj = document.getElementById('doorOpen');
const emergencyMeetObj = document.getElementById('emergencyMeet');
const joinLobbyObj = document.getElementById('joinLobby');
const killObj = document.getElementById('kill');
const reportObj = document.getElementById('report');
const victoryObj = document.getElementById('victory');
const rejectedObj = document.getElementById('rejected');
const scanObj = document.getElementById('scan');
const deathObj = document.getElementById('death');
const voteObj = document.getElementById('vote');



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
            stopAllAudio();
            startRoundObj.play();
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
            stopAllAudio();
            crisisObj.play();
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
            stopAllAudio();
            stabbingObj.play();
            break;
        case 'purple':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/purple_card.svg';
            // display title
            zTitleObj.innerHTML = 'PURPLE CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'September 23 - October 22';
            // display description
            zMoreInfo.innerHTML = '<p>Unstoppable. Literally, unstoppable. No one ever suspects you, unless you carelessly vent per usual. You are the “mom friend” of the crew and you make sure everything is concise and clear through your fair-minded and diplomatic persona. If you see a threat you eliminate it immediately and quietly to protect your winning chances.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
            stopAllAudio();
            doorOpenObj.play();
            break;
         case 'pink':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/pink_card.svg';
            // display title
            zTitleObj.innerHTML = 'PINK CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'August 23 - September 22';
            // display description
            zMoreInfo.innerHTML = '<p>Out of all the Crewmates, you are the sweetheart of the crew therefore no one would dare to pick you out of a line-up for imposter. Pink tends to be the most loyal, kind, and hardworking compared to the others. Your attention to small detail has become an advantage on the battlefield.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
            stopAllAudio();
            joinLobbyObj.play();
            break;
         case 'cyan':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/cyan_card.svg';
            // display title
            zTitleObj.innerHTML = 'CYAN CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'July 23 - August 22';
            // display description
            zMoreInfo.innerHTML = '<p>If anyone was the easiest to accuse then it be Cyan because you tend to take the blame for everything even if you weren’t in the same room. However, you don’t always make sure you’re taking caution or being careful, which gives everyone the impression once again that you are “sus”. Cheers to your creative, dramatic, and humorous personality.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
            stopAllAudio();
            killObj.play();
            break;
         case 'lime':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/lime_card.svg';
            // display title
            zTitleObj.innerHTML = 'LIME CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'June 21 - July 22';
            // display description
            zMoreInfo.innerHTML = '<p>Lime is absolutely sub-lime. You manage to escape any accusation, usually by throwing Cyan under the bus, and disappearing into the crowd of characters. Your persuasive techniques along with your deep intuition and sentiments make you a challenging opponent although you have a sensitive and caring side.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
            stopAllAudio();
            reportObj.play();
            break;
         case 'red':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/red_card.svg';
            // display title
            zTitleObj.innerHTML = 'RED CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'May 21 - June 20';
            // display description
            zMoreInfo.innerHTML = '<p>Red tends to be the most intelligent one out of all the colors since this Crewmate has a long history of being the most suspicious contender of being an Imposter. There is a myth going around that Red might be the real imposter out of all of them all this time.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
            stopAllAudio();
            victoryObj.play();
            break;
         case 'orange':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/orange_card.svg';
            // display title
            zTitleObj.innerHTML = 'ORANGE CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'April 20 - May 20';
            // display description
            zMoreInfo.innerHTML = '<p>No one can be mad at an orange and you profit off of that. You have a chill essence resonating around you due to your practical and well-grounded nature. However, you are easily persuaded but your calm energy plays off in making everyone believe it was not you. Orange, you’re chill as long as you’re not on the chopping block.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
            stopAllAudio();
            rejectedObj.play();
            break;
        case 'green':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/green_card.svg';
            // display title
            zTitleObj.innerHTML = 'GREEN CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'March 21 – April 19';
            // display description
            zMoreInfo.innerHTML = '<p>One and only tactic is used by you, Dark Green. Lying. You lie through the skin of your teeth to get out of any situation, whether it’s faking a task or not being in the room (because you vented). You are a determined and courageous individual but with your nature you are constantly seeking for dynamic, speed, and competition.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
            stopAllAudio();
            scanObj.play();
            break;
        case 'brown':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/brown_card.svg';
            // display title
            zTitleObj.innerHTML = 'BROWN CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'Feburary 19 – March 20 ';
            // display description
            zMoreInfo.innerHTML = '<p>Brown, brown, brown. You are very friendly and selfless, often finding yourself in company of others. Anytime you’re accused, your response is a mess which makes you even more suspicious, even if it is not you. If you’re clear and concise, like Purple, and combine thought actions with your chaotic character, you would be overpowered player.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
            stopAllAudio();
            deathObj.play();
            break;
        case 'blue':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/blue_card.svg';
            // display title
            zTitleObj.innerHTML = 'BLUE CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = 'January 20 – Feburary 18';
            // display description
            zMoreInfo.innerHTML = '<p>People who are dark blue are all over the place. You are either shy and quiet or the most eccentric and energetic ragers. Depending on the mood, you’ll either hunt down one person and take the entire game to conqueror them or subtly take down everyone at once. Unless, of course, you blow your cover by lying about where you were.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
            stopAllAudio();
            voteObj.play();
            break;
        case 'sos':
            zDisplayObj.src = 'images/sos_card.svg';
            zTitleObj.innerHTML = 'Welcome to the Support Deck!'
            zDateRangeObj.innerHTML = '';
            zMoreInfo.innerHTML = '<p>You can complete your task and survive by finding out which Crewmate you are associated with by entering your birthday. Find out and hone your skills in order to win! Pick a Date OR click any of the Crewmate icons to view. Who knows...could you potentially be an Imposter? Credit to the Among Us creators and artists for the images and sounds!</p>';
            modal.hidden = !modal.hidden;
            // play sound 
            stopAllAudio();
            emergencyMeetObj.play();
            break;
        default:
            displayObj.src ='images/background.png';
    }
}


// Modal Controls

const modal = document.getElementById('modal');

const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function () {
    modal.hidden = !modal.hidden;
    stopAllAudio();
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
