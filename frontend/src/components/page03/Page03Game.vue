<template>
    <div>
        <router-link to='/'>Home</router-link>
        <h3>{{chosung}}</h3>
        <span v-if="input">
            <input type="text" v-model="chosungInput" v-on:keyup.enter="setChosung" placeholder="게임을 시작할 초성을 입력해 주세요(두 글자)">
        <button v-on:click = "setChsoung">입력</button>
        </span>
        <span v-show="GameIn">
            <h2>{{player}}의 차례</h2>
            <h3>{{result}}</h3>
            <span>{{dictionary}}</span>
            <span>
            <input type="text" v-model="answer" v-on:keyup.enter="setAnswer" placeholder="초성과 맞는 글자 입력">
            <button v-on:click = "setAnswer">입력</button>
            </span>
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            chosung:'',
            player:'player<1>',
            result : '',
            dictionary :'',
            input:true,
            GameIn:false
        }
    },
    methods : {
        setChosung(){
            var chosung2 = this.chosungInput && this.chosungInput.trim();
            if(chosung2!=='' && chosung2.length ===2 ){
                this.chosung = chosung2;
                this.input = !this.input;
                this.GameIn = !this.GameIn;
                this.chosungInput='';
            }
        },
        startGame(){
            
        },
        setAnswer(){

        }

    }
}
</script>