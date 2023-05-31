import { ListItem } from "./ListItem.js";
const addTask = document.querySelector('.add-task');
const userInput = document.querySelector('.user-input');
const listItemContainer = document.querySelector('.list-item-container');
// selects all the li elements as a node list, then turns them into an array so
// array methods can be used, as GPT-4 suggested. hope this one works.
const darkModeToggle = document.querySelector('.dark-mode-toggle');
let colorTheme = '';
// clears the input field after the page reloads and after a note is added, to make it a bit easier to use
window.onload = () => {
    userInput.value = '';
    colorTheme = 'dark';
};
// simple check to prevent adding empty notes. there's probably a more elegant way of accomplishing this, but an alert will do for now
// switch used cause I wanted to practice it and because its cool
addTask === null || addTask === void 0 ? void 0 : addTask.addEventListener('click', () => {
    switch (userInput.value.length) {
        case 0:
            alert('Please do not create empty tasks. Type in your task description and try again.');
            break;
        default:
            let newItem = new ListItem(userInput.value, false, colorTheme);
            listItemContainer.append(newItem.element);
            userInput.value = '';
            break;
    }
});
// used for switching light mode on. maybe might be remade into a single function for handling dark and light mode both?
// also should be made into a function with arguments, for easier addition of new elements to include in the color scheme, but i'll worry about it later
const setLightMode = () => {
    document.querySelectorAll('.list-item-container li').forEach((element) => {
        element.classList.add('light-mode');
        element.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        colorTheme = 'light';
    });
};
const setDarkMode = () => {
    document.querySelectorAll('.list-item-container li').forEach((element) => {
        element.classList.add('dark-mode');
        element.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        colorTheme = 'dark';
    });
};
darkModeToggle === null || darkModeToggle === void 0 ? void 0 : darkModeToggle.addEventListener('click', () => {
    switch (colorTheme) {
        case 'dark':
            setLightMode();
            break;
        case 'light':
            setDarkMode();
            break;
    }
});
