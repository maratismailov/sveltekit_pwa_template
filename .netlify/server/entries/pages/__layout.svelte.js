var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _layout
});
var import_index_2dc61825 = __toModule(require("../../chunks/index-2dc61825.js"));
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".navbar.svelte-j5siii.svelte-j5siii{background-color:#333;overflow:hidden;position:fixed;bottom:0;width:100%;margin-left:-8px}.navbar.svelte-j5siii a.svelte-j5siii{float:left;display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}.navbar.svelte-j5siii a.svelte-j5siii:hover{background-color:#ddd;color:black}.navbar.svelte-j5siii a.active.svelte-j5siii{background-color:#04aa6d;color:white}",
  map: null
};
const _layout = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"navbar svelte-j5siii"}"><a href="${"/"}" class="${"active svelte-j5siii"}">Map</a>
	<a href="${"#news"}" class="${"svelte-j5siii"}">News</a>
	<a href="${"#contact"}" class="${"svelte-j5siii"}">Contact</a></div>

${slots.default ? slots.default({}) : ``}`;
});
