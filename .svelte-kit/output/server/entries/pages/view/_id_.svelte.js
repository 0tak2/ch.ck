import { c as create_ssr_component, b as each, e as escape, f as add_attribute, a as subscribe, n as noop, v as validate_component } from "../../../chunks/index-58de3ccc.js";
import { p as page } from "../../../chunks/stores-0223fdef.js";
import { liveQuery } from "dexie";
import { d as db } from "../../../chunks/dbHelper-433da368.js";
var ChckReadonly_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-uw3eh4{display:flex;flex-direction:column;flex:1;justify-content:center;flex:1;font-size:large}.save.svelte-uw3eh4{margin-top:1rem;text-align:right;font-size:medium;cursor:pointer}.section.svelte-uw3eh4{margin-top:1rem;margin-bottom:2rem}.section_title.svelte-uw3eh4{font-weight:700}.done.svelte-uw3eh4{text-decoration-line:line-through}.entry.svelte-uw3eh4{margin-top:0.3rem}.icon.svelte-uw3eh4{font-size:large;cursor:pointer}.detail_panel.svelte-uw3eh4{font-size:medium;margin-left:1.7rem}@media(max-width: 480px){.section.svelte-uw3eh4{width:auto}}")();
const css$1 = {
  code: ".container.svelte-uw3eh4{display:flex;flex-direction:column;flex:1;justify-content:center;flex:1;font-size:large}.save.svelte-uw3eh4{margin-top:1rem;text-align:right;font-size:medium;cursor:pointer}.section.svelte-uw3eh4{margin-top:1rem;margin-bottom:2rem}.section_title.svelte-uw3eh4{font-weight:700}.done.svelte-uw3eh4{text-decoration-line:line-through}.entry.svelte-uw3eh4{margin-top:0.3rem}.icon.svelte-uw3eh4{font-size:large;cursor:pointer}.detail_panel.svelte-uw3eh4{font-size:medium;margin-left:1.7rem}@media(max-width: 480px){.section.svelte-uw3eh4{width:auto}}",
  map: null
};
const ChckReadonly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contents } = $$props;
  let { id } = $$props;
  let detailIndex = { section: -1, entry: -1 };
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$1);
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"}" data-svelte="svelte-1s7y3p2">`, ""}

<div class="${"container svelte-uw3eh4"}"><div class="${"save svelte-uw3eh4"}"><span class="${"material-symbols-outlined"}">edit_square
        </span>
        \uC218\uC815
    </div>
    ${each(contents, (section, i) => {
    return `<div class="${"section svelte-uw3eh4"}"><div class="${"section_title svelte-uw3eh4"}">${escape(i + 1)}. ${escape(section.sectionTitle)}</div>

            ${each(section.items, (item, j) => {
      return `<div class="${["entry svelte-uw3eh4", item.done ? "done" : ""].join(" ").trim()}"><input type="${"checkbox"}" disabled${add_attribute("checked", item.done, 1)}>

                    <span class="${"entry_text"}">${escape(item.entry)}</span>
                    <span class="${"material-symbols-outlined icon svelte-uw3eh4"}">info</span>
                    ${detailIndex.section === i && detailIndex.entry === j ? `<div class="${"detail_panel svelte-uw3eh4"}"><!-- HTML_TAG_START -->${contents[i].items[j].detail}<!-- HTML_TAG_END -->
                        </div>` : ``}
                </div>`;
    })}
        </div>`;
  })}
    <button><span class="${"material-symbols-outlined"}">edit_square
        </span>
        \uC218\uC815
    </button>
</div>`;
});
var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-jb7jnz{font-weight:700;font-size:x-large}.date.svelte-jb7jnz{text-align:center}")();
const css = {
  code: "h1.svelte-jb7jnz{font-weight:700;font-size:x-large}.date.svelte-jb7jnz{text-align:center}",
  map: null
};
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chcks;
  let $page, $$unsubscribe_page;
  let $chcks, $$unsubscribe_chcks = noop, $$subscribe_chcks = () => ($$unsubscribe_chcks(), $$unsubscribe_chcks = subscribe(chcks, ($$value) => $chcks = $$value), chcks);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let id = Number($page.params.id);
  $$result.css.add(css);
  $$subscribe_chcks(chcks = liveQuery(async () => {
    const chcks2 = await db.chcks.where("id").equals(id).toArray();
    return chcks2;
  }));
  $$unsubscribe_page();
  $$unsubscribe_chcks();
  return `${$$result.head += `${$$result.title = `<title>ch.ck: \uC800\uC7A5\uB41C \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uC5F4\uB78C</title>`, ""}`, ""}

<div class="${"page_title"}">\uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uC5F4\uB78C</div>
<div>${$chcks ? `${each($chcks, (chck) => {
    return `<h1 class="${"svelte-jb7jnz"}">${escape(chck.title)}</h1>
        <div class="${"date svelte-jb7jnz"}">\uC0DD\uC131 \uC77C\uC2DC: ${escape(chck.createdAt.toLocaleString())}</div>
        <div class="${"date svelte-jb7jnz"}">\uC218\uC815 \uC77C\uC2DC: ${escape(chck.modifiedAt.toLocaleString())}</div>
        ${validate_component(ChckReadonly, "ChckReadonly").$$render($$result, { contents: chck.contents, id }, {}, {})}`;
  })}` : ``}
</div>`;
});
export { U5Bidu5D as default };
