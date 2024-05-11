"use client"

import { useEffect } from "react";

export default function gameDownload() {
    useEffect(() => {
        const userAgent = navigator.userAgent;

        // Define the URLs for redirection based on device type
        const androidURL = "https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia&hl=en_US&gl=US";
        const iosURL = "https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia&hl=en_US&gl=US";
        const otherURL = "https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia&hl=en_US&gl=US";

        // Check the device type and redirect accordingly
        if (/android/i.test(userAgent)) {
            window.location.href = androidURL;
        } else if (/iPad|iPhone|iPod/.test(navigator.platform)) {
            window.location.href = iosURL;
        } else {
            window.location.href = otherURL;
        }
    }, []);

    return null;  // This component does not render anything
}

