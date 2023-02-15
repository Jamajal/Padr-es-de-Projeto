/* eslint-disable prettier/prettier */

interface User{
    name: string,
    age: number
}

export class MyDatabaseClassic {
    private static instance: MyDatabaseClassic | null = null;
    private users: User[] = [];

    private constructor(){}

    public static getInstance(): MyDatabaseClassic{
        if(this.instance === null)
            this.instance = new MyDatabaseClassic();

        return this.instance;
    }

    add(user: User): void{
        this.users.push(user);
    }

    remove(index: number): void{
        this.users.splice(index, 1);
    }

    show(): void{
        for(const user of this.users)
            console.log(user);
    }
}

const db = MyDatabaseClassic.getInstance();

db.add({ name: "Leandro", age: 23 });
db.add({ name: "Rafael", age: 22 });
db.add({ name: "Xará", age: 20 });
db.show();
db.remove(2);
db.show();



