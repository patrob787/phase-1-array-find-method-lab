const superbowlWin = (array) => {
    let sb = array.find(elem => elem.result === 'W');
    
    if (sb) {
        return sb.year;
    } else {
        return undefined;
    };
};