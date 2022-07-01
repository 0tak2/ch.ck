export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/help/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/mark/[id].svelte"),
	() => import("../../src/routes/mark/index.svelte"),
	() => import("../../src/routes/new/index.svelte"),
	() => import("../../src/routes/view/[id].svelte"),
	() => import("../../src/routes/view/index.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"help": [[0, 2], [1]],
	"mark": [[0, 5], [1]],
	"new": [[0, 6], [1]],
	"view": [[0, 8], [1]],
	"mark/[id]": [[0, 4], [1]],
	"view/[id]": [[0, 7], [1]]
};