
// const runAuction = async () => {
//   const resolveToConfig = typeof window.FencedFrameConfig !== 'undefined';

//   const auctionConfig = {
//    // This should be the same origin as decisionLogicUrl below
//    seller: "https://protected-audience-api-tsc2.onrender.com", 
//    decisionLogicURL: "https://protected-audience-api-tsc2.onrender.com/ssp/decision-logic.js",
 
//    // This should be a list of all DSPs that you wish to participate in this auction
//    interestGroupBuyers: ['https://protected-audience-api-tsc2.onrender.com', 'https://protected-audience-demo-dsp.web.app'],
//  // This object will be available to all auction participants
//     auctionSignals: { isControversial: true },
//     sellerSignals: { key: 'value' },
//     sellerTimeout: 100,
//     perBuyerSignals: {
//       ['https://protected-audience-api-tsc2.onrender.com']: { windowInnerHeight: window.innerHeight },
//     },
//     perBuyerTimeouts: {
//       '*': 50,
//     },
//     resolveToConfig
//   };

//   console.log('auctionConfig = ', JSON.stringify(auctionConfig));

//   // Run ad auction
//   const selectedAd = await navigator.runAdAuction(auctionConfig);
//   console.log(selectedAd)

//   // Render ad
//   const frame = document.getElementById('protected-audience-ad');

//   if (resolveToConfig && selectedAd instanceof FencedFrameConfig) {
//     frame.config = selectedAd;
//   } else {
//     frame.src = selectedAd;
//   }
// };

//runAuction();

const resolveToConfig = typeof window.FencedFrameConfig !== 'undefined';
const auctionConfig = {
  // This should be the same origin as decisionLogicUrl below
  seller: "https://www.greensandbox.fr", 
  decisionLogicURL: "https://www.greensandbox.fr/ssp/decision-logic.js",

  // This should be a list of all DSPs that you wish to participate in this auction
  interestGroupBuyers: ['https://www.greensandbox.fr', 'https://protected-audience-demo-dsp.web.app', 'https://td.doubleclick.net', 'https://f.creativecdn.com', 'https://fledge.eu.criteo.com','https://fledge.teads.tv'],
// This object will be available to all auction participants
   auctionSignals: { isControversial: true },
   sellerSignals: { key: 'value' },
   sellerTimeout: 100,
   perBuyerSignals: {
     ['https://www.greensandbox.fr']: { windowInnerHeight: window.innerHeight },
   },
   perBuyerTimeouts: {
     '*': 50,
   },
   resolveToConfig,
 };

async function runAuction(){
// Run ad auction
const opaqueUrl = await navigator.runAdAuction(auctionConfig);
// Render ad
console.log(opaqueUrl)
//const frame = document.getElementById('protected-audience-ad');

const iframeEl = document.createElement('fencedframe');
iframeEl.mode = 'opaque-ads';
iframeEl.style.width  = '300px';
iframeEl.style.height = '250px';

var parentIframe = document.getElementById('parentIframe');
if (parentIframe) {
  parentIframe.remove();  // Removes the iframe from the DOM
  console.log('Iframe deleted.');
}
document.body.appendChild(iframeEl);

if (window.FencedFrameConfig && opaqueUrl instanceof FencedFrameConfig){
  iframeEl.config = opaqueUrl;
  
}else{
  iframeEl.src = opaqueUrl;
}
  
}

runAuction();


