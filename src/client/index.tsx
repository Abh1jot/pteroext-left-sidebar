import { definePterodactylExtension } from '@pterodactyl/sdk';
import './sidebar.css';

function updateNavigationMode() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const pathname = window.location.pathname || '';
    const isAdmin = pathname.startsWith('/admin');
    const isServerArea = pathname.includes('/server/');

    // Strictly disable on admin pages and non-server pages
    if (isAdmin || !isServerArea) {
        if (document.documentElement.getAttribute('data-sub-navigation') === 'side') {
            document.documentElement.removeAttribute('data-sub-navigation');
        }
        return;
    }

    // Enable only for server client area
    if (document.documentElement.getAttribute('data-sub-navigation') !== 'side') {
        document.documentElement.setAttribute('data-sub-navigation', 'side');
    }
}

// Initial check
updateNavigationMode();

export default definePterodactylExtension({
    setup() {
        updateNavigationMode();

        if (typeof window !== 'undefined') {
            window.addEventListener('popstate', updateNavigationMode);

            // Hook history pushState and replaceState to catch SPA navigation
            const originalPushState = history.pushState;
            history.pushState = function (...args) {
                const res = originalPushState.apply(this, args);
                setTimeout(updateNavigationMode, 0);
                return res;
            };

            const originalReplaceState = history.replaceState;
            history.replaceState = function (...args) {
                const res = originalReplaceState.apply(this, args);
                setTimeout(updateNavigationMode, 0);
                return res;
            };

            // Observer to enforce state consistency
            if (typeof MutationObserver !== 'undefined') {
                const observer = new MutationObserver(() => {
                    updateNavigationMode();
                });

                observer.observe(document.documentElement, {
                    attributes: true,
                    attributeFilter: ['data-sub-navigation'],
                });
            }
        }
    },
});
