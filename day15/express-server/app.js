const express = require("express");
const { getAllDataFromArrayFromFile, saveObjectToArrayInFile ,editObjectFromArrayFromFile, deleteObjectFromArrayFromFile} = require("./file-helper");

const filePath = "./local_db.json";

const app = express();

app.use(express.json()); // it tells the express server to read the incoming request body in json format

//Get: Get All the Student
app.get("/api/v1/students", async (req, res) => {
    try {
        const studentArr = await getAllDataFromArrayFromFile(filePath);
        res.status(200);
        return res.json({
            isSuccess: true,
            message: "List of students",
            data: studentArr,
        });
        } catch (error) {
            res.status(500);

            res.json({
                isSuccess: false,
                message: "Internal Server Error",
                data: {},
            });
        }
});

// POST: Create Student
app.post("/api/v1/students", async (req, res) => {
    try {
        const data = req.body;
        const newObj = await saveObjectToArrayInFile(data, filePath);

        res.status(201);

        res.json({
            isSuccess: true,
            message: "Student added successfully",
            data: newObj,
        });
    } catch (err) {
        res.status(500);

        res.json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        });
    }
});

//PATCH : Update the Student
app.patch("/api/v1/students/:studentId", async (req, res) => {
    try {
        const { studentId } = req.params;
        const data=req.body;
        await editObjectFromArrayFromFile(data,studentId,filePath)

        res.status(200);
        return res.json({
            isSuccess: true,
            message: "Student Data updated Succefully",
            data: [],
        });

    } catch (err) {
        res.status(500);

        res.json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        });
    }
});

//PUT: Replace Student Data
app.put('/api/v1/students/:studentId',async(req,res)=>{
    try {
        const { studentId } = req.params;
        const data=req.body;
        await editObjectFromArrayFromFile(data,studentId,filePath)

        res.status(200);
        return res.json({
            isSuccess: true,
            message: "Student Data updated Succefully",
            data: [],
        });
    } catch (error) {
         res.status(500);

        res.json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        });
    }
})

//DELETE: Delete student data
app.delete('/api/v1/students/:studentId',async(req,res)=>{
    try {
        const {studentId}=req.params;

        await deleteObjectFromArrayFromFile(studentId,filePath);

        res.status(200);
        return res.json({
            isSuccess: true,
            message: "Student Data Deleted Succefully",
            data: [],
        });

    } catch (error) {
        res.status(500);

        res.json({
            isSuccess: false,
            message: "Internal Server Error",
            data: {},
        });
    }
})

app.get("/api/v1/products", (req, res) => {
    res.json({
        isSuccess: true,
        message: "List of students",
        data: [
            {
                title: "Mixer Grinder",
                price: 2000,
                category: "Utensils / Electronics",
            },
        ],
    });
});

app.listen(2700, () => {
    console.log("----------- Server is running ----------- ");
});