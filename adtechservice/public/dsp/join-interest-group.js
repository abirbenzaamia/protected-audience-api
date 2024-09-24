// const url = window.location.href;
 
// console.log(url);

// // Define my audience


// const kSecsPerDay = 3600;
// navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);

const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;

const joinInterestGroup = async () => {
  const interestGroup = {
    owner: "https://www.greensandbox.fr",
    name: 'shoes',
    biddingLogicUrl: 'https://www.greensandbox.fr/dsp/bidding-logic.js',
    ads: [
      {
        renderUrl: 'https://www.greensandbox.fr/ads/default-ad.html',
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


for (let index = 0; index < 200; index++) {
  
  joinInterestGroup();
}
