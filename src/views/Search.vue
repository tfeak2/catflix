<template>
    <div class="center">
        <div class="form">
            <h1>Search</h1>
            <input type="text" v-model="query">
            <table>
                <tr v-for="movie in (movies.filter(element => element.name.toLowerCase().includes(query)))" :key="movie.name">
                    <td>{{movie.name.substring(0,28)}}</td> <td>{{movie.year}} </td> <td>{{movie.category}} </td><td><a v-if="!selectedMovies.some(element => element.name == movie.name)" @click="addMovieToQueue(movie)" >Add</a></td>
                </tr>
            </table>
            <div style="border-bottom: 2px solid white; width:100%; height:1px;"></div>
            <p>Queued Movies</p>
            <div class="container">
                <table>
                    <tr v-for="movie in selectedMovies" :key="movie.name"><td>{{movie.name.substring(0,18)}} </td><td><a @click="removeMovieFromQueue(movie)">Remove</a></td></tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import movieData from "../data/movies.json";
export default {
    data(){
        return {
            query: "",
            movies: movieData,
            selectedMovies: [],
        }
    },
    beforeMount(){
        if(localStorage.movies == null){
            localStorage.movies = JSON.stringify(this.movies);
        }
        this.profileName = JSON.parse(localStorage.profile).username;
        this.loadQueue();
    },
    methods: {
        loadQueue(){
            this.selectedMovies = JSON.parse(localStorage.queue);
        },
        saveQueue(){
         localStorage.queue = JSON.stringify(this.selectedMovies);
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
    }


}
</script>

<style scoped>
    .center{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
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
      flex-direction: row;
      justify-content: left;
      align-items: center;
    }
    a{
      color: #96CDFB;
      cursor: pointer;
    }
</style>