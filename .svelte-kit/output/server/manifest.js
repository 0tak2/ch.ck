export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-164cf765.js","js":["start-164cf765.js","chunks/index-e5d6a794.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "help",
				pattern: /^\/help\/?$/,
				names: [],
				types: [],
				path: "/help",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "mark",
				pattern: /^\/mark\/?$/,
				names: [],
				types: [],
				path: "/mark",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "new",
				pattern: /^\/new\/?$/,
				names: [],
				types: [],
				path: "/new",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "view",
				pattern: /^\/view\/?$/,
				names: [],
				types: [],
				path: "/view",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "mark/[id]",
				pattern: /^\/mark\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "view/[id]",
				pattern: /^\/view\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
