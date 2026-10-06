// Pterodactyl 2.0 Extension Stylesheet Loader
(function() {
    if (typeof document !== 'undefined') {
        const id = 'ext-styles-left-sidebar';
        if (!document.getElementById(id)) {
            try {
                const style = document.createElement('style');
                style.id = id + '-inline';
                style.textContent = "/* src/client/sidebar.css */\nhtml[data-sub-navigation=side] {\n  --layout-sidebar-width: 15rem;\n}\n@media (min-width: 64rem) {\n  html[data-sub-navigation=side] [class*=\"side-navigation:max-w-panel\"],\n  html[data-sub-navigation=side] div.side-navigation\\:max-w-panel,\n  html[data-sub-navigation=side] div:has(> [class*=w-sidebar]),\n  html[data-sub-navigation=side] div:has(> [class*=\"side-navigation:sticky\"]) {\n    max-width: 100% !important;\n    margin-left: 0 !important;\n    padding-left: 1.5rem !important;\n    padding-right: 1.5rem !important;\n  }\n  html[data-sub-navigation=side] [class*=w-sidebar],\n  html[data-sub-navigation=side] nav[class*=sticky],\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"],\n  html[data-sub-navigation=side] div.side-navigation\\:sticky {\n    top: 4.5rem !important;\n    max-height: calc(100vh - 5.5rem) !important;\n    overflow-y: auto !important;\n    overflow-x: hidden !important;\n    padding: 1rem 0.625rem !important;\n    margin-right: 1.5rem !important;\n    background: var(--card, rgba(15, 23, 42, 0.6)) !important;\n    border: 1px solid var(--border, rgba(255, 255, 255, 0.08)) !important;\n    border-radius: 12px !important;\n    backdrop-filter: blur(12px) !important;\n    box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.25) !important;\n    scrollbar-width: thin !important;\n    scrollbar-color: rgba(255, 255, 255, 0.15) transparent !important;\n  }\n  html[data-sub-navigation=side] [class*=w-sidebar]::-webkit-scrollbar,\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"]::-webkit-scrollbar {\n    width: 4px !important;\n  }\n  html[data-sub-navigation=side] [class*=w-sidebar]::-webkit-scrollbar-thumb,\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"]::-webkit-scrollbar-thumb {\n    background: rgba(255, 255, 255, 0.15) !important;\n    border-radius: 4px !important;\n  }\n  html[data-sub-navigation=side] [class*=w-sidebar]::-webkit-scrollbar-thumb:hover,\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"]::-webkit-scrollbar-thumb:hover {\n    background: rgba(255, 255, 255, 0.3) !important;\n  }\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] > div,\n  html[data-sub-navigation=side] [class*=w-sidebar] > div {\n    gap: 3px !important;\n    display: flex !important;\n    flex-direction: column !important;\n  }\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] a,\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] div[role=button],\n  html[data-sub-navigation=side] [class*=w-sidebar] a {\n    position: relative !important;\n    display: flex !important;\n    align-items: center !important;\n    padding: 0.55rem 0.8rem !important;\n    font-size: 0.8125rem !important;\n    font-weight: 500 !important;\n    color: var(--muted-foreground, #94a3b8) !important;\n    border-radius: 7px !important;\n    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;\n    text-decoration: none !important;\n    border-left: 3px solid transparent !important;\n    white-space: nowrap !important;\n    margin: 0 !important;\n  }\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] a:hover,\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] div[role=button]:hover,\n  html[data-sub-navigation=side] [class*=w-sidebar] a:hover {\n    color: var(--foreground, #f8fafc) !important;\n    background: var(--muted, rgba(255, 255, 255, 0.06)) !important;\n    transform: translateX(2px) !important;\n  }\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] a.active,\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] a[data-status=active],\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] div.active,\n  html[data-sub-navigation=side] div[class*=\"side-navigation:sticky\"] div[data-status=active],\n  html[data-sub-navigation=side] [class*=w-sidebar] a.active,\n  html[data-sub-navigation=side] [class*=w-sidebar] a[data-status=active] {\n    color: var(--foreground, #ffffff) !important;\n    background: var(--card, rgba(255, 255, 255, 0.1)) !important;\n    font-weight: 600 !important;\n    border-left: 3px solid var(--primary, #6366f1) !important;\n    box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.2) !important;\n  }\n}\n";
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
