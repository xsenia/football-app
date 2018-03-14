export class Filters {
    constructor() {
        this.test = 'test';
    }

    public test:any;

    static getTest() {
        return 'ololo';
    }

}
console.log(Filters.getTest);