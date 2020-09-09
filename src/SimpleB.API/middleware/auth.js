const jwt = require('express-jwt');
const jwksClient = require('jwks-rsa');

const issuer = 'https://localhost:5001';
const auth = jwt({
    secret: jwksClient.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 2,
        jwksUri: `${issuer}/.well-known/openid-configuration/jwks`
    }),
    audience: 'simplebapi',
    issuer: issuer,
    algorithms: ['RS256']
});

module.exports = auth;