import { _ as _plugin_vue_export_helper_default, s as server_renderer_exports, v as vue_exports, a as useRoute$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-C50RQq6o.mjs';
import { _ as _sfc_main$1 } from './NuxtImg-lZ-UJJrO.mjs';
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

//#region app/components/PsychedelicLines.vue?vue&type=script&setup=true&lang.ts
var PsychedelicLines_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "PsychedelicLines",
	__ssrInlineRender: true,
	setup(__props) {
		const canvas = (0, vue_exports.ref)(null);
		(0, vue_exports.ref)([]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<canvas${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				ref_key: "canvas",
				ref: canvas,
				class: "fixed inset-0 pointer-events-none z-[1] opacity-60",
				"aria-hidden": "true"
			}, _attrs))}></canvas>`);
		};
	}
});
//#endregion
//#region app/components/PsychedelicLines.vue
var _sfc_setup$4 = PsychedelicLines_vue_vue_type_script_setup_true_lang_default.setup;
PsychedelicLines_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PsychedelicLines.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var PsychedelicLines_default = Object.assign(PsychedelicLines_vue_vue_type_script_setup_true_lang_default, { __name: "PsychedelicLines" });
//#endregion
//#region app/components/AppHeader.vue?vue&type=script&setup=true&lang.ts
var AppHeader_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "AppHeader",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$1();
		const mobileOpen = (0, vue_exports.ref)(false);
		(0, vue_exports.watch)(() => route.path, () => {
			mobileOpen.value = false;
		});
		const navLinks = [
			{
				label: "Inicio",
				path: "/",
				color: "neo-purple"
			},
			{
				label: "Sobre",
				path: "/sobre",
				color: "neo-white"
			},
			{
				label: "Dharma Play",
				path: "/dharmaplay",
				color: "neo-purple"
			},
			{
				label: "Cyber Manju",
				path: "/cybermanju",
				color: "neo-red"
			},
			{
				label: "BhumiStudio",
				path: "/bhumistudio",
				color: "neo-purple"
			},
			{
				label: "7k Project",
				path: "/projetos",
				color: "neo-green"
			},
			{
				label: "Textos",
				path: "/textos",
				color: "neo-yellow"
			},
			{
				label: "Videos",
				path: "/videos",
				color: "neo-red"
			},
			{
				label: "Contato",
				path: "/contato",
				color: "neo-cyan"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_NuxtImg = _sfc_main$1;
			_push(`<header${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "fixed top-0 left-0 right-0 z-50 bg-neo-black border-b-4 border-neo-purple" }, _attrs))}><div class="max-w-7xl mx-auto px-4 md:px-8"><div class="flex items-center justify-between h-16">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
				to: "/",
				class: "flex items-center gap-3 group"
			}, {
				default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="w-10 h-10 border-3 border-neo-purple bg-neo-dark flex items-center justify-center group-hover:bg-neo-purple transition-colors duration-150 group-hover:rotate-6"${_scopeId}>`);
						_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
							src: "/images/logo.png",
							alt: "Bhumisparsha",
							width: "28",
							height: "28",
							class: "w-7 h-7",
							loading: "eager"
						}, null, _parent, _scopeId));
						_push(`</div><div class="flex flex-col leading-none"${_scopeId}><span class="font-orbitron text-[11px] tracking-[0.35em] text-neo-white group-hover:text-neo-purple transition-colors duration-150"${_scopeId}> BHUMI </span><span class="font-rajdhani text-[9px] tracking-[0.2em] text-neo-purple uppercase font-bold"${_scopeId}> SPARSHA </span></div>`);
					} else return [(0, vue_exports.createVNode)("div", { class: "w-10 h-10 border-3 border-neo-purple bg-neo-dark flex items-center justify-center group-hover:bg-neo-purple transition-colors duration-150 group-hover:rotate-6" }, [(0, vue_exports.createVNode)(_component_NuxtImg, {
						src: "/images/logo.png",
						alt: "Bhumisparsha",
						width: "28",
						height: "28",
						class: "w-7 h-7",
						loading: "eager"
					})]), (0, vue_exports.createVNode)("div", { class: "flex flex-col leading-none" }, [(0, vue_exports.createVNode)("span", { class: "font-orbitron text-[11px] tracking-[0.35em] text-neo-white group-hover:text-neo-purple transition-colors duration-150" }, " BHUMI "), (0, vue_exports.createVNode)("span", { class: "font-rajdhani text-[9px] tracking-[0.2em] text-neo-purple uppercase font-bold" }, " SPARSHA ")])];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="hidden lg:flex items-center gap-0"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(navLinks, (link) => {
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
					key: link.path,
					to: link.path,
					class: "relative px-3 py-2 font-rajdhani text-[11px] tracking-[0.12em] text-white/50 hover:text-neo-black transition-all duration-150 uppercase group",
					"active-class": "!text-neo-black !bg-neo-purple"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="relative z-10"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(link.label)}</span><span class="absolute inset-0 bg-neo-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left"${_scopeId}></span><span class="absolute inset-0 bg-neo-purple scale-x-100 transition-transform duration-150 origin-left -z-10" style="${(0, server_renderer_exports.ssrRenderStyle)({ "display": "none" })}"${_scopeId}></span>`);
						else return [
							(0, vue_exports.createVNode)("span", { class: "relative z-10" }, (0, vue_exports.toDisplayString)(link.label), 1),
							(0, vue_exports.createVNode)("span", { class: "absolute inset-0 bg-neo-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" }),
							(0, vue_exports.createVNode)("span", {
								class: "absolute inset-0 bg-neo-purple scale-x-100 transition-transform duration-150 origin-left -z-10",
								style: { "display": "none" }
							})
						];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></nav><button class="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border-2 border-neo-purple hover:bg-neo-purple transition-colors duration-150"${(0, server_renderer_exports.ssrRenderAttr)("aria-label", (0, vue_exports.unref)(mobileOpen) ? "Fechar menu" : "Abrir menu")}${(0, server_renderer_exports.ssrRenderAttr)("aria-expanded", (0, vue_exports.unref)(mobileOpen))}><span class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(mobileOpen) ? "rotate-45 translate-y-[4px]" : "", "w-5 h-0.5 bg-neo-white transition-all duration-200"])}"></span><span class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(mobileOpen) ? "opacity-0 scale-0" : "", "w-5 h-0.5 bg-neo-white transition-all duration-200"])}"></span><span class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(mobileOpen) ? "-rotate-45 -translate-y-[4px]" : "", "w-5 h-0.5 bg-neo-white transition-all duration-200"])}"></span></button></div></div>`);
			if ((0, vue_exports.unref)(mobileOpen)) {
				_push(`<div class="lg:hidden bg-neo-black border-b-4 border-neo-purple"><nav class="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1"><!--[-->`);
				(0, server_renderer_exports.ssrRenderList)(navLinks, (link) => {
					_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
						key: link.path,
						to: link.path,
						class: "px-4 py-3 font-rajdhani text-sm tracking-[0.12em] text-white/50 hover:text-neo-black hover:bg-neo-purple transition-all duration-150 uppercase font-bold",
						"active-class": "!text-neo-black !bg-neo-purple"
					}, {
						default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)(link.label)}`);
							else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(link.label), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></nav></div>`);
			} else _push(`<!---->`);
			_push(`</header>`);
		};
	}
});
//#endregion
//#region app/components/AppHeader.vue
var _sfc_setup$3 = AppHeader_vue_vue_type_script_setup_true_lang_default.setup;
AppHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var AppHeader_default = Object.assign(AppHeader_vue_vue_type_script_setup_true_lang_default, { __name: "AppHeader" });
//#endregion
//#region app/components/AppFooter.vue?vue&type=script&setup=true&lang.ts
var AppFooter_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "AppFooter",
	__ssrInlineRender: true,
	setup(__props) {
		const year = (/* @__PURE__ */ new Date()).getFullYear();
		const projectLinks = [
			{
				label: "Dharma Play",
				path: "/dharmaplay"
			},
			{
				label: "Cyber Manju",
				path: "/cybermanju"
			},
			{
				label: "BhumiStudio Records",
				path: "/bhumistudio"
			},
			{
				label: "7k Project",
				path: "/projetos"
			},
			{
				label: "Techno Sutra",
				path: "/dharmaplay"
			}
		];
		const navLinks = [
			{
				label: "Inicio",
				path: "/"
			},
			{
				label: "Sobre",
				path: "/sobre"
			},
			{
				label: "Textos Traduzidos",
				path: "/textos"
			},
			{
				label: "Videos Legendados",
				path: "/videos"
			},
			{
				label: "Contato",
				path: "/contato"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtImg = _sfc_main$1;
			const _component_NuxtLink = NuxtLink;
			const _component_Icon = components_default;
			_push(`<footer${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "relative bg-neo-black border-t-4 border-neo-purple mt-24" }, _attrs))}><div class="max-w-7xl mx-auto px-4 md:px-8 py-16"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div><div class="flex items-center gap-3 mb-6"><div class="w-10 h-10 border-3 border-neo-purple bg-neo-dark flex items-center justify-center">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtImg, {
				src: "/images/logo.png",
				alt: "Bhumisparsha",
				width: "28",
				height: "28",
				class: "w-7 h-7",
				loading: "lazy"
			}, null, _parent));
			_push(`</div><div class="flex flex-col leading-none"><span class="font-orbitron text-[11px] tracking-[0.3em] text-neo-white">BHUMISPARSHA</span><span class="font-rajdhani text-[9px] tracking-[0.2em] text-neo-purple uppercase font-bold">School</span></div></div><p class="font-rajdhani text-sm text-white/50 leading-relaxed"> Arte, Dharma, Meio Ambiente e Tecnologia — no cruzamento entre a sabedoria ancestral e o futurismo digital. </p></div><div><h4 class="font-orbitron text-[10px] tracking-[0.3em] text-neo-purple mb-4 uppercase font-bold">Projetos</h4><ul class="space-y-2"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(projectLinks, (p) => {
				_push(`<li>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
					to: p.path,
					class: "font-rajdhani text-sm text-white/40 hover:text-neo-purple hover:translate-x-1 inline-block transition-all duration-150"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)(p.label)}`);
						else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(p.label), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--></ul></div><div><h4 class="font-orbitron text-[10px] tracking-[0.3em] text-neo-red mb-4 uppercase font-bold">Navegacao</h4><ul class="space-y-2"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(navLinks, (p) => {
				_push(`<li>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_NuxtLink, {
					to: p.path,
					class: "font-rajdhani text-sm text-white/40 hover:text-neo-red hover:translate-x-1 inline-block transition-all duration-150"
				}, {
					default: (0, vue_exports.withCtx)((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${(0, server_renderer_exports.ssrInterpolate)(p.label)}`);
						else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(p.label), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--></ul></div><div><h4 class="font-orbitron text-[10px] tracking-[0.3em] text-neo-green mb-4 uppercase font-bold">Agradecimentos</h4><p class="font-rajdhani text-sm text-white/40 leading-relaxed mb-4"> Khyentse Foundation · Earth Guardians Global · Guardioes da Terra · SOS Aguas da Prata · ONG Planeta Plantar </p><div class="flex gap-2"><a href="https://bhumisparshaschool.org" target="_blank" rel="noopener" class="w-9 h-9 flex items-center justify-center border-2 border-neo-purple text-white/40 hover:text-neo-purple hover:bg-neo-purple hover:text-neo-black transition-all duration-150" aria-label="Site">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
				name: "heroicons:globe-alt",
				class: "w-4 h-4"
			}, null, _parent));
			_push(`</a><a href="https://www.youtube.com/@bhumisparshaschool" target="_blank" rel="noopener" class="w-9 h-9 flex items-center justify-center border-2 border-neo-red text-white/40 hover:text-neo-red hover:bg-neo-red hover:text-neo-black transition-all duration-150" aria-label="YouTube">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
				name: "heroicons:play-circle",
				class: "w-4 h-4"
			}, null, _parent));
			_push(`</a></div></div></div><div class="neo-divider-thin mt-12 mb-8"></div><div class="flex flex-col md:flex-row items-center justify-between gap-4"><p class="font-rajdhani text-[10px] text-white/30 tracking-[0.15em] uppercase"> © ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(year))} Bhumisparsha School. Todos os direitos reservados. </p><p class="font-rajdhani text-[10px] text-white/20 tracking-[0.1em] italic"> &quot;Sem arte nao ha imaginacao. E se nao ha imaginacao, onde esta a vida?&quot; — Dzongsar Khyentse Rinpoche </p></div></div></footer>`);
		};
	}
});
//#endregion
//#region app/components/AppFooter.vue
var _sfc_setup$2 = AppFooter_vue_vue_type_script_setup_true_lang_default.setup;
AppFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var AppFooter_default = Object.assign(AppFooter_vue_vue_type_script_setup_true_lang_default, { __name: "AppFooter" });
//#endregion
//#region app/components/BackToTop.vue?vue&type=script&setup=true&lang.ts
var BackToTop_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "BackToTop",
	__ssrInlineRender: true,
	setup(__props) {
		const show = (0, vue_exports.ref)(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = components_default;
			if ((0, vue_exports.unref)(show)) {
				_push(`<button${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
					class: "fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-neo-purple border-3 border-neo-white text-neo-black hover:translate-y--1 hover:translate-x--1 transition-all duration-150 hover:shadow-[4px_4px_0px_0px_#ef4444] font-bold",
					style: { "box-shadow": "4px 4px 0px 0px #ffffff" },
					"aria-label": "Voltar ao topo"
				}, _attrs))}>`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: "heroicons:chevron-up",
					class: "w-5 h-5"
				}, null, _parent));
				_push(`</button>`);
			} else _push(`<!---->`);
		};
	}
});
//#endregion
//#region app/components/BackToTop.vue
var _sfc_setup$1 = BackToTop_vue_vue_type_script_setup_true_lang_default.setup;
BackToTop_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackToTop.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var BackToTop_default = Object.assign(BackToTop_vue_vue_type_script_setup_true_lang_default, { __name: "BackToTop" });
//#endregion
//#region app/layouts/default.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_PsychedelicLines = PsychedelicLines_default;
	const _component_AppHeader = AppHeader_default;
	const _component_AppFooter = AppFooter_default;
	const _component_BackToTop = BackToTop_default;
	_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "relative min-h-screen bg-neo-black neo-noise" }, _attrs))}>`);
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_PsychedelicLines, null, null, _parent));
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_AppHeader, null, null, _parent));
	_push(`<main>`);
	(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</main>`);
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_AppFooter, null, null, _parent));
	_push((0, server_renderer_exports.ssrRenderComponent)(_component_BackToTop, null, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { default_default as default };
//# sourceMappingURL=default-eRFrnF3n.mjs.map
