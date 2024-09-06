// // Get the current url to set IGs based on the page visited 

// const url = window.location.href;
 
// console.log(url)

// // Define my audiences

// // General audience 
// const interestGroup = {
//     name: "general",

//     // This should be the origin where this file will be hosted
//     // This should be the same origin as biddingLogicUrl below
//     owner: "https://protected-audience-api-dsp.onrender.com",

//     // This script must have the same origin as the owner directly above
//     // An example of bidding logic is provided in the next section.
//     biddingLogicUrl: "https://protected-audience-api-dsp.onrender.com/bidding-logic.js",
//     // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
//     // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
//     // For this example there is only one ad which you will set up in Step 4.2
//     joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
//     ads: [{
//         renderUrl: "https://protected-audience-api-dsp.onrender.com/ad.html",
//     }],

// };

// // ****************************************************************** //
// // Boots audience
// if (url === 'https://protected-audience-api-advertiser.onrender.com/boots'){
//     const interestGroup = {
//         name: "boots",
    
//         // This should be the origin where this file will be hosted
//         // This should be the same origin as biddingLogicUrl below
//         owner: "https://protected-audience-api-dsp.onrender.com",
    
//         // This script must have the same origin as the owner directly above
//         // An example of bidding logic is provided in the next section.
//         biddingLogicUrl: "https://protected-audience-api-dsp.onrender.com/bidding-logic.js",
//         // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
//         // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
//         // For this example there is only one ad which you will set up in Step 4.2
//         joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
//         ads: [{
//             renderUrl: "https://protected-audience-api-dsp.onrender.com/ad.html",
//         }],
    
//     };
// }

// // ****************************************************************** //
// // Heels audience
// if (url === 'https://protected-audience-api-advertiser.onrender.com/heels'){
//     const interestGroup = {
//         name: "heels",
    
//         // This should be the origin where this file will be hosted
//         // This should be the same origin as biddingLogicUrl below
//         owner: "https://protected-audience-api-dsp.onrender.com",
    
//         // This script must have the same origin as the owner directly above
//         // An example of bidding logic is provided in the next section.
//         biddingLogicUrl: "https://protected-audience-api-dsp.onrender.com/bidding-logic.js",
//         // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
//         // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
//         // For this example there is only one ad which you will set up in Step 4.2
//         joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
//         ads: [{
//             renderUrl: "https://protected-audience-api-dsp.onrender.com/ad.html",
//         }],
    
//     };
// }

// // ****************************************************************** //
// // Loafers audience
// if (url === 'https://protected-audience-api-advertiser.onrender.com/loafers'){
//     const interestGroup = {
//         name: "loafers",
    
//         // This should be the origin where this file will be hosted
//         // This should be the same origin as biddingLogicUrl below
//         owner: "https://protected-audience-api-dsp.onrender.com",
    
//         // This script must have the same origin as the owner directly above
//         // An example of bidding logic is provided in the next section.
//         biddingLogicUrl: "https://protected-audience-api-dsp.onrender.com/bidding-logic.js",
//         // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
//         // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
//         // For this example there is only one ad which you will set up in Step 4.2
//         joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
//         ads: [{
//             renderUrl: "https://protected-audience-api-dsp.onrender.com/ad.html",
//         }],
    
//     };
// }

// // ****************************************************************** //
// // Sandals audience
// if (url === 'https://protected-audience-api-advertiser.onrender.com/sandals'){
//     const interestGroup = {
//         name: "sandals",
    
//         // This should be the origin where this file will be hosted
//         // This should be the same origin as biddingLogicUrl below
//         owner: "https://protected-audience-api-dsp.onrender.com",
    
//         // This script must have the same origin as the owner directly above
//         // An example of bidding logic is provided in the next section.
//         biddingLogicUrl: "https://protected-audience-api-dsp.onrender.com/bidding-logic.js",
//         // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
//         // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
//         // For this example there is only one ad which you will set up in Step 4.2
//         joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
//         ads: [{
//             renderUrl: "https://protected-audience-api-dsp.onrender.com/ad.html",
//         }],
    
//     };
// }

// // ****************************************************************** //
// // Sneakers audience 
// if (url === 'https://protected-audience-api-advertiser.onrender.com/sneakers'){
//     const interestGroup = {
//         name: "sneakers",
    
