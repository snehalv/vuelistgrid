<template>
    <div class="scroll-container app-canvas view scroll-container" ref="scrollContainer" @scroll="onScroll">
        <ul>
          <li class="m-3 p-3" v-for="(bankName, index) in bankNames" :key="index">
            <img src="../assets/icons/icon-bank-dummy.svg" class="inline w-8 h-8" alt="BankIcon">
             <span class="text-xs"> {{ bankName.name }} </span>
          </li>
        </ul>


        
      <div class="float-right" style="    width: 12px;
    height: 100%;
    position: fixed;
    top: 10%;
    right: 0;
    background-color: white !important;
    color: black !important;">
      <button v-for="(char, index) in characters" :key="index" @click="scrollTo(char)"
      class="cursor-pointer block bg-transparent border-transparent text-xs p-0 r-0 text-black">
        {{ char }}
      </button>
    </div>


      </div>




</template>

<script>

export default {
  data() {
    return {
      characters: [
        'A', 'B', 'C', 'D', 'E',
        'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y',
        'Z', '#'
      ]
    }
  },
  props: {
    bankNames: {
       type: Array,
        required: true
    }
    },
    methods: {
      onScroll(event) {
      const scrollContainer = event.target;
      const listItems = scrollContainer.querySelectorAll('li');
      let currentChar = '';
      for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        const char = listItem.textContent.charAt(0).toUpperCase();
        if (char !== currentChar) {
          currentChar = char;
          listItem.setAttribute('data-char', char);
        }
      }
    },
    scrollTo(char) {
      const scrollContainer = this.$refs.scrollContainer;
      const target = scrollContainer.querySelector(`li[data-char="${char}"]`);
      if (target) {
        scrollContainer.scrollTop = target.offsetTop;
      }
    },
    }
  }
</script>

<style scoped>
li[data-char]::before {
  content: attr(data-char);
  display: block;
  font-weight: bold;
  margin: 10px 0 5px;
   border-bottom: 1px solid #ccc;
}

.scroll-container {
  height: 80%;
  overflow-y: scroll;
  background-color: white;
}
</style>