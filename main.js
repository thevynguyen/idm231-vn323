
//

// function fade2Content() {
//     console.log('fade2Content called');
//     document.body.classList.remove("blackScreen");
// }


var whiteObj = document.getElementById('white');

const displayObj = document.getElementById('display');


whiteObj.addEventListener('click', function (evt) {
    console.log('white button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

function userPicked(whichOne) {
    console.log('userPicked called: ' + whichOne);
    switch (whichOne) {
        case 'white':
            // displayObj.src = 'images/background.png';
            zDisplayObj.src = 'images/red_card.svg';
            // display title
            zTitleObj.innerHTML = 'WHITE CREWMATE';
            // display date range
            zDateRangeObj.innerHTML = '##-Month to ##-Month';
            // display description
            zMoreInfo.innerHTML = '<p>Red tends to be the most intelligent one out of all the colors since this Crewmate has a long history of being the most suspicious contender of being an Imposter. There is a myth going around that Red might be the real imposter out of all of them.<p>';
            // show hide modal
            modal.hidden = !modal.hidden;
            // play sound
            break;
        // case 'pink':
        //     // displayObj. src = 'images
        //     zDisplayObj.src = 'images/red_card.svg';
        //     // display title
        //     zTitleObj.innerHTML = 'PINK CREWMATE';
        //     // display date range
        //     zMoreInfo.innerHTML = '##-Month to ##-Month';
        //     // display description 
        //     zMoreInfo.innerHTML = '<p>Pink is not the imposter, dont kill.<p>';
        //     // show hide modal
        //     modal.hidden = !modal.hidden;
        //     // play sound
    }
}

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