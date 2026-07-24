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

//#region app/pages/bhumistudio.vue?vue&type=script&setup=true&lang.ts
var bhumistudio_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "bhumistudio",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "BhumiStudio Records | Bhumisparsha School",
			description: "Producao musical, cursos e eventos ao vivo."
		});
		(0, vue_exports.ref)(null);
		const activeFilter = (0, vue_exports.ref)("all");
		const features = [
			{
				title: "Producao",
				icon: "heroicons:musical-note",
				desc: "Producao musical eletronica e experimental."
			},
			{
				title: "Cursos",
				icon: "heroicons:academic-cap",
				desc: "Oficinas de producao sonora e mixagem."
			},
			{
				title: "Eventos",
				icon: "heroicons:microphone",
				desc: "Sessoes ao vivo e performances."
			},
			{
				title: "Gravacao",
				icon: "heroicons:stop-circle",
				desc: "Sessoes de estudio profissional."
			}
		];
		const artists = [
			{
				name: "Bplug",
				tag: "eletronico"
			},
			{
				name: "Banda Impermanente",
				tag: "experimental"
			},
			{
				name: "Dani Zen",
				tag: "meditacao"
			},
			{
				name: "Levi Karma Drum",
				tag: "percussao"
			},
			{
				name: "Louis",
				tag: "eletronico"
			},
			{
				name: "Nanci Ferreira",
				tag: "vocal"
			},
			{
				name: "Pesads",
				tag: "experimental"
			},
			{
				name: "Tupa",
				tag: "tribal"
			},
			{
				name: "Uhjoca",
				tag: "eletronico"
			},
			{
				name: "Sintonia 019",
				tag: "coletivo"
			},
			{
				name: "Wera Trap Guarani",
				tag: "indigena"
			},
			{
				name: "Yellow Bird",
				tag: "vocal"
			}
		];
		const tags = [
			"all",
			"eletronico",
			"experimental",
			"meditacao",
			"tribal",
			"vocal"
		];
		const filteredArtists = (0, vue_exports.computed)(() => {
			if (activeFilter.value === "all") return artists;
			return artists.filter((a) => a.tag === activeFilter.value);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = components_default;
			const _component_NuxtImg = _sfc_main;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "pt-20 overflow-hidden" }, _attrs))} data-v-22011325><div class="absolute inset-0 pointer-events-none flex items-end justify-center gap-1 opacity-5" data-v-22011325><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(60, (i) => {
				_push(`<div class="w-1 bg-neo-purple" style="${(0, server_renderer_exports.ssrRenderStyle)({
					height: `${20 + Math.random() * 300}px`,
					animation: `waveform ${1 + Math.random() * 2}s ease-in-out infinite`,
					animationDelay: `${Math.random() * 2}s`
				})}" data-v-22011325></div>`);
			});
			_push(`<!--]--></div><section class="relative py-24 px-4" data-v-22011325><div class="absolute inset-0 pointer-events-none" data-v-22011325><div class="absolute top-[8%] right-[10%] w-40 h-40 border-4 border-neo-purple/10 rotate-45 animate-spin-slower" data-v-22011325></div><div class="absolute bottom-[12%] left-[5%] w-24 h-24 border-4 border-neo-purple/15 neo-clip-hex animate-drift" data-v-22011325></div></div><div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bstudio-hero" data-v-22011325><div data-v-22011325><div class="flex items-center gap-4 mb-4" data-v-22011325><div class="h-1 w-16 bg-neo-purple" data-v-22011325></div><span class="neo-subtitle" data-v-22011325>Estudio</span></div><h1 class="neo-title mb-6" data-v-22011325>BhumiStudio<br data-v-22011325> Records</h1><div class="neo-divider max-w-[200px] mb-8" data-v-22011325></div><p class="font-grotesk text-lg text-white/60 leading-relaxed mb-6 border-l-4 border-neo-purple pl-4" data-v-22011325> O braco de producao musical e audiovisual da Bhumisparsha School. Arte e Dharma se encontram em frequencias sonoras. </p><p class="font-rajdhani text-white/40 leading-relaxed mb-8" data-v-22011325> Cursos de producao musical, gravacoes em estudio, eventos ao vivo e colaboracoes com artistas da cena eletronica e underground. </p>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/contato",
				class: "neo-btn"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
							name: "heroicons:musical-note",
							class: "w-4 h-4"
						}, null, _parent, _scopeId));
						_push(` Quero Gravar `);
					} else return [(0, vue_exports.createVNode)(_component_Icon, {
						name: "heroicons:musical-note",
						class: "w-4 h-4"
					}), (0, vue_exports.createTextVNode)(" Quero Gravar ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="relative" data-v-22011325><div class="aspect-[4/3] border-4 border-neo-purple overflow-hidden neo-glow-purple" data-v-22011325>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
				src: "/images/project-main.png",
				alt: "BhumiStudio",
				width: "600",
				height: "450",
				class: "w-full h-full object-cover",
				loading: "eager"
			}, null, _parent));
			_push(`<div class="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-transparent" data-v-22011325></div><div class="absolute bottom-4 left-4 right-4 flex items-end gap-[2px] h-10" data-v-22011325><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(40, (i) => {
				_push(`<div class="flex-1 bg-neo-purple/60" style="${(0, server_renderer_exports.ssrRenderStyle)({
					height: `${10 + Math.random() * 30}px`,
					animation: `waveform ${.8 + Math.random() * 1.5}s ease-in-out infinite`,
					animationDelay: `${Math.random() * 1.5}s`
				})}" data-v-22011325></div>`);
			});
			_push(`<!--]--></div></div><div class="absolute -bottom-3 -right-3 w-20 h-20 border-4 border-neo-purple animate-pulse-border" data-v-22011325></div></div></div></section><section class="py-20 px-4" data-v-22011325><div class="max-w-6xl mx-auto" data-v-22011325><div class="mb-12" data-v-22011325><div class="flex items-center gap-4 mb-4" data-v-22011325><div class="h-1 w-16 bg-neo-purple" data-v-22011325></div><span class="neo-subtitle" data-v-22011325>Servicos</span></div><h2 class="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-wider text-white" style="${(0, server_renderer_exports.ssrRenderStyle)({ "text-shadow": "3px 3px 0px #a855f7" })}" data-v-22011325>O Que Fazemos</h2><div class="neo-divider max-w-[200px] mt-4" data-v-22011325></div></div><div class="grid grid-cols-2 lg:grid-cols-4 gap-4" data-v-22011325><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(features, (f, i) => {
				_push(`<div class="feature-block group p-6 border-3 border-neo-border hover:border-neo-purple transition-all duration-300 cursor-default relative overflow-hidden" data-v-22011325><div class="absolute bottom-0 left-0 right-0 bg-neo-purple/10 transition-all duration-500" style="${(0, server_renderer_exports.ssrRenderStyle)(`height: ${20 + i * 15}%`)}" data-v-22011325></div><div class="w-12 h-12 flex items-center justify-center border-2 border-neo-purple text-neo-purple mb-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 relative z-10" data-v-22011325>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: f.icon,
					class: "w-5 h-5"
				}, null, _parent));
				_push(`</div><h3 class="font-orbitron text-xs tracking-[0.15em] text-neo-purple mb-2 uppercase font-bold relative z-10" data-v-22011325>${(0, server_renderer_exports.ssrInterpolate)(f.title)}</h3><p class="font-rajdhani text-sm text-white/40 leading-relaxed relative z-10" data-v-22011325>${(0, server_renderer_exports.ssrInterpolate)(f.desc)}</p></div>`);
			});
			_push(`<!--]--></div></div></section><section class="py-16 px-4 border-y-4 border-neo-purple" data-v-22011325><div class="max-w-6xl mx-auto" data-v-22011325><div class="flex items-center justify-between mb-8" data-v-22011325><h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-purple uppercase font-bold" data-v-22011325>Artistas Colaboradores</h2><span class="font-rajdhani text-sm text-white/30" data-v-22011325>${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(filteredArtists).length)} artistas</span></div><div class="flex flex-wrap gap-2 mb-8" data-v-22011325><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(tags, (tag) => {
				_push(`<button class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(activeFilter) === tag ? "bg-neo-purple border-neo-purple text-neo-black" : "bg-transparent border-neo-border text-white/30 hover:border-neo-purple hover:text-white/60", "px-4 py-2 font-rajdhani text-[10px] tracking-[0.15em] uppercase border-2 font-bold transition-all duration-200 cursor-pointer"])}" data-v-22011325>${(0, server_renderer_exports.ssrInterpolate)(tag)}</button>`);
			});
			_push(`<!--]--></div><div class="flex flex-wrap gap-3" data-v-22011325><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(filteredArtists), (artist) => {
				_push(`<span class="artist-chip px-5 py-2.5 border-2 border-neo-purple text-neo-purple/60 neo-clip-sm hover:bg-neo-purple hover:text-neo-black transition-all duration-200 cursor-default font-rajdhani text-sm font-bold" data-v-22011325>${(0, server_renderer_exports.ssrInterpolate)(artist.name)}</span>`);
			});
			_push(`<!--]--></div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/bhumistudio.vue
var _sfc_setup = bhumistudio_vue_vue_type_script_setup_true_lang_default.setup;
bhumistudio_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bhumistudio.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var bhumistudio_default = /*#__PURE__*/ _plugin_vue_export_helper_default(bhumistudio_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-22011325"]]);

export { bhumistudio_default as default };
//# sourceMappingURL=bhumistudio-DAU4IoE0.mjs.map
