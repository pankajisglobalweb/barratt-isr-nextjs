class PropertyPlansLibrary {
    #plans = []
    #bedrooms = [];
    #prices=new Set();

    constructor(plans) {
        this.#plans = (plans)?[...plans]:[];
        if(this.#plans.length > 0){
            let bedroomsSet = new Set();
            let pricesSet = new Set();
            for (const planItem of this.#plans) {
                if (!isNaN(Number(planItem?.bedrooms))){
                    bedroomsSet.add((planItem?.bedrooms == 0)?"Studio":planItem?.bedrooms)
                }
                if(planItem?.price){
                    let price = isNaN(Number(planItem?.price)) ? 0 : Number(planItem?.price);
                    pricesSet.add(price);
                }
            }
            let arrayForm = Array.from(bedroomsSet);
            this.#bedrooms = arrayForm.sort(this.sortASet);
            this.#prices = new Set([...pricesSet]);
        }
        return this;        
    }

    sortASet(a, b) {
        if (a === "Studio") return -1;
        if (b === "Studio") return 1;
        const numA = isNaN(Number(a)) ? a : Number(a);
        const numB = isNaN(Number(b)) ? b : Number(b);

        if (numA < numB) return -1;
        if (numA > numB) return 1;
        return 0;
    }

    getBeds() {
        if (this.#bedrooms.length > 0) {
            return this.#bedrooms;
        } else {
            return [];
        }

    }

    getBedsInFormat(){
        let bedrooms = "";
        if(this.#bedrooms.length === 0){
            return "";
        }else if(this.#bedrooms.length < 2){
            bedrooms = this.#bedrooms.join(" & ");
            return bedrooms;
        }else {
            let beds = [...this.#bedrooms];
            let last = beds.pop();
            bedrooms = beds.join(",");
            bedrooms+=" & "+last;
            return bedrooms;
        }
    }

    #numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let amt = parts.join(".");
        return (amt !== NaN) ? amt : '';
    }

    getPricesInFormat(){
        if(this.getMinPrice() > 0 && this.getMaxPrices() > 0){
            let minPrice = this.#numberWithCommas(this.getMinPrice());
            let maxPrice = this.#numberWithCommas(this.getMaxPrices());
            if(minPrice!=="" && maxPrice!==""){
                return `£${minPrice} - £${maxPrice}`;
            }else if(minPrice!==""){
                return `£${minPrice}`;
            }else if(maxPrice!==""){
                return `£${maxPrice}`;
            }else{
                return "";
            }
        }else{
            return "";
        }
        
    }

    getMinPrice(){
        const min = Math.min(...this.#prices);
        return (min!== Infinity && min!== -Infinity)?min:"";
    }
    getMaxPrices(){
        const max = Math.max(...this.#prices);
        return (max!== Infinity && max!== -Infinity)?max:"";
    }
}

export default PropertyPlansLibrary;