import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
    const [pathname] = useLocation();

    useEffect(() => {
        // Disable browser's default scroll restoration to avoid conflicts
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Handle hash anchor scrolling
        if (window.location.hash) {
            const id = window.location.hash.replace("#", "");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            // Always scroll to top on route change
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
    }, [pathname]);

    return null;
}
