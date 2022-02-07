const { Activity, Country } = require("../db");

module.exports.getAllCountries= async(name)=>{
    try {
        const allCountries= Country.findAll({ include: Activity });
  
        if (name) {
          name = name[0].toUpperCase() + name.slice(1).toLowerCase();
          const countriesFounded = await Country.findAll({
            where: {
              name: { [Op.like]: `%${name}%` },
            },
          });
          return([countriesFounded, null])
        } 
        else {
            return([allCountries, null])
        }
    }
    catch (error) {
      return[null,error]
    }
  }
module.exports.getByID = async(id)=>{
  try{
    const founded = await Country.findByPk(id, {
    include: Activity,  
    })
    return [founded,null]
  }
  catch(e){
    return([null, e])
  }
}