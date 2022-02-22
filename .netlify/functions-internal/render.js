const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","leaflet/images/layers-2x.png","leaflet/images/layers.png","leaflet/images/marker-icon-2x.png","leaflet/images/marker-icon.png","leaflet/images/marker-shadow.png","leaflet/leaflet-src.esm.js","leaflet/leaflet-src.esm.js.map","leaflet/leaflet-src.js","leaflet/leaflet-src.js.map","leaflet/leaflet.css","leaflet/leaflet.js","leaflet/leaflet.js.map","service-worker.js"]),
	_: {
		mime: {".png":"image/png",".js":"application/javascript",".map":"application/json",".css":"text/css"},
		entry: {"file":"start-76cc2f55.js","js":["start-76cc2f55.js","chunks/vendor-163b8a00.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
});
