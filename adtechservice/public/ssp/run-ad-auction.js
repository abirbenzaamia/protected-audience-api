
//runAuction();

const resolveToConfig = typeof window.FencedFrameConfig !== 'undefined';
const auctionConfig = {
  // This should be the same origin as decisionLogicUrl below
  seller: "https://greensandbox.fr", 
  decisionLogicURL: "https://greensandbox.fr/ssp/decision-logic.js",

  // This should be a list of all DSPs that you wish to participate in this auction
   interestGroupBuyers: ['https://td.doubleclick.net', 'https://f.creativecdn.com', 'https://criteo.com'],
   //interestGroupBuyers: ['https://www.greensandbox.fr'],
   auctionSignals: { isControversial: true },
   sellerSignals: { key: 'value' },
   sellerTimeout: 100,
   perBuyerSignals: {
     ['https://greensandbox.fr']: { windowInnerHeight: window.innerHeight },
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


