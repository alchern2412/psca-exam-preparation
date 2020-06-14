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
});

client.quit(); // 








