const http = require('http')
const port = 5050

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end('Welcome to our home page')
        return
    }
    if (request.url === '/about') {
        response.end('Welcome to our about page')
        return
    }
    response.end(`
        <h1>Oops!</h1>
        <p>We can't find this page</p>
        <a href="/">Back Home</a>
    `)
})

server.listen(port) // 只要前面的網域名稱是符合的 後面不管接slash or /About 都還是在該服務上
