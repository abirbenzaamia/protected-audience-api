
async function runAuction() {
  const resolveToConfig = typeof window.FencedFrameConfig !== 'undefined';

  const auctionConfig = {
    seller: 'https://protected-audience-api-tsc2.onrender.com/',
    decisionLogicUrl: `https://protected-audience-api-tsc2.onrender.com/ssp/decision-logic.js`,
    interestGroupBuyers: ['https://protected-audience-api-tsc2.onrender.com/'],
    perBuyerSignals: {
      ['https://protected-audience-api-tsc2.onrender.com/']: { windowInnerHeight: window.innerHeight },
    },
    resolveToConfig
  };
 
  // Run ad auction
  const selectedAd = await navigator.runAdAuction(auctionConfig);
  console.log(selectedAd)
  // Render ad
  const frame = document.getElementById('protected-audience-ad');

  if (resolveToConfig && selectedAd instanceof FencedFrameConfig) {
    frame.config = selectedAd;
  } else {
    frame.src = selectedAd;
  }
};


runAuction();
