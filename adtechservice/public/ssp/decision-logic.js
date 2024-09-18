
function scoreAd(adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {
  console.log(bid)
  return bid;
}

function reportResult(auctionConfig, browserSignals) {
  sendReportTo(auctionConfig.seller + '/reporting?report=result');

  return {
    success: true,
    signalsForWinner: { signalForWinner: 1 },
    reportUrl: auctionConfig.seller + '/report_seller',
  };
}


