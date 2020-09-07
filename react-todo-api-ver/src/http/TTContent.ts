import { Content } from "../class/Content";

export function TTContent(obj: any[]): { list: Array<Content>, i: number } {
    const list: Content[] = [];

    console.log(obj)
    obj.map((data) => {

    })

    var i = 0;
    for (i = 0; i < obj.length; ++i) {
        if (obj[i] !== null)
            list.push(new Content(obj[i].id, obj[i].name, obj[i].phone))
    }

    return { list, i };
}