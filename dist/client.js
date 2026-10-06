// Pterodactyl 2.0 Extension Stylesheet Loader & Synchronous Injector
(function() {
    if (typeof document !== 'undefined') {
        const id = 'ext-styles-left-sidebar';
        if (!document.getElementById(id)) {
            try {
                const link = document.createElement('link');
                link.id = id;
                link.rel = 'stylesheet';
                link.href = new URL('./client.css', import.meta.url).href;
                document.head.appendChild(link);
            } catch (e) {}
            try {
                const style = document.createElement('style');
                style.id = id + '-inline';
                style.textContent = "/* src/client/sidebar.css */\nhtml[data-sub-navigation=side] {\n  --layout-sidebar-width: 15rem;\n}\n@media (min-width: 64rem) {\n  html[data-sub-navigation=side] [class*=w-sidebar],\n  html[data-sub-navigation=side] nav[class*=sticky],\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] {\n    padding: 1.25rem 0.75rem !important;\n    margin-right: 1.5rem !important;\n    background: var(--card, rgba(15, 23, 42, 0.5)) !important;\n    border: 1px solid var(--border, rgba(255, 255, 255, 0.08)) !important;\n    border-radius: 12px !important;\n    backdrop-filter: blur(12px) !important;\n    box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.25) !important;\n  }\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] > div {\n    gap: 4px !important;\n  }\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] a,\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] div[role=button] {\n    position: relative !important;\n    display: flex !important;\n    align-items: center !important;\n    padding: 0.625rem 0.875rem !important;\n    font-size: 0.84375rem !important;\n    font-weight: 500 !important;\n    color: var(--muted-foreground, #94a3b8) !important;\n    border-radius: 8px !important;\n    transition: all 0.16s cubic-bezier(0.4, 0, 0.2, 1) !important;\n    text-decoration: none !important;\n    border-left: 3px solid transparent !important;\n  }\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] a:hover,\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] div[role=button]:hover {\n    color: var(--foreground, #f8fafc) !important;\n    background: var(--muted, rgba(255, 255, 255, 0.06)) !important;\n    transform: translateX(2px) !important;\n  }\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] a.active,\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] a[data-status=active],\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] div.active,\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] div[data-status=active] {\n    color: var(--foreground, #ffffff) !important;\n    background: var(--card, rgba(255, 255, 255, 0.1)) !important;\n    font-weight: 600 !important;\n    border-left: 3px solid var(--primary, #6366f1) !important;\n    box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.2) !important;\n  }\n}\n";
                document.head.appendChild(style);
            } catch (e) {}
        }
    }
})();
// src/client/index.tsx
import { definePterodactylExtension } from "@pterodactyl/sdk";
function applySideNavigation() {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-sub-navigation", "side");
  }
}
applySideNavigation();
var index_default = definePterodactylExtension({
  setup() {
    applySideNavigation();
    if (typeof window !== "undefined" && typeof MutationObserver !== "undefined") {
      const observer = new MutationObserver(() => {
        if (document.documentElement.getAttribute("data-sub-navigation") !== "side") {
          document.documentElement.setAttribute("data-sub-navigation", "side");
        }
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-sub-navigation"]
      });
    }
  }
});
export {
  index_default as default
};
