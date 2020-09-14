<template>
  <div class="about">
    <h1>This is an about page : axios test </h1>
    <ol v-for="room in rooms" :key="room">
      <li>{{room.name}}</li>
      <li>{{room.desc}}</li>
      <li>{{room.lock}}</li>
      <li>{{room.pwd}}</li>
      <li>{{room.limit}}</li>
      <li>{{room.mem}}</li>
    </ol>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      rooms :[]
    }
  }
  ,mounted () {
    axios.get('http://localhost:3000/api/rooms')
      .then((r) => {
        this.rooms = r.data.rooms
        console.log(r)
      })
      .catch((e) => {
        console.error(e.message)
      })
  }  
}
</script>
