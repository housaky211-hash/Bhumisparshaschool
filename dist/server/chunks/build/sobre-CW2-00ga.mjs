import { v as vue_exports, u as useSeoMeta$1, s as server_renderer_exports } from '../virtual/entry.mjs';
import { _ as _sfc_main } from './NuxtImg-lZ-UJJrO.mjs';
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

//#region app/pages/sobre.vue?vue&type=script&setup=true&lang.ts
var sobre_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "sobre",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Sobre | Bhumisparsha School",
			description: "Conheca a Bhumisparsha School — Arte, Dharma, Meio Ambiente e Tecnologia."
		});
		const counters = (0, vue_exports.ref)([
			{
				label: "Projetos",
				target: 6,
				current: 0
			},
			{
				label: "Artistas",
				target: 12,
				current: 0
			},
			{
				label: "Traducoes",
				target: 20,
				current: 0
			},
			{
				label: "Arvores",
				target: 500,
				current: 0
			}
		]);
		const hoveredPillar = (0, vue_exports.ref)(null);
		const pillars = [
			{
				title: "Musica",
				icon: "heroicons:musical-note",
				desc: "Eletronica sagrada, beats que conectam ao vazio.",
				color: "purple"
			},
			{
				title: "Dharma",
				icon: "heroicons:sparkles",
				desc: "Ensinamentos traduzidos e acessiveis.",
				color: "yellow"
			},
			{
				title: "Terra",
				icon: "heroicons:globe-alt",
				desc: "Reflorestamento e regeneracao ambiental.",
				color: "green"
			},
			{
				title: "Codigo",
				icon: "heroicons:cpu-chip",
				desc: "Futurismo digital e series audiovisuais.",
				color: "red"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtImg = _sfc_main;
			const _component_Icon = components_default;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "pt-20 overflow-hidden" }, _attrs))}><section class="relative min-h-[70vh] flex items-center overflow-hidden"><div class="absolute inset-0 pointer-events-none"><div class="floating-shape absolute top-[10%] left-[5%] w-32 h-32 border-4 border-neo-purple/20 neo-clip-diamond animate-float"></div><div class="floating-shape absolute top-[60%] right-[8%] w-24 h-24 border-4 border-neo-green/15 neo-clip-hex animate-drift"></div><div class="floating-shape absolute bottom-[15%] left-[15%] w-20 h-20 border-4 border-neo-yellow/10 neo-clip-octagon animate-spin-slower"></div><div class="floating-shape absolute top-[30%] right-[25%] w-16 h-16 bg-neo-purple/5 animate-float" style="${(0, server_renderer_exports.ssrRenderStyle)({ "animation-delay": "1s" })}"></div></div><div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 sobre-hero"><div><div class="flex items-center gap-4 mb-4"><div class="h-1 w-16 bg-neo-purple"></div><span class="neo-subtitle">Quem Somos</span></div><h1 class="neo-title mb-6">Bhumisparsha<br> School</h1><div class="neo-divider max-w-[200px] mb-8"></div><p class="font-grotesk text-lg text-white/60 leading-relaxed mb-6 border-l-4 border-neo-purple pl-4"> Arte, Dharma, Meio Ambiente e Tecnologia — no cruzamento entre a sabedoria ancestral e o futurismo digital. </p><p class="font-rajdhani text-white/40 leading-relaxed"> Fundada a partir da inspiracao dos ensinamentos de Dzongsar Khyentse Rinpoche, atuamos em musicas eletronicas, traducoes budistas, reflorestamento e series futuristas. </p></div><div class="relative"><div class="aspect-[4/5] neo-clip border-4 border-neo-purple neo-glow-purple overflow-hidden">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
				src: "/images/project-main.png",
				alt: "Bhumisparsha School",
				width: "600",
				height: "750",
				class: "w-full h-full object-cover",
				loading: "eager"
			}, null, _parent));
			_push(`<div class="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-neo-black/30"></div></div><div class="absolute -bottom-3 -right-3 w-20 h-20 border-4 border-neo-purple animate-pulse-border"></div></div></div></section><section class="py-20 px-4"><div class="max-w-6xl mx-auto"><div class="mb-12"><div class="flex items-center gap-4 mb-4"><div class="h-1 w-16 bg-neo-yellow"></div><span class="neo-subtitle" style="${(0, server_renderer_exports.ssrRenderStyle)({ "color": "#facc15" })}">Pilares</span></div><h2 class="neo-title-yellow mb-4">Os 4 Pilares</h2><div class="neo-divider-yellow max-w-[200px] mt-4"></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(pillars, (p, i) => {
				_push(`<div class="pillar-card group relative cursor-pointer"><div class="${(0, server_renderer_exports.ssrRenderClass)([[
					(0, vue_exports.unref)(hoveredPillar) === i ? "bg-neo-dark" : "bg-transparent",
					p.color === "purple" && "border-neo-purple",
					p.color === "yellow" && "border-neo-yellow",
					p.color === "green" && "border-neo-green",
					p.color === "red" && "border-neo-red"
				], "p-6 border-3 transition-all duration-300 h-full"])}" style="${(0, server_renderer_exports.ssrRenderStyle)((0, vue_exports.unref)(hoveredPillar) === i ? `box-shadow: 6px 6px 0px 0px ${p.color === "purple" ? "#a855f7" : p.color === "yellow" ? "#facc15" : p.color === "green" ? "#22c55e" : "#ef4444"}` : "")}"><div class="${(0, server_renderer_exports.ssrRenderClass)([[
					p.color === "purple" && "border-neo-purple text-neo-purple",
					p.color === "yellow" && "border-neo-yellow text-neo-yellow",
					p.color === "green" && "border-neo-green text-neo-green",
					p.color === "red" && "border-neo-red text-neo-red"
				], "w-14 h-14 flex items-center justify-center border-2 mb-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"])}">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: p.icon,
					class: "w-6 h-6"
				}, null, _parent));
				_push(`</div><h3 class="${(0, server_renderer_exports.ssrRenderClass)([[
					p.color === "purple" && "text-neo-purple",
					p.color === "yellow" && "text-neo-yellow",
					p.color === "green" && "text-neo-green",
					p.color === "red" && "text-neo-red"
				], "font-orbitron text-sm tracking-[0.15em] uppercase font-bold mb-2"])}">${(0, server_renderer_exports.ssrInterpolate)(p.title)}</h3><p class="font-rajdhani text-sm text-white/40 leading-relaxed">${(0, server_renderer_exports.ssrInterpolate)(p.desc)}</p></div></div>`);
			});
			_push(`<!--]--></div></div></section><section class="py-20 px-4 border-y-4 border-neo-purple bg-neo-purple/5"><div class="max-w-5xl mx-auto"><div class="grid grid-cols-2 md:grid-cols-4 gap-8"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(counters), (c) => {
				_push(`<div class="text-center"><div class="neo-counter mb-2">${(0, server_renderer_exports.ssrInterpolate)(c.current)}+</div><span class="font-orbitron text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold">${(0, server_renderer_exports.ssrInterpolate)(c.label)}</span></div>`);
			});
			_push(`<!--]--></div></div></section><section class="py-20 px-4"><div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"><div><h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-purple mb-8 uppercase font-bold">Nossas Iniciativas</h2><div class="space-y-3"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)([
				"Musica Eletronica Sagrada (Dharma Play)",
				"Series Audiovisuais Futuristas (Cyber Manju)",
				"Producao Musical e Cursos (BhumiStudio)",
				"Reflorestamento e Educacao Ambiental (7k Project)",
				"Traducao de Textos Budistas para PT-BR",
				"Videos Legendados de Ensinamentos"
			], (item, i) => {
				_push(`<div class="flex items-center gap-4 p-3 border border-transparent hover:border-neo-purple/30 hover:bg-neo-purple/5 transition-all duration-200 group cursor-default"><div class="w-8 h-8 flex items-center justify-center border border-neo-purple/40 font-orbitron text-[10px] text-neo-purple group-hover:bg-neo-purple group-hover:text-neo-black transition-all duration-200 flex-shrink-0">${(0, server_renderer_exports.ssrInterpolate)(String(i + 1).padStart(2, "0"))}</div><span class="font-rajdhani text-sm text-white/50 group-hover:text-white/80 transition-colors duration-200">${(0, server_renderer_exports.ssrInterpolate)(item)}</span></div>`);
			});
			_push(`<!--]--></div></div><div class="space-y-6"><div class="neo-card">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
				src: "/images/project-main.png",
				alt: "Bhumisparsha",
				width: "600",
				height: "400",
				class: "w-full aspect-[3/2] object-cover",
				loading: "lazy"
			}, null, _parent));
			_push(`</div><div class="neo-card-yellow p-6">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
				name: "heroicons:sparkles",
				class: "w-5 h-5 text-neo-yellow mb-3"
			}, null, _parent));
			_push(`<p class="font-grotesk text-sm text-white/50 italic leading-relaxed"> &quot;Sem arte nao ha imaginacao. E se nao ha imaginacao, onde esta a vida?&quot; </p><cite class="font-orbitron text-[9px] tracking-[0.3em] text-neo-yellow not-italic mt-3 block uppercase"> — Dzongsar Khyentse Rinpoche </cite></div></div></div></section><section class="py-16 px-4 border-y-4 border-neo-green"><div class="max-w-6xl mx-auto"><h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-green mb-8 uppercase font-bold">Agradecimentos</h2><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)([
				"Khyentse Foundation",
				"Earth Guardians Global",
				"Guardioes da Terra",
				"SOS Aguas da Prata",
				"ONG Planeta Plantar",
				"Circulo Vivencial Terra Viva",
				"Sitio Santa Clara"
			], (partner, i) => {
				_push(`<div class="neo-card-green p-4 text-center group cursor-default hover:scale-105 transition-transform duration-200" style="${(0, server_renderer_exports.ssrRenderStyle)(`transition-delay: ${i * 50}ms`)}"><span class="font-rajdhani text-sm text-white/50 group-hover:text-neo-green transition-colors duration-200">${(0, server_renderer_exports.ssrInterpolate)(partner)}</span></div>`);
			});
			_push(`<!--]--></div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/sobre.vue
var _sfc_setup = sobre_vue_vue_type_script_setup_true_lang_default.setup;
sobre_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sobre.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var sobre_default = sobre_vue_vue_type_script_setup_true_lang_default;

export { sobre_default as default };
//# sourceMappingURL=sobre-CW2-00ga.mjs.map
