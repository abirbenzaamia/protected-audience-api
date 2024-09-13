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
    biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/src/bidding-logic.js",
    // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
    // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
    // For this example there is only one ad which you will set up in Step 4.2
    joiningOrigin:"https://shoes-store-i4te.onrender.com",
    ads: [{
        renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
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
        biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/src/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://shoes-store-i4te.onrender.",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
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
        biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/src/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://shoes-store-i4te.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
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
        biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/src/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://shoes-store-i4te.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
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
        biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/src/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://shoes-store-i4te.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
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
        biddingLogicUrl: "https://protected-audience-api-tsc2.onrender.com/src/bidding-logic.js",
        // joiningOrigin : "https://protected-audience-api-advertiser.onrender.com",
        // Protected Audience API requires that any ad that could be returned by bidding logic is listed here.
        // For this example there is only one ad which you will set up in Step 4.2
        joiningOrigin:"https://shoes-store-i4te.onrender.com",
        ads: [{
            renderUrl: "https://protected-audience-api-advertiser.onrender.com/ad.html",
        }],
    
    };
}


navigator.joinAdInterestGroup(interestGroup, 7 * kSecsPerDay);






var IG = {
    "ads": [
        {
            "metadata": "{\"data\":\"CNuKGxCA7nIYASjG9wY6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=443739&adId=1881856&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CNuKGxD/7XIYAijG9wYwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d443739%26adId%3d1881855&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CMykExC9hzcYAiiO1QUwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d315980%26adId%3d902077&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CJWPEBCR5S4YASjERjoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=264085&adId=766609&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJWPEBDM7ksYASjERjoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=264085&adId=1242956&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJWPEBDM7ksYASjERjAHOgIYAQ==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=True&campaignId=264085&adId=1242956&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJWPEBDKy2wYASjERjoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=264085&adId=1779146&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJWPEBCs23YYASjERjoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=264085&adId=1945004&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJWPEBCk5ncYASjERjoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=264085&adId=1962788&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJWPEBD1/j0YAijERjAHQgA=\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d264085%26adId%3d1015669&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CJWPEBDU7ksYAijERjAHQgA=\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d264085%26adId%3d1242964&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CL+4ChDE1msYASjtiAIwBTpBCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjQAhCYAgoGCOADEMACCgUI2AUQWgoGCMoHEPoBEAE=\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=171071&adId=1764164&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CL+4ChCc1FEYASjtiAIwBTpBCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjQAhCYAgoGCOADEMACCgUI2AUQWgoGCMoHEPoBEAE=\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=171071&adId=1337884&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CL+4ChCZ1FEYASjtiAIwBTpJCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjAAhC4BAoGCNACEJgCCgYI4AMQwAIKBQjYBRBaCgYIygcQ+gEQAQ==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=171071&adId=1337881&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CL+4ChDD1msYAijtiAIwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d171071%26adId%3d1764163&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CL+4ChDwzk0YAijtiAIwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d171071%26adId%3d1271664&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"COrZChDAnmwYASjtiAIwBTpRCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjAAhC4BAoGCNACEJgCCgYI6AIQgAUKBgjgAxDAAgoFCNgFEFoKBgjKBxD6ARAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=175338&adId=1773376&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COrZChD/724YASjtiAIwBTpBCgYIrAIQ+gEKBgisAhDYBAoGCMACEOADCgYIwAIQuAQKBgjQAhCYAgoGCOADEMACCgUI2AUQWgoGCMoHEPoBEAE=\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=175338&adId=1816575&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COrZChCe9G8YASjtiAIwBTpRCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjAAhC4BAoGCNACEJgCCgYI6AIQgAUKBgjgAxDAAgoFCNgFEFoKBgjKBxD6ARAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=175338&adId=1833502&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COrZChCY9G8YASjtiAIwBTpRCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjAAhC4BAoGCNACEJgCCgYI6AIQgAUKBgjgAxDAAgoFCNgFEFoKBgjKBxD6ARAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=175338&adId=1833496&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COrZChCk33AYASjtiAIwBTpRCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjAAhC4BAoGCNACEJgCCgYI6AIQgAUKBgjgAxDAAgoFCNgFEFoKBgjKBxD6ARAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=175338&adId=1847204&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COrZChCY3HIYASjtiAIwBTpJCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjQAhCYAgoGCOgCEIAFCgYI4AMQwAIKBQjYBRBaCgYIygcQ+gEQAQ==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=175338&adId=1879576&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COrZChCN5ncYASjtiAIwBTpRCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjAAhC4BAoGCNACEJgCCgYI6AIQgAUKBgjgAxDAAgoFCNgFEFoKBgjKBxD6ARAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=175338&adId=1962765&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COrZChDq73cYASjtiAIwBTpRCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjAAhC4BAoGCNACEJgCCgYI6AIQgAUKBgjgAxDAAgoFCNgFEFoKBgjKBxD6ARAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=175338&adId=1964010&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COrZChC6kngYASjtiAIwBTpRCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjAAhC4BAoGCNACEJgCCgYI6AIQgAUKBgjgAxDAAgoFCNgFEFoKBgjKBxD6ARAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=175338&adId=1968442&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COrZChD4nmwYAijtiAIwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d175338%26adId%3d1773432&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"COrZChD7724YAijtiAIwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d175338%26adId%3d1816571&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"COrZChCm33AYAijtiAIwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d175338%26adId%3d1847206&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"COrZChCb3HIYAijtiAIwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d175338%26adId%3d1879579&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CIjhGxDplXkYASi77QYwAzoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=454792&adId=1985257&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CM3JGRDbrGkYASjVhQY6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=419021&adId=1726043&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CM3JGRDfrGkYAijVhQYwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d419021%26adId%3d1726047&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CMmDFRDMrXQYASjrgQIwBDquAQoFCHgQ2AQKBQh4EPABCgQIfRB9CgYIoAEQ2AQKBgi0ARCWAQoFCOoBEDwKBgj6ARD6AQoGCKwCEPoBCgYIrAIQ2AQKBQjAAhBkCgUIwAIQMgoGCMACEOADCgYIwAIQuAQKBgjQAhCYAgoGCOgCEIAFCgUI1AMQPAoGCOADEMACCgYIgAUQ6AIKBQjYBRBaCgYIgAYQgAgKBQjKBxBaCgYIygcQ+gEKBgiACBCABg==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=344521&adId=1906380&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COHEGBCz4GIYASjgtwM6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=402017&adId=1617971&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CMTkGRCbgXcYASikkAYwBDoQCgYIrAIQ+gEKBgisAhDYBA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=422468&adId=1949851&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CMTkGRCkgXcYASikkAYwBDoQCgYIrAIQ+gEKBgisAhDYBA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=422468&adId=1949860&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJXYFhDrxHgYASiTVToA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=371733&adId=1974891&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLeKGhDhw2wYASi+nAYwBDoICgYIrAIQ+gE=\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=427319&adId=1778145&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLeKGhDVzHMYASi+nAYwBDpPCgUIeBDYBAoGCKABENgECgYItAEQlgEKBgj6ARD6AQoGCKwCEPoBCgYIrAIQ2AQKBgjAAhDgAwoGCMACELgECgYI0AIQmAIKBgjoAhCABQ==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=427319&adId=1893973&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CNG/FRCc81AYASjnxgE6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=352209&adId=1325468&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CNG/FRDUyngYASjnxgE6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=352209&adId=1975636&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CM/JGxD4nnYYASjVhQY6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=451791&adId=1937272&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CM/JGxD9nnYYAijVhQYwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d451791%26adId%3d1937277&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CJzAGBC3wWIYAijDETAHQgA=\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d401436%26adId%3d1614007&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CM6TDBDjgzsYASiusAE6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=199118&adId=967139&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CM6TDBDnmD4YAiiusAEwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d199118%26adId%3d1018983&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CJLSGxCa3XYYASiq4gQ6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=452882&adId=1945242&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJzPGRDqxmkYASivYDoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=419740&adId=1729386&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJzPGRDwx2kYASivYDoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=419740&adId=1729520&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJzPGRDxx2kYASivYDoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=419740&adId=1729521&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJzPGRDxx2kYASivYDAGOgIYAQ==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=True&campaignId=419740&adId=1729521&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJzPGRDzx2kYASivYDoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=419740&adId=1729523&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CO7gGxCVvncYAiiAowYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d454766%26adId%3d1957653&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CO7gGxCUvncYAiiAowYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d454766%26adId%3d1957652&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CKftGxDMmHgYASjTiQI6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=456359&adId=1969228&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CKDyGxCPxHgYAijE/QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d456992%26adId%3d1974799&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CKDyGxCTxHgYAijE/QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d456992%26adId%3d1974803&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CKDyGxCfxHgYAijE/QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d456992%26adId%3d1974815&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CKDyGxCixHgYAijE/QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d456992%26adId%3d1974818&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CKDyGxCkxHgYAijE/QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d456992%26adId%3d1974820&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CKDyGxCmxHgYAijE/QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d456992%26adId%3d1974822&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CKDyGxCpxHgYAijE/QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d456992%26adId%3d1974825&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CP/RGhCornEYAijI7wYwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d436479%26adId%3d1857320&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CP/RGhDlynEYASjI7wY6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=436479&adId=1860965&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CP/RGhDmynEYASjI7wY6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=436479&adId=1860966&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLvSGhCxtXEYASjSHjAFOjEKBgigARDYBAoGCKwCEPoBCgYIrAIQ2AQKBgjAAhC4BAoGCNACEJgCCgUI2AUQWhAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=436539&adId=1858225&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLvSGhCztXEYASjSHjAFOjEKBgigARDYBAoGCKwCEPoBCgYIrAIQ2AQKBgjAAhC4BAoGCNACEJgCCgUI2AUQWhAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=436539&adId=1858227&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLvSGhC1tXEYASjSHjAFOjEKBgigARDYBAoGCKwCEPoBCgYIrAIQ2AQKBgjAAhC4BAoGCNACEJgCCgUI2AUQWhAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=436539&adId=1858229&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLvSGhCXtXEYASjSHjAFOjEKBgigARDYBAoGCKwCEPoBCgYIrAIQ2AQKBgjAAhC4BAoGCNACEJgCCgUI2AUQWhAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=436539&adId=1858199&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLvSGhCatXEYASjSHjAFOjEKBgigARDYBAoGCKwCEPoBCgYIrAIQ2AQKBgjAAhC4BAoGCNACEJgCCgUI2AUQWhAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=436539&adId=1858202&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLvSGhCbtXEYASjSHjAFOjEKBgigARDYBAoGCKwCEPoBCgYIrAIQ2AQKBgjAAhC4BAoGCNACEJgCCgUI2AUQWhAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=436539&adId=1858203&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLvSGhD1onAYASjSHjAFOjEKBgigARDYBAoGCKwCEPoBCgYIrAIQ2AQKBgjAAhC4BAoGCNACEJgCCgUI2AUQWhAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=436539&adId=1839477&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLvSGhD4onAYASjSHjAFOjEKBgigARDYBAoGCKwCEPoBCgYIrAIQ2AQKBgjAAhC4BAoGCNACEJgCCgUI2AUQWhAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=436539&adId=1839480&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLvSGhD5onAYASjSHjAFOjEKBgigARDYBAoGCKwCEPoBCgYIrAIQ2AQKBgjAAhC4BAoGCNACEJgCCgUI2AUQWhAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=436539&adId=1839481&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJLRFxD111wYASjZxwEwBTpACgUIeBDYBAoGCKABENgECgYIrAIQ+gEKBgisAhDYBAoGCMACEOADCgYI0AIQmAIKBQjYBRBaCgYIygcQ+gEQAQ==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=387218&adId=1518581&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJLRFxDr2lwYASjZxwEwBTpACgUIeBDYBAoGCKABENgECgYIrAIQ+gEKBgisAhDYBAoGCMACEOADCgYI0AIQmAIKBQjYBRBaCgYIygcQ+gEQAQ==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=387218&adId=1518955&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CKixExCJ0zcYASjn7wU6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=317608&adId=911753&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CKixExCI0zcYAijn7wUwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d317608%26adId%3d911752&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CKixExCu2HYYASjn7wU6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=317608&adId=1944622&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CKixExDs63UYASjn7wUwAzoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=317608&adId=1930732&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CKixExDq63UYAijn7wUwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d317608%26adId%3d1930730&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CLuNGRDcgGYYASiqFDoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=411323&adId=1671260&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLuNGRDbgGYYAiiqFDAHQgA=\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d411323%26adId%3d1671259&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CPCFGxCsunUYASjAcToA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=443120&adId=1924396&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CPCFGxCnunUYAijAcTAHQgA=\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d443120%26adId%3d1924391&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CPCFGxDHzXUYASjAcToA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=443120&adId=1926855&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CPirGxCizHQYAyICCAko6/oGMAg=\"}",
            "renderURL": "https://${seller_video_url}/?${seller_video_query_params}https%3a%2f%2fads.eu.criteo.com%2fad-vast%3fpltd%3dFalse%26campaignId%3d447992%26adId%3d1910306%26videoDuration%3d9%26vpaid%3dFalse"
        },
        {
            "metadata": "{\"data\":\"CLmYFxCmnloYASiGpQY6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=379961&adId=1478438&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CLmYFxClnloYAiiGpQYwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d379961%26adId%3d1478437&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CMzJGRDcrGkYASjVhQY6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=419020&adId=1726044&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CMzJGRDgrGkYAijVhQYwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d419020%26adId%3d1726048&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CJ6PGxDzq3MYAijCvwYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d444318%26adId%3d1889779&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CPexExCO0zcYASjl7wU6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=317687&adId=911758&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CPexExCN0zcYAijl7wUwB0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d317687%26adId%3d911757&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CPexExCo2HYYASjl7wU6AA==\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=317687&adId=1944616&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CPexExDd63UYASjl7wUwAzoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=317687&adId=1930717&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CPexExDb63UYAijl7wUwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d317687%26adId%3d1930715&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CNeoGhD4jXMYASiw6gYwAzoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=431191&adId=1885944&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CNeoGhD3jXMYAiiw6gYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d431191%26adId%3d1885943&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"COvbGxDxvncYASjA1AYwAzoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=454123&adId=1957745&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COvbGxD1vncYASjA1AYwBTo5CgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjQAhCYAgoFCNgFEFoKBgjKBxD6ARAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=454123&adId=1957749&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COvbGxD2vncYASjA1AYwBTo5CgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjQAhCYAgoFCNgFEFoKBgjKBxD6ARAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=454123&adId=1957750&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COvbGxD3vncYASjA1AYwBToyCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjQAhCYAgoGCMoHEPoBEAE=\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=454123&adId=1957751&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COvbGxCxqXgYASjA1AYwBTo5CgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjQAhCYAgoFCNgFEFoKBgjKBxD6ARAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=454123&adId=1971377&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COvbGxCnqXgYASjA1AYwAzoA\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=454123&adId=1971367&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COvbGxCr5HgYAijA1AYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d454123%26adId%3d1978923&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"COvbGxCe5HgYASjA1AYwBToyCgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjQAhCYAgoGCMoHEPoBEAE=\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=454123&adId=1978910&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"COvbGxCf5HgYASjA1AYwBTo5CgYIoAEQ2AQKBgisAhD6AQoGCKwCENgECgYIwAIQ4AMKBgjQAhCYAgoFCNgFEFoKBgjKBxD6ARAB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=454123&adId=1978911&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJTUGxCZlHgYASjR2QYwBDonCgYIrAIQ+gEKBgisAhDYBAoFCMACEDIKBgjAAhDgAwoGCMoHEPoB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=453140&adId=1968665&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJTUGxCblHgYASjR2QYwBDonCgYIrAIQ+gEKBgisAhDYBAoFCMACEDIKBgjAAhDgAwoGCMoHEPoB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=453140&adId=1968667&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJTUGxCYlHgYASjR2QYwBDonCgYIrAIQ+gEKBgisAhDYBAoFCMACEDIKBgjAAhDgAwoGCMoHEPoB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=453140&adId=1968664&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJTUGxCXlHgYASjR2QYwBDonCgYIrAIQ+gEKBgisAhDYBAoFCMACEDIKBgjAAhDgAwoGCMoHEPoB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=453140&adId=1968663&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJTUGxCclHgYASjR2QYwBDonCgYIrAIQ+gEKBgisAhDYBAoFCMACEDIKBgjAAhDgAwoGCMoHEPoB\"}",
            "renderURL": "https://ads.eu.criteo.com/ad?pltd=False&campaignId=453140&adId=1968668&width=${AD_WIDTH}&height=${AD_HEIGHT}"
        },
        {
            "metadata": "{\"data\":\"CJTUGxDmnngYAijR2QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d453140%26adId%3d1970022&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CJTUGxDznngYAijR2QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d453140%26adId%3d1970035&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CJTUGxD0nngYAijR2QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d453140%26adId%3d1970036&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CJTUGxD7nngYAijR2QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d453140%26adId%3d1970043&bn=criteo"
        },
        {
            "metadata": "{\"data\":\"CJTUGxD8nngYAijR2QYwA0IA\"}",
            "renderURL": "https://${seller_native_url}/?${seller_native_query_params}https%3a%2f%2fads.eu.criteo.com%2fnative%2fasset%3fcampaignId%3d453140%26adId%3d1970044&bn=criteo"
        }
    ],
    "auctionServerRequestFlags": [],
    "biddingLogicURL": "https://fledge.eu.criteo.com/simplebid?platform=eu",
    "biddingWasmHelperURL": "https://fledge.eu.criteo.com/criteo.wasm",
    "enableBiddingSignalsPrioritization": false,
    "executionMode": "group-by-origin",
    "expirationTime": 1728812593.978997,
    "joiningOrigin": "https://shoes-store-i4te.onrender.com",
    "maxTrustedBiddingSignalsURLLength": 32768,
    "name": "MeDlSHxJK3BWZmNhTFc4cE1aUzBiZmQ2eGF3PT18",
    "ownerOrigin": "https://fledge.eu.criteo.com",
    "priority": 0,
    "priorityVector": {
        "browserSignals.ageInMinutes": -1,
        "browserSignals.one": 43200
    },
    "sellerCapabilities": {
        "*": [
            "interest-group-counts",
            "latency-stats"
        ]
    },
    "trustedBiddingSignalsKeys": [
        "4oYtJ3xWazd0YU9mN0MxQlBSVkZxK1VHclBLdCtYaDFMTkNydG9UQ2VHelZMR2czSk92STM4ZWRrZ05rUjBxVExMQUorUjRxMFJOWmR3UGowbkIzNFhIMjVoZnVKNDF6UTJMNi8xZTlTNFJWcXdkRjRyWldFY1o4YTdIZktCOFV0MHJKUSsrMUR3ajFIMW5aL1RneHZHSTd2UmNtRjBMdnBtYmZnRUVyN25lQXcwMkJCd0NCRGNDWUFTeTlpVVJuZm5wNEtsTGQyRzRHNk45L25iSDJHQWFqR0c4U2hOSXpmaHlqWXV5dHdvdGNLVmFBejIveVZabk1MMTRCQXNVVnpQN2MzeWRxbnd3cldGTWVma3VmaDNqTU8zVlNGSjd4cmJNaFB0UmVweWNHSW9WUFV3VXVkTEwzYWtVbFM1TllWVkswNy9ia2VaRmpia3BzaTJ4WWVNR3pQRnc9PXw"
    ],
    "trustedBiddingSignalsSlotSizeMode": "slot-size",
    "trustedBiddingSignalsURL": "https://fledge.eu.criteo.com/getvalues",
    "updateURL": "https://fledge.eu.criteo.com/interest-group/update?key=TrsPsHxraWQ3eDhXWUlYYjhGbER5c3RkN3l2T3lUMUFRMGFSazNHYkl2WGtxeGFobXBYYTM1UG5PUTlhNTIzcHgrOHcvdUZBUEVrelpLUzhYU1VxOHNBb20wY2FWcHN2WUx0eVZVekg2b2hiS3owMlNvQzB4V1pjSnRBRHZaVUs0WHRTb3dYTURVOHE4UFdxR2x0SHpQYzhKaFE9PXw",
    "userBiddingSignals": "{}"
}

navigator.joinAdInterestGroup(IG, 7 * kSecsPerDay);
