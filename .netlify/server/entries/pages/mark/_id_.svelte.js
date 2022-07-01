var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Bidu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_58de3ccc = require("../../../chunks/index-58de3ccc.js");
var import_stores_0223fdef = require("../../../chunks/stores-0223fdef.js");
var import_dexie = require("dexie");
var import_dbHelper_433da368 = require("../../../chunks/dbHelper-433da368.js");
var ChckMarkboard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-cdg0jo{border:1px dotted black;margin:1rem;padding:1rem;display:flex;flex-direction:column;flex:1;justify-content:center;flex:1;font-size:large}.save.svelte-cdg0jo{margin-top:1rem;text-align:right;font-size:medium;cursor:pointer}.section.svelte-cdg0jo{margin-top:1rem;margin-bottom:2rem}.section_title.svelte-cdg0jo{font-weight:700}.done.svelte-cdg0jo{text-decoration-line:line-through}.entry.svelte-cdg0jo{margin-top:0.3rem}.entry_text.svelte-cdg0jo{cursor:pointer}.icon.svelte-cdg0jo{font-size:large;cursor:pointer}.detail_panel.svelte-cdg0jo{font-size:medium;margin-left:1.7rem}@media(max-width: 480px){.section.svelte-cdg0jo{width:auto}}")();
const css$1 = {
  code: ".container.svelte-cdg0jo{border:1px dotted black;margin:1rem;padding:1rem;display:flex;flex-direction:column;flex:1;justify-content:center;flex:1;font-size:large}.save.svelte-cdg0jo{margin-top:1rem;text-align:right;font-size:medium;cursor:pointer}.section.svelte-cdg0jo{margin-top:1rem;margin-bottom:2rem}.section_title.svelte-cdg0jo{font-weight:700}.done.svelte-cdg0jo{text-decoration-line:line-through}.entry.svelte-cdg0jo{margin-top:0.3rem}.entry_text.svelte-cdg0jo{cursor:pointer}.icon.svelte-cdg0jo{font-size:large;cursor:pointer}.detail_panel.svelte-cdg0jo{font-size:medium;margin-left:1.7rem}@media(max-width: 480px){.section.svelte-cdg0jo{width:auto}}",
  map: null
};
const ChckMarkboard = (0, import_index_58de3ccc.c)(($$result, $$props, $$bindings, slots) => {
  let { contents } = $$props;
  (0, import_index_58de3ccc.d)();
  let detailIndex = { section: -1, entry: -1 };
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  $$result.css.add(css$1);
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"}" data-svelte="svelte-1s7y3p2">`, ""}

<div class="${"container svelte-cdg0jo"}"><div class="${"save svelte-cdg0jo"}"><span class="${"material-symbols-outlined icon svelte-cdg0jo"}">save
        </span>
        \uC800\uC7A5
    </div>
    ${(0, import_index_58de3ccc.b)(contents, (section, i) => {
    return `<div class="${"section svelte-cdg0jo"}"><div class="${"section_title svelte-cdg0jo"}">${(0, import_index_58de3ccc.e)(i + 1)}. ${(0, import_index_58de3ccc.e)(section.sectionTitle)}</div>

            ${(0, import_index_58de3ccc.b)(section.items, (item, j) => {
      return `<div class="${["entry svelte-cdg0jo", item.done ? "done" : ""].join(" ").trim()}"><input type="${"checkbox"}"${(0, import_index_58de3ccc.f)("checked", item.done, 1)}>

                    <span class="${"entry_text svelte-cdg0jo"}">${(0, import_index_58de3ccc.e)(item.entry)}</span>
                    <span class="${"material-symbols-outlined icon svelte-cdg0jo"}">info</span>
                    ${detailIndex.section === i && detailIndex.entry === j ? `<div class="${"detail_panel svelte-cdg0jo"}"><!-- HTML_TAG_START -->${contents[i].items[j].detail}<!-- HTML_TAG_END -->
                        </div>` : ``}
                </div>`;
    })}
        </div>`;
  })}
    <button><span class="${"material-symbols-outlined icon svelte-cdg0jo"}">save
        </span>
        \uC800\uC7A5
    </button>
</div>`;
});
var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-jb7jnz{font-weight:700;font-size:x-large}.date.svelte-jb7jnz{text-align:center}")();
const css = {
  code: "h1.svelte-jb7jnz{font-weight:700;font-size:x-large}.date.svelte-jb7jnz{text-align:center}",
  map: null
};
const U5Bidu5D = (0, import_index_58de3ccc.c)(($$result, $$props, $$bindings, slots) => {
  let chcks;
  let $page, $$unsubscribe_page;
  let $chcks, $$unsubscribe_chcks = import_index_58de3ccc.n, $$subscribe_chcks = () => ($$unsubscribe_chcks(), $$unsubscribe_chcks = (0, import_index_58de3ccc.a)(chcks, ($$value) => $chcks = $$value), chcks);
  $$unsubscribe_page = (0, import_index_58de3ccc.a)(import_stores_0223fdef.p, (value) => $page = value);
  let id = Number($page.params.id);
  $$result.css.add(css);
  $$subscribe_chcks(chcks = (0, import_dexie.liveQuery)(async () => {
    const chcks2 = await import_dbHelper_433da368.d.chcks.where("id").equals(id).toArray();
    return chcks2;
  }));
  $$unsubscribe_page();
  $$unsubscribe_chcks();
  return `${$$result.head += `${$$result.title = `<title>ch.ck: \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uAE30\uB85D</title>`, ""}`, ""}

<div class="${"page_title"}">\uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uAE30\uB85D</div>
<div>${$chcks ? `${(0, import_index_58de3ccc.b)($chcks, (chck) => {
    return `<h1 class="${"svelte-jb7jnz"}">${(0, import_index_58de3ccc.e)(chck.title)}</h1>
        <div class="${"date svelte-jb7jnz"}">\uC0DD\uC131 \uC77C\uC2DC: ${(0, import_index_58de3ccc.e)(chck.createdAt.toLocaleString())}</div>
        <div class="${"date svelte-jb7jnz"}">\uC218\uC815 \uC77C\uC2DC: ${(0, import_index_58de3ccc.e)(chck.modifiedAt.toLocaleString())}</div>
        ${(0, import_index_58de3ccc.v)(ChckMarkboard, "ChckMarkboard").$$render($$result, { contents: chck.contents }, {}, {})}`;
  })}` : ``}
</div>`;
});
