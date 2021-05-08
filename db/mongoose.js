const mongoose=require('mongoose')

//console.log('Mong ',process.env.MONGODB_URL)

//mongoose.connect(process.env.MONGODB_URL||'mongodb://localhost:27017/Techokids',{
   
mongoose.connect('mongodb+srv://vish:vish@cluster0.bdsio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
},(errror,client)=>{
    if(errror)
    return console.log('unable to connect through mongoose',error)
    console.log('connected to mongoose')
})