// index.js

// Function declaration for saturdayFun with a default activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function expression for mondayWork with a default activity
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Function to create a function that wraps an adjective in a highlight
function wrapAdjective(flair = "*") {
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

// Exporting functions for testing
module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
};
