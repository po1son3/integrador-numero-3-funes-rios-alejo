const getAll = (req, res) => {
console.log('getAll')
res.send('getAll')
}
const getOne = (req, res) => {
console.log('getOne')
res.send('getOne')
}
const create = (req, res) => {
console.log('create')
res.send('create')
}
const update = (req, res) => {
console.log('update')
res.send('update')
}
const remove = (req, res) => {
console.log('remove')
res.send('remove')
}

export default {
getAll,
getOne,
create,
update,
remove
}
