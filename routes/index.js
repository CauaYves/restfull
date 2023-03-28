module.exports = app => {
    
    app.get('/', (req, res) => {

        res.statusCode = 200
        res.setHeader('Content-Disposition', 'inline')
        res.end('<h1>Olá</h1>')

    })
}