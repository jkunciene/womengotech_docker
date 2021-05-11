const fastify = require('fastify');

const app = fastify();

app.get('/hello', ()=> {
    return 'word'
});

app.get('/add', (req) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    return (a+b).toString();
})
app.listen(3000, '0.0.0.0');

