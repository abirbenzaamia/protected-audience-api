function scoreAd(adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {
    // You can use any parameters provided to this function to define a desirability score.
    // For this example the original bid value of each bid becomes the 
    // desirability score. The score of each ad is compared automatically and the ad 
    // with the highest score is returned by the Protected Audience auction.
    return bid;
}

function reportResult(auctionConfig, browserSignals) {
    // this can be any information you wish to pass to the winning bidder’s reportWin function
    return {};
}
