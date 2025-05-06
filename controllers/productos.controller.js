const getAll = (req, res) => {
    res.send('GET ALL')
}

const getOne = (req, res) => {//! GET ONE
    const id = req.params.id
    console.log(id)
    res.send('GET ONE')
}

const create = (req, res) => {
    const productoACrear = req.body
    console.log(productoACrear)
    res.send('Created Producto')
}

const update = (req, res) => {
    const id = req.params.id
    const productoAEditar = req.params.body
    console.log(productoAEditar)
    console.log(id)
    res.send('Updated Producto')
}

const remove = (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send('Update Producto')
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}