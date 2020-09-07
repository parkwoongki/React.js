export class KContent {
    private key: string;
    private name: string;
    private date: string;
    private phone: string;

    constructor(key: string, name: string, date: string, phone: string) {
        this.key = key;
        this.name = name;
        this.date = date;
        this.phone = phone;
    }

    public get getKey(): string {
        return this.key;
    }

    public get getName(): string {
        return this.name;
    }

    public get getDate(): string {
        return this.date;
    }

    public get getContent(): string {
        return this.phone;
    }

    public set setKey(key: string) {
        this.key = key;
    }

    public set setName(name: string) {
        this.name = name;
    }

    public set setDate(date: string) {
        this.date = date;
    }

    public set setPhone(phone: string) {
        this.phone = phone;
    }
}