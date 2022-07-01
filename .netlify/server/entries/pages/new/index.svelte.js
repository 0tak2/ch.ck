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
  default: () => New
});
module.exports = __toCommonJS(stdin_exports);
var import_index_58de3ccc = require("../../../chunks/index-58de3ccc.js");
var import_dbHelper_433da368 = require("../../../chunks/dbHelper-433da368.js");
var import_dexie = require("dexie");
var SelectTemplateCard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".card.svelte-2k18rj{padding:10px;margin-top:2rem;border:1px dotted black;width:600px}.title.svelte-2k18rj{font-weight:700;font-size:x-large;margin-bottom:0.5rem}.button_container.svelte-2k18rj{text-align:center;margin:0.3rem}button.svelte-2k18rj{color:var(--accent-color)}button.secondary.svelte-2k18rj{color:var(--secondary-color)}.preview_panel.svelte-2k18rj{padding:15px;margin:15px;border:1px solid var(--accent-color);font-size:small}@media(max-width: 480px){.title.svelte-2k18rj{font-size:large}.card.svelte-2k18rj{width:85vw}}")();
const css$1 = {
  code: ".card.svelte-2k18rj{padding:10px;margin-top:2rem;border:1px dotted black;width:600px}.title.svelte-2k18rj{font-weight:700;font-size:x-large;margin-bottom:0.5rem}.button_container.svelte-2k18rj{text-align:center;margin:0.3rem}button.svelte-2k18rj{color:var(--accent-color)}button.secondary.svelte-2k18rj{color:var(--secondary-color)}.preview_panel.svelte-2k18rj{padding:15px;margin:15px;border:1px solid var(--accent-color);font-size:small}@media(max-width: 480px){.title.svelte-2k18rj{font-size:large}.card.svelte-2k18rj{width:85vw}}",
  map: null
};
const SelectTemplateCard = (0, import_index_58de3ccc.c)(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$1);
  return `<div class="${"card svelte-2k18rj"}"><div class="${"title svelte-2k18rj"}">${(0, import_index_58de3ccc.e)(item.title)}</div>

    ${item.description != null ? `<div class="${"description"}">${(0, import_index_58de3ccc.e)(item.description)}</div>` : ``}

    <div class="${"version"}">\uBC84\uC804 ${(0, import_index_58de3ccc.e)(item.version.toFixed(1))}</div>

    <div class="${"button_container svelte-2k18rj"}"><button class="${"svelte-2k18rj"}">\uC774 \uD15C\uD50C\uB9BF \uC120\uD0DD</button></div>
    <div class="${"button_container svelte-2k18rj"}"><button class="${"secondary svelte-2k18rj"}">\uD15C\uD50C\uB9BF \uBBF8\uB9AC\uBCF4\uAE30</button></div>

    ${``}
</div>`;
});
var SelectTemplate_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-600438{display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center;flex:1}")();
const css = {
  code: ".container.svelte-600438{display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center;flex:1}",
  map: null
};
const SelectTemplate = (0, import_index_58de3ccc.c)(($$result, $$props, $$bindings, slots) => {
  let { templates: templates2 } = $$props;
  if ($$props.templates === void 0 && $$bindings.templates && templates2 !== void 0)
    $$bindings.templates(templates2);
  $$result.css.add(css);
  return `<div class="${"container svelte-600438"}">${(0, import_index_58de3ccc.b)(templates2, (item) => {
    return `<div class="${"card"}">${(0, import_index_58de3ccc.v)(SelectTemplateCard, "SelectTemplateCard").$$render($$result, { item }, {}, {})}
        </div>`;
  })}
</div>`;
});
const templates = [
  {
    "id": "kimch1",
    "title": "\uB79C\uC120 \uC5B4\uB9B0\uC774 \uAE40\uCE58\uD559\uAD50 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8",
    "description": "\uB79C\uC120 \uC5B4\uB9B0\uC774 \uAE40\uCE58\uD559\uAD50 \uC9C4\uD589 \uC804\xB7\uD6C4 \uC810\uAC80\uC0AC\uD56D \uCCB4\uD06C\uB9AC\uC2A4\uD2B8",
    "version": 1.1,
    "contents": [
      {
        "sectionTitle": "\uC2DC\uC791 \uC804 \uC810\uAC80\uC0AC\uD56D",
        "items": [
          {
            "entry": "\uC54C\uB9BC\uD1A1\uC774 \uC62C\uBC14\uB974\uAC8C \uC804\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uAE4C?",
            "detail": "\uC2DC\uAC04\uB300, \uC90C \uBBF8\uD305\uB8F8 \uBC88\uD638\uB97C \uD655\uC778\uD55C \uD6C4 \uC804\uC1A1",
            "done": false
          },
          {
            "entry": "\uD504\uB85C\uADF8\uB7A8 \uC900\uBE44\uBB3C\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",
            "detail": "\uAE40\uCE58 \uC591\uB150, \uCE7C, \uC7AC\uB8CC \uB4F1",
            "done": false
          },
          {
            "entry": "\uC90C \uD638\uC2A4\uD2B8 \uC124\uC815\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",
            "detail": "\uC1A1\uCD9C \uCEF4\uD4E8\uD130 \uD638\uC2A4\uD2B8 \uC694\uCCAD<br />\uC11C\uBE0C \uB178\uD2B8\uBD81 \uACF5\uB3D9\uD638\uC2A4\uD2B8 \uC694\uCCAD<br />\uC785\uC7A5\uC2DC \uC74C\uC18C\uAC70",
            "done": false
          },
          {
            "entry": "\uC90C \uBCF4\uC548 \uC124\uC815\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",
            "detail": "\uB300\uAE30\uC2E4 \uC0AC\uC6A9<br />\uC2A4\uC2A4\uB85C \uC74C\uC18C\uAC70 \uD574\uC81C \uBD88\uAC00\uB2A5\uD558\uAC8C \uC124\uC815",
            "done": false
          },
          {
            "entry": "\uC90C \uC1A1\uCD9C \uC0C1\uD0DC\uB97C \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C? \uC1A1\uCD9C \uCEF4\uD4E8\uD130 \uD654\uBA74\uC774 \uBAA8\uB450\uC5D0\uAC8C \uCD94\uCC9C\uB418\uC5B4\uC788\uC2B5\uB2C8\uAE4C?",
            "detail": "\uD734\uB300\uD3F0\uC73C\uB85C \uC90C \uC811\uC18D\uD558\uC5EC \uD654\uBA74 \uBC0F \uC74C\uC131 \uC1A1\uCD9C \uC0C1\uD0DC \uD655\uC778<br />\uC1A1\uCD9C \uCEF4\uD4E8\uD130\uC758 \uD654\uBA74\uC5D0 \uB300\uD574 \uBAA8\uB450\uC5D0\uAC8C \uCD94\uCC9C \uD65C\uC131\uD654",
            "done": false
          },
          {
            "entry": "\uCE74\uBA54\uB77C \uC138\uD305 \uBC0F \uC124\uC815\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",
            "detail": "\uCE74\uBA54\uB77C \uC218\uD3C9 \uD655\uC778<br />\uCE74\uBA54\uB77C \uB124\uD2B8\uC6CC\uD06C \uBAA8\uB4DC<br />\uC90C \uBE44\uB514\uC624 \uC2DC\uC791<br />\uB178\uCD9C \uBC0F \uCD08\uC810",
            "done": false
          },
          {
            "entry": "\uB9C8\uC774\uD06C \uC138\uD305 \uBC0F \uC124\uC815\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",
            "detail": "\uB9C8\uC774\uD06C \uB450 \uAC1C \uBAA8\uB450 \uBC30\uD130\uB9AC \uD655\uC778, \uC7A0\uC2DC \uC74C\uC18C\uAC70 \uD574\uC81C \uD6C4 \uC74C\uC131 \uC1A1\uCD9C \uD14C\uC2A4\uD2B8, \uCF00\uC774\uBE14 \uC5F0\uACB0 \uD655\uC778",
            "done": false
          },
          {
            "entry": "\uCE74\uBA54\uB77C\uC640 \uB9C8\uC774\uD06C\uC758 \uBC30\uD130\uB9AC \uC0C1\uD0DC\uB97C \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",
            "detail": "\uC5EC\uBD84 \uBC30\uD130\uB9AC\uAE4C\uC9C0 \uC794\uB7C9 \uD655\uC778 \uD544\uC694<br />\uB9C8\uC774\uD06C\uC758 \uACBD\uC6B0 2\uCE78\uC778 \uACBD\uC6B0 \uC218\uC5C5 \uC911 \uAEBC\uC9C8 \uC218 \uC788\uC74C",
            "done": false
          },
          {
            "entry": "\uAE40\uCE58 \uC120\uC0DD\uB2D8\uC6A9 \uBAA8\uB2C8\uD130\uC758 \uD654\uBA74\uC774 \uC62C\uBC14\uB974\uAC8C \uD45C\uC2DC\uB429\uB2C8\uAE4C?",
            "detail": "\uC11C\uBE0C\uB178\uD2B8\uBD81\uACFC \uBAA8\uB2C8\uD130\uB97C HDMI\uB85C \uC5F0\uACB0",
            "done": false
          },
          {
            "entry": "\uC870\uBA85\uC774 \uC62C\uBC14\uB974\uAC8C \uCF1C\uC838 \uC788\uC2B5\uB2C8\uAE4C?",
            "detail": "\uCE74\uBA54\uB77C \uC0C9\uAC10\uC774 \uC774\uC0C1\uD55C \uACBD\uC6B0 \uC870\uBA85 \uAC00\uB3D9 \uC5EC\uBD80 \uBC0F \uC0C9\uC628\uB3C4 \uC138\uD305 \uD655\uC778",
            "done": false
          }
        ]
      },
      {
        "sectionTitle": "\uC885\uB8CC \uD6C4 \uC810\uAC80\uC0AC\uD56D",
        "items": [
          {
            "entry": "\uC2AC\uB77C\uC774\uB4DC \uC790\uB8CC\uC758 \uC2DC\uAC04\uC744 \uB2E4\uC74C \uD68C\uCC28 \uAE30\uC900\uC73C\uB85C \uBCC0\uACBD\uD588\uC2B5\uB2C8\uAE4C?",
            "detail": "\uB2E4\uC74C \uD68C\uCC28 \uC2DC\uC791 \uC2DC\uAC01\uC73C\uB85C \uC2AC\uB77C\uC774\uB4DC \uC790\uB8CC 1\uD398\uC774\uC9C0 \uC218\uC815",
            "done": false
          },
          {
            "entry": "\uCE74\uBA54\uB77C\uC640 \uB9C8\uC774\uD06C\uC758 \uBC30\uD130\uB9AC \uC0C1\uD0DC\uB97C \uD655\uC778\uD558\uACE0 \uCDA9\uC804\uD558\uACE0 \uC788\uC2B5\uB2C8\uAE4C?",
            "detail": "\uB9C8\uC774\uD06C\uB294 \uAE40\uCE58\uC120\uC0DD\uB2D8 \uC55E\uCE58\uB9C8\uC5D0 \uC788\uC744 \uC218 \uC788\uC74C",
            "done": false
          }
        ]
      }
    ]
  },
  {
    "id": "test1",
    "title": "\uD14C\uC2A4\uD2B8 \uD15C\uD50C\uB9BF",
    "description": "\uD14C\uC2A4\uD2B8\uB97C \uC704\uD55C \uB354\uBBF8 \uB370\uC774\uD130",
    "version": 1,
    "contents": [
      {
        "sectionTitle": "\uC139\uC158 1",
        "items": [
          {
            "entry": "\uC810\uAC80\uC0AC\uD56D 1",
            "detail": "\uC810\uAC80\uC0AC\uD56D 1 \uBD80\uAC00\uC124\uBA85",
            "done": false
          },
          {
            "entry": "\uC810\uAC80\uC0AC\uD56D 2",
            "detail": "\uC810\uAC80\uC0AC\uD56D 2 \uBD80\uAC00\uC124\uBA85",
            "done": false
          },
          {
            "entry": "\uC810\uAC80\uC0AC\uD56D 3",
            "detail": "\uC810\uAC80\uC0AC\uD56D 3 \uBD80\uAC00\uC124\uBA85",
            "done": false
          },
          {
            "entry": "\uC810\uAC80\uC0AC\uD56D 4",
            "detail": "\uC810\uAC80\uC0AC\uD56D 4 \uBD80\uAC00\uC124\uBA85",
            "done": false
          },
          {
            "entry": "\uC810\uAC80\uC0AC\uD56D 5",
            "detail": "\uC810\uAC80\uC0AC\uD56D 5 \uBD80\uAC00\uC124\uBA85",
            "done": false
          }
        ]
      },
      {
        "sectionTitle": "\uC139\uC158 2",
        "items": [
          {
            "entry": "\uC810\uAC80\uC0AC\uD56D 1",
            "detail": "\uC810\uAC80\uC0AC\uD56D 1 \uBD80\uAC00\uC124\uBA85",
            "done": false
          },
          {
            "entry": "\uC810\uAC80\uC0AC\uD56D 2",
            "detail": "\uC810\uAC80\uC0AC\uD56D 2 \uBD80\uAC00\uC124\uBA85",
            "done": false
          },
          {
            "entry": "\uC810\uAC80\uC0AC\uD56D 3",
            "detail": "\uC810\uAC80\uC0AC\uD56D 3 \uBD80\uAC00\uC124\uBA85",
            "done": false
          },
          {
            "entry": "\uC810\uAC80\uC0AC\uD56D 4",
            "detail": "\uC810\uAC80\uC0AC\uD56D 4 \uBD80\uAC00\uC124\uBA85",
            "done": false
          },
          {
            "entry": "\uC810\uAC80\uC0AC\uD56D 5",
            "detail": "\uC810\uAC80\uC0AC\uD56D 5 \uBD80\uAC00\uC124\uBA85",
            "done": false
          }
        ]
      }
    ]
  }
];
function getTemplates() {
  return templates;
}
const New = (0, import_index_58de3ccc.c)(($$result, $$props, $$bindings, slots) => {
  const templates2 = getTemplates();
  return `${$$result.head += `${$$result.title = `<title>ch.ck: \uC0C8\uB85C\uC6B4 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8</title>`, ""}`, ""}

<div class="${"page_title"}">\uC0C8\uB85C\uC6B4 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uC0DD\uC131</div>

<div class="${"new"}">${templates2 ? `${(0, import_index_58de3ccc.v)(SelectTemplate, "SelectTemplate").$$render($$result, { templates: templates2 }, {}, {})}` : ``}</div>`;
});
