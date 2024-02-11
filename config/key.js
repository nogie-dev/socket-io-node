if(process.env.NODE_ENV='development'){
    console.log('here prod')
    module.exports=require('./dev')
}else{
    console.log('here dev')
    module.exports=require('./dev')
}