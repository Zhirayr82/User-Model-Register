const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const config = require('../config/database');

module.exports = function (passport) {
	//The JWT authentication strategy is constructed as follows:
	//new JwtStrategy(options, verify)
	let opts = {};



	//jwtFromRequest (REQUIRED) Function that accepts a request as 
	//the only parameter and returns either the JWT as a string or null. 
	//See Extracting the JWT from the request for more details.

	//fromAuthHeader() creates a new extractor that looks for the JWT in 
	//the authorization header with the scheme 'JWT'
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader();

	//secretOrKey is a REQUIRED string or buffer containing the secret (symmetric) 
	//or PEM-encoded public key (asymmetric) for verifying the token's signature.
	opts.secretOrKey = config.secret;

	console.log(opts)

	//verify is a function with the parameters verify(jwt_payload, done)

	//jwt_payload is an object literal containing the decoded JWT payload.
	//done is a passport error first callback accepting arguments done(error, user, info)
	passport.use(new JwtStrategy (opts, (jwt_payload, done) => {
		console.log(jwt_payload);
		User.getUserById(jwt_payload._doc._id, (err, user) => {
			if(err){
				return done(err, false);
			}

			if(user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	} ));
};