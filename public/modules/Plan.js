export class Plan {
    constructor(id, plan, time) {
        this.id = id;
        this.plan = plan;
        this.time = time;
    }
    planFormat() {
        return `${this.plan}`;
    }
}
