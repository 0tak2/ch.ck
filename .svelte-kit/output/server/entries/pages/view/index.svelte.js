import { c as create_ssr_component, a as subscribe, b as each, n as noop, e as escape, v as validate_component } from "../../../chunks/index-58de3ccc.js";
import { liveQuery } from "dexie";
import { d as db } from "../../../chunks/dbHelper-433da368.js";
import { t as toTimestring } from "../../../chunks/dateHelper-8b7a18e0.js";
var ChcksTable_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-za686w{display:flex;flex-direction:column;margin-top:2rem;padding:5px;border:1px dotted var(--accent-color)}.row.svelte-za686w{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;flex:1;margin-top:0.7rem;margin-bottom:0.7rem}.cell.svelte-za686w{padding-left:0.5rem;padding-right:0.5rem}button.svelte-za686w{border:0;cursor:pointer}")();
const css = {
  code: ".container.svelte-za686w{display:flex;flex-direction:column;margin-top:2rem;padding:5px;border:1px dotted var(--accent-color)}.row.svelte-za686w{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;flex:1;margin-top:0.7rem;margin-bottom:0.7rem}.cell.svelte-za686w{padding-left:0.5rem;padding-right:0.5rem}button.svelte-za686w{border:0;cursor:pointer}",
  map: null
};
const ChcksTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chcks;
  let $chcks, $$unsubscribe_chcks = noop, $$subscribe_chcks = () => ($$unsubscribe_chcks(), $$unsubscribe_chcks = subscribe(chcks, ($$value) => $chcks = $$value), chcks);
  let noChck = false;
  $$result.css.add(css);
  $$subscribe_chcks(chcks = liveQuery(async () => {
    try {
      const chcks2 = await db.chcks.toArray();
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

<div class="${"container svelte-za686w"}">${$chcks ? `${each($chcks, (chck) => {
    return `<div class="${"row svelte-za686w"}"><div class="${"title cell svelte-za686w"}"><a href="${"/view/" + escape(chck.id)}">${escape(chck.title)}</a></div>
            <div class="${"date cell svelte-za686w"}">\uC0DD\uC131 ${escape(toTimestring(chck.createdAt))}</div>
            <div class="${"date cell svelte-za686w"}">\uC218\uC815 ${escape(toTimestring(chck.modifiedAt))}</div>
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
const View = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>ch.ck: \uC800\uC7A5\uB41C \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uBAA9\uB85D</title>`, ""}`, ""}

<div class="${"page_title"}">\uC800\uC7A5\uB41C \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uBAA9\uB85D</div>

<div class="${"view"}">${validate_component(ChcksTable, "ChcksTable").$$render($$result, {}, {}, {})}</div>`;
});
export { View as default };
