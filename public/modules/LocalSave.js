const err = document.querySelector('.err');
export function LocalSave(e, allPlans, plan) {
    e.preventDefault();
    const planform = {
        id: new Date().getTime(),
        plan: plan.value,
        // completed: false
    };
    if (plan.value == '' || plan.value == undefined) {
        err.innerText = `The input field can't be empty`;
    }
    else {
        allPlans.push(JSON.stringify(planform));
        localStorage.setItem('plans', allPlans);
        console.log(JSON.parse(allPlans));
    }
}
