// publish/subscribe

const redis = require('redis'); // npm install redis

const subClient = redis.createClient('//redis-12999.c11.us-east-1-2.ec2.cloud.redislabs.com:12999', {
    password: 'CbKPbPaHbAa9hEgE09CTKoxlKHtkIa63'
});

subClient.on('ready', () => {
    console.log('ready');
});

subClient.on('error', (err) => {
    console.log('error: ' + err);
});

subClient.on('connect', () => {
    console.log('connect');
});

subClient.on('end', () => {
    console.log('end');
});

subClient.on('subscribe', (channel, count) => {
    console.log('subscribe: ', ' channel = ', channel,
    'count = ', count);
})

subClient.on('message', (channel, message) => {
    console.log('sub channel: ' + channel + ': ' + message);
})

subClient.subscribe('channel-01');


setTimeout(() => {
    subClient.unsubscribe();
    subClient.quit()
}, 40000);
// subClient.quit(); // 
