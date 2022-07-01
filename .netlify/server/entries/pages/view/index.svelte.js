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
  default: () => View
});
module.exports = __toCommonJS(stdin_exports);
var import_index_58de3ccc = require("../../../chunks/index-58de3ccc.js");
var import_dexie = require("dexie");
var import_dbHelper_433da368 = require("../../../chunks/dbHelper-433da368.js");
var import_dateHelper_8b7a18e0 = require("../../../chunks/dateHelper-8b7a18e0.js");
var ChcksTable_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-za686w{display:flex;flex-direction:column;margin-top:2rem;padding:5px;border:1px dotted var(--accent-color)}.row.svelte-za686w{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;flex:1;margin-top:0.7rem;margin-bottom:0.7rem}.cell.svelte-za686w{padding-left:0.5rem;padding-right:0.5rem}button.svelte-za686w{border:0;cursor:pointer}")();
const css = {
  code: ".container.svelte-za686w{display:flex;flex-direction:column;margin-top:2rem;padding:5px;border:1px dotted var(--accent-color)}.row.svelte-za686w{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;flex:1;margin-top:0.7rem;margin-bottom:0.7rem}.cell.svelte-za686w{padding-left:0.5rem;padding-right:0.5rem}button.svelte-za686w{border:0;cursor:pointer}",
  map: null
};
const ChcksTable = (0, import_index_58de3ccc.c)(($$result, $$props, $$bindings, slots) => {
  let chcks;
  let $chcks, $$unsubscribe_chcks = import_index_58de3ccc.n, $$subscribe_chcks = () => ($$unsubscribe_chcks(), $$unsubscribe_chcks = (0, import_index_58de3ccc.a)(chcks, ($$value) => $chcks = $$value), chcks);
  let noChck = false;
  $$result.css.add(css);
  $$subscribe_chcks(chcks = (0, import_dexie.liveQuery)(async () => {
    try {
      const chcks2 = await import_dbHelper_433da368.d.chcks.toArray();
      if (chcks2.length === 0) {
        noChck = true;
      }
      return chcks2;
    } catch (error) {
      console.error("[dexie] \uC624\uB958 \uBC1C\uC0DD" + error);
      noChck = true;
    }
  }));
  $$unsubscribe_chcks();
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"}" data-svelte="svelte-1s7y3p2">`, ""}

<div class="${"container svelte-za686w"}">${$chcks ? `${(0, import_index_58de3ccc.b)($chcks, (chck) => {
    return `<div class="${"row svelte-za686w"}"><div class="${"title cell svelte-za686w"}"><a href="${"/view/" + (0, import_index_58de3ccc.e)(chck.id)}">${(0, import_index_58de3ccc.e)(chck.title)}</a></div>
            <div class="${"date cell svelte-za686w"}">\uC0DD\uC131 ${(0, import_index_58de3ccc.e)((0, import_dateHelper_8b7a18e0.t)(chck.createdAt))}</div>
            <div class="${"date cell svelte-za686w"}">\uC218\uC815 ${(0, import_index_58de3ccc.e)((0, import_dateHelper_8b7a18e0.t)(chck.modifiedAt))}</div>
            <button class="${"cell svelte-za686w"}"><span class="${"material-symbols-outlined"}">edit_square
                </span></button>
            <button class="${"cell svelte-za686w"}"><span class="${"material-symbols-outlined"}">delete
                </span></button>
        </div>`;
  })}` : ``}

    ${noChck ? `\uC800\uC7A5\uB41C \uCCB4\uD06C\uB9AC\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
        <a sveltekit:prefetch href="${"/new"}">\uC0C8\uB85C\uC6B4 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694.</a>` : ``}

</div>`;
});
const View = (0, import_index_58de3ccc.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>ch.ck: \uC800\uC7A5\uB41C \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uBAA9\uB85D</title>`, ""}`, ""}

<div class="${"page_title"}">\uC800\uC7A5\uB41C \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uBAA9\uB85D</div>

<div class="${"view"}">${(0, import_index_58de3ccc.v)(ChcksTable, "ChcksTable").$$render($$result, {}, {}, {})}</div>`;
});
