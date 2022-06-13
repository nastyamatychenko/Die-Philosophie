 
// Реализация сервера
const http=require('http')
const fs=require('fs');
const path=require('path')

 const server = http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        sendRes('index.html','text/html',res)
    }
    else
    {
        sendRes(req.url,getContentType(req.url),res)
    }
}).listen(3000,()=>{console.log('node.js port 3000')});


function sendRes(url, contentType, res)
{
    let file=path.join(__dirname+'/WEB-SITE NASTYA MATYCHENKO/',url)
    fs.readFile(file,(error,content)=>
    {
        if(error)
        {
            res.writeHead(404)
            res.write("File Not Found")
            res.end()
        }
        else{
            res.writeHead(200,{'Content-Type':contentType});
            res.write(content)
            res.end();
        }
    })
}

function getContentType(url)
{
    switch(path.extname(url))
    {
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "text/javascript";
        case ".json":
            return "application/json";
        default:
            return "application/json";
    }
} 
