const calculate = (array, prop) => {
    const result = array.reduce((previous, current) => previous + current[prop], 0);
    return result;
}

export { calculate };