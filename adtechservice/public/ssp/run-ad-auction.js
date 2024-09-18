const auctionConfig = {
  // This should be the same origin as decisionLogicUrl below
  seller: "https://protected-audience-api-tsc2.onrender.com", 
  decisionLogicUrl: "https://protected-audience-api-tsc2.onrender.com/ssp/decision-logic.js",

  // This should be a list of all DSPs that you wish to participate in this auction
  interestGroupBuyers: ['https://protected-audience-api-tsc2.onrender.com'],
// This object will be available to all auction participants
  auctionSignals: { },

  // This object will only be available to the seller during scoreAd function
  sellerSignals: { },

  // This parameter is optional, and is only available to the Buyer of each object. This is data the seller explicitly provides to individual buyers.
  // Each key in this object should match an entry in the interestGroupBuyers array above
  perBuyerSignals: {
  "https://protected-audience-api-tsc2.onrender.com": { },
},
};

async function runAuction(){
// Run ad auction
const opaqueUrl = await navigator.runAdAuction(auctionConfig);
// Render ad
const iframeEl = document.createElement('iframe');
iframeEl.src = opaqueUrl;
document.body.appendChild(iframeEl);
}

runAuction();
