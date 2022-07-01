import { c as create_ssr_component, a as subscribe, e as escape, b as each, n as noop, v as validate_component } from "../../chunks/index-58de3ccc.js";
import { liveQuery } from "dexie";
import { d as db } from "../../chunks/dbHelper-433da368.js";
import { t as toTimestring } from "../../chunks/dateHelper-8b7a18e0.js";
var Dashboard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-ue6ml4{display:flex;flex-direction:column;margin-top:2rem;padding:5px;border:1px dotted var(--accent-color)}.row.svelte-ue6ml4{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;flex:1;margin-top:0.7rem;margin-bottom:0.7rem}.add.svelte-ue6ml4{display:flex;flex-direction:row;justify-content:center;align-items:center;flex:1;margin-top:0.7rem;margin-bottom:0.7rem;color:var(--secondary-color);cursor:pointer}.cell.svelte-ue6ml4{padding-left:0.5rem;padding-right:0.5rem}button.svelte-ue6ml4{border:0;cursor:pointer}")();
const css = {
  code: ".container.svelte-ue6ml4{display:flex;flex-direction:column;margin-top:2rem;padding:5px;border:1px dotted var(--accent-color)}.row.svelte-ue6ml4{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;flex:1;margin-top:0.7rem;margin-bottom:0.7rem}.add.svelte-ue6ml4{display:flex;flex-direction:row;justify-content:center;align-items:center;flex:1;margin-top:0.7rem;margin-bottom:0.7rem;color:var(--secondary-color);cursor:pointer}.cell.svelte-ue6ml4{padding-left:0.5rem;padding-right:0.5rem}button.svelte-ue6ml4{border:0;cursor:pointer}",
  map: null
};
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chcks;
  let $chcks, $$unsubscribe_chcks = noop, $$subscribe_chcks = () => ($$unsubscribe_chcks(), $$unsubscribe_chcks = subscribe(chcks, ($$value) => $chcks = $$value), chcks);
  let noChck = false;
  let dateRaw = new Date();
  let timeString = dateRaw.getFullYear() + "\uB144 " + (dateRaw.getMonth() + 1) + "\uC6D4 " + dateRaw.getDate() + "\uC77C " + dateRaw.getHours() + "\uC2DC " + dateRaw.getMinutes() + "\uBD84";
  let startDate = new Date(dateRaw.getFullYear(), dateRaw.getMonth(), dateRaw.getDate(), 0, 0);
  let endDate = new Date(dateRaw.getFullYear(), dateRaw.getMonth(), dateRaw.getDate() + 1, 0, 0);
  $$result.css.add(css);
  $$subscribe_chcks(chcks = liveQuery(async () => {
    const chcks2 = await db.chcks.where("modifiedAt").between(startDate, endDate).toArray();
    if (chcks2.length === 0) {
      noChck = true;
    }
    return chcks2;
  }));
  $$unsubscribe_chcks();
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"}" data-svelte="svelte-1s7y3p2">`, ""}

<div class="${"page_title"}">${escape(timeString)}\uC758 \uCCB4\xB7\uD06C\uB9AC\uC2A4\uD2B8
</div>
<div class="${"container svelte-ue6ml4"}">${noChck ? `<div class="${"row svelte-ue6ml4"}">\uC624\uB298 \uC0DD\uC131\uB41C \uCCB4\uD06C\uB9AC\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
        </div>` : ``}
    ${$chcks ? `${each($chcks, (chck) => {
    return `<div class="${"row svelte-ue6ml4"}"><div class="${"title cell svelte-ue6ml4"}"><a href="${"/view/" + escape(chck.id)}">${escape(chck.title)}</a></div>
            <div class="${"date cell svelte-ue6ml4"}">\uC0DD\uC131 ${escape(toTimestring(chck.createdAt))}</div>
            <div class="${"date cell svelte-ue6ml4"}">\uC218\uC815 ${escape(toTimestring(chck.modifiedAt))}</div>
            <button class="${"cell svelte-ue6ml4"}"><span class="${"material-symbols-outlined"}">edit_square
                </span></button>
            <button class="${"cell svelte-ue6ml4"}"><span class="${"material-symbols-outlined"}">delete
                </span></button>
        </div>`;
  })}
        <div class="${"add svelte-ue6ml4"}"><span class="${"material-symbols-outlined"}">add
            </span>
            \uC0C8\uB85C\uC6B4 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uCD94\uAC00
        </div>` : ``}
</div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>ch.ck: \uD648</title>`, ""}<meta name="${"description"}" content="${"ch.ck \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uC791\uC131, \uC5F4\uB78C"}" data-svelte="svelte-k5ng3j">`, ""}

${validate_component(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
