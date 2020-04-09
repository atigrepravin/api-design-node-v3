const getMany = (req, res) => {
  res.send({ item: 'getMany' })
}

const createOne = (req, res) => {
  res.send({ item: 'createOne' })
}

const getOne = (req, res) => {
  res.send({ item: 'getOne' })
}

const updateOne = (req, res) => {
  res.send({ item: 'updateOne' })
}

const deleteOne = (req, res) => {
  res.send({ item: 'deleteOne' })
}
export default { getMany, createOne, getOne, updateOne, deleteOne }
