function Greeting(personName = "Guest") {
   let date = new Date();
   let hours = date.getHours();
   let heading = document.querySelector('#greeting');
   
   if( hours > 5 && hours < 12){
       heading.textContent = `Good Morning ${personName}`;
   }
   else if (hours > 12 && hours < 18){
       heading.textContent = `Good Afternoon ${personName}`;
   }
   else{
       heading.textContent = `Good night ${personName}`;
   }
}   

Greeting("Alice");

let noOfClicks = localStorage.getItem
('noOfClicks') || 0;
function buttonClick(){
     noOfClicks++;
     localStorage.setItem('noOfClick', noOfClicks);
     updateButton();
}

function updateButton(){

        let button = document.querySelector('#my-button');
        if(noOfClicks % 2 === 0){
            button.classList.remove('js-odd');
            button.classList.add('js-even');
        }
        else{
            button.classList.remove('js-even');
            button.classList.add('js-odd');
        }
        
        button.textContent = noOfClicks;
    }

updateButton();