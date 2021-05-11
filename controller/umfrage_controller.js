
const Umfrage = require('../models/umfrage')
const Frage = require('../models/frage')




const umfrageUserGetController = async (req, res, next)=>{
        try{
            let allUmfrage = await Umfrage.find({user:req.tokenUser.userId});
            res.status(200).send(allUmfrage)
        }catch(error){
            res.status(500).send(error)
        }
}

const umfrageIDGetController = async (req, res, next)=>{
        try{ 
            const {id} = req.params;
            timestamp = id.toString().substring(0,8);
            date = new Date( parseInt( timestamp, 16 ) * 1000 );
            let umfrageMitID = await Umfrage.find({_id:id});
            let alleFragenUmfrage = await Frage.find({umfrage:umfrageMitID});
            res.status(200).send({alleFragenUmfrage, date})

        }catch(error){
            res.status(500).send(error)
        }
}

const umfrageIDDeleteController = async (req, res, next)=>{
    try{
        const {id} = req.params;
        let umfrageDel = await Umfrage.deleteOne({_id:id});
        res.status(200).send(umfrageDel)
    }catch(error){
        res.status(500).send(error)
    }
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




module.exports = { umfrageUserGetController, umfrageIDGetController, umfrageIDDeleteController}


