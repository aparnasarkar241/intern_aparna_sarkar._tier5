const controls = require('./control');
const express= require('express');

const route= express.Router();

route.post("/notes/regist",controls.Registration);
route.get("/notes/alldata",controls.fetchAllData);
route.put("/notes/update/:id",controls.updateData);
route.patch("/notes/oneupdate/:id",controls.oneUpdate)
route.delete("/notes/delete/:id",controls.deleteData);
route.get("/notes/onedata/:id",controls.FetchOneData)

module.exports=route;