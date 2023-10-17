// Check if the 'window' object is defined before accessing it
const pageview = (url) => {
  if (typeof window !== 'undefined') {
    // Ensure 'dataLayer' exists on the 'window' object before accessing it
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "pageview",
        page: url,
      });
    } else {
      console.log({
        event: "pageview",
        page: url,
      });
    }
  }
};

module.exports = { pageview };
