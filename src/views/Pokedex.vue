<template>
  <div class="container">
    <div class="pokedex">
      <div class="pokemon">
        <img :src="image" alt="pokemon" />
        <ul class="list">
          <li>{{ name }}</li>
          <li v-for="(type, index) in types" :key="index">{{ type.type.name }}</li>
          <li>{{ height }}</li>
          <li>{{ weight }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getAPIData } from "../services/pokeAPI";

const FETCH_URL = "https://pokeapi.co/api/v2/pokemon/";

export default {
  name: "Pokedex",
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.fetchInfo();
  },
  data() {
    return {
      id: 1,
      name: "",
      image: "",
      height: "",
      weight: "",
      types: ""
    };
  },
  methods: {
    fetchInfo() {
      getAPIData(FETCH_URL + this.id)
        .then(data => {
          this.name = data.name;
          this.image = data.image;
          this.height = data.height;
          this.weight = data.weight;
          this.types = data.types;
        });
    }
  },
  watch: {
    $route(to) {
      this.id = Number(to.params.id);
      this.fetchInfo();
    }
  }
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/pokemonBG.jpg");
}

.pokedex {
  width: 741px;
  height: 652px;
  background-image: url("../assets/fondoPokedex.png");
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokemon {
  width: 312px;
  height: 190px;
  background-color: white;
  position: absolute;
  bottom: 0;
  transform: translate(26px, -102px);
  display: flex;
}
</style>
