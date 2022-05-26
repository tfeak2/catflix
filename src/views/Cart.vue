<template>
    <div class="center">
        <div class="form">
            <p>Current Queue</p>
            <div class="container">
                <table>
                    <tr v-for="movie in selectedMovies" :key="movie.name"><td>{{movie.name.substring(0,38)}} </td><td><a @click="removeMovieFromQueue(movie)">Remove</a></td><td>${{movie.price}}</td></tr>
                    <tr><td>Total: ${{totalPrice}}</td></tr>
                </table>
            </div>
            <p>Payment Details</p>
            <div class="container">
                <label>Account Number</label>
                <input type="number" v-model="paymentDetails.number">
                <label>CVV</label>
                <input type="number" v-model="paymentDetails.cvv">
                <label>Expiry Date</label>
                <input type="month" v-model="paymentDetails.expiryDate">
                <label>Save Details <input type="checkbox" v-model="saveDetails"></label>
                <button @click="buttonClick">Confirm</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    setup() {
        
    },
    data(){
        return {
            selectedMovies: [],
            totalPrice: 0,
            paymentDetails: {
                number: "",
                cvv: "",
                expiryDate: Date,
            },
            profile: {},
            saveDetails: true,
        }
    },
    beforeMount(){
        console.log(JSON.parse(localStorage.profile));
        this.loadQueue();
        this.profile = JSON.parse(localStorage.profile);
        if(this.profile.paymentDetails != null){
            this.paymentDetails = this.profile.paymentDetails;
        }
    },
    methods: {
        //calculte total price of movies in queue
        calculateTotal(){
            //set total to intialy zero
            var total = 0;
            //loop though all selected movies adding rice to total
            this.selectedMovies.forEach(element => {
                total += element.price;
            });
            //save total to local variable
            this.totalPrice = total;
        },
        buttonClick(){
            //return if save details chebox was false
            if(!this.saveDetails)return;
            //add payent details to local profile variable
            this.profile.paymentDetails = this.paymentDetails;
            //convet the profil data to a string and save to local storage
            localStorage.profile = JSON.stringify(this.profile);
            //empty the current movie queue
            this.selectedMovies = {};
            
        },
        loadQueue(){
            this.selectedMovies = JSON.parse(localStorage.queue);
            this.calculateTotal();
        },
        saveQueue(){
            localStorage.queue = JSON.stringify(this.selectedMovies);
            this.calculateTotal();
        },
        addMovieToQueue(movie){
            if(this.selectedMovies.find(element => element==movie)) return;
            this.selectedMovies.push(movie);
            this.saveQueue();
        },
        removeMovieFromQueue(movie){
            this.selectedMovies = this.selectedMovies.filter(element => element != movie);
            this.saveQueue();
        },
    },
}
</script>

<style scoped>
    .center{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
    }
    .form{
        width: 30em;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
    }
    .container{
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
    }
    a{
      color: #96CDFB;
      cursor: pointer;
    }
    button{
        padding: 0.5em;
        margin-top: 2em;
        font-size: 0.8em;
        font-weight: medium;
        background-color: #96CDFB;
        border: none;
        border-radius: 0.5em;
        color: #1e1e2e;
        font-family: 'JetBrains Mono';
        font-weight: medium;
        cursor: pointer;
    }
    input{
        font-family: 'JetBrains Mono';
        font-size: 0.8em;
        font-weight: medium;
        width: 25em;
        height: 2em;
        border: none;
        background-color: #575268;
        border-radius: 0.5em;
        color: white;
    }
</style>