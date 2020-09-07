import { Content } from "../class/Content";

export function TTContent(obj: any[]): { list: Array<Content>, lastId: number } {
    const list: Content[] = [];
    const keys: any[] = Object.keys(obj);

    console.log(keys)

    let last = keys.length;
    for (let i = 0; i < last; ++i) {
        list.push(new Content(obj[keys[i]].id, obj[keys[i]].name, obj[keys[i]].phone))
    }

    let lastId: number = obj[keys[keys.length - 1]].id

    return { list, lastId };
}