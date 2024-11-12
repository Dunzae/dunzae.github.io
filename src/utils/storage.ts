interface IParsedItem {
    value: any,
    opt: {
        exp: number
    }
}

export function getLocalStorageItem(key: string) {
    const item = localStorage.getItem(key);

    // 키에 해당하는 값이 존재하지 않는 경우
    if (item === null) return undefined;

    const parsedItem: IParsedItem = JSON.parse(item);
    // 옵션 값이 없을 경우
    if(parsedItem.opt === undefined || Object.keys(parsedItem.opt).length === 0) {
        return parsedItem.value;
    } 

    // 옵션값 중에 유효식나을 나타내는 값이 존재하는 경우
    if(parsedItem.opt.exp !== undefined) {
        // 유효시간안에 있을 경우엔 값 반환
        if(parsedItem.opt.exp > Date.now()) {
            return parsedItem.value;
        } 
        // 유효시간을 넘었을 경우 undefined 반환
        else {
            removeLocalStorageItem(item);
            return undefined;
        }
    }

    // 옵션이 없을 경우 값 반환
    return parsedItem.value;
}

export function setLocalStorageItem(key: string, value: any, opt?: any) {
    let now = new Date()

    if (opt) {
        const expDate: string | undefined = opt.exp
        if (expDate) {
            if (expDate.indexOf('d') !== -1) {
                const date = expDate.split('d')[0]
                opt.exp = now.setDate(now.getDate() + parseInt(date))
            } else if (expDate.indexOf('h') !== -1) {
                const hour = expDate.split('h')[0]
                opt.exp = now.setHours(now.getHours() + parseInt(hour))
            } else if (expDate.indexOf('m') !== -1) {
                const minute = expDate.split('m')[0];
                opt.exp = now.setMinutes(now.getMinutes() + parseInt(minute))
            } else if (expDate.indexOf('s') !== -1) {
                const second = expDate.split('s')[0];
                opt.exp = now.setSeconds(now.getSeconds() + parseInt(second))
            }
        }
    }
    
    localStorage.setItem(key, JSON.stringify({ value, opt }));
}

export function removeLocalStorageItem(key : string) {
    localStorage.removeItem(key);
}