export class KContent {
    private key: string;
    private name: string;
    private phone: string;

    constructor(key: string, name: string, phone: string) {
        this.key = key;
        this.name = name;
        this.phone = phone;
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