const withOffline = require('next-offline');
const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules')(['@fullcalendar']);

module.exports = withOffline(
	withCSS(
		withSass(
			withTM({
				target: process.env.NEXT_TARGET || 'serverless',
				workboxOpts: {
					swDest: 'static/service-worker.js',
					runtimeCaching: [
						{
							urlPattern: /[.](png|jpg|ico|css)/,
							handler: 'CacheFirst',
							options: {
								cacheName: 'assets-cache',
								cacheableResponse: {
									statuses: [0, 200],
								},
							},
						},
						{
							urlPattern: /^https:\/\/code\.getmdl\.io.*/,
							handler: 'CacheFirst',
							options: {
								cacheName: 'lib-cache',
							},
						},
						{
							urlPattern: /^http.*/,
							handler: 'NetworkFirst',
							options: {
								cacheName: 'http-cache',
							},
						},
					],
				},
			}),
		),
	),
);
