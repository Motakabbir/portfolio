import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { p as portfolioData } from "./portfolio-CacXq9Bj.js";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref(portfolioData);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, _attrs))}><div class="bg-white shadow-sm rounded-lg overflow-hidden"><div class="md:flex"><div class="md:flex-shrink-0"><img class="h-48 w-full object-cover md:w-48"${ssrRenderAttr("src", unref(data).personal.image)}${ssrRenderAttr("alt", unref(data).personal.name)}></div><div class="p-8"><h1 class="text-3xl font-bold text-gray-900">About Me</h1><p class="mt-4 text-lg text-gray-600">${ssrInterpolate(unref(data).personal.bio)}</p><div class="mt-8"><h2 class="text-2xl font-semibold text-gray-900">Certifications</h2><div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(data).certifications, (cert) => {
        _push(`<div class="bg-gray-50 p-4 rounded-lg"><h3 class="font-semibold text-gray-900">${ssrInterpolate(cert.name)}</h3><p class="text-sm text-gray-600">${ssrInterpolate(cert.issuer)}</p><p class="text-sm text-gray-500">${ssrInterpolate(cert.date)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-8"><h2 class="text-2xl font-semibold text-gray-900">Education</h2><div class="mt-4 space-y-4"><!--[-->`);
      ssrRenderList(unref(data).education, (edu) => {
        _push(`<div class="border-l-4 border-primary pl-4"><h3 class="font-semibold text-gray-900">${ssrInterpolate(edu.degree)}</h3><p class="text-gray-600">${ssrInterpolate(edu.institution)}</p><p class="text-sm text-gray-500">${ssrInterpolate(edu.year)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-8"><h2 class="text-2xl font-semibold text-gray-900">Experience</h2><div class="mt-4 space-y-4"><!--[-->`);
      ssrRenderList(unref(data).experience, (exp) => {
        _push(`<div class="border-l-4 border-primary pl-4"><h3 class="font-semibold text-gray-900">${ssrInterpolate(exp.position)}</h3><p class="text-gray-600">${ssrInterpolate(exp.company)}</p><p class="text-sm text-gray-500">${ssrInterpolate(exp.period)}</p><p class="mt-2 text-gray-600">${ssrInterpolate(exp.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-brOtJXv8.js.map
