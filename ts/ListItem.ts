


export class ListItem {
    content: string | number | null;
    complete?: boolean;
    element: HTMLLIElement;
    paragraph: HTMLParagraphElement;
    checkbox: HTMLInputElement;
    delete: HTMLButtonElement;


    constructor(content: string | number | null, complete: boolean = false){
        this.content = content;
        this.complete = complete;

        // the main container for the whole element itself
        this.element = document.createElement('li');

        // part of the sliding-in animation, had to do it through TS cause using just SCSS classes didn't work for some reason
        setTimeout(()=>{
            this.element.style.transform = 'translateX(0%)';
        },200)

       

        // user's typed text goes here - the name/body of the task
        this.paragraph = document.createElement('p');
        

        // for toggling the task as complete - will use checkbox instead of a button for this one
        this.checkbox = document.createElement('input');
        this.checkbox.setAttribute('type', 'checkbox')

        this.paragraph.textContent = String(this.content)

        

        this.checkbox.addEventListener('change', () => {
            switch(this.checkbox.checked){
                case true:
                    this.complete = true;
                    break;
                case false:
                    this.complete = false;
                    break;
            }
 
            switch(this.complete){
                case true:
                    this.element.style.backgroundColor = 'lightgreen';
                    break;
                case false:
                    this.element.style.backgroundColor = '';
                    break;
            }
        })

        this.delete = document.createElement('button');
        this.delete.classList.add('task-button-delete');
        this.delete.textContent = 'Delete Task'
        
        this.delete.addEventListener('click', () => {
            this.element.style.transform = 'translateX(200%)' ;
            setTimeout(()=> {

                this.element.remove()
            }, 250)
        })

        this.element.append(this.paragraph, this.checkbox, this.delete)
    }
}