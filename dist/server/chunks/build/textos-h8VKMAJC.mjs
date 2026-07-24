import { v as vue_exports, u as useSeoMeta$1, s as server_renderer_exports } from '../virtual/entry.mjs';
import { t as components_default } from './components-BQHImTdp.mjs';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue';
import '../routes/renderer.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'unhead/server';
import 'unhead/legacy';
import 'nostics';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'devalue';
import 'perfect-debounce';

//#region app/pages/textos.vue?vue&type=script&setup=true&lang.ts
var textos_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "textos",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Textos Traduzidos | Bhumisparsha School",
			description: "Textos budistas traduzidos para PT-BR — Arya Tara, Manjushri, Sutras e Ensinamentos."
		});
		const openAccordion = (0, vue_exports.ref)(null);
		const categories = [
			{
				title: "Arya Tara",
				subtitle: "A Nobre Dama — Protetora e Guiia",
				icon: "heroicons:star",
				accent: "purple",
				items: [{
					title: "Arya Tara — A Nobre Dama",
					desc: "Traducao completa com comentarios e contexto historico."
				}, {
					title: "As 21 Taras",
					desc: "Invocacoes e significados das 21 formas de Tara."
				}]
			},
			{
				title: "Manjushri",
				subtitle: "Bodhisattva da Sabedoria",
				icon: "heroicons:bolt",
				accent: "red",
				items: [{
					title: "Manjushri — O Bodhisattva da Sabedoria",
					desc: "A lenda e os ensinamentos sobre a espada da discriminacao."
				}, {
					title: "Sutras de Manjushri",
					desc: "Textos canonicos dedicados ao jovial Bodhisattva."
				}]
			},
			{
				title: "Ensinamentos",
				subtitle: "Transcricoes de Mestres",
				icon: "heroicons:microphone",
				accent: "purple",
				items: [{
					title: "Dzongsar Khyentse Rinpoche",
					desc: "Transcricoes e traducoes dos ensinamentos ao vivo."
				}, {
					title: "Outros Mestres",
					desc: "Ensinamentos de various tradicoes budistas."
				}]
			},
			{
				title: "Sutras",
				subtitle: "Assim Eu Ouvi...",
				icon: "heroicons:book-open",
				accent: "green",
				items: [{
					title: "Gandavyuha Sutra",
					desc: "A jornada de Sudana em busca da sabedoria suprema."
				}, {
					title: "Heart Sutra",
					desc: "O coracao da sabedoria transcendental."
				}]
			},
			{
				title: "Reflexoes",
				subtitle: "Textos e Comentarios",
				icon: "heroicons:document-text",
				accent: "yellow",
				items: [{
					title: "Textos Diversos",
					desc: "Reflexoes, ensaios e traducoes livres."
				}, {
					title: "Comentarios",
					desc: "Notas e interpretacoes pessoais."
				}]
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = components_default;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "pt-20 overflow-hidden" }, _attrs))}><div class="absolute inset-0 pointer-events-none"><div class="absolute top-[15%] right-[8%] w-32 h-32 border-4 border-neo-yellow/10 rotate-45 animate-float"></div><div class="absolute bottom-[20%] left-[5%] w-24 h-24 border-4 border-neo-yellow/10 neo-clip-diamond animate-drift" style="${(0, server_renderer_exports.ssrRenderStyle)({ "animation-delay": "2s" })}"></div><div class="absolute top-[60%] right-[15%] w-16 h-16 border-2 border-neo-yellow/10 animate-spin-slower"></div></div><section class="relative py-24 px-4"><div class="max-w-5xl mx-auto relative z-10 textos-hero"><div class="flex items-center gap-4 mb-4"><div class="h-1 w-16 bg-neo-yellow"></div><span class="neo-subtitle" style="${(0, server_renderer_exports.ssrRenderStyle)({ "color": "#facc15" })}">Biblioteca Sagrada</span></div><h1 class="neo-title-yellow mb-6">Textos<br> Traduzidos</h1><div class="neo-divider-yellow max-w-[200px] mb-8"></div><p class="font-grotesk text-lg text-white/50 leading-relaxed max-w-3xl border-l-4 border-neo-yellow pl-4 mb-4"> Traducoes para Portugues (PT-BR) de textos budistas sagrados — ensinamentos, sutras, e textos de Dzongsar Khyentse Rinpoche. </p><p class="font-rajdhani text-sm text-white/30"> Cada categoria contem traducoes cuidadosas com comentarios e contexto. </p></div></section><section class="pb-24 px-4"><div class="max-w-4xl mx-auto"><div class="space-y-4"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(categories, (cat, i) => {
				_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)([[(0, vue_exports.unref)(openAccordion) === i ? cat.accent === "purple" ? "border-neo-purple bg-neo-purple/5" : cat.accent === "red" ? "border-neo-red bg-neo-red/5" : cat.accent === "green" ? "border-neo-green bg-neo-green/5" : "border-neo-yellow bg-neo-yellow/5" : "border-neo-border hover:border-neo-border/60"], "accordion-item border-2 transition-all duration-300"])}"><button class="w-full p-5 flex items-center gap-4 text-left cursor-pointer group"><div class="${(0, server_renderer_exports.ssrRenderClass)([[
					cat.accent === "purple" && "border-neo-purple text-neo-purple",
					cat.accent === "red" && "border-neo-red text-neo-red",
					cat.accent === "green" && "border-neo-green text-neo-green",
					cat.accent === "yellow" && "border-neo-yellow text-neo-yellow",
					(0, vue_exports.unref)(openAccordion) === i ? "rotate-12 scale-110" : ""
				], "w-12 h-12 flex items-center justify-center border-2 flex-shrink-0 transition-all duration-300"])}">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: cat.icon,
					class: "w-5 h-5"
				}, null, _parent));
				_push(`</div><div class="flex-1"><h3 class="${(0, server_renderer_exports.ssrRenderClass)([[
					cat.accent === "purple" && "text-neo-purple",
					cat.accent === "red" && "text-neo-red",
					cat.accent === "green" && "text-neo-green",
					cat.accent === "yellow" && "text-neo-yellow"
				], "font-orbitron text-xs tracking-[0.15em] uppercase font-bold"])}">${(0, server_renderer_exports.ssrInterpolate)(cat.title)}</h3><p class="font-rajdhani text-xs text-white/35 mt-0.5">${(0, server_renderer_exports.ssrInterpolate)(cat.subtitle)}</p></div>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: "heroicons:chevron-down",
					class: ["w-5 h-5 text-white/30 transition-transform duration-300", (0, vue_exports.unref)(openAccordion) === i ? "rotate-180" : ""]
				}, null, _parent));
				_push(`</button><div class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(openAccordion) === i ? "open" : "", "neo-accordion-content"])}"><div class="px-5 pb-5 space-y-3"><!--[-->`);
				(0, server_renderer_exports.ssrRenderList)(cat.items, (item) => {
					_push(`<div class="p-4 border border-neo-border/30 hover:border-neo-border/60 transition-all duration-200 cursor-default group/item"><div class="flex items-start gap-3"><div class="${(0, server_renderer_exports.ssrRenderClass)([[
						cat.accent === "purple" && "bg-neo-purple",
						cat.accent === "red" && "bg-neo-red",
						cat.accent === "green" && "bg-neo-green",
						cat.accent === "yellow" && "bg-neo-yellow"
					], "w-2 h-2 mt-2 flex-shrink-0"])}"></div><div><h4 class="font-grotesk text-sm text-white/70 group-hover/item:text-white/90 transition-colors duration-200 font-bold">${(0, server_renderer_exports.ssrInterpolate)(item.title)}</h4><p class="font-rajdhani text-xs text-white/30 mt-1">${(0, server_renderer_exports.ssrInterpolate)(item.desc)}</p></div></div></div>`);
				});
				_push(`<!--]--></div></div></div>`);
			});
			_push(`<!--]--></div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/textos.vue
var _sfc_setup = textos_vue_vue_type_script_setup_true_lang_default.setup;
textos_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/textos.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var textos_default = textos_vue_vue_type_script_setup_true_lang_default;

export { textos_default as default };
//# sourceMappingURL=textos-h8VKMAJC.mjs.map
