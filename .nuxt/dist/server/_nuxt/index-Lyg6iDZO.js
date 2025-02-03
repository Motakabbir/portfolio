import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { p as portfolioData } from "./portfolio-CacXq9Bj.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref(portfolioData);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="bg-gradient-to-r from-primary to-blue-700 text-white py-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center"><h1 class="text-4xl font-bold sm:text-5xl md:text-6xl">${ssrInterpolate(unref(data).personal.name)}</h1><p class="mt-3 text-xl">${ssrInterpolate(unref(data).personal.title)}</p><p class="mt-5 max-w-xl mx-auto text-xl">${ssrInterpolate(unref(data).personal.bio)}</p></div></div></section><section class="py-12 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center mb-8">Skills &amp; Expertise</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
      ssrRenderList(unref(data).skills, (skillSet) => {
        _push(`<div class="bg-gray-50 p-6 rounded-lg shadow-sm"><h3 class="text-xl font-semibold mb-4">${ssrInterpolate(skillSet.category)}</h3><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(skillSet.items, (skill) => {
          _push(`<span class="bg-primary text-white px-3 py-1 rounded-full text-sm">${ssrInterpolate(skill)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-12 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center mb-8">Featured Projects</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
      ssrRenderList(unref(data).projects, (project) => {
        _push(`<div class="bg-white rounded-lg shadow-sm overflow-hidden"><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="w-full h-48 object-cover"><div class="p-6"><h3 class="text-xl font-semibold mb-2">${ssrInterpolate(project.title)}</h3><p class="text-gray-600 mb-4">${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2 mb-4"><!--[-->`);
        ssrRenderList(project.technologies, (tech) => {
          _push(`<span class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div><a${ssrRenderAttr("href", project.link)} class="text-primary hover:underline">View Project →</a></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-12 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
      ssrRenderList(unref(data).blogPosts, (post) => {
        _push(`<div class="bg-gray-50 rounded-lg shadow-sm overflow-hidden"><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="w-full h-48 object-cover"><div class="p-6"><h3 class="text-xl font-semibold mb-2">${ssrInterpolate(post.title)}</h3><p class="text-gray-600 mb-2">${ssrInterpolate(post.excerpt)}</p><p class="text-sm text-gray-500">${ssrInterpolate(new Date(post.date).toLocaleDateString())}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Lyg6iDZO.js.map
