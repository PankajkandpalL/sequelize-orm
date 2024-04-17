require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/dbConfig");
const { User } = require("./model/user.model");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/create", async(req,res)=>{
    const { firstName, email, password } = req.body;
    try {
        const user = await User.create({ firstName, email, password });
        return res.status(201).send({ error : false, items : user });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
})

app.get("/allusers", async(req,res)=>{
    try {
        const users = await User.findAll();
        return res.status(201).send({ error : false, items : users });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
})

app.patch("/update/:id", async(req,res)=>{
    const { id } = req.params;
    const { email } = req.body;

    try {
        const isUserUpdated = await User.update({ email }, {
            where : {
                id
            }
        });  
        return res.status(201).send({ error : false, items : isUserUpdated });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
})

app.delete("/delete/:id", async(req,res)=>{
    const { id } = req.params;
    try {
        const isUserDeleted = await User.destroy({  
            where : {
                id : Number(id)
            }
        })
        return res.status(201).send({ error : false, items : isUserDeleted });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
})

app.listen(8080, async() => {
    await sequelize.authenticate();
    console.log("connected to Database")
  console.log("Server is running at port 8080");
});
