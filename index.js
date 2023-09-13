const Fastify = require('fastify');
const router = require('./routes/index');
const connectToMongoDB = require('./config/mongoose');

const app = Fastify({
    logger: true
});

const port = 3030;

app.register(router);

async function startServer(){
    try {
        await connectToMongoDB();
        await app.listen({port});
        app.log(`Our fastify application is now listening on port: ${port}`);
        console.log('Fastify application is now listening on port:', port);
    } catch (error) {
        app.log(`Error occured in starting the fastify server: ${error}`);
        console.log('Error occured in starting a fastify server:', error);
        process.exit(1);
    }
}

startServer();
