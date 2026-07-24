import { _ as _plugin_vue_export_helper_default, v as vue_exports, u as useSeoMeta$1, s as server_renderer_exports } from '../virtual/entry.mjs';
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

//#region app/pages/videos.vue?vue&type=script&setup=true&lang.ts
var videos_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "videos",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Videos Legendados | Bhumisparsha School",
			description: "Videos legendados em PT-BR — ensinamentos, series e producoes audiovisuais."
		});
		const hoveredVideo = (0, vue_exports.ref)(null);
		const videos = [
			{
				title: "CYBER MANJU | Ep 01 [2026]",
				description: "Primeiro episodio da serie CYBER MANJU — Sudana No Sekai",
				duration: "02:56",
				url: "https://www.youtube.com/watch?v=3ozwHOeaIzI",
				category: "Serie"
			},
			{
				title: "Budismo daora?",
				description: "Peyote vs Shamatha vs Vipassana — Dzongsar Khyentse Rinpoche",
				duration: "05:49",
				url: "https://youtube.com/playlist?list=PL6-wArQbu9GDUzFU2ntgqlL119LjjTA6g",
				category: "Ensinamento"
			},
			{
				title: "A Brincadeira Milagrosa de Manjushri",
				description: "Ensinamento de Khyentse Norbu sobre o sutra",
				duration: "04:30",
				url: "https://www.youtube.com/watch?v=wciPl7va4Lc",
				category: "Ensinamento"
			},
			{
				title: "Manjushri 001 [Legendado PT-br]",
				description: "Editado e ilustrado por Bhumisparsha School",
				duration: "03:40",
				url: "https://www.youtube.com/watch?v=3ozwHOeaIzI",
				category: "Ensinamento"
			},
			{
				title: "DHYANA — Dia 1 | Parte 1",
				description: "Cinco Minutos para Tocar a Base com Sanidade em meio a Incerteza",
				duration: "10:07",
				url: "https://www.youtube.com/watch?v=CF2j9rlcoFA",
				category: "Meditacao"
			},
			{
				title: "Guru Padma Siddhi Hung — Karma Drum",
				description: "Mantra eletronico — Electro Mix",
				duration: "04:21",
				url: "https://www.youtube.com/watch?v=3ozwHOeaIzI",
				category: "Musica"
			},
			{
				title: "A Semente — Uhjoca, Banda Impermanente",
				description: "Clipe musical do projeto 7k",
				duration: "06:01",
				url: "https://www.youtube.com/watch?v=3ozwHOeaIzI",
				category: "Musica"
			},
			{
				title: "Vipassana: uma Sadhana — Parte 4",
				description: "Legendado PT-br",
				duration: "15:56",
				url: "https://www.youtube.com/watch?v=3ozwHOeaIzI",
				category: "Meditacao"
			}
		];
		const selectedCategory = (0, vue_exports.ref)("Todos");
		const categories = [
			"Todos",
			"Serie",
			"Ensinamento",
			"Meditacao",
			"Musica"
		];
		const categoryColors = {
			"Todos": "bg-neo-purple border-neo-purple text-neo-black",
			"Serie": "bg-neo-red border-neo-red text-neo-black",
			"Ensinamento": "bg-neo-purple border-neo-purple text-neo-black",
			"Meditacao": "bg-neo-green border-neo-green text-neo-black",
			"Musica": "bg-neo-yellow border-neo-yellow text-neo-black"
		};
		const categoryTags = {
			"Serie": "neo-tag-red",
			"Ensinamento": "neo-tag-purple",
			"Meditacao": "neo-tag-green",
			"Musica": "neo-tag-yellow"
		};
		const filteredVideos = (0, vue_exports.computed)(() => {
			if (selectedCategory.value === "Todos") return videos;
			return videos.filter((v) => v.category === selectedCategory.value);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtImg = _sfc_main;
			const _component_Icon = components_default;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "pt-20 overflow-hidden" }, _attrs))} data-v-a65bc459><section class="relative py-24 px-4" data-v-a65bc459><div class="absolute inset-0 pointer-events-none" data-v-a65bc459><div class="absolute top-[10%] left-[5%] w-36 h-36 border-4 border-neo-red/10 -rotate-12 animate-spin-slower" data-v-a65bc459></div><div class="absolute bottom-[15%] right-[8%] w-24 h-24 border-4 border-neo-red/15 animate-drift" data-v-a65bc459></div></div><div class="max-w-6xl mx-auto relative z-10 videos-hero" data-v-a65bc459><div class="flex items-center gap-4 mb-4" data-v-a65bc459><div class="h-1 w-16 bg-neo-red" data-v-a65bc459></div><span class="neo-subtitle" style="${(0, server_renderer_exports.ssrRenderStyle)({ "color": "#ef4444" })}" data-v-a65bc459>Sala de Videos</span></div><h1 class="neo-title-red mb-6" data-v-a65bc459>Videos<br data-v-a65bc459> Legendados</h1><div class="neo-divider-red max-w-[200px] mb-8" data-v-a65bc459></div><p class="font-grotesk text-lg text-white/50 leading-relaxed max-w-2xl border-l-4 border-neo-red pl-4" data-v-a65bc459> Videos legendados em PT-BR — ensinamentos, series e producoes audiovisuais da escola. </p></div></section><section class="px-4 pb-8" data-v-a65bc459><div class="max-w-6xl mx-auto" data-v-a65bc459><div class="flex flex-wrap gap-2" data-v-a65bc459><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(categories, (cat) => {
				_push(`<button class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(selectedCategory) === cat ? categoryColors[cat] : "bg-transparent border-neo-border text-white/30 hover:border-neo-red/50 hover:text-white/60", "px-5 py-2.5 font-rajdhani text-[10px] tracking-[0.15em] uppercase border-2 font-bold transition-all duration-200 cursor-pointer"])}" data-v-a65bc459>${(0, server_renderer_exports.ssrInterpolate)(cat)}</button>`);
			});
			_push(`<!--]--></div></div></section><section class="pb-24 px-4" data-v-a65bc459><div class="max-w-6xl mx-auto" data-v-a65bc459><div${(0, server_renderer_exports.ssrRenderAttrs)({
				name: "morph",
				class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
			})} data-v-a65bc459>`);
			(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(filteredVideos), (video, i) => {
				_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", video.url)} target="_blank" rel="noopener" class="video-card group cursor-pointer relative" data-v-a65bc459><div class="border-2 border-neo-red/40 transition-all duration-300 hover:border-neo-red" style="${(0, server_renderer_exports.ssrRenderStyle)((0, vue_exports.unref)(hoveredVideo) === i ? "box-shadow: 6px 6px 0px 0px #ef4444" : "")}" data-v-a65bc459><div class="relative overflow-hidden aspect-video bg-neo-dark" data-v-a65bc459>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
					src: "/images/project-main.png",
					alt: video.title,
					width: "600",
					height: "340",
					class: "w-full h-full object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100",
					loading: "lazy"
				}, null, _parent));
				_push(`<div class="absolute inset-0 bg-gradient-to-t from-neo-black via-neo-black/30 to-transparent" data-v-a65bc459></div><div class="absolute top-3 left-3" data-v-a65bc459><span class="${(0, server_renderer_exports.ssrRenderClass)(categoryTags[video.category])}" style="${(0, server_renderer_exports.ssrRenderStyle)({ "box-shadow": "2px 2px 0px 0px #ef4444" })}" data-v-a65bc459>${(0, server_renderer_exports.ssrInterpolate)(video.category)}</span></div><div class="absolute bottom-3 right-3 px-2.5 py-1 bg-neo-black border-2 border-neo-red font-orbitron text-[9px] text-neo-red tracking-[0.15em] uppercase font-bold" data-v-a65bc459>${(0, server_renderer_exports.ssrInterpolate)(video.duration)}</div><div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300" data-v-a65bc459><div class="w-16 h-16 flex items-center justify-center bg-neo-red border-3 border-neo-white transform scale-75 group-hover:scale-100 transition-transform duration-300" style="${(0, server_renderer_exports.ssrRenderStyle)({ "box-shadow": "4px 4px 0px 0px #ffffff" })}" data-v-a65bc459>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: "heroicons:play-solid",
					class: "w-6 h-6 text-neo-white ml-0.5"
				}, null, _parent));
				_push(`</div></div></div><div class="p-4 border-t-2 border-neo-red/40 transition-colors duration-200 group-hover:border-neo-red" data-v-a65bc459><h3 class="font-orbitron text-[10px] tracking-[0.15em] text-neo-white group-hover:text-neo-red transition-colors duration-200 uppercase font-bold line-clamp-1" data-v-a65bc459>${(0, server_renderer_exports.ssrInterpolate)(video.title)}</h3><p class="font-rajdhani text-sm text-white/40 mt-1 line-clamp-2" data-v-a65bc459>${(0, server_renderer_exports.ssrInterpolate)(video.description)}</p></div></div></a>`);
			});
			_push(`</div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/videos.vue
var _sfc_setup = videos_vue_vue_type_script_setup_true_lang_default.setup;
videos_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/videos.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var videos_default = /*#__PURE__*/ _plugin_vue_export_helper_default(videos_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-a65bc459"]]);

export { videos_default as default };
//# sourceMappingURL=videos-DbH0K-Fm.mjs.map
