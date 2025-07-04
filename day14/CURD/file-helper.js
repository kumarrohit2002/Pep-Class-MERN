const fs=require('node:fs/promises');

// medium (**)
const saveObjectToArrayInFile = async (obj, filePath) => {
    try {
        // read the file
        let fileData=await fs.readFile(filePath,'utf-8');
        // try to convert it into JS object using JSON.parse()
        if(fileData) fileData= await JSON.parse(fileData);
        // if there is any error --> file is empty
        //                       --> put the object in new empty array
        // else push the object in the parsed array
        // ...
        let newArr=[];

        if(fileData){
            newArr=[...fileData,obj];
        }else{
            newArr.push(obj);
        }
        // then convert the array to JSON and store the file
        await fs.writeFile(filePath,JSON.stringify(newArr));

        console.log('Data Save in File Successfully');
    } catch (error) {
        console.log(error);
    }
};


// easy (*)
const getAllDataFromArrayFromFile = async (filePath) => {
    try {
    // read the file
    let fileData=await fs.readFile(filePath,'utf-8');
    // try to convert it into JS object using JSON.parse()
  
    // if there is any error --> file is empty
    //                       --> return empty array
    // if it is able to parse --> return the parsed array
        fileData=await JSON.parse(fileData);
        return fileData;
    } catch (error) {
        return [];
    }
};

// difficult (****)
const editObjectFromArrayFromFile = async (newObj, idx, filePath) => {
    try {
        // read the file
        let fileData=await fs.readFile(filePath,'utf-8');
        // try to convert it into JS object using JSON.parse()
        // if there is any error --> file is empty
        //                       --> show the error in the console ---> object does not exists
        // if it is able to parse --> get the particular from array using index
        //                        --> change the object as you want
        //                        --> ::save to the file::
        
        try {
            fileData=await JSON.parse(fileData);
            
            fileData[idx]={...fileData[idx],...newObj};// overwrite or merge new val
            
            // await fs.truncate(filePath,0); 
            await fs.writeFile(filePath,JSON.stringify(fileData));

            console.log('Data Updated successfully');

        } catch (error) {
            console.log('error:',error);

            if(!fileData){
                console.log('boject does not exists');
            }

        }
    } catch (error) {
        console.log(error);
    }
};

// difficult (***)
const deleteObjectFromArrayFromFile = async (idx, filePath) => {
    try {
        // read the file
        let fileData=await fs.readFile(filePath,'utf-8');

        // try to convert it into JS object using JSON.parse()

        // if there is any error --> file is empty
        //                       --> show the error in the console ---> object does not exists
        // if it is able to parse --> delete the object from the array
        //                        --> ::save the new array to the file::

        try {
            fileData=await JSON.parse(fileData);
            if(!fileData){
                console.log('boject does not exists');
            }
            
            fileData.splice(idx,1);
            // await fs.truncate(filePath,0);
            await fs.writeFile(filePath,JSON.stringify(fileData));

            console.log('Data delete successFully!!!');
        } catch (error) {
            console.log('error',error);
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    saveObjectToArrayInFile,
    getAllDataFromArrayFromFile,
    editObjectFromArrayFromFile,
    deleteObjectFromArrayFromFile,
};