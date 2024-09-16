const url = window.location.href;
 
console.log(url);

// Define my audiences

// General audience 
var interestGroup = {
    name: "general",

    // This should be the origin where this file will be hosted
    // This should be the same origin as biddingLogicUrl below
    owner: "https://protected-audience-api-tsc2.onrender.com",

    // This script must have the same origin as the owner directly above
    // An example of bidding logic is provided in the next section.
    biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/dsp/bidding-logic.js",
    // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
    // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
    // For this example there is only one ad which you will set up in Step 4.2
    joiningOrigin:"https://shoes-store-i4te.onrender.com",
    ads: [{
        renderUrl: "https://protected-audience-api-tsc2.onrender.com/public/ads/ad.html",
    }],

};


const kSecsPerDay = 3600;
navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);



// Get the current url to set IGs based on the page visited 
 
console.log(url)

// Define my audiences

// ****************************************************************** //
// Boots audience
if (url === 'https://shoes-store-i4te.onrender.com/boots'){
    interestGroup = {
        name: "boots",
    
        // This should be the origin where this file will be hosted
        // This should be the same origin as biddingLogicUrl below
        owner: "https://protected-audience-api-tsc2.onrender.com",
    
        // This script must have the same origin as the owner directly above
        // An example of bidding logic is provided in the next section.
        biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/dsp/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://shoes-store-i4te.onrender.",
        ads: [{
            renderUrl: "https://protected-audience-api-tsc2.onrender.com/public/ads/ad.html",
        }],
    
    };
    navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);
}

// ****************************************************************** //
// Heels audience
if (url === 'https://shoes-store-i4te.onrender.com/heels'){
    interestGroup = {
        name: "heels",
    
        // This should be the origin where this file will be hosted
        // This should be the same origin as biddingLogicUrl below
        owner: "https://protected-audience-api-tsc2.onrender.com",
    
        // This script must have the same origin as the owner directly above
        // An example of bidding logic is provided in the next section.
        biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/dsp/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://shoes-store-i4te.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
    navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);
}

// ****************************************************************** //
// Loafers audience
if (url === 'https://shoes-store-i4te.onrender.com/loafers'){
    interestGroup = {
        name: "loafers",
    
        // This should be the origin where this file will be hosted
        // This should be the same origin as biddingLogicUrl below
        owner: "https://protected-audience-api-tsc2.onrender.com",
    
        // This script must have the same origin as the owner directly above
        // An example of bidding logic is provided in the next section.
        biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/dsp/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://shoes-store-i4te.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
    navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);
}

// ****************************************************************** //
// Sandals audience
if (url === 'https://shoes-store-i4te.onrender.com/sandals'){
    interestGroup = {
        name: "sandals",
    
        // This should be the origin where this file will be hosted
        // This should be the same origin as biddingLogicUrl below
        owner: "https://protected-audience-api-tsc2.onrender.com",
    
        // This script must have the same origin as the owner directly above
        // An example of bidding logic is provided in the next section.
        biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/dsp/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://shoes-store-i4te.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
    navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);
}

// ****************************************************************** //
// Sneakers audience 
if (url === 'https://shoes-store-i4te.onrender.com/sneakers'){
    interestGroup = {
        name: "sneakers",
    
        // This should be the origin where this file will be hosted
        // This should be the same origin as biddingLogicUrl below
        owner: "https://protected-audience-api-tsc2.onrender.com",
    
        // This script must have the same origin as the owner directly above
        // An example of bidding logic is provided in the next section.
        biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/dsp/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://shoes-store-i4te.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/",
        }],
    
    };
    navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);
}

