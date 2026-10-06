import { definePterodactylExtension } from '@pterodactyl/sdk';
import './sidebar.css';

function applySideNavigation() {
    if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-sub-navigation', 'side');
    }
}

// Apply immediately on bundle load
applySideNavigation();

export default definePterodactylExtension({
    setup() {
        applySideNavigation();

        // Ensure sub-navigation stays set to "side" across SPA route changes
        if (typeof window !== 'undefined' && typeof MutationObserver !== 'undefined') {
            const observer = new MutationObserver(() => {
                if (document.documentElement.getAttribute('data-sub-navigation') !== 'side') {
                    document.documentElement.setAttribute('data-sub-navigation', 'side');
                }
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['data-sub-navigation'],
            });
        }
    },
});
