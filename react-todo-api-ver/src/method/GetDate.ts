export function getDate(): string {
    let today: Date = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분
    let seconds = today.getSeconds(); // 초
    let day: number = today.getDay(); // 요일

    let sDay = "요일 표시 불가";
    switch (day) {
        case 0:
            sDay = "일요일";
            break;
        case 1:
            sDay = "월요일";
            break;
        case 2:
            sDay = "화요일";
            break;
        case 3:
            sDay = "수요일";
            break;
        case 4:
            sDay = "목요일";
            break;
        case 5:
            sDay = "금요일";
            break;
        case 6:
            sDay = "토요일";
            break;
    }

    let s: string = year + '.' + month + '.' + date + ". " + hours + ":" + minutes + ":" + seconds + " " + sDay + " ";

    return s;
}