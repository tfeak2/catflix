<template>
  <div class="center">
    <div class="form">
        <p>Hello, {{profileName}}</p>
        <p>Horror</p>
        <div class="container">
          <div v-for="movie in horrorMovies" :key="movie.name" @click="addMovieToQueue(movie)">
            <Media :image="movie.image" :name="movie.name.substring(0,10)" :year="movie.year" />
          </div>
        </div>
        <p>Drama</p>
        <div class="container">
          <div v-for="movie in dramaMovies" :key="movie.name" @click="addMovieToQueue(movie)">
            <Media :image="movie.image" :name="movie.name.substring(0,10)" :year="movie.year" />
          </div>
        </div>
        <p>Queued Movies</p>
        <div class="container">
          <table>
            <tr v-for="movie in selectedMovies" :key="movie.name"><td>{{movie.name.substring(0,28)}} </td><td><a @click="removeMovieFromQueue(movie)">Remove</a></td></tr>
          </table>
        </div>
        
    </div>
  </div>
</template>
<script>
//get movie data from json
import movieData from "../data/movies.json";
//import media component for displaying movies
import Media from "../components/Media"
export default {
  components: {
      Media
  },
  data(){
    //important page data
    return {
      movies: movieData,
      horrorMovies: {},
      dramaMovies: {},
      selectedMovies: [],
      profileName: "Guest",
    }
  },
  methods: {
    //add movie object to array of selected movie
    addMovieToQueue(movie){
      //return if the movie is already in selected movies
      if(this.selectedMovies.find(element => element==movie)) return;
      //add movie to array
      this.selectedMovies.push(movie);
      //save array to local storage
      this.saveQueue();
    },
    //remove movie from slected movies array
    removeMovieFromQueue(movie){
      //set array to itself with movie filtered out
      this.selectedMovies = this.selectedMovies.filter(element => element != movie);
      //save array to local storage
      this.saveQueue();
    },
    saveQueue(){
      //convert selected movies into string and save to local storage
      localStorage.queue = JSON.stringify(this.selectedMovies);
    },
    loadQueue(){
      //get selected movies from local storage and convert back into object
      this.selectedMovies = JSON.parse(localStorage.queue);
    }
  },
  //runs on page load
  beforeMount() {
    //if local storage does not have movies stored load from json file
    if(localStorage.horror == null){
      this.horrorMovies = this.movies.filter(movie => movie.category == "Horror");
      localStorage.horror = JSON.stringify(this.movies.filter(movie => movie.category == "Horror"));
    }else{
      //if local storage does have movies stored load it to local variable
      this.horrorMovies = JSON.parse(localStorage.horror);
    }
    
    if(localStorage.drama == null){
      this.dramaMovies = this.movies.filter(movie => movie.category == "Action");
      localStorage.drama = JSON.stringify(this.movies.filter(movie => movie.category == "Action"));
    }else{
      this.dramaMovies = JSON.parse(localStorage.drama);
    }

    //get the users name from local storage
    this.profileName = JSON.parse(localStorage.profile).username;
    //load selected movies from local storage
    this.loadQueue();
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
      flex-direction: row;
      justify-content: left;
      align-items: center;
    }
    a{
      color: #96CDFB;
      cursor: pointer;
    }
    
</style>