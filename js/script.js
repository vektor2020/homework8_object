function getValues(object) {
    var arr = [];
    for (var key in object) {
        arr.push(object[key]);
    }
    return arr;
}


function getKeys(object) {
    var arr = [];
    for(var key in object){
        arr.push(key);
    }
    return arr;
}

function getEntries(object) {
    var arr = [];
    for(var key in object) {
        var arr2 = [];
        arr2.push(key, object[key]);
        arr.push(arr2);
    }
    return arr;
}