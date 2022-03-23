const createNewError=(err)=>{
    return new Error(err.response)
    }
module.exports = createNewError;