class Currency {
    constructor(){
        this.url = 
        "https://api.freecurrencyapi.com/v1/latest?apikey=x7bzX1VEJDCVEB3cRdKFRLWeU7i2YldwemYPc06B&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();
        const exchangeResult = amount * result.data[secondCurrency];
        return exchangeResult;
    } 
}