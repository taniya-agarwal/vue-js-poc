<template>
  <div>
    Register Page
    <form v-on:submit.prevent="onSubmit">
      <p>
        Name:
        <input type="text" v-model="name" placeholer="name" />
      </p>
      <p>
        Address:
        <input type="text" v-model="address" placeholer="address" />
      </p>
      <button>Submit</button>
    </form>
    <p>{{ this.count }}</p>
    <button @click="this.increment">+</button>
    <button @click="this.decrement">-</button>
    <button @click="getStorenames">get</button>

    <p>Registerd user: {{this.username}}, {{this.age}}</p>
    <p>to go back to home page, click the link below</p>
    <router-link :to="{ name: 'home' }">Home page</router-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      address: ""
    };
  },
  computed: {
    ...mapState(["username", "age", "count"]),
  },
  // PS: mapMutations, mapActions have to be inside methods, and mapState, mapGetters have to be inside a computed property.
  methods: {
    ...mapMutations(["updateName", "increment", "decrement"]),
    getStorenames() {
      alert( this.$store.getters.getUsername)
    },
    onSubmit() {
      console.log("details", this.name, this.address),
        this.updateName(this.name),
        (this.name = ""),
        (this.address = "");
    }
  }
};
</script>

