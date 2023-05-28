import { ListItem  } from "./ListItem.js";


const addTask: HTMLButtonElement | null = document.querySelector('.add-task');
const userInput: HTMLInputElement | null = document.querySelector('.user-input');
const listItemContainer: HTMLUListElement | null = document.querySelector('.list-item-container');

// selects all the li elements as a node list, then turns them into an array so
// array methods can be used, as GPT-4 suggested. hope this one works.
const listItems: NodeList = document.querySelectorAll('list-item-container li');



const darkModeToggle: HTMLButtonElement | null = document.querySelector('.dark-mode-toggle');

let setColorTheme = ''


// clears the input field after the page reloads and after a note is added, to make it a bit easier to use
window.onload = () => {
    userInput!.value = ''
    setColorTheme = 'dark'
}

let updateListItems = () => {
    const liArray: HTMLElement[] = Array.from(listItems) as HTMLElement[];
  
    liArray.forEach((li) => {
      li.classList.add(setColorTheme === 'dark' ? 'dark-mode' : 'light-mode');
      li.classList.remove(setColorTheme === 'dark' ? 'light-mode' : 'dark-mode');
    });
  };

// simple check to prevent adding empty notes. there's probably a more elegant way of accomplishing this, but an alert will do for now
// switch used cause I wanted to practice it and because its cool
addTask?.addEventListener('click', () => {

    switch(userInput!.value.length){
        case 0:
            alert('Please do not create empty tasks. Type in your task description and try again.');
            break;
        default:
            let newItem = new ListItem(userInput!.value, false);  
            listItemContainer!.append(newItem.element);
            userInput!.value = '';
            break;
    }
    
})
// used for switching light mode on. maybe might be remade into a single function for handling dark and light mode both?
const setLightMode = (...elems: HTMLElement[]) => {
    elems.forEach((element) => {
        element.classList.add('light-mode');
        element.classList.remove('dark-mode');
        setColorTheme = 'light'
    })
    
}

const setDarkMode = (...elems: HTMLElement[]) => {
    elems.forEach((element) =>{
        element.classList.add('dark-mode');
        element.classList.remove('light-mode');
        setColorTheme = 'dark'
    })
    
}


darkModeToggle?.addEventListener('click', () => {
    switch(setColorTheme){
        case 'dark':
            setLightMode(document.body);
            break;
        case 'light':
            setDarkMode(document.body);
            break;
    }
})

updateListItems()