const urlModel = require('../model/url');
const shortid  = require('shortid');

module.exports.handlegenerateUrl = async (req, res )=>{

    const body = req.body;
    if(!body.url){
        return res.status(400).json({message:'url is required'})
    }
    const ShortId = shortid(8);
    const url = await urlModel.create({
        ShortId:ShortId,
        redirectUrl:body.url,
        visitHistory:[]
    });
    const urls = await urlModel.find({});
    return res.render("Home",{
        id:ShortId,
        urls,
        
    })
}



module.exports.getUrlAndUpadte =  async (req, res)=>{
    const ShortId = req.params.ShortId;
    if(!ShortId){
        return res.status(400).json({message:'url is required'})
    }
   const url = await urlModel.findOneAndUpdate({
    ShortId,
   },{
    $push:{
        visitHistory:{
            timestamp:Date.now()
        }
    }
   })
   console.log(url)
}



module.exports.analytics = async (req, res )=>{
    const ShortId = req.params.ShortId;
    if(!ShortId){
        return res.status(400).json({message:'url is required'})
    }
    const url = await urlModel.findOne({
        ShortId,
    });
    if(!url){
        return res.status(404).json({message:'url not found'})
    }
    return res.status(200).json({message:'url found', url:url, totalclicks:url.visitHistory.length, visitHistory:url.visitHistory});
}
