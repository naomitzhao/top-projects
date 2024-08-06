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

    const deleteCategory = function (key) {
        map.delete(key);
    };

    addCategory("ungrouped");
    addCategory("school");

    return { addCategory, get, keys, getMap, deleteCategory };
    
};