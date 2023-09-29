import { HasFormat } from "../interfaces/HasFormat";
import { Plan } from "./Plan";
const allPlans:any[] = JSON.parse(localStorage.getItem('plans')!) || [];
const ul = document.querySelector('.plans') as HTMLUListElement;


export class DisplayPlans{
    constructor(private div:HTMLUListElement){}
    display(id:number,plan:any,time:Date|number|string){
        const item = document.createElement('li')
        const radio = document.createElement('input');
        radio.type = 'checkbox';
        radio.addEventListener('click',()=>{
            if(radio.checked === true){
                console.log('Checked');
                alert('task completed will automatically delete in 10 minutes!')
                setTimeout(()=>{
                    this.div.removeChild(item);
                    deletePlan(id)
                    alert('completed tasks were deleted!')
                },600000)
            }else{console.log('not checked!')}
        })
        item.append(radio);
        const flex = document.createElement('div')
        const span = document.createElement('span')
        span.innerText = `${time}`
        flex.append(span)
        const h4 = document.createElement('h4')
        h4.innerText = plan.planFormat();
        flex.append(h4);
        item.append(flex)
        this.div.append(item);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click',()=>{
            this.div.removeChild(item);
            deletePlan(id)
            updateStorage()
        })
        item.append(deleteButton);
        allPlans.push(plan);

        updateStorage()
        function deletePlan(id:number){
            const index = allPlans.findIndex((each: { id: number; }) =>each.id === id)
            if(index !== -1){
                allPlans.splice(index,1);
                updateStorage();
            }
        }
        
        function updateStorage(){
            localStorage.setItem('plans',JSON.stringify(allPlans));
        }
    }
}

