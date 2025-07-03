const {
    saveObjectToArrayInFile,
    getAllDataFromArrayFromFile,
    editObjectFromArrayFromFile,
    deleteObjectFromArrayFromFile,
} = require("./file-helper.js");

const main = async () => {
    const filePath = "./my-data.json";

    // saveObjectToArrayInFile({ name: "Mohit", city: "Kumar" }, filePath);
    // const resp = await getAllDataFromArrayFromFile(filePath);
    // console.log("all data --> ", resp);

    // saveObjectToArrayInFile({ name: "Anuj", city: "Noida" }, filePath);
    // const resp2 = await getAllDataFromArrayFromFile(filePath);
    // console.log("all data --> ", resp2);

    editObjectFromArrayFromFile({ city: "Pune" }, 0, filePath);
    const resp3 = await getAllDataFromArrayFromFile(filePath);
    console.log("all data --> ", resp3);

    // saveObjectToArrayInFile({ name: "Mohan", city: "Jaipur" }, filePath);
    // const resp4 = await getAllDataFromArrayFromFile(filePath);
    // console.log("all data --> ", resp4);

    // deleteObjectFromArrayFromFile(1, filePath);
    // const resp5 = await getAllDataFromArrayFromFile(filePath);
    // console.log("all data --> ", resp5);
};

main();