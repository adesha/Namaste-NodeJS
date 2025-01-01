const http=require('http')

const server=http.createServer(function(req,res){
    if(req.url==='/index'){
        res.end('no index available')
    }
    res.end('hello world')
})

server.listen(5555)