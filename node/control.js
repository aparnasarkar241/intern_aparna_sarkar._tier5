const userModel= require('./model');
const bcrypt= require('bcryptjs');
const { use } = require('./router');


// create new data(post new data)
exports.Registration= (req,res,next)=>{

    const {name,email,clss,section,DOB,contact_no,scholarship}= req.body;

    if(!name)           {res.status(400).json({success:false,msg:"name required"})}
    else if(!email)     {res.status(400).json({success:false,msg:"email required"})}
    else if(!clss)      {res.status(400).json({success:false,msg:"clss required"})}
    else if(!section)    {res.status(400).json({success:false,msg:"section required"})}
    else if(!DOB)        {res.status(400).json({success:false,msg:"DOB required"})}
    else if(!contact_no) {res.status(400).json({success:false,msg:"contact_no required"})}
    else if(!scholarship){res.status(400).json({success:false,msg:"scholarship required"})}
    else{
        userModel.findOne({email:email}).then(emailexist=>{
            if(emailexist){res.status(400).json({success:false,msg:"this is a registrered email-id,try another"})}
            else{
                const intern = new userModel({
                    name:name,
                    email:email,
                    clss:clss,
                    section:section,
                    DOB:DOB,
                    contact_no:contact_no,
                    scholarship:scholarship
                })
                intern.save().then(()=>{res.status(200).json({success:true,msg:'Registration successful'})})
                .catch(err=>{res.status(400).json({success:false,msg:err})})
            }
        }).catch(err=>{res.status(400).json({success:false,msg:err})})
    }
}


// Get all Data
exports.fetchAllData= (req,res,next)=>{

    userModel.find().then(allData=>{
        if(allData){res.status(200).json({success:true,msg:"fetched all data",user:allData})}
    }).catch(err=>{res.status(400).json({success:false,msg:err})})
}

// update data using PUT method
exports.updateData = (req,res,next)=>{

    const id= req.params.id;
    const updates= req.body;
    // console.log(id)

    userModel.findByIdAndUpdate(id,{$set: updates},{new:true}).then((reslt)=>{
        console.log(reslt)
        res.status(200).json({success:true,msg:reslt})
    }).catch(err=>{res.status(400).json({success:false,msg:err})})
}

// Delete Data 
exports.deleteData = (req,res,next)=>{
    
    const id = req.params.id;

    userModel.findByIdAndDelete(id).then(()=>{
        res.status(200).json({success:true,msg:"item deleted"})
    }).catch(err=>{res.status(400).json({success:false,msg:err})})
}

// Update Data using patch method
exports.oneUpdate= (req,res,next)=>{

    const id= req.params.id;
    const updateData=req.body;

    userModel.findByIdAndUpdate(id,{$set:updateData},{new:true}).then(result=>{
        res.status(200).json({success:true,msg:result})
    }).catch(err=>{res.status(400).json({success:false,msg:err})})
}

// Get One data
exports.FetchOneData=(req,res,next)=>{

    const id= req.params.id;

    userModel.findById(id).then(singleData=>{
        if(singleData){res.status(200).json({success:true,msg:singleData})}
    }).catch(err=>{res.status(400).json({success:false,msg:false})})
}