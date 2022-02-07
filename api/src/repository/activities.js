const { Activity, Country } = require("../db");

module.exports.create= async (data) => {
  const { name, difficulty, duration, season, countries } = data;

  try {
    const activityCreated = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    countries.forEach(async (c) => {
      let country = await Country.findByPk(c[0]);
      if (country) {
        await activityCreated.addCountries(country);
      }
    });
    return(["Actividad creada!",null])
  }
  catch (err) {
      return([null, err])
  }
};

module.exports.getAll= async()=>{
  try {
    const allActivities = await Activity.findAll();
    return[allActivities, null]
  }
  catch (error) {
    return[null,error]
  }
}