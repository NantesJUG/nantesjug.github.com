'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],
		singleRun: true,
		reporters: ['dots', 'coverage'],
		files: [
			'components/angular/angular.js',
			'components/angular-mocks/angular-mocks.js',
			'src/md5.js',
			'build/angular-gravatar.js',
			'build/spec/tests.js'
		],
		preprocessors: {
			'angular-gravatar.js': 'coverage'
		}
	});
};
