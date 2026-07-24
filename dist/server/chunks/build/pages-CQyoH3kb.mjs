import { v as vue_exports, u as useSeoMeta$1, s as server_renderer_exports } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-C50RQq6o.mjs';
import { _ as _sfc_main } from './NuxtImg-lZ-UJJrO.mjs';
import { t as components_default } from './components-BQHImTdp.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'nostics';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'devalue';
import 'perfect-debounce';
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

//#region \0virtual:public?%2Fimages%2Fposter.jpg
var _virtual_public__2Fimages_2Fposter_default = publicAssetsURL("/images/poster.jpg");
//#endregion
//#region \0virtual:public?%2Fvideo%2Fhero-bg.mp4
var _virtual_public__2Fvideo_2Fhero_bg_default = publicAssetsURL("/video/hero-bg.mp4");
//#endregion
//#region app/composables/useMouseParallax.ts
function useMouseParallax(strength = .02) {
	const mouseX = (0, vue_exports.ref)(.5);
	const mouseY = (0, vue_exports.ref)(.5);
	(0, vue_exports.ref)(.5);
	(0, vue_exports.ref)(.5);
	function getOffset(factor = 1) {
		return {
			x: (mouseX.value - .5) * strength * factor * 100,
			y: (mouseY.value - .5) * strength * factor * 100
		};
	}
	return {
		mouseX,
		mouseY,
		getOffset
	};
}
//#endregion
//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Bhumisparsha School | Cyber Dharma",
			description: "Arte, Dharma, Meio Ambiente e Tecnologia — no cruzamento entre a sabedoria ancestral e o futurismo digital."
		});
		const { getOffset } = useMouseParallax(.02);
		const projects = [
			{
				title: "Dharma Play",
				description: "Musica eletronica sagrada — onde o Dharma encontra o beat.",
				icon: "heroicons:musical-note",
				accent: "purple",
				path: "/dharmaplay"
			},
			{
				title: "Cyber Manju",
				description: "Serie futurista — Sudana no Sekai. Buddhism meets cyberpunk.",
				icon: "heroicons:cpu-chip",
				accent: "red",
				path: "/cybermanju"
			},
			{
				title: "BhumiStudio Records",
				description: "Producao musical, cursos e eventos ao vivo.",
				icon: "heroicons:microphone",
				accent: "purple",
				path: "/bhumistudio"
			},
			{
				title: "7k Project",
				description: "Meio ambiente, plantio de arvores e regeneracao da terra.",
				icon: "heroicons:academic-cap",
				accent: "green",
				path: "/projetos"
			},
			{
				title: "Techno Sutra",
				description: "Sutras eletronicos — tecnologia como caminho de sabedoria.",
				icon: "heroicons:command-line",
				accent: "red",
				path: "/dharmaplay"
			},
			{
				title: "Textos Traduzidos",
				description: "Arya Tara, Manjushri, Sutras e Ensinamentos em PT-BR.",
				icon: "heroicons:book-open",
				accent: "yellow",
				path: "/textos"
			}
		];
		const featuredVideos = [
			{
				title: "CYBER MANJU | Ep 01 [2026]",
				description: "Primeiro episodio da serie CYBER MANJU — Sudana No Sekai",
				duration: "02:56",
				url: "https://www.youtube.com/watch?v=3ozwHOeaIzI"
			},
			{
				title: "DHYANA — Dia 1 | Parte 1",
				description: "Cinco Minutos para Tocar a Base com Sanidade em meio a Incerteza",
				duration: "10:07",
				url: "https://www.youtube.com/watch?v=CF2j9rlcoFA"
			},
			{
				title: "A Brincadeira Milagrosa de Manjushri",
				description: "Ensinamento de Khyentse Norbu sobre o sutra",
				duration: "04:30",
				url: "https://www.youtube.com/watch?v=wciPl7va4Lc"
			}
		];
		function handleCardClick(e) {
			const el = e.currentTarget;
			el.classList.add("animate-shake");
			setTimeout(() => el.classList.remove("animate-shake"), 500);
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtImg = _sfc_main;
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = components_default;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)(_attrs)}><section class="relative min-h-screen flex items-center justify-center overflow-hidden"><video autoplay muted loop playsinline${(0, server_renderer_exports.ssrRenderAttr)("poster", _virtual_public__2Fimages_2Fposter_default)} class="absolute inset-0 w-full h-full object-cover opacity-30"><source${(0, server_renderer_exports.ssrRenderAttr)("src", _virtual_public__2Fvideo_2Fhero_bg_default)} type="video/mp4"></video><div class="absolute inset-0 bg-gradient-to-b from-neo-black via-neo-black/70 to-neo-black"></div><div class="absolute inset-0 pointer-events-none"><div class="absolute top-[15%] left-[10%] w-[500px] h-[500px] border-4 border-neo-purple/20 rotate-45 animate-spin-slower"></div><div class="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] border-4 border-neo-red/15 -rotate-12 animate-spin-slow"></div><div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-neo-green/10 rotate-[30deg] animate-drift"></div></div><div class="absolute bottom-0 left-0 right-0 h-px bg-neo-purple"></div><div class="relative z-10 text-center px-4 max-w-5xl mx-auto hero-content"><div class="mb-8">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
				src: "/images/logo.png",
				alt: "Bhumisparsha School",
				width: "120",
				height: "120",
				class: "w-28 h-28 md:w-36 md:h-36 mx-auto border-4 border-neo-purple animate-float",
				style: { transform: `translate(${(0, vue_exports.unref)(getOffset)(.5).x}px, ${(0, vue_exports.unref)(getOffset)(.5).y}px)` },
				loading: "eager"
			}, null, _parent));
			_push(`</div><h1 class="font-orbitron text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-wider mb-6 neo-text-shimmer"> BHUMISPARSHA </h1><div class="inline-block border-2 border-neo-purple px-6 py-2 mb-8" style="${(0, server_renderer_exports.ssrRenderStyle)({ "box-shadow": "4px 4px 0px 0px #ef4444" })}"><span class="font-orbitron text-lg md:text-2xl tracking-[0.3em] text-neo-white uppercase font-bold">School</span></div><p class="font-rajdhani text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"><span class="text-neo-purple font-bold">Arte</span> · <span class="text-neo-red font-bold">Dharma</span> · <span class="text-neo-green font-bold">Meio Ambiente</span> · <span class="text-neo-yellow font-bold">Tecnologia</span></p><div class="flex flex-col sm:flex-row items-center justify-center gap-4">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/dharmaplay",
				class: "neo-btn"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
							name: "heroicons:play",
							class: "w-4 h-4"
						}, null, _parent, _scopeId));
						_push(` Explorar Projetos `);
					} else return [(0, vue_exports.createVNode)(_component_Icon, {
						name: "heroicons:play",
						class: "w-4 h-4"
					}), (0, vue_exports.createTextVNode)(" Explorar Projetos ")];
				}),
				_: 1
			}, _parent));
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
						_push(` Contato `);
					} else return [(0, vue_exports.createVNode)(_component_Icon, {
						name: "heroicons:envelope",
						class: "w-4 h-4"
					}), (0, vue_exports.createTextVNode)(" Contato ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
				name: "heroicons:chevron-down",
				class: "w-6 h-6 text-neo-purple"
			}, null, _parent));
			_push(`</div></section><div class="border-y-4 border-neo-purple bg-neo-dark py-4 neo-marquee overflow-hidden"><div class="neo-marquee-inner font-orbitron text-sm tracking-[0.3em] text-neo-purple/40 uppercase whitespace-nowrap"><span class="mx-8">DHARMA PLAY</span><span class="mx-4 text-neo-red">★</span><span class="mx-8">CYBER MANJU</span><span class="mx-4 text-neo-green">★</span><span class="mx-8">BHUMISTUDIO</span><span class="mx-4 text-neo-yellow">★</span><span class="mx-8">7K PROJECT</span><span class="mx-4 text-neo-purple">★</span><span class="mx-8">TECHNO SUTRA</span><span class="mx-4 text-neo-red">★</span><span class="mx-8">DHARMA PLAY</span><span class="mx-4 text-neo-green">★</span><span class="mx-8">CYBER MANJU</span><span class="mx-4 text-neo-yellow">★</span><span class="mx-8">BHUMISTUDIO</span><span class="mx-4 text-neo-purple">★</span><span class="mx-8">7K PROJECT</span><span class="mx-4 text-neo-red">★</span><span class="mx-8">TECHNO SUTRA</span><span class="mx-4 text-neo-green">★</span></div></div><section class="relative py-24 overflow-hidden"><div class="absolute inset-0 bg-neo-purple/5"></div><div class="relative z-10 max-w-4xl mx-auto px-4 text-center"><div class="inline-block border-2 border-neo-yellow px-4 py-2 mb-8" style="${(0, server_renderer_exports.ssrRenderStyle)({ "box-shadow": "3px 3px 0px 0px #a855f7" })}">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
				name: "heroicons:sparkles",
				class: "w-6 h-6 text-neo-yellow"
			}, null, _parent));
			_push(`</div><blockquote class="font-grotesk text-xl md:text-3xl text-white/70 italic leading-relaxed mb-6"> &quot;Sem arte nao ha imaginacao.<br> E se nao ha imaginacao, onde esta a vida?&quot; </blockquote><div class="inline-block border-l-4 border-neo-purple pl-4"><cite class="font-orbitron text-[10px] tracking-[0.4em] text-neo-purple not-italic uppercase"> — Dzongsar Khyentse Rinpoche </cite></div></div></section><section class="relative py-24 px-4"><div class="max-w-7xl mx-auto"><div class="mb-16"><div class="flex items-center gap-4 mb-4"><div class="h-1 w-16 bg-neo-purple"></div><span class="neo-subtitle">Nossos Projetos</span></div><h2 class="neo-title">Projetos &amp;<br class="md:hidden"> Iniciativas</h2><div class="neo-divider max-w-[200px] mt-6"></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(projects, (project, i) => {
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
					key: project.title,
					to: project.path,
					class: ["group cursor-pointer stagger-card", [
						project.accent === "purple" && "neo-card",
						project.accent === "red" && "neo-card-red",
						project.accent === "green" && "neo-card-green",
						project.accent === "yellow" && "neo-card-yellow"
					]],
					onClick: handleCardClick
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="p-6 relative"${_scopeId}><div class="${(0, server_renderer_exports.ssrRenderClass)([[
								project.accent === "purple" && "bg-neo-purple",
								project.accent === "red" && "bg-neo-red",
								project.accent === "green" && "bg-neo-green",
								project.accent === "yellow" && "bg-neo-yellow"
							], "absolute top-0 left-0 right-0 h-1"])}"${_scopeId}></div><div class="flex items-start gap-4 mb-4"${_scopeId}><div class="${(0, server_renderer_exports.ssrRenderClass)([[
								project.accent === "purple" && "border-neo-purple text-neo-purple",
								project.accent === "red" && "border-neo-red text-neo-red",
								project.accent === "green" && "border-neo-green text-neo-green",
								project.accent === "yellow" && "border-neo-yellow text-neo-yellow"
							], "w-12 h-12 flex items-center justify-center border-2 flex-shrink-0 transition-all duration-150 group-hover:rotate-6"])}"${_scopeId}>`);
							_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
								name: project.icon,
								class: "w-5 h-5"
							}, null, _parent, _scopeId));
							_push(`</div><div${_scopeId}><h3 class="font-orbitron text-xs tracking-[0.15em] text-neo-white group-hover:text-neo-purple transition-colors duration-150 font-bold uppercase"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(project.title)}</h3></div></div><p class="font-rajdhani text-sm text-white/40 leading-relaxed"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(project.description)}</p><div class="mt-4 flex items-center gap-2 text-white/20 group-hover:text-neo-purple transition-colors duration-150 font-rajdhani text-[10px] tracking-[0.2em] uppercase font-bold"${_scopeId}><span${_scopeId}>Explorar</span>`);
							_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
								name: "heroicons:arrow-right",
								class: "w-3 h-3 group-hover:translate-x-1 transition-transform duration-150"
							}, null, _parent, _scopeId));
							_push(`</div></div>`);
						} else return [(0, vue_exports.createVNode)("div", { class: "p-6 relative" }, [
							(0, vue_exports.createVNode)("div", { class: ["absolute top-0 left-0 right-0 h-1", [
								project.accent === "purple" && "bg-neo-purple",
								project.accent === "red" && "bg-neo-red",
								project.accent === "green" && "bg-neo-green",
								project.accent === "yellow" && "bg-neo-yellow"
							]] }, null, 2),
							(0, vue_exports.createVNode)("div", { class: "flex items-start gap-4 mb-4" }, [(0, vue_exports.createVNode)("div", { class: ["w-12 h-12 flex items-center justify-center border-2 flex-shrink-0 transition-all duration-150 group-hover:rotate-6", [
								project.accent === "purple" && "border-neo-purple text-neo-purple",
								project.accent === "red" && "border-neo-red text-neo-red",
								project.accent === "green" && "border-neo-green text-neo-green",
								project.accent === "yellow" && "border-neo-yellow text-neo-yellow"
							]] }, [(0, vue_exports.createVNode)(_component_Icon, {
								name: project.icon,
								class: "w-5 h-5"
							}, null, 8, ["name"])], 2), (0, vue_exports.createVNode)("div", null, [(0, vue_exports.createVNode)("h3", { class: "font-orbitron text-xs tracking-[0.15em] text-neo-white group-hover:text-neo-purple transition-colors duration-150 font-bold uppercase" }, (0, vue_exports.toDisplayString)(project.title), 1)])]),
							(0, vue_exports.createVNode)("p", { class: "font-rajdhani text-sm text-white/40 leading-relaxed" }, (0, vue_exports.toDisplayString)(project.description), 1),
							(0, vue_exports.createVNode)("div", { class: "mt-4 flex items-center gap-2 text-white/20 group-hover:text-neo-purple transition-colors duration-150 font-rajdhani text-[10px] tracking-[0.2em] uppercase font-bold" }, [(0, vue_exports.createVNode)("span", null, "Explorar"), (0, vue_exports.createVNode)(_component_Icon, {
								name: "heroicons:arrow-right",
								class: "w-3 h-3 group-hover:translate-x-1 transition-transform duration-150"
							})])
						])];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div></div></section><section class="relative py-24 px-4 border-y-4 border-neo-red"><div class="absolute inset-0 bg-neo-red/5"></div><div class="relative z-10 max-w-7xl mx-auto"><div class="mb-16"><div class="flex items-center gap-4 mb-4"><div class="h-1 w-16 bg-neo-red"></div><span class="neo-subtitle" style="${(0, server_renderer_exports.ssrRenderStyle)({ "color": "#ef4444" })}">Destaques</span></div><h2 class="neo-title-red">Videos em<br class="md:hidden"> Destaque</h2><div class="neo-divider-red max-w-[200px] mt-6"></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(featuredVideos, (video) => {
				_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", video.url)} target="_blank" rel="noopener noreferrer" class="neo-card-red group cursor-pointer"><div class="relative overflow-hidden aspect-video bg-neo-dark">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
					src: "/images/project-main.png",
					alt: video.title,
					width: "600",
					height: "340",
					class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",
					loading: "lazy"
				}, null, _parent));
				_push(`<div class="absolute inset-0 bg-gradient-to-t from-neo-black via-neo-black/30 to-transparent"></div><div class="absolute bottom-3 right-3 px-2.5 py-1 bg-neo-black border-2 border-neo-red font-orbitron text-[9px] text-neo-red tracking-[0.15em] uppercase font-bold">${(0, server_renderer_exports.ssrInterpolate)(video.duration)}</div><div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"><div class="w-14 h-14 flex items-center justify-center bg-neo-red border-3 border-neo-white" style="${(0, server_renderer_exports.ssrRenderStyle)({ "box-shadow": "4px 4px 0px 0px #ffffff" })}">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: "heroicons:play-solid",
					class: "w-5 h-5 text-neo-white ml-0.5"
				}, null, _parent));
				_push(`</div></div></div><div class="p-5 border-t-2 border-neo-red"><h3 class="font-orbitron text-[10px] tracking-[0.15em] text-neo-white group-hover:text-neo-red transition-colors duration-150 uppercase font-bold">${(0, server_renderer_exports.ssrInterpolate)(video.title)}</h3><p class="font-rajdhani text-sm text-white/40 mt-1">${(0, server_renderer_exports.ssrInterpolate)(video.description)}</p></div></a>`);
			});
			_push(`<!--]--></div></div></section><section class="relative py-28 px-4 overflow-hidden"><div class="absolute top-0 right-0 w-[500px] h-[500px] border-4 border-neo-red/10 rotate-45 animate-spin-slower"></div><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div><div class="flex items-center gap-4 mb-4"><div class="h-1 w-16 bg-neo-red"></div><span class="neo-subtitle" style="${(0, server_renderer_exports.ssrRenderStyle)({ "color": "#ef4444" })}">Serie em Destaque</span></div><h2 class="neo-title-red mb-6">Cyber Manju</h2><p class="font-grotesk text-lg text-white/50 leading-relaxed mb-6 border-l-4 border-neo-red pl-4"> &quot;In a hypothetical future, young cyberpunk wonders deep,<br> What&#39;s wrong with this life? Existential anguish, can&#39;t sleep.<br> Screens everywhere: buildings, squares, homes, glasses on your face,<br> Holograms in the air, algorithms predictin&#39; every trace.&quot; </p><p class="font-rajdhani text-sm text-white/40 mb-8 leading-relaxed"> Primeiro episodio da serie CYBER MANJU — Sudana No Sekai. No cruzamento entre o Gandavyuha Sutra e um futuro cyberpunk, Sudana busca respostas alem do codigo, alem das telas, alem das variacoes. </p><div class="flex flex-wrap gap-4">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/cybermanju",
				class: "neo-btn-red"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
							name: "heroicons:arrow-right",
							class: "w-4 h-4"
						}, null, _parent, _scopeId));
						_push(` Saiba Mais `);
					} else return [(0, vue_exports.createVNode)(_component_Icon, {
						name: "heroicons:arrow-right",
						class: "w-4 h-4"
					}), (0, vue_exports.createTextVNode)(" Saiba Mais ")];
				}),
				_: 1
			}, _parent));
			_push(`<a href="https://www.youtube.com/watch?v=3ozwHOeaIzI" target="_blank" rel="noopener noreferrer" class="neo-btn-outline">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
				name: "heroicons:play",
				class: "w-4 h-4"
			}, null, _parent));
			_push(` Assistir </a></div></div><div class="relative"><div class="aspect-square relative overflow-hidden neo-clip border-4 border-neo-red" style="${(0, server_renderer_exports.ssrRenderStyle)({ "box-shadow": "8px 8px 0px 0px #a855f7" })}">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
				src: "/images/project-main.png",
				alt: "Cyber Manju",
				width: "600",
				height: "600",
				class: "w-full h-full object-cover",
				loading: "lazy"
			}, null, _parent));
			_push(`<div class="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-transparent"></div></div><div class="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-neo-purple animate-pulse-border"></div><div class="absolute -top-4 -left-4 w-16 h-16 border-4 border-neo-red animate-pulse-border" style="${(0, server_renderer_exports.ssrRenderStyle)({ "animation-delay": "1s" })}"></div></div></div></div></section><section class="relative py-24 px-4 border-y-4 border-neo-yellow"><div class="absolute inset-0 bg-neo-yellow/5"></div><div class="max-w-4xl mx-auto text-center relative z-10"><div class="inline-block border-2 border-neo-yellow px-4 py-2 mb-8" style="${(0, server_renderer_exports.ssrRenderStyle)({ "box-shadow": "3px 3px 0px 0px #a855f7" })}"><span class="font-orbitron text-[10px] tracking-[0.5em] text-neo-yellow uppercase font-bold">Mantra</span></div><h3 class="font-jp text-2xl md:text-3xl text-white/60 mt-6 mb-4 leading-relaxed font-bold"> hung · orgyen yul gyi nubjang tsam<br> pema gesar dongpo la<br> yatsen chok gi ngodrub nye<br> pema jungne zhe su drak<br> khor du khandro mangpo kor<br> khye kyi jesu dak drub kyi<br> jingyi lab chir shek su sol<br> guru pema siddhi hung </h3><div class="inline-block border-2 border-neo-yellow mt-8 px-6 py-2" style="${(0, server_renderer_exports.ssrRenderStyle)({ "box-shadow": "3px 3px 0px 0px #facc15" })}"><p class="font-orbitron text-[10px] tracking-[0.5em] text-neo-yellow uppercase font-bold"> Guru Padma Siddhi Hung </p></div></div></section><section class="relative py-24 px-4"><div class="max-w-4xl mx-auto text-center"><h2 class="neo-title mb-6">Conecte-se<br class="md:hidden"> ao Dharma</h2><p class="font-rajdhani text-lg text-white/40 mb-10 max-w-2xl mx-auto"> Explore nossos projetos de traducao, musica eletronica sagrada, acoes ambientais e series futuristas. </p><div class="flex flex-col sm:flex-row items-center justify-center gap-4">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/textos",
				class: "neo-btn"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
							name: "heroicons:book-open",
							class: "w-4 h-4"
						}, null, _parent, _scopeId));
						_push(` Textos Traduzidos `);
					} else return [(0, vue_exports.createVNode)(_component_Icon, {
						name: "heroicons:book-open",
						class: "w-4 h-4"
					}), (0, vue_exports.createTextVNode)(" Textos Traduzidos ")];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/videos",
				class: "neo-btn-green"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
							name: "heroicons:video-camera",
							class: "w-4 h-4"
						}, null, _parent, _scopeId));
						_push(` Videos Legendados `);
					} else return [(0, vue_exports.createVNode)(_component_Icon, {
						name: "heroicons:video-camera",
						class: "w-4 h-4"
					}), (0, vue_exports.createTextVNode)(" Videos Legendados ")];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/bhumistudio",
				class: "neo-btn-red"
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
			_push(`</div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-CQyoH3kb.mjs.map
