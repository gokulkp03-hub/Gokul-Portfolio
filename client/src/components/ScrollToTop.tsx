import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
    const [location] = useLocation();

    useEffect(() => {
        // Check if there's a hash in the URL (like /#contact)
        if (location.includes("#")) {
            // Extract the hash
            const hash = location.split("#")[1];
            if (hash) {
                // Small delay to ensure DOM is ready
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            }
        } else {
            // No hash, scroll to top
            window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        }
    }, [location]);

    return null;
}
