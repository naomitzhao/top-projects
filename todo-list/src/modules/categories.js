export function makeCategories () {
    const map = new Map();

    const addCategory = function (newCategoryName) {
        const div = document.createElement("div");
        div.id = 'tasks';
        map.set(newCategoryName, div);
    };

    const get = function (key) {
        return map.get(key);
    };

    const keys = function () {
        return map.keys();
    };

    const getMap = function () {
        return map;
    };

    const includesKey = function (key) {
        console.log("check if " + key + " in map.keys");
        console.log(key);
        for (const k in map.keys()){
            console.log(k);
            if (k == key) {
                console.log("found");
                return true;
            }
        }
        console.log("no");
        return false;
    };

    addCategory("ungrouped");
    addCategory("grouped");

    return { addCategory, get, keys, getMap, includesKey };
    
};