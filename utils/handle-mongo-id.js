const handleMongo = (elemento) => {
    elemento = JSON.parse(JSON.stringify(elemento))

    if( Array.isArray(elemento)) {
        console.log('Llegó un array de productos')

for (let i = 0; i < elemento.length; i++) {
    elemento.id = elemento[i][clave]
    delete elemento[i][clave]
    
}

    }else {
        console.log('Llegó un documento')
        elemento.id = elemento['_id']
        delete elemento['_id']
    }
return elemento
}
export default handleMongo