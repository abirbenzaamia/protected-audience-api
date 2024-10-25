
// function scoreAd(adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {
//   console.log(bid)
//   return bid;
// }

// function reportResult(auctionConfig, browserSignals) {
//   sendReportTo(auctionConfig.seller + '/reporting?report=result');

//   return {
//     success: true,
//     signalsForWinner: { signalForWinner: 1 },
//     reportUrl: auctionConfig.seller + '/report_seller',
//   };
// }


function scoreAd(adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {

  const { selectedBuyerAndSellerReportingId, buyerAndSellerReportingId } = browserSignals;
  console.log(`From scoreAd - bsrid=${buyerAndSellerReportingId}, sbsrid=${selectedBuyerAndSellerReportingId}`);
  
  return bid;
}

function reportResult(auctionConfig, browserSignals) {
  sendReportTo(auctionConfig.seller + '/reporting?report=result');
  const { selectedBuyerAndSellerReportingId, buyerAndSellerReportingId } = browserSignals;
  console.log(`From reportResult - bsrid=${buyerAndSellerReportingId}, sbsrid=${selectedBuyerAndSellerReportingId}`);

  return {
    success: true,
    signalsForWinner: { signalForWinner: 1 },
    reportUrl: auctionConfig.seller + '/report_seller',
  };
}


