/*
 * Create and export the variables
 *
 */


// Container for all the environments
var environments = {};


// Staging {default} environment
environments.staging = {
	'httpPort' : 3000,
	'httpsPort' : 3001,
	'envName' : 'staging',
	'hashingSecret': 'thisIsASecret',
	'maxChecks' : 5,
	'twilio' : {
		'accountSid' : 'ACe04c199fed0c94dbede16a2afd5f180a',
		'authToken' : 'd4b1883788ad65458f4e90c0bbf8288b',
		'fromPhone' : '+233270763890'
	},
	'templateGlobals' : {
		'appName' : 'UptimeChecker',
		'companyName' : 'NotARealCompany, Inc',
		'yearCreated' : '2018',
		'baseUrl' : 'http://localhost:3000/'
	}
};

// Testing environment
environments.testing = {
	'httpPort' : 4000,
	'httpsPort' : 4001,
	'envName' : 'testing',
	'hashingSecret': 'thisIsASecret',
	'maxChecks' : 5,
	'twilio' : {
		'accountSid' : 'ACe04c199fed0c94dbede16a2afd5f180a',
		'authToken' : 'd4b1883788ad65458f4e90c0bbf8288b',
		'fromPhone' : '+233270763890'
	},
	'templateGlobals' : {
		'appName' : 'UptimeChecker',
		'companyName' : 'NotARealCompany, Inc',
		'yearCreated' : '2018',
		'baseUrl' : 'http://localhost:3000/'
	}
};


// Production environment
environments.production = {
	'httpPort' : 5000,
	'httpsPort' : 5001,
	'envName' : 'production',
	'hashingSecret': 'thisIsAlsoASecret',
	'maxChecks' : 5,
	'twilio' : {
		'accountSid' : '',
		'authToken' : '',
		'fromPhone' : ''
	},
	'templateGlobals' : {
		'appName' : 'UptimeChecker',
		'companyName' : 'NotARealCompany, Inc',
		'yearCreated' : '2018',
		'baseUrl' : 'http://localhost:5000/'
	}

};

// Determine which environment was passed as a commnand-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not default to staging 
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;





