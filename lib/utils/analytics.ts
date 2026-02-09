declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(formType: string) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "form_submit", {
      form_type: formType,
      event_category: "engagement",
      event_label: formType,
    });
  }
}
