const GA_MEASUREMENT_ID = "G-B0X2TLH039";

const script1 = document.createElement("script");
script1.async = true;
script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
document.head.appendChild(script1);

window.dataLayer = window.dataLayer || [];
window.gtag = function () {
  dataLayer.push(arguments);
};

gtag("js", new Date());
gtag("config", GA_MEASUREMENT_ID);