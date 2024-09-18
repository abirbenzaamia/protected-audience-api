// const auctionConfig = {
//   // This should be the same origin as decisionLogicUrl below
//   seller: "https://protected-audience-api-tsc2.onrender.com", 
//   decisionLogicUrl: "https://protected-audience-api-tsc2.onrender.com/ssp/decision-logic.js",

//   // This should be a list of all DSPs that you wish to participate in this auction
//   interestGroupBuyers: ['https://protected-audience-api-tsc2.onrender.com', 'https://td.doubleclick.net', 'https://f.creativecdn.com', 'https://fledge.eu.criteo.com'],
// // This object will be available to all auction participants
//   auctionSignals: { },

//   // This object will only be available to the seller during scoreAd function
//   sellerSignals: { },

//   // This parameter is optional, and is only available to the Buyer of each object. This is data the seller explicitly provides to individual buyers.
//   // Each key in this object should match an entry in the interestGroupBuyers array above
//   perBuyerSignals: {
//   "https://protected-audience-api-tsc2.onrender.com": { },
// },
// perBuyerTimeouts: {
//   '*': 50,
// }
// };
const runAuction = async () => {
  const resolveToConfig = typeof window.FencedFrameConfig !== 'undefined';

  const auctionConfig = {
   // This should be the same origin as decisionLogicUrl below
   seller: "https://protected-audience-api-tsc2.onrender.com", 
   decisionLogicURL: "https://protected-audience-api-tsc2.onrender.com/ssp/decision-logic.js",
 
   // This should be a list of all DSPs that you wish to participate in this auction
   interestGroupBuyers: ['https://protected-audience-api-tsc2.onrender.com'],
 // This object will be available to all auction participants
    auctionSignals: { isControversial: true },
    sellerSignals: { key: 'value' },
    sellerTimeout: 100,
    perBuyerSignals: {
      ['https://protected-audience-api-tsc2.onrender.com']: { windowInnerHeight: window.innerHeight },
    },
    perBuyerTimeouts: {
      '*': 50,
    },
    resolveToConfig
  };

  console.log('auctionConfig = ', JSON.stringify(auctionConfig));

  // Run ad auction
  const selectedAd = await navigator.runAdAuction(auctionConfig);

  // Render ad
  const frame = document.getElementById('protected-audience-ad');

  if (resolveToConfig && selectedAd instanceof FencedFrameConfig) {
    frame.config = selectedAd;
  } else {
    frame.src = selectedAd;
  }
};

runAuction();
