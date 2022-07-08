const config = {
    saml: {
        cert: './config/saml.pem',
        entryPoint: 'https://dev-86619660.okta.com/app/dev-86619660_samldemo_1/exk5p4p8mhrkRLBJG5d7/sso/saml',
        issuer: 'http://localhost:1337',
        options: {
            failureRedirect: '/login',
            failureFlash: true
        }
    },
    server: {
        port: 1337
    },
    session: {
        resave: false,
        secret: 'supersecretamazingpassword',
        saveUninitialized: true
    }
};

export default config;
