// const url = window.location.href;
 
// console.log(url);

// // Define my audiences

// // General audience 
// var interestGroup = {
//     name: "general",

//     // This should be the origin where this file will be hosted
//     // This should be the same origin as biddingLogicUrl below
//     owner: "https://protected-audience-api-tsc2.onrender.com",

//     // This script must have the same origin as the owner directly above
//     // An example of bidding logic is provided in the next section.
//     biddingLogicURL: "https://protected-audience-api-tsc2.onrender.com/dsp/bidding-logic.js",
//     // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
//     // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
//     // For this example there is only one ad which you will set up in Step 4.2
//     joiningOrigin:"https://shoes-store-i4te.onrender.com",
//     ads: [
//         {
//           renderUrl: 'https://protected-audience-api-tsc2.onrender.com/ads/default-ad.html',
//           metadata: {
//             adName: 'default-ad',
//           },
//         },
//       ],
// };


// const kSecsPerDay = 3600;
// navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);

const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;

const joinInterestGroup = async () => {
  const interestGroup = {
    owner: "https://protected-audience-api-tsc2.onrender.com",
    name: 'shoes',
    biddingLogicUrl: 'https://protected-audience-api-tsc2.onrender.com/dsp/bidding-logic.js',
    ads: [
      {
        renderUrl: 'https://protected-audience-api-tsc2.onrender.com/ads/default-ad.html',
        metadata: {
          adName: 'default-ad',
        },
        buyerReportingId: 'brid123',
        buyerAndSellerReportingId: 'bsrid123',
        selectableBuyerAndSellerReportingIds: ['sbsrid123', 'sbsrid456', 'sbsrid789'],
      },
    ],
  };

  navigator.joinAdInterestGroup(interestGroup, ONE_WEEK_IN_SECONDS);
};

joinInterestGroup();