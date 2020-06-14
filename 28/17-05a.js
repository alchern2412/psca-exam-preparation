// publish/subscribe

const redis = require('redis'); // npm install redis

const pubClient = redis.createClient('//redis-12999.c11.us-east-1-2.ec2.cloud.redislabs.com:12999', {
    password: 'CbKPbPaHbAa9hEgE09CTKoxlKHtkIa63'
});

pubClient.on('ready', () => {
    console.log('ready');
});

pubClient.on('error', (err) => {
    console.log('error: ' + err);
});

pubClient.on('connect', () => {
    console.log('connect');
});

pubClient.on('end', () => {
    console.log('end');
});

pubClient.publish('channel-01', ' From pubClient message1');
pubClient.publish('channel-01', ' From pub client message 2');

setTimeout(() => {
    pubClient.publish('channel-01', ' From pubClient message 3');
}, 3000);
setTimeout(() => {
    pubClient.publish('channel-01', ' From pubClient message 4');
}, 10000);
setTimeout(() => {
    pubClient.publish('channel-01', ' From pubClient message 5');
}, 7000);
setTimeout(() => {
    pubClient.publish('channel-01', ' From pubClient message 6');
}, 15000);
setTimeout(() => {
    pubClient.publish('channel-01', ' From pubClient message 7');
}, 20000);
setTimeout(() => {
    pubClient.publish('channel-01', ' From pubClient message 8');
}, 30000);



setTimeout(() => {
    pubClient.quit()
}, 40000);