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

//#region app/pages/contato.vue?vue&type=script&setup=true&lang.ts
var contato_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "contato",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Contato | Bhumisparsha School",
			description: "Entre em contato com a Bhumisparsha School."
		});
		const form = (0, vue_exports.reactive)({
			firstName: "",
			lastName: "",
			email: "",
			message: ""
		});
		const submitted = (0, vue_exports.ref)(false);
		const focusedField = (0, vue_exports.ref)(null);
		const contactInfo = [
			{
				icon: "heroicons:globe-alt",
				label: "Site",
				value: "bhumisparshaschool.org",
				color: "cyan"
			},
			{
				icon: "heroicons:envelope",
				label: "Email",
				value: "contato@bhumisparshaschool.org",
				color: "purple"
			},
			{
				icon: "heroicons:map-pin",
				label: "Localizacao",
				value: "Brasil",
				color: "green"
			}
		];
		const particles = Array.from({ length: 20 }, (_, i) => ({
			id: i,
			left: `${Math.random() * 100}%`,
			delay: `${Math.random() * 8}s`,
			duration: `${6 + Math.random() * 8}s`,
			size: `${2 + Math.random() * 4}px`,
			color: [
				"#a855f7",
				"#06b6d4",
				"#22c55e",
				"#facc15"
			][Math.floor(Math.random() * 4)]
		}));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Icon = components_default;
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "pt-20 overflow-hidden" }, _attrs))}><div class="neo-particles"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(particles), (p) => {
				_push(`<div class="neo-particle" style="${(0, server_renderer_exports.ssrRenderStyle)({
					left: p.left,
					animationDelay: p.delay,
					animationDuration: p.duration,
					width: p.size,
					height: p.size,
					background: p.color
				})}"></div>`);
			});
			_push(`<!--]--></div><section class="relative py-24 px-4"><div class="max-w-5xl mx-auto relative z-10 contato-hero"><div class="flex items-center gap-4 mb-4"><div class="h-1 w-16 bg-neo-cyan"></div><span class="neo-subtitle" style="${(0, server_renderer_exports.ssrRenderStyle)({ "color": "#06b6d4" })}">Fale Conosco</span></div><h1 class="neo-title-cyan mb-6">Contato</h1><div class="neo-divider-cyan max-w-[200px] mb-8"></div><p class="font-grotesk text-lg text-white/50 leading-relaxed max-w-2xl border-l-4 border-neo-cyan pl-4"> Tem duvidas, sugestoes ou quer colaborar? Estamos abertos a parcerias, colaboracoes artisticas e iniciativas comunitarias. </p></div></section><section class="pb-24 px-4"><div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12"><div class="lg:col-span-2 space-y-6"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(contactInfo, (info, i) => {
				_push(`<div class="contact-item group flex items-start gap-4 p-4 border border-neo-border/30 hover:border-neo-cyan/40 transition-all duration-200 cursor-default" style="${(0, server_renderer_exports.ssrRenderStyle)(`transition-delay: ${i * 60}ms`)}"><div class="${(0, server_renderer_exports.ssrRenderClass)([[
					info.color === "cyan" && "border-neo-cyan text-neo-cyan",
					info.color === "purple" && "border-neo-purple text-neo-purple",
					info.color === "green" && "border-neo-green text-neo-green"
				], "w-12 h-12 flex items-center justify-center border-2 flex-shrink-0 transition-all duration-200 group-hover:rotate-12 group-hover:scale-110"])}">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: info.icon,
					class: "w-5 h-5"
				}, null, _parent));
				_push(`</div><div><span class="${(0, server_renderer_exports.ssrRenderClass)([[
					info.color === "cyan" && "text-neo-cyan",
					info.color === "purple" && "text-neo-purple",
					info.color === "green" && "text-neo-green"
				], "font-orbitron text-[9px] tracking-[0.3em] uppercase font-bold block mb-1"])}">${(0, server_renderer_exports.ssrInterpolate)(info.label)}</span><p class="font-rajdhani text-sm text-white/50 group-hover:text-white/80 transition-colors duration-200">${(0, server_renderer_exports.ssrInterpolate)(info.value)}</p></div></div>`);
			});
			_push(`<!--]--><div class="relative border-4 border-neo-cyan/20 p-8 text-center overflow-hidden"><div class="absolute inset-0 bg-gradient-to-br from-neo-cyan/5 to-neo-purple/5"></div>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
				name: "heroicons:map",
				class: "w-12 h-12 text-neo-cyan/30 mx-auto mb-3"
			}, null, _parent));
			_push(`<span class="font-orbitron text-[10px] tracking-[0.3em] text-neo-cyan/40 uppercase font-bold">Brasil</span></div></div><div class="lg:col-span-3">`);
			if (!(0, vue_exports.unref)(submitted)) {
				_push(`<div class="border-4 border-neo-cyan p-8 relative overflow-hidden" style="${(0, server_renderer_exports.ssrRenderStyle)({ "box-shadow": "8px 8px 0px 0px #06b6d4" })}"><div class="absolute top-0 right-0 w-32 h-32 border-4 border-neo-cyan/10 rotate-45"></div><form class="space-y-5 relative z-10"><div class="grid grid-cols-2 gap-4"><div class="form-field"><label class="font-orbitron text-[9px] tracking-[0.3em] text-neo-cyan uppercase mb-2 block font-bold">Nome</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).firstName)} type="text" required class="neo-input-cyan" placeholder="Nome"><div class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(focusedField) === "firstName" ? "bg-neo-cyan w-full" : "w-0", "h-0.5 bg-neo-cyan/20 mt-1 transition-all duration-300"])}"></div></div><div class="form-field"><label class="font-orbitron text-[9px] tracking-[0.3em] text-neo-cyan uppercase mb-2 block font-bold">Sobrenome</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).lastName)} type="text" required class="neo-input-cyan" placeholder="Sobrenome"><div class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(focusedField) === "lastName" ? "bg-neo-cyan w-full" : "w-0", "h-0.5 bg-neo-cyan/20 mt-1 transition-all duration-300"])}"></div></div></div><div class="form-field"><label class="font-orbitron text-[9px] tracking-[0.3em] text-neo-cyan uppercase mb-2 block font-bold">Email</label><input${(0, server_renderer_exports.ssrRenderAttr)("value", (0, vue_exports.unref)(form).email)} type="email" required class="neo-input-cyan" placeholder="email@exemplo.com"><div class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(focusedField) === "email" ? "bg-neo-cyan w-full" : "w-0", "h-0.5 bg-neo-cyan/20 mt-1 transition-all duration-300"])}"></div></div><div class="form-field"><label class="font-orbitron text-[9px] tracking-[0.3em] text-neo-cyan uppercase mb-2 block font-bold">Mensagem</label><textarea required rows="5" class="neo-input-cyan resize-none" placeholder="Sua mensagem...">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(form).message)}</textarea><div class="${(0, server_renderer_exports.ssrRenderClass)([(0, vue_exports.unref)(focusedField) === "message" ? "bg-neo-cyan w-full" : "w-0", "h-0.5 bg-neo-cyan/20 mt-1 transition-all duration-300"])}"></div></div><button type="submit" class="neo-btn w-full justify-center" style="${(0, server_renderer_exports.ssrRenderStyle)({ "background": "#06b6d4" })}">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: "heroicons:paper-airplane",
					class: "w-4 h-4"
				}, null, _parent));
				_push(` Enviar Mensagem </button></form></div>`);
			} else {
				_push(`<div class="border-4 border-neo-green p-12 text-center neo-glow-green"><div class="w-20 h-20 flex items-center justify-center border-4 border-neo-green mx-auto mb-4 neo-clip-diamond animate-scale-in">`);
				_push((0, server_renderer_exports.ssrRenderComponent)(_component_Icon, {
					name: "heroicons:check-circle",
					class: "w-10 h-10 text-neo-green"
				}, null, _parent));
				_push(`</div><h3 class="font-orbitron text-xl text-neo-green mb-3 uppercase font-bold">Mensagem Enviada!</h3><p class="font-rajdhani text-sm text-white/40">Obrigado pelo contato. Responderemos em breve.</p></div>`);
			}
			_push(`</div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/contato.vue
var _sfc_setup = contato_vue_vue_type_script_setup_true_lang_default.setup;
contato_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contato.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contato_default = contato_vue_vue_type_script_setup_true_lang_default;

export { contato_default as default };
//# sourceMappingURL=contato-CPgiBIsg.mjs.map
