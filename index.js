const app = require('./src/app')
const PORT = process.env.PORT || 8023

app.listen(PORT,()=>{
    console.log(`[SERVER] Listening on port ${PORT}`)
})
