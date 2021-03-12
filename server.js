const {syncAndSeed, models:{Produce, Meat, Dairy}} = require('./db');
const express = require('express');
const path = require('path');
const app = express();

app.use('/dist',express.static(path.join(__dirname, 'dist')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

app.get('/', (req,res,next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/produce', async(req,res,next) => {
    try{
    const produce = await Produce.findAll();
    res.send(produce);
    }catch(ex){
        next(ex)
    }
});

app.get('/api/meat', async(req,res,next) => {
    try{
    const meat = await Meat.findAll();
    res.send(meat);
    }catch(ex){
        next(ex)
    }
});

app.get('/api/dairy', async(req,res,next) => {
    try{
    const dairy = await Dairy.findAll();
    res.send(dairy);
    }catch(ex){
        next(ex)
    }
});

const init = async() => {
    try{
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, console.log(`listening on port ${port}`));

    } catch(ex){
        console.log(ex)
    }
}
init()