const {CityService }= require('../services/index');
 
const cityService = new CityService();
const create =async (req,res)=>{
    try {
        const city = await CityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : "Not able to create a city"
        });
    }

}
const destroy = async (req,res)=>{
    try {
        const response = await CityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : "Not able to delete a city"
        });
    }
}
const get =async (req,res)=>{
    try {
        const response = await CityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully get a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : "Not able to get a city"
        });
    }
}
const update = async(req,res)=>{
    try {
        const response = await CityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully updated a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message : "Not able to get a city"
        });
    }
}

module.exports ={
    create,
    destroy,
    get,
    update
}