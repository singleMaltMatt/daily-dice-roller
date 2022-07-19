// DIALY LOTTO ROLLER SCRIPT ***********************************
const roller = document.getElementById('roller');
roller.addEventListener('click', dailyLottoNumGen);

// GENERATE RANDOM NUMBERS
function dailyLottoNumGen(range, outputCount) {

    range = 36;
    outputCount = 5;

    let arr = [];
    for (let i = 1; i <= range; i++) {
        arr.push(i)
    }

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(arr[random]);
        arr[random] = arr[range - i];
    }
    let para = document.createElement('p');
    para.innerHTML = 'Result: ' + result;
    return document.getElementById('result').appendChild(para);
};
// DIALY LOTTO ROLLER SCRIPT ***********************************
//**************************************************************
// POWERBALL ROLLER SCRIPT *************************************
const roller2 = document.getElementById('roller-2');
roller2.addEventListener('click', powerBallNumGen);

// GENERATE RANDOM NUMBERS
function powerBallNumGen(range, outputCount) {

    range = 50;
    outputCount = 5;

    let arr = []
    for (let i = 1; i <= range; i++) {
        arr.push(i)
    }

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(arr[random]);
        arr[random] = arr[range - i];
    }
    let para = document.createElement('p');
    para.innerHTML = 'Result: ' + result + ' ' + 'Bonus: ' + Math.floor(Math.random() * 20 + 1);
    return document.getElementById('result-2').appendChild(para);

};
// POWERBALL ROLLER SCRIPT *************************************
// LOTTO ROLLER SCRIPT *************************************
const roller3 = document.getElementById('roller-3');
roller3.addEventListener('click', lottoNumGen);

// GENERATE RANDOM NUMBERS
function lottoNumGen(range, outputCount) {

    range = 52;
    outputCount = 6;

    let arr = []
    for (let i = 1; i <= range; i++) {
        arr.push(i)
    }

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(arr[random]);
        arr[random] = arr[range - i];
    }
    let para = document.createElement('p');
    para.innerHTML = 'Result: ' + result;
    return document.getElementById('result-3').appendChild(para);

};
// LOTTO ROLLER SCRIPT *************************************
//**************************************************************
// CLEAR THE RESULTS
const reload = document.getElementById('clear');
reload.addEventListener('click', clearResults);

function clearResults() {
    location.reload();
};
