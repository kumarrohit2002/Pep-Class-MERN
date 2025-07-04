const fsPromises = require("fs/promises");
const { v4: uuidv4 } = require("uuid");

const saveArrayToFile = async (arr, filePath) => {
    try {
        const stringifiedArr = JSON.stringify(arr, null, 4);
        await fsPromises.writeFile(filePath, stringifiedArr, "utf-8");
    } catch (err) {
        // worst and unprepared case
        console.error("🔴 Error saving the file ::", err.message);
        return null;
    }
};

const saveObjectToArrayInFile = async (obj, filePath) => {
    const arr = await getAllDataFromArrayFromFile(filePath);
    obj.id = uuidv4();
    arr.push(obj);
    await saveArrayToFile(arr, filePath);

    return obj;
};

const getAllDataFromArrayFromFile = async (filePath) => {
    try {
        const txt = await fsPromises.readFile(filePath, "utf-8");
        try {
            const data = JSON.parse(txt);
            return data;
        } catch {
            console.warn("🟡 The file is corrupted or not a valid JSON format. Resetting it!");
            await fsPromises.writeFile(filePath, "[]", "utf-8");
            return [];
        }
    } catch (err) {
        if (err.code === "ENOENT") {
            console.warn("🟡 Creating file...");
            await fsPromises.writeFile(filePath, "[]", "utf-8");
            return [];
        }
        // worst and unprepared case
        console.error("🔴 Error reading the file ::", err.message);
        return null;
    }
};

//patch
const editObjectFromArrayFromFile = async (newObjProperties, elemId, filePath) => {
    const arr = await getAllDataFromArrayFromFile(filePath);
    // if it is able to parse --> get the particular Object from array using id
    const idx = arr.findIndex((elem) => {
        if (elem.id === elemId) {
            return true;
        } else {
            return false;
        }
    });

    if (idx === -1) {
        console.error("🔴 Invalid Id. No object found with given Id!");
        return arr;
    }

    // change the object as you want
    const currentObject = arr[idx];
    const newObject = { ...currentObject, ...newObjProperties };
    arr[idx] = newObject;

    // save to the file
    saveArrayToFile(arr, filePath);
};

const deleteObjectFromArrayFromFile = async (elemId, filePath) => {
    // read the file
    // try to convert it into JS object using JSON.parse()
    // if there is any error --> file is empty
    //                       --> show the error in the console ---> object does not exists
    // if it is able to parse --> delete the object from the array
    //                        --> ::save the new array to the file::
    let arr = await getAllDataFromArrayFromFile(filePath);
    // if it is able to parse --> get the particular Object from array using id
    const idx = arr.findIndex((elem) => {
        if (elem.id === elemId) {
            return true;
        } else {
            return false;
        }
    });

    if (idx === -1) {
        console.error("🔴 Invalid Id. No object found with given Id!");
        return arr;
    }

    arr.splice(idx,1);

    // save to the file
     saveArrayToFile(arr, filePath);
};

module.exports = {
    saveObjectToArrayInFile,
    getAllDataFromArrayFromFile,
    editObjectFromArrayFromFile,
    deleteObjectFromArrayFromFile,
};