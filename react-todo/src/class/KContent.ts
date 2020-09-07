export class Content {
    private id: number;
    private name: string;
    private phone: string;
    private key: string;

    constructor(id: number, name: string, phone: string, key: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.key = key;
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

    public get getKey(): string {
        return this.key;
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

    public set setKey(key: string) {
        this.key = key;
    }
}