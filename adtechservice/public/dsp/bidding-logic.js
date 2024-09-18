
function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    const [testAd] = interestGroup.ads;
    console.log(testAd)

  return {
    bid: 1, // Arbitrary bid value
    ad: {
      adName: testAd?.metadata?.adName,
    },
    render: testAd?.renderURL,
  };
}

// While this walkthrough won’t cover reporting, the current implementation of Protected Audience in Chrome will warn if reportWin() is not defined.
function reportWin(auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
    console.log('report win');
}
