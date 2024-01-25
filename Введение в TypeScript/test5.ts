function logTime<T>(num: T): T{
    console.log(new Date());
    return num;

}

function logTime2<T>(num: T): T{
    if(typeof num === 'string'){
        num.toLocaleLowerCase
    }
    return num;
}