import { _ as _plugin_vue_export_helper_default, v as vue_exports, u as useSeoMeta$1, s as server_renderer_exports } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-C50RQq6o.mjs';
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

//#region app/pages/projetos.vue?vue&type=script&setup=true&lang.ts
var projetos_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "projetos",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "7k Project | Bhumisparsha School",
			description: "Meio ambiente, plantio de arvores e regeneracao da terra."
		});
		const activeFeature = (0, vue_exports.ref)(null);
		const features = [
			{
				title: "Plantio",
				icon: "heroicons:sparkles",
				desc: "Acoes de plantio de arvores em comunidades.",
				stat: "500+"
			},
			{
				title: "Monitoramento",
				icon: "heroicons:chart-bar",
				desc: "Acompanhamento ambiental e dados abertos.",
				stat: "3 anos"
			},
			{
				title: "Educacao",
				icon: "heroicons:academic-cap",
				desc: "Cursos e oficinas ecologicas para jovens.",
				stat: "20+"
			},
			{
				title: "Comunidade",
				icon: "heroicons:user-group",
				desc: "Parcerias com ONGs e organizacoes locais.",
				stat: "7+"
			}
		];
		const partners = [
			"Khyentse Foundation",
			"Earth Guardians Global",
			"Guardioes da Terra",
			"SOS Aguas da Prata",
			"ONG Planeta Plantar",
			"Circulo Vivencial Terra Viva",
			"Sitio Santa Clara"
		];
		(0, vue_exports.ref)(null);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = components_default;
			const _component_NuxtImg = _sfc_main;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "pt-20 overflow-hidden" }, _attrs))} data-v-2031a5ab><section class="relative py-24 px-4" data-v-2031a5ab><div class="absolute inset-0 pointer-events-none" data-v-2031a5ab><div class="absolute top-[5%] right-[3%] w-40 h-40 border-4 border-neo-green/10 neo-clip-hex animate-spin-slower" data-v-2031a5ab></div><div class="absolute bottom-[10%] left-[5%] w-28 h-28 border-4 border-neo-green/15 animate-drift" data-v-2031a5ab></div></div><div class="max-w-7xl mx-auto relative z-10 projetos-hero" data-v-2031a5ab><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-v-2031a5ab><div data-v-2031a5ab><div class="flex items-center gap-4 mb-4" data-v-2031a5ab><div class="h-1 w-16 bg-neo-green" data-v-2031a5ab></div><span class="neo-subtitle" style="${(0, server_renderer_exports.ssrRenderStyle)({ "color": "#22c55e" })}" data-v-2031a5ab>Projeto Ambiental</span></div><h1 class="neo-title-green mb-6" data-v-2031a5ab>7k Project</h1><div class="neo-divider-green max-w-[200px] mb-8" data-v-2031a5ab></div><p class="font-grotesk text-lg text-white/60 leading-relaxed mb-4 border-l-4 border-neo-green pl-4" data-v-2031a5ab> A iniciativa ambiental da Bhumisparsha School — plantio de arvores, regeneracao da terra e acoes concretas pelo clima. </p><p class="font-rajdhani text-white/40 leading-relaxed mb-8" data-v-2031a5ab> Em parceria com Guardioes da Terra, Earth Guardians Global e ONGs locais, realizamos acoes de plantio, monitoramento e educacao ecologica. </p>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/contato",
				class: "neo-btn-green"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
							name: "heroicons:envelope",
							class: "w-4 h-4"
						}, null, _parent, _scopeId));
						_push(` Quero Participar `);
					} else return [(0, vue_exports.createVNode)(_component_Icon, {
						name: "heroicons:envelope",
						class: "w-4 h-4"
					}), (0, vue_exports.createTextVNode)(" Quero Participar ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="relative" data-v-2031a5ab><div class="aspect-[4/3] border-4 border-neo-green overflow-hidden neo-glow-green" data-v-2031a5ab>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
				src: "/images/project-main.png",
				alt: "7k Project",
				width: "600",
				height: "450",
				class: "w-full h-full object-cover",
				loading: "eager"
			}, null, _parent));
			_push(`<div class="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-transparent" data-v-2031a5ab></div></div><div class="absolute -top-3 -left-3 w-16 h-16 border-4 border-neo-green animate-pulse-border" data-v-2031a5ab></div></div></div></div></section><section class="py-20 px-4" data-v-2031a5ab><div class="max-w-6xl mx-auto" data-v-2031a5ab><div class="mb-12" data-v-2031a5ab><div class="flex items-center gap-4 mb-4" data-v-2031a5ab><div class="h-1 w-16 bg-neo-green" data-v-2031a5ab></div><span class="neo-subtitle" style="${(0, server_renderer_exports.ssrRenderStyle)({ "color": "#22c55e" })}" data-v-2031a5ab>Acoes</span></div><h2 class="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-wider text-white" style="${(0, server_renderer_exports.ssrRenderStyle)({ "text-shadow": "3px 3px 0px #22c55e" })}" data-v-2031a5ab>Como Atuamos</h2><div class="neo-divider-green max-w-[200px] mt-4" data-v-2031a5ab></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-v-2031a5ab><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(features, (f, i) => {
				_push(`<div class="feature-card group relative cursor-pointer" data-v-2031a5ab><div class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(activeFeature) === i ? "border-neo-green bg-neo-green/5" : "border-neo-border", "p-6 border-3 transition-all duration-300 h-full relative overflow-hidden"])}" data-v-2031a5ab><div class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(activeFeature) === i ? "w-full" : "w-0", "absolute top-0 left-0 h-1 bg-neo-green transition-all duration-500"])}" data-v-2031a5ab></div><div class="w-14 h-14 flex items-center justify-center border-2 border-neo-green text-neo-green mb-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-neo-green group-hover:text-neo-black" data-v-2031a5ab>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: f.icon,
					class: "w-6 h-6"
				}, null, _parent));
				_push(`</div><div class="font-orbitron text-2xl text-neo-green font-black mb-2 transition-all duration-300 group-hover:scale-110 origin-left" data-v-2031a5ab>${(0, server_renderer_exports.ssrInterpolate)(f.stat)}</div><h3 class="font-orbitron text-xs tracking-[0.15em] text-neo-white mb-2 uppercase font-bold" data-v-2031a5ab>${(0, server_renderer_exports.ssrInterpolate)(f.title)}</h3><p class="font-rajdhani text-sm text-white/40 leading-relaxed" data-v-2031a5ab>${(0, server_renderer_exports.ssrInterpolate)(f.desc)}</p></div></div>`);
			});
			_push(`<!--]--></div></div></section><section class="py-16 px-4 border-y-4 border-neo-green" data-v-2031a5ab><div class="max-w-6xl mx-auto" data-v-2031a5ab><div class="flex items-center justify-between mb-8" data-v-2031a5ab><h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-green uppercase font-bold" data-v-2031a5ab>Galeria</h2><div class="flex gap-2" data-v-2031a5ab><button class="w-10 h-10 border-2 border-neo-green text-neo-green flex items-center justify-center hover:bg-neo-green hover:text-neo-black transition-all duration-150 cursor-pointer" data-v-2031a5ab>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
				name: "heroicons:chevron-left",
				class: "w-5 h-5"
			}, null, _parent));
			_push(`</button><button class="w-10 h-10 border-2 border-neo-green text-neo-green flex items-center justify-center hover:bg-neo-green hover:text-neo-black transition-all duration-150 cursor-pointer" data-v-2031a5ab>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
				name: "heroicons:chevron-right",
				class: "w-5 h-5"
			}, null, _parent));
			_push(`</button></div></div><div class="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style="${(0, server_renderer_exports.ssrRenderStyle)({
				"scrollbar-width": "none",
				"-ms-overflow-style": "none"
			})}" data-v-2031a5ab><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(6, (i) => {
				_push(`<div class="gallery-item flex-shrink-0 w-72 snap-start group cursor-pointer" data-v-2031a5ab><div class="aspect-[4/3] border-2 border-neo-green/40 overflow-hidden relative transition-all duration-300 group-hover:border-neo-green group-hover:scale-[1.02]" data-v-2031a5ab>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
					src: "/images/project-main.png",
					alt: `Acao ${i}`,
					width: "400",
					height: "300",
					class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
					loading: "lazy"
				}, null, _parent));
				_push(`<div class="absolute inset-0 bg-gradient-to-t from-neo-black/60 via-transparent to-transparent" data-v-2031a5ab></div><div class="absolute bottom-3 left-3 font-orbitron text-[9px] text-neo-green tracking-[0.2em] uppercase font-bold bg-neo-black/80 px-2 py-1 border border-neo-green/40" data-v-2031a5ab> Acao #${(0, server_renderer_exports.ssrInterpolate)(String(i).padStart(2, "0"))}</div></div></div>`);
			});
			_push(`<!--]--></div></div></section><section class="py-16 px-4" data-v-2031a5ab><div class="max-w-6xl mx-auto" data-v-2031a5ab><h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-green mb-8 uppercase font-bold" data-v-2031a5ab>Parceiros</h2><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-v-2031a5ab><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(partners, (partner, i) => {
				_push(`<div class="p-4 border-2 border-neo-border text-center hover:border-neo-green hover:bg-neo-green/5 transition-all duration-200 cursor-default group" style="${(0, server_renderer_exports.ssrRenderStyle)(`transition-delay: ${i * 40}ms`)}" data-v-2031a5ab><span class="font-rajdhani text-sm text-white/50 group-hover:text-neo-green transition-colors duration-200" data-v-2031a5ab>${(0, server_renderer_exports.ssrInterpolate)(partner)}</span></div>`);
			});
			_push(`<!--]--></div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/projetos.vue
var _sfc_setup = projetos_vue_vue_type_script_setup_true_lang_default.setup;
projetos_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projetos.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var projetos_default = /*#__PURE__*/ _plugin_vue_export_helper_default(projetos_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-2031a5ab"]]);

export { projetos_default as default };
//# sourceMappingURL=projetos-Cw24GQPp.mjs.map
