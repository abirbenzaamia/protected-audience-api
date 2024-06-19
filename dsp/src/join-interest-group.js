

const interestGroup = {
    name: "test",

    // This should be the origin where this file will be hosted
    // This should be the same origin as biddingLogicUrl below
    owner: "https://protected-audience-api-dsp.onrender.com",

    // This script must have the same origin as the owner directly above
    // An example of bidding logic is provided in the next section.
    biddingLogicUrl: "https://protected-audience-api-dsp.onrender.com/bidding-logic.js",
    // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
    // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
    // For this example there is only one ad which you will set up in Step 4.2
    joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
    ads: [{
        renderUrl: "https://protected-audience-api-dsp.onrender.com/ad.html",
    }],

};
const kSecsPerDay = 3600;
navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);



// const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;

// const joinInterestGroup = async (dspUrl) => {


//   navigator.joinAdInterestGroup(interestGroup, ONE_WEEK_IN_SECONDS);
// };