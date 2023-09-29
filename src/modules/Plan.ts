import { HasFormat } from "../interfaces/HasFormat.js";

export class Plan implements HasFormat{
    id: number;
    plan: string;
    time: Date | number | string

    constructor(id:number,plan:string,time:Date | number | string){
        this.id = id;
        this.plan = plan
        this.time = time
    }
    planFormat(){
        return `${this.plan}`;
    }
}