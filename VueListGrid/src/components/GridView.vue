<template>
    
    <div class="app-canvas view">
      <!-- TODO v-if="bankName.enabled" values is not true -->
    <div class="inline-block gridClass m-4 p-4" v-for="bankName in bankNames" :key="bankName.id">
        <img src="../assets/icons/icon-bank-dummy.svg" class="inline w-11 h-11" alt="BankIcon">
         <div class="block grid-text break-words"> {{ bankName.name }}</div>
    </div>
  </div>
</template>

<script>
 
export default {
  props: {
    bankNames: {
       type: Array,
        required: true
    }
    }
  }

</script>


<style scoped>
.grid-text{
  font-size: 10px;
}
.gridClass {
  width: 100px;
  word-wrap: break-word;
}
</style>
