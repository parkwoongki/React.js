export class Content {
    private id: number;
    private name: string;
    private phone: string;

    constructor(id: number, name: string, phone: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }

    public get getId(): number {
        return this.id;
    }

    public get getName(): string {
        return this.name;
    }

    public get getContent(): string {
        return this.phone;
    }

    public set setId(id: number) {
        this.id = id;
    }

    public set setName(name: string) {
        this.name = name;
    }

    public set setPhone(phone: string) {
        this.phone = phone;
    }

}