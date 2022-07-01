import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index-58de3ccc.js";
import { p as page } from "../../chunks/stores-0223fdef.js";
var Header_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "header.svelte-1m1gwu3.svelte-1m1gwu3{display:flex;justify-content:space-around;background:rgba(255, 255, 255, 1)}.corner.svelte-1m1gwu3.svelte-1m1gwu3{width:3em;height:3em}.corner.svelte-1m1gwu3 a.svelte-1m1gwu3{display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:none}nav.svelte-1m1gwu3.svelte-1m1gwu3{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}ul.svelte-1m1gwu3.svelte-1m1gwu3{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1m1gwu3.svelte-1m1gwu3{position:relative;height:100%}li.active.svelte-1m1gwu3.svelte-1m1gwu3::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-1m1gwu3 a.svelte-1m1gwu3{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-size:0.9rem;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1m1gwu3.svelte-1m1gwu3:hover{color:var(--accent-color)}.app_title.svelte-1m1gwu3.svelte-1m1gwu3{font-size:xx-large;font-weight:700;font-family:'Gowun Batang', serif}@media(max-width: 480px){header.svelte-1m1gwu3.svelte-1m1gwu3,nav.svelte-1m1gwu3.svelte-1m1gwu3{display:block}.app_title.svelte-1m1gwu3.svelte-1m1gwu3{font-size:large;display:block}nav.svelte-1m1gwu3 a.svelte-1m1gwu3{font-size:0.8rem;white-space:nowrap}header.svelte-1m1gwu3.svelte-1m1gwu3{width:auto}.corner.svelte-1m1gwu3.svelte-1m1gwu3:nth-of-type(2){display:none}}")();
const css$1 = {
  code: "header.svelte-1m1gwu3.svelte-1m1gwu3{display:flex;justify-content:space-around;background:rgba(255, 255, 255, 1)}.corner.svelte-1m1gwu3.svelte-1m1gwu3{width:3em;height:3em}.corner.svelte-1m1gwu3 a.svelte-1m1gwu3{display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:none}nav.svelte-1m1gwu3.svelte-1m1gwu3{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}ul.svelte-1m1gwu3.svelte-1m1gwu3{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1m1gwu3.svelte-1m1gwu3{position:relative;height:100%}li.active.svelte-1m1gwu3.svelte-1m1gwu3::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-1m1gwu3 a.svelte-1m1gwu3{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-size:0.9rem;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1m1gwu3.svelte-1m1gwu3:hover{color:var(--accent-color)}.app_title.svelte-1m1gwu3.svelte-1m1gwu3{font-size:xx-large;font-weight:700;font-family:'Gowun Batang', serif}@media(max-width: 480px){header.svelte-1m1gwu3.svelte-1m1gwu3,nav.svelte-1m1gwu3.svelte-1m1gwu3{display:block}.app_title.svelte-1m1gwu3.svelte-1m1gwu3{font-size:large;display:block}nav.svelte-1m1gwu3 a.svelte-1m1gwu3{font-size:0.8rem;white-space:nowrap}header.svelte-1m1gwu3.svelte-1m1gwu3{width:auto}.corner.svelte-1m1gwu3.svelte-1m1gwu3:nth-of-type(2){display:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-1m1gwu3"}"><div class="${"corner svelte-1m1gwu3"}"><a href="${"/"}" class="${"svelte-1m1gwu3"}"><span class="${"app_title svelte-1m1gwu3"}">ch.ck</span></a></div>

	<nav class="${"svelte-1m1gwu3"}"><ul class="${"svelte-1m1gwu3"}"><li class="${["svelte-1m1gwu3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1m1gwu3"}">\uD648</a></li>
			<li class="${["svelte-1m1gwu3", $page.url.pathname === "/new" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/new"}" class="${"svelte-1m1gwu3"}">\uC0C8\uB85C\uC6B4 \uCCB4\xB7\uD06C</a></li>
			<li class="${["svelte-1m1gwu3", $page.url.pathname === "/view" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/view"}" class="${"svelte-1m1gwu3"}">\uC800\uC7A5\uB41C \uCCB4\xB7\uD06C</a></li>
			<li class="${["svelte-1m1gwu3", $page.url.pathname === "/help" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/help"}" class="${"svelte-1m1gwu3"}">\uB3C4\uC6C0\uB9D0</a></li></ul></nav>

	<div class="${"corner svelte-1m1gwu3"}"></div>
</header>`;
});
var app = /* @__PURE__ */ (() => "@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Gowun+Dodum&display=swap');\n\n:root {\n	font-family: 'Gowun Dodum', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n	--pure-white: #ffffff;\n	--primary-color: #b0d351;\n	--secondary-color: #6d5514;\n	--tertiary-color: #edf0f8;\n	--accent-color: rgb(97, 133, 0);\n	--heading-color: rgba(0, 0, 0, 0.7);\n	--text-color: #1d1a1a;\n	--background-color: #f0f0f0;\n	--column-width: 42rem;\n	--column-margin-top: 4rem;\n}\n\nbody {\n	min-height: 100vh;\n	margin: 0;\n	background-color: var(--background-color);\n}\n\nh1,\nh2,\np {\n	font-weight: 400;\n	color: var(--heading-color);\n}\n\np {\n	line-height: 1.5;\n}\n\na {\n	color: var(--accent-color);\n	text-decoration: none;\n}\n\na:hover {\n	text-decoration: underline;\n}\n\nh1 {\n	font-size: 2rem;\n	text-align: center;\n}\n\nh2 {\n	font-size: 1rem;\n}\n\npre {\n	font-size: 16px;\n	font-family: var(--font-mono);\n	background-color: rgba(255, 255, 255, 0.45);\n	border-radius: 3px;\n	box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);\n	padding: 0.5em;\n	overflow-x: auto;\n	color: var(--text-color);\n}\n\ninput,\nbutton {\n	font-size: inherit;\n	font-family: inherit;\n}\n\nbutton:focus:not(:focus-visible) {\n	outline: none;\n}\n\n.page_title {\n	margin: 1rem;\n	padding: 1rem;\n	font-size: x-large;\n	font-weight: 700;\n	text-decoration: overline;\n	color: var(--accent-color);\n}\n\n@media (min-width: 720px) {\n	h1 {\n		font-size: 2.4rem;\n	}\n}\n")();
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "main.svelte-f5pegm{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-f5pegm{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}@media(min-width: 480px){footer.svelte-f5pegm{padding:40px 0}}")();
const css = {
  code: "main.svelte-f5pegm{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-f5pegm{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}@media(min-width: 480px){footer.svelte-f5pegm{padding:40px 0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-f5pegm"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-f5pegm"}"><p>ch.ck \uCCB4\xB7\uD06C</p>
	<p>0.9.0 @2022.07.01</p>
</footer>`;
});
export { _layout as default };