//         // This should be the origin where this file will be hosted
//         // This should be the same origin as biddingLogicUrl below
//         owner: "https://protected-audience-api-dsp.onrender.com",
    
//         // This script must have the same origin as the owner directly above
//         // An example of bidding logic is provided in the next section.
//         biddingLogicUrl: "https://protected-audience-api-dsp.onrender.com/bidding-logic.js",
//         // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
//         // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
//         // For this example there is only one ad which you will set up in Step 4.2
//         joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
//         ads: [{
//             renderUrl: "https://protected-audience-api-dsp.onrender.com/ad.html",
//         }],
    
//     };
// }


// const kSecsPerDay = 3600;
// navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);



// Get the current url to set IGs based on the page visited 

const url = window.location.href;
 
console.log(url);

// Define my audiences

// General audience 
var interestGroup = {
    name: "general",

    // This should be the origin where this file will be hosted
    // This should be the same origin as biddingLogicUrl below
    owner: "https://protected-audience-api-advertiser.onrender.com",

    // This script must have the same origin as the owner directly above
    // An example of bidding logic is provided in the next section.
    biddingLogicUrl: "https://protected-audience-api-advertiser.onrender.com/bidding-logic.js",
    // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
    // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
    // For this example there is only one ad which you will set up in Step 4.2
    joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
    ads: [{
        renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
    }],

};

// ****************************************************************** //
// Boots audience
if (url === 'https://protected-audience-api-advertiser.onrender.com/boots'){
    interestGroup = {
        name: "boots",
    
        // This should be the origin where this file will be hosted
        // This should be the same origin as biddingLogicUrl below
        owner: "https://protected-audience-api-advertiser.onrender.com",
    
        // This script must have the same origin as the owner directly above
        // An example of bidding logic is provided in the next section.
        biddingLogicUrl: "https://protected-audience-api-advertiser.onrender.com/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
}

// ****************************************************************** //
// Heels audience
if (url === 'https://protected-audience-api-advertiser.onrender.com/heels'){
        interestGroup = {
        name: "heels",
    
        // This should be the origin where this file will be hosted
        // This should be the same origin as biddingLogicUrl below
        owner: "https://protected-audience-api-advertiser.onrender.com",
    
        // This script must have the same origin as the owner directly above
        // An example of bidding logic is provided in the next section.
        biddingLogicUrl: "https://protected-audience-api-advertiser.onrender.com/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
}

// ****************************************************************** //
// Loafers audience
if (url === 'https://protected-audience-api-advertiser.onrender.com/loafers'){
    interestGroup = {
        name: "loafers",
    
        // This should be the origin where this file will be hosted
        // This should be the same origin as biddingLogicUrl below
        owner: "https://protected-audience-api-advertiser.onrender.com",
    
        // This script must have the same origin as the owner directly above
        // An example of bidding logic is provided in the next section.
        biddingLogicUrl: "https://protected-audience-api-advertiser.onrender.com/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
}

// ****************************************************************** //
// Sandals audience
if (url === 'https://protected-audience-api-advertiser.onrender.com/sandals'){
    interestGroup = {
        name: "sandals",
    
        // This should be the origin where this file will be hosted
        // This should be the same origin as biddingLogicUrl below
        owner: "https://protected-audience-api-advertiser.onrender.com",
    
        // This script must have the same origin as the owner directly above
        // An example of bidding logic is provided in the next section.
        biddingLogicUrl: "https://protected-audience-api-advertiser.onrender.com/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
}

// ****************************************************************** //
// Sneakers audience 
if (url === 'https://protected-audience-api-advertiser.onrender.com/sneakers'){
    interestGroup = {
        name: "sneakers",
    
        // This should be the origin where this file will be hosted
        // This should be the same origin as biddingLogicUrl below
        owner: "https://protected-audience-api-advertiser.onrender.com",
    
        // This script must have the same origin as the owner directly above
        // An example of bidding logic is provided in the next section.
        biddingLogicUrl: "https://protected-audience-api-advertiser.onrender.com/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://protected-audience-api-advertiser.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
}


const kSecsPerDay = 3600;
navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);



