import { v as vue_exports, u as useSeoMeta$1, s as server_renderer_exports } from '../virtual/entry.mjs';
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

//#region app/pages/dharmaplay.vue?vue&type=script&setup=true&lang.ts
var dharmaplay_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "dharmaplay",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Dharma Play | Bhumisparsha School",
			description: "Musica eletronica sagrada — onde o Dharma encontra o beat."
		});
		const playingTrack = (0, vue_exports.ref)(null);
		const tracks = [
			{
				title: "Guru Padma Siddhi Hung — Karma Drum",
				mix: "Electro Mix",
				duration: "04:21",
				bpm: 128
			},
			{
				title: "Guru Padma Siddhi Hung — Karma Drum",
				mix: "Extended 8 min",
				duration: "08:30",
				bpm: 120
			},
			{
				title: "A Semente — Uhjoca, Banda Impermanente",
				mix: "Original",
				duration: "06:01",
				bpm: 110
			}
		];
		const features = [
			{
				title: "Producao",
				icon: "heroicons:musical-note"
			},
			{
				title: "Eventos Ao Vivo",
				icon: "heroicons:microphone"
			},
			{
				title: "Estudio",
				icon: "heroicons:stop-circle"
			},
			{
				title: "Colaboracoes",
				icon: "heroicons:user-group"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = components_default;
			const _component_NuxtImg = _sfc_main;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "pt-20 overflow-hidden" }, _attrs))}><div class="absolute inset-0 pointer-events-none overflow-hidden"><div class="absolute inset-0 flex items-center justify-center opacity-[0.03]"><svg viewBox="0 0 1200 200" class="w-full h-full" preserveAspectRatio="none"><path d="M0,100 Q50,20 100,100 Q150,180 200,100 Q250,20 300,100 Q350,180 400,100 Q450,20 500,100 Q550,180 600,100 Q650,20 700,100 Q750,180 800,100 Q850,20 900,100 Q950,180 1000,100 Q1050,20 1100,100 Q1150,180 1200,100" stroke="#a855f7" stroke-width="2" fill="none"></path><path d="M0,100 Q75,40 150,100 Q225,160 300,100 Q375,40 450,100 Q525,160 600,100 Q675,40 750,100 Q825,160 900,100 Q975,40 1050,100 Q1125,160 1200,100" stroke="#a855f7" stroke-width="1" fill="none" opacity="0.5"></path></svg></div></div><section class="relative py-24 px-4"><div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center dharma-hero"><div><div class="flex items-center gap-4 mb-4"><div class="h-1 w-16 bg-neo-purple"></div><span class="neo-subtitle">Musica Eletronica</span></div><h1 class="neo-title mb-6">Dharma Play</h1><div class="neo-divider max-w-[200px] mb-8"></div><p class="font-grotesk text-lg text-white/60 leading-relaxed mb-6 border-l-4 border-neo-purple pl-4"> Musica eletronica sagrada — onde o beat encontra o vazio, o groove encontra o Dharma. </p><p class="font-rajdhani text-white/40 leading-relaxed mb-8"> Producoes que transitam entre o eletronico, o meditativo e o experimental — transformando ensinamentos budistas em experiencias sonoras futuristas. </p><div class="flex flex-wrap gap-3">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/contato",
				class: "neo-btn"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
							name: "heroicons:play",
							class: "w-4 h-4"
						}, null, _parent, _scopeId));
						_push(` Ouca Agora `);
					} else return [(0, vue_exports.createVNode)(_component_Icon, {
						name: "heroicons:play",
						class: "w-4 h-4"
					}), (0, vue_exports.createTextVNode)(" Ouca Agora ")];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/bhumistudio",
				class: "neo-btn-outline"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
							name: "heroicons:musical-note",
							class: "w-4 h-4"
						}, null, _parent, _scopeId));
						_push(` BhumiStudio `);
					} else return [(0, vue_exports.createVNode)(_component_Icon, {
						name: "heroicons:musical-note",
						class: "w-4 h-4"
					}), (0, vue_exports.createTextVNode)(" BhumiStudio ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="relative"><div class="aspect-[4/3] border-4 border-neo-purple overflow-hidden neo-glow-purple">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
				src: "/images/project-main.png",
				alt: "Dharma Play",
				width: "600",
				height: "450",
				class: "w-full h-full object-cover",
				loading: "eager"
			}, null, _parent));
			_push(`<div class="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-transparent"></div></div><div class="absolute -bottom-3 -right-3 w-20 h-20 border-4 border-neo-purple animate-pulse-border"></div></div></div></section><section class="py-12 px-4 border-y-4 border-neo-purple bg-neo-purple/5"><div class="max-w-5xl mx-auto"><div class="flex items-end gap-[3px] h-16 justify-center"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(80, (i) => {
				_push(`<div class="waveform-row flex-1 bg-neo-purple/40 max-w-[6px]" style="${(0, server_renderer_exports.ssrRenderStyle)({
					height: `${8 + Math.sin(i * .3) * 20 + Math.random() * 12}px`,
					animation: `waveform ${1 + Math.random() * 1.5}s ease-in-out infinite`,
					animationDelay: `${i * .03}s`
				})}"></div>`);
			});
			_push(`<!--]--></div></div></section><section class="py-20 px-4"><div class="max-w-5xl mx-auto"><div class="mb-12"><div class="flex items-center gap-4 mb-4"><div class="h-1 w-16 bg-neo-purple"></div><span class="neo-subtitle">Destaques Sonoros</span></div><h2 class="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-wider text-white" style="${(0, server_renderer_exports.ssrRenderStyle)({ "text-shadow": "3px 3px 0px #a855f7" })}">Tracks</h2><div class="neo-divider max-w-[200px] mt-4"></div></div><div class="space-y-4"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(tracks, (track, i) => {
				_push(`<div class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(playingTrack) === i ? "border-neo-purple bg-neo-purple/5" : "", "track-item group border-2 border-neo-border hover:border-neo-purple p-5 flex items-center gap-5 transition-all duration-300 cursor-pointer relative overflow-hidden"])}"><div class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(playingTrack) === i ? "opacity-100" : "opacity-0", "absolute left-0 top-0 bottom-0 w-1 bg-neo-purple transition-all duration-300"])}"></div><div class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(playingTrack) === i ? "bg-neo-purple text-neo-black" : "text-neo-purple", "w-14 h-14 flex items-center justify-center border-2 border-neo-purple flex-shrink-0 neo-clip-sm transition-all duration-300 group-hover:bg-neo-purple group-hover:text-neo-black"])}">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: (0, vue_exports.unref)(playingTrack) === i ? "heroicons:stop" : "heroicons:play",
					class: ["w-5 h-5", (0, vue_exports.unref)(playingTrack) === i ? "ml-0" : "ml-0.5"]
				}, null, _parent));
				_push(`</div><div class="flex-1 min-w-0"><h3 class="font-rajdhani text-sm text-white/70 group-hover:text-neo-white transition-colors duration-200 truncate font-bold">${(0, server_renderer_exports.ssrInterpolate)(track.title)}</h3><div class="flex items-center gap-3 mt-1"><span class="font-orbitron text-[9px] text-neo-purple tracking-[0.15em] uppercase font-bold">${(0, server_renderer_exports.ssrInterpolate)(track.mix)}</span><span class="w-1 h-1 bg-neo-purple/30"></span><span class="font-orbitron text-[9px] text-white/30 tracking-[0.15em] uppercase font-bold">${(0, server_renderer_exports.ssrInterpolate)(track.duration)}</span><span class="w-1 h-1 bg-neo-purple/30"></span><span class="font-orbitron text-[9px] text-white/30 tracking-[0.15em] uppercase font-bold">${(0, server_renderer_exports.ssrInterpolate)(track.bpm)} BPM</span></div></div>`);
				if ((0, vue_exports.unref)(playingTrack) === i) {
					_push(`<div class="flex items-end gap-[2px] h-6"><!--[-->`);
					(0, server_renderer_exports.ssrRenderList)(12, (j) => {
						_push(`<div class="w-1 bg-neo-purple" style="${(0, server_renderer_exports.ssrRenderStyle)({
							height: `${4 + Math.random() * 20}px`,
							animation: `waveform ${.6 + Math.random() * .8}s ease-in-out infinite`,
							animationDelay: `${j * .05}s`
						})}"></div>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			});
			_push(`<!--]--></div></div></section><section class="py-16 px-4 border-y-4 border-neo-purple"><div class="max-w-5xl mx-auto"><h2 class="font-orbitron text-sm tracking-[0.3em] text-neo-purple mb-8 uppercase font-bold">O Que Oferecemos</h2><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(features, (f) => {
				_push(`<div class="p-4 border-2 border-neo-border text-center hover:border-neo-purple hover:bg-neo-purple/5 transition-all duration-200 cursor-default group">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: f.icon,
					class: "w-6 h-6 text-neo-purple/40 group-hover:text-neo-purple mx-auto mb-2 transition-colors duration-200 group-hover:rotate-12"
				}, null, _parent));
				_push(`<span class="font-rajdhani text-sm text-white/50 group-hover:text-neo-purple transition-colors duration-200">${(0, server_renderer_exports.ssrInterpolate)(f.title)}</span></div>`);
			});
			_push(`<!--]--></div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/dharmaplay.vue
var _sfc_setup = dharmaplay_vue_vue_type_script_setup_true_lang_default.setup;
dharmaplay_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dharmaplay.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var dharmaplay_default = dharmaplay_vue_vue_type_script_setup_true_lang_default;

export { dharmaplay_default as default };
//# sourceMappingURL=dharmaplay-BjOqGc83.mjs.map
