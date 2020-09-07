const AccessTokenHandler = require('node-accesstoken-validation').AccessTokenHandler;
const winston = require('winston');

async function auth(req, res, next) {
    const token = req.header('Authorization');
    const at_validation = new AccessTokenHandler({
        authority: 'https://localhost:5001',
        apiName: 'simplebapi',
        requireHttpsMetadata: false
    });
    try {
        const result = await at_validation.Handle(token);
        winston.info(result);
    } catch (err) {
        winston.error(err.message);
    }

    next();
}

module.exports = auth;