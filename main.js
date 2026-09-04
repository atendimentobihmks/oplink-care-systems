/* ==========================================================================
   MAIN JAVASCRIPT — CARE SYSTEMS BIO ENZYMES (BIOTECH OPLINK)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAnalyticsTracking();
});

/**
 * GA4 / Meta Pixel CTA Click Event Tracking
 */
function initAnalyticsTracking() {
  const trackableLinks = document.querySelectorAll('a[id^=btn-]');
  
  trackableLinks.forEach(link => {
    link.addEventListener('click', () => {
      const linkId = link.getAttribute('id');
      const linkLabel = link.querySelector('.btn-title')?.textContent?.trim() || linkId;
      
      // Google Analytics 4 Event
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'cta_click', {
          'cta_id': linkId,
          'cta_label': linkLabel,
          'page_location': window.location.href
        });
      }

      // Meta Pixel Event
      if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', 'OPLink_CTA_Click', {
          cta_id: linkId,
          cta_label: linkLabel
        });
      }
    });
  });
}
