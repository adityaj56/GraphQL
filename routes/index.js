
async function routes(app, options){
    app.get('/', async function(req, res){
        res.send('This is the router!');
    })
}

module.exports = routes;