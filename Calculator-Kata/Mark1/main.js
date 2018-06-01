'use strict';

let currentIndex = 0;
let numbers = [[]];

let updateScreen = function() {
    let updatedNum = '';
    numbers[currentIndex].forEach((d) => {
        updatedNum += d.toString();
    });

    document.getElementById('numField').textContent = updatedNum;
};

let addOne = function() {
    numbers[currentIndex].push(1);
    updateScreen();
};

let addZero = function() {
    numbers[currentIndex].push(0);
    updateScreen();
};

let clear = function() {
    numbers = [[]];
    updateScreen();
};

let calculate = function() {
    while(numbers[0].length < numbers[1].length) {
        numbers[0].unshift(0);
    }

    while(numbers[0].length > numbers[1].length) {
        numbers[1].unshift(0);
    }

    let addedNumbers = [];

    for(let i = numbers[0].length - 1; i >= 0; i--) {
        let result = numbers[0][i] + numbers[1][i];

        if (result === 1) {
            addedNumbers.unshift(1);
        }
        else if (result === 2) {
            addedNumbers.unshift(0);
            if((i-1) >= 0) {
                numbers[0][i-1] += 1;
            } else {
                addedNumbers.unshift(1);
            }
        }
        else if (result === 3) {
            addedNumbers.unshift(1);
            if((i-1) >= 0) {
                numbers[0][i-1] += 1;
            } else {
                addedNumbers.unshift(1);
            }
        }
        else {
            addedNumbers.unshift(0);
        }
    }
    currentIndex = 0;
    numbers = [addedNumbers];
    updateScreen();
};

let add = function() {
    numbers.push([]);
    currentIndex += 1;
    if(numbers.length > 2) {
        calculate();
    }
}

let init = function() {
    document.getElementById('binaryOne').onclick = addOne;
    document.getElementById('binaryZero').onclick = addZero;
    document.getElementById('add').onclick = add;
    document.getElementById('clear').onclick = clear;
};

window.onload = function() {
    init();
};