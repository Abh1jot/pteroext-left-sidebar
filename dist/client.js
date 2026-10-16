await Promise.all(["left-sidebar.css"].map(file => new Promise((resolve, reject) => {const href = new URL(file, import.meta.url).href;if (document.querySelector('link[href="' + href + '"]')) return resolve();const link = document.createElement('link');link.rel = 'stylesheet';link.href = href;link.onload = () => resolve();link.onerror = () => { link.remove(); reject(new Error('Unable to load extension stylesheet: ' + file)); };document.head.append(link);})));
import { definePterodactylExtension as a } from "@pterodactyl/sdk";
function e() {
  if (typeof window > "u" || typeof document > "u") return;
  const n = window.location.pathname || "", i = n.startsWith("/admin"), t = n.includes("/server/");
  if (i || !t) {
    document.documentElement.getAttribute("data-sub-navigation") === "side" && document.documentElement.removeAttribute("data-sub-navigation");
    return;
  }
  document.documentElement.getAttribute("data-sub-navigation") !== "side" && document.documentElement.setAttribute("data-sub-navigation", "side");
}
e();
const r = a({
  setup() {
    if (e(), typeof window < "u") {
      window.addEventListener("popstate", e);
      const n = history.pushState;
      history.pushState = function(...t) {
        const o = n.apply(this, t);
        return setTimeout(e, 0), o;
      };
      const i = history.replaceState;
      history.replaceState = function(...t) {
        const o = i.apply(this, t);
        return setTimeout(e, 0), o;
      }, typeof MutationObserver < "u" && new MutationObserver(() => {
        e();
      }).observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["data-sub-navigation"]
      });
    }
  }
});
export {
  r as default
};
