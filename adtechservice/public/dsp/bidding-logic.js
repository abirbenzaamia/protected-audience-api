
// function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
//     const [testAd] = interestGroup.ads;
//     console.log(testAd)

//   return {
//     bid: 1, // Arbitrary bid value
//     ad: {
//       adName: testAd?.metadata?.adName,
//     },
//     render: testAd?.renderURL,
//   };
// }

// // While this walkthrough won’t cover reporting, the current implementation of Protected Audience in Chrome will warn if reportWin() is not defined.
// function reportWin(auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
//     console.log('report win');
// }

function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
  const [testAd] = interestGroup.ads;
  // const { buyerReportingId, buyerAndSellerReportingId, selectableBuyerAndSellerReportingIds } = browserSignals;
  const [{ 
    buyerReportingId, 
    buyerAndSellerReportingId, 
    selectableBuyerAndSellerReportingIds 
  }] = interestGroup.ads

  console.log(
    `From generateBid - brid=${buyerReportingId}, bsrid=${buyerAndSellerReportingId}, sbsrid=${selectableBuyerAndSellerReportingIds}`
  );

  return {
    bid: 1, // Arbitrary bid value
    ad: {
      adName: testAd?.metadata?.adName,
    },
    render: testAd?.renderUrl,
    selectedBuyerAndSellerReportingId: 'sbsrid456',
  };
}

function reportWin(auctionSignals, perBuyerSignals, sellerSignals, browserSignals, directFromSellerSignals) {
  const { buyerReportingId, buyerAndSellerReportingId, selectedBuyerAndSellerReportingId } = browserSignals;
  console.log(
    `From reportWin - brid=${buyerReportingId}, bsrid=${buyerAndSellerReportingId}, sbsrid=${selectedBuyerAndSellerReportingId}`
  );
}