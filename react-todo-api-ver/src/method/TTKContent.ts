import { KContent } from "../class/KContent";

export function TTKContent(obj: any[]): Array<KContent> {
    const list: KContent[] = [];
    const keys: any[] = Object.keys(obj);

    // console.log(keys)

    for (let i = 0; i < keys.length; ++i) {
        list.push(new KContent(keys[i], obj[keys[i]].name, obj[keys[i]].date, obj[keys[i]].phone))
    }

    return list;
}