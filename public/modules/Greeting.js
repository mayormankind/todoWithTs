const placeholder = ['Hope you are happy today?', 'Are you having fun?', 'Have a blissful day', 'Stay alive', 'Oniduro mi ese', 'Make your day blissful'];
const changeableContent = document.querySelector('.holder');
let counter = 0;
const greetingContainer = document.querySelector('.greetings');
const moment = document.querySelector('.moment');
let date = new Date(), hour = date.getHours(), minutes = date.getMinutes();
export function changeContent() {
    if (counter < placeholder.length) {
        counter++;
    }
    else {
        counter = 1;
    }
    changeableContent.innerHTML = `${placeholder[counter - 1]}`;
    setTimeout(changeContent, 12000);
    if (hour < 12) {
        moment.innerHTML = "Good Morning,";
        greetingContainer.style.backgroundImage = "url('images/img8.jpg')";
    }
    else if (hour < 17) {
        moment.innerHTML = "Good Afternoon,";
        greetingContainer.style.backgroundImage = "url('images/1.jpg')";
    }
    else {
        moment.innerHTML = "Good Evening,";
        greetingContainer.style.backgroundImage = "url('images/nat3.jpg')";
        greetingContainer.style.color = "white";
    }
}
export function updateStorage(allPlans) {
    localStorage.setItem('plans', JSON.stringify(allPlans));
}
