const Fastify = require('fastify');
const router = require('./routes/index');

const app = Fastify({
    logger: true
});

const port = 3030;

app.register(router);


app.listen({port}, function(err, address){
    if(err){
        app.log.error(err);
        process.exit(1);
    }
});