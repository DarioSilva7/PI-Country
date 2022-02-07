const { getAllCountries, getByID } = require('../repository/countries');
const asyncWrapper = require('../utils/asyncWrapper');

module.exports.getCountries= asyncWrapper(  async (req, res) => {
    const [response, error] = await getAllCountries(req.query.name)
    if(error){
      const {entity} = error
      res.status(500).send(entity.name)
    }
    else{
      res.status(200).send(response)
    }
});

module.exports.getCountryDetail= asyncWrapper (async (req, res) => {
    const [response, error] = await getByID(req.params.id)
    if (error) {
        const {entity}= error
        res.status(500).send(entity.name);
    } else {
      res.status(200).send(response);
    }
})


