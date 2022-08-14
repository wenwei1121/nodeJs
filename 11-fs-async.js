const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(res); // return Buffer, no text => second param option ("utf-8")
    const first = res

    readFile('./content/second.txt', 'utf-8', (err, res) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(res)
        const second = res

        writeFile('./content/write-result-async.txt', `Here is the result : ${first}, ${second}`, (err, res) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(res);
        })
    })
})

// const second = readFileSync('./content/second.txt')