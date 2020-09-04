export class Content {
    private id: number;
    private name: string;
    private content: string;

    constructor(id: number, name: string, content: string) {
        this.id = id;
        this.name = name;
        this.content = content;
    }

    public get getId(): number {
        return this.id;
    }

    public get getName(): string {
        return this.name;
    }

    public get getcontent(): string {
        return this.content;
    }

    public set setId(id: number) {
        this.id = id;
    }

    public set setName(name: string) {
        this.name = name;
    }

    public set setContent(content: string) {
        this.content = content;
    }
}