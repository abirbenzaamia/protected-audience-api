
const runAuction = async (sspUrl, dspUrl) => {
  const resolveToConfig = typeof window.FencedFrameConfig !== 'undefined';

  const auctionConfig = {
    seller: 'https://protected-audience-api-tsc2.onrender.com/',
    decisionLogicUrl: `https://protected-audience-api-tsc2.onrender.com/ssp/decision-logic.js`,
    interestGroupBuyers: ['https://protected-audience-api-tsc2.onrender.com/'],
    auctionSignals: { isControversial: true },
    sellerSignals: { key: 'value' },
    sellerTimeout: 100,
    perBuyerSignals: {
      ['https://protected-audience-api-tsc2.onrender.com/']: { windowInnerHeight: window.innerHeight },
    },
    perBuyerTimeouts: {
      '*': 50,
    },
    resolveToConfig
  };

  console.log('auctionConfig = ', JSON.stringify(auctionConfig));
 
  // Run ad auction
  const selectedAd = await navigator.runAdAuction(auctionConfig);
  console.log()
  // Render ad
  const frame = document.getElementById('protected-audience-ad');

  if (resolveToConfig && selectedAd instanceof FencedFrameConfig) {
    frame.config = selectedAd;
  } else {
    frame.src = selectedAd;
  }
};