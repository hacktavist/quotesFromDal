function lengthOfHash(data) {
    var size = 0,
        key;
    for (key in data) {
        if (data.hasOwnProperty(key)) size++;
    }
    return size;
};