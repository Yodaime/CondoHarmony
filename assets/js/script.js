
document.addEventListener("DOMContentLoaded", () => {
    const prices = {
        btc: document.getElementById("btc-price"),
        eth: document.getElementById("eth-price"),
        bnb: document.getElementById("bnb-price")
    };

    async function fetchPrices() {
        try {
            const res = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd");
            prices.btc.textContent = `$${res.data.bitcoin.usd.toFixed(2)}`;
            prices.eth.textContent = `$${res.data.ethereum.usd.toFixed(2)}`;
            prices.bnb.textContent = `$${res.data.binancecoin.usd.toFixed(2)}`;
        } catch (error) {
            console.error("Erro ao buscar preços:", error);
        }
    }

    fetchPrices();
    setInterval(fetchPrices, 30000);
});
