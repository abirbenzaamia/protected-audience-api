const interestGroup = {
    name: "test",

    // This should be the origin where this file will be hosted
    // This should be the same origin as biddingLogicUrl below
    ownerOrigin: "https://protected-audience-api-dsp.onrender.com",

    // This script must have the same origin as the owner directly above
    // An example of bidding logic is provided in the next section.
    biddingLogicUrl: "https://protected-audience-api-dsp.onrender.com/bidding-logic.js",
    joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
    // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
    // For this example there is only one ad which you will set up in Step 4.2
    ads: [{
        renderUrl: "https://protected-audience-api-dsp.onrender.com/ad.html",
    }],

};

document.addEventListener("DOMContentLoaded", (e) => {
    // An interest group expires in 30 days unless it is rejoined.
    // You can set a shorter expiration depending on your use case
    const kSecsPerDay = 3600;
    navigator.joinAdInterestGroup(interestGroup, kSecsPerDay * 24 * 30);
});
