const Channels = require('pusher');

const {
    '1565295': appId,
    '105a23cb70c7843e3a00': key,
    '30f65df9044563a2b21c': secret,
    'us2': cluster,
} = process.env;

const channels = new Channels({
    appId,
    key,
    secret,
    cluster,
});

module.exports = (req, res) => {
    const data = req.body;
    channels.trigger('redirect_22', 'redirect', data, () => {
        res.status(200).end('sent event successfully');
    });
};