export function timeToRead(length : number) {
    const readTimeOneCharacter = 0.1;
    const totalReadTime = length * readTimeOneCharacter;

    if(totalReadTime < 60) return Math.floor(totalReadTime) + " sec read"
    if(totalReadTime < 3600) return Math.floor(totalReadTime / 60) + " min read";
    if(totalReadTime < 60 * 60 * 24) return Math.floor(totalReadTime / 60 / 60) + " hour read";
    return "Too long time read";
}

export function timeToLocalTime(time : string) {
    const localTime = new Date(time);

    return localTime.toLocaleString();
}