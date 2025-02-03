import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { p as portfolioData } from "./portfolio-CacXq9Bj.js";
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref(portfolioData);
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, _attrs))}><div class="max-w-3xl mx-auto"><h1 class="text-3xl font-bold text-center mb-8">Get in Touch</h1><div class="bg-white shadow-sm rounded-lg p-8"><form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700">Name</label><input type="text" id="name"${ssrRenderAttr("value", unref(form).name)} required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"></div><div><label for="email" class="block text-sm font-medium text-gray-700">Email</label><input type="email" id="email"${ssrRenderAttr("value", unref(form).email)} required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"></div><div><label for="subject" class="block text-sm font-medium text-gray-700">Subject</label><input type="text" id="subject"${ssrRenderAttr("value", unref(form).subject)} required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"></div><div><label for="message" class="block text-sm font-medium text-gray-700">Message</label><textarea id="message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">${ssrInterpolate(unref(form).message)}</textarea></div><div><button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"> Send Message </button></div></form><div class="mt-8 pt-8 border-t border-gray-200"><h2 class="text-lg font-medium text-gray-900">Other ways to reach me</h2><div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(data).contactInfo, (contact) => {
        _push(`<div class="flex items-center"><span class="text-xl mr-2">${ssrInterpolate(contact.icon)}</span><div><p class="text-sm font-medium text-gray-900">${ssrInterpolate(contact.type)}</p><p class="text-sm text-gray-600">${ssrInterpolate(contact.value)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-nGaG_y64.js.map
