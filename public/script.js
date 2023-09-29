import { DisplayPlans } from "./modules/DIsplayPlans.js";
import { changeContent, updateStorage } from "./modules/Greeting.js";
import { Plan } from "./modules/Plan.js";
const allPlans = JSON.parse(localStorage.getItem('plans')) || [];
const form = document.querySelector('form');
const userplan = document.querySelector('#userplan');
const err = document.querySelector('.err');
const ul = document.querySelector('.plans');
const username = document.querySelector('.name');
const list = new DisplayPlans(ul);
function getname() {
    if (localStorage.getItem('name') === null) {
        username.innerText = '{Type Your Name}';
    }
    else {
        username.innerText = localStorage.getItem('name');
    }
}
function deletePlan(id) {
    const index = allPlans.findIndex((each) => each.id === id);
    if (index !== -1) {
        allPlans.splice(index, 1);
        updateStorage(allPlans);
    }
}
const createItem = (plan) => {
    const item = document.createElement('li');
    const radio = document.createElement('input');
    radio.type = 'checkbox';
    radio.addEventListener('click', () => {
        if (radio.checked === true) {
            alert('task completed will automatically delete in 10 minutes!');
            setTimeout(() => {
                ul.removeChild(item);
                deletePlan(plan.id);
                updateStorage(allPlans);
                alert('completed tasks were deleted!');
            }, 600000);
        }
    });
    item.append(radio);
    const flex = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = `${plan.time}`;
    flex.append(span);
    const h4 = document.createElement('h4');
    h4.innerText = plan.plan;
    flex.append(h4);
    item.append(flex);
    ul.append(item);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        ul.removeChild(item);
        deletePlan(plan.id);
        updateStorage(allPlans);
    });
    item.append(deleteButton);
    return item;
};
username.addEventListener('keypress', fillname);
username.addEventListener('blur', fillname);
function fillname(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target);
            username.blur();
        }
    }
    else {
        localStorage.setItem('name', e.target.innerText);
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (userplan.value == '') {
        alert(`The box can't be empty`);
    }
    else {
        let date = new Date().toLocaleString();
        let id = new Date().getTime();
        let plan;
        plan = new Plan(id, userplan.value, date);
        list.display(id, plan, date);
        userplan.value = '';
    }
});
window.addEventListener('load', () => {
    allPlans.map(each => {
        const newplan = createItem(each);
        ul.append(newplan);
    });
});
getname();
changeContent();
