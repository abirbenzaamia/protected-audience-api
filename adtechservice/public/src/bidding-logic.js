
function generateBid(interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals, browserSignals) {
    return {

        // Free form object provided to Seller's scoreAd(...) function
        // alongside the bid that can be used to inform the
        // desirability score
        ad: {},

        // bid amount
        bid: 1,

        // This URL needs to match one of the URLs in the ads object provided to the interestGroup object during the call to joinAdInterestGroup.
        render: interestGroup.ads[0].renderUrl,
    };
}

// While this walkthrough won’t cover reporting, the current implementation of Protected Audience in Chrome will warn if reportWin() is not defined.
function reportWin(auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
    // UNIMPLEMENTED
}
