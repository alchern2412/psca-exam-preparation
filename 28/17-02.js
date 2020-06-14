const redis = require('redis'); // npm install redis

const client = redis.createClient('//redis-12999.c11.us-east-1-2.ec2.cloud.redislabs.com:12999', {
    password: 'CbKPbPaHbAa9hEgE09CTKoxlKHtkIa63'
});

client.on('ready', () => {
    console.log('ready');
});

client.on('error', (err) => {
    console.log('error: ' + err);
});

client.on('connect', () => {
    console.log('connect');
});

client.on('end', () => {
    console.log('end');
    console.log(`Set: ${start1}`);
    console.log(`Get: ${start2}`);
    console.log(`Del: ${start3}`);

    console.log(`Incr: ${start4}`)
    console.log(`Decr: ${start5}`)

    console.log(`Hset: ${start6}`)
    console.log(`Hget: ${start7}`)



});

// Task2

// fill 10000 records
let start1 = Date.now();
for (let i = 0; i < 10000; i++) {
    client.set(`k${i}`, `value${i}`, (error, result) => {
        // console.log(`error: ${error}; result: ${result}`);
        if (i == 9999) {
            // console.log(`Set 10000 records: ${Date.now() - start1} ms`)
            start1 = Date.now() - start1;
        }
    })
    // console.log(`${i} - setted`);
}

// get 10000 records
let start2 = Date.now();
for (let i = 0; i < 10000; i++) {
    client.get(`k${i}`, (error, result) => {
        // console.log(`GET: error: ${error}; result: ${result}`);
        if (i == 9999) {
            // console.log(`Get 10000 records: ${Date.now() - start2} ms`)
            start2 = Date.now() - start2;
        }
    })
}


// del 10000 records
let start3 = Date.now();
for (let i = 0; i < 10000; i++) {
    client.del(`k${i}`, (error, result) => {
        // console.log(`DEL: error: ${error}; result: ${result}`);
        if (i == 9999) {
            // console.log(`Del 10000 records: ${Date.now() - start1} ms`)
            start3 = Date.now() - start3;
        }
    })
}

// Task3

client.set('count_incr', 0);
let start4 = Date.now();
for (let i = 0; i < 10000; i++) {
    client.incr('count_incr');
    if (i == 9999) {
        start4 = Date.now() - start4;
    }
}

client.set('count_decr', 20000);
let start5 = Date.now();
for (let i = 0; i < 10000; i++) {
    client.decr('count_decr');
    if (i == 9999) {
        start5 = Date.now() - start5;
    }
}


// Task4

let start6 = Date.now();
for (let i = 0; i < 10000; i++) {
    client.hset('faculty', `IT${i}`, JSON.stringify({
        faculty_name: `Information technologies - ${i}`
    }), (err, result) => {
        // console.log(`${i}. `, 'err: ', err, 'result = ', result)
        if (i == 9999) {
            start6 = Date.now() - start6;
            console.log(start6)
        }
    });
}

let start7 = Date.now();
for (let i = 0; i < 10000; i++) {
    client.hget('faculty', `IT${i}`, (err, result) => {
        // console.log(`${i}. `, 'err: ', err, 'result = ', JSON.parse(result))
        if (i == 9999) {
            start7 = Date.now() - start7;
            console.log(start7)
        }
    });
}






















client.quit(); // 
