export class Ingredient {
    constructor(public name: string, public amount: number) {}
}

// ^^^ above is a simplified way of declaring the property in the constructor to reduce the need to set them.

// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }