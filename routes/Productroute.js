const app = require('express').Router()
const multer = require('multer');

const Productmodel=require("../model/Product")

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

//for saving
app.post('/Pnew', upload.single('photo'), async (request, response) => {
    try {
                const { Pid,Pname,Price,Cid,Status } = request.body
                const newdata = new Productmodel({
                    Pid,
                    Pname,
                    Price,
                    Cid,
                    Status,
                    photo: {
                        data: request.file.buffer,
                        contentType: request.file.mimetype,
                    }
                })


                await newdata.save();
                res.status(200).json({ message: 'product added successfully' });
        }
    catch (error) 
    {
                response.status(500).json({ error: 'Internal Server Error' });
    }
}
)

module.exports = app