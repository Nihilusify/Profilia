export const isEmpty = (val: any): Boolean => {
    return val.trim().length === 0;
}

export const emailIsValid = (val: string): Boolean => {
    return new RegExp(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    ).test(val);
}

export const passwordIsValid = (val: string): Boolean => {
    return new RegExp(
        "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/"
    ).test(val);
}