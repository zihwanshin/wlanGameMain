<template>
    <div class="inputBox">
        <input type="text" v-model="memCount" v-on:keyup.enter="setMemCount" placeholder="게임을 할 인원수를 입력해주세요">
        <button v-on:click = "setMemCount">enter</button>
        <span v-show="showGame">
            <p>{{ memCount }}명으로 게임을 시작합니다.</p>
            <router-link to="/page03/game" v-on:click='goGame'> Game Start </router-link> 
            </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            memCount:'',
            showGame:false

        }
    },

    methods :{
        setMemCount(){
        if(this.memCount !== ""){ //this->app
            var memData = this.memCount && this.memCount.trim();
            localStorage.setItem(memData,memData);
            this.showGame=true;
            
        }
        },
        clearInput(){
            this.memCount='';
            this.showGame=false;
        },
        goGame(){
            this.clearInput();
        }
    }
}
</script>
<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background:white;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size : 0.9rem;
}

</style>