var server=require('./server')
var router=require('./router')
var handler=require('./handler')

var handle={}
handle['/hi']=handler.hi
handle['/newpage']=handler.newpage

server.serverStartup(router.route,handle)