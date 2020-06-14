const child = require('child_process')

const f = () => {
    console.log('index2.js')
}
setInterval(f, 6000)

process.on('message', msg => {
    console.log('on message: ', msg)
})

