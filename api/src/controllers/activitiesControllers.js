const { getAll, create} = require("../repository/activities");
const asyncWrapper = require('../utils/asyncWrapper');

module.exports.createActivity= asyncWrapper( async (req, res) => {
  const [response, error]= await create(req.body)
  if(error){
    const {entity} = error
    res.status(500).send(entity.name)
  }
  else{
    res.status(200).send(response)
  }
});

module.exports.getActivities= asyncWrapper( async (req, res) => {
  const [response,error]= getAll()
  if(error){
    const {entity}= error
    res.status(500).send(entity.name)
  }
  else{
    res.status(200).send(response)
  }
})