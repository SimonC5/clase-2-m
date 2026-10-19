function GetTimeStamp() {
    return  Date.now();
}


function GetLongTime(locale = 'es-US') {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };
    return new Date().toLocaleString(locale, options);
}

module.exports = {
    GetTimeStamp,
    GetLongTime
};