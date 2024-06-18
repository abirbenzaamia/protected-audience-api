



export default function AdAuction() {
    const script = document.createElement("script");
    script.src = "https://protected-audience-api-ssp.onrender.com/run-ad-auction.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();
  
    document.body.appendChild(script);

}