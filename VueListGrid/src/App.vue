
<template class="app-canvas">
  <div>

    <div class="head">
      <!-- search  -->
      <label class="relative w-4/5">
        <input
          class="placeholder:italic placeholder:text-slate-400 bg-white cursor-pointer border border-slate-300 rounded-md m-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-4/5"
          v-model="search" placeholder="Search..." type="text" name="search" />
        <!-- search icon  -->
        <span class="absolute right-5 inset-y-0 flex items-center justify-end" @click="clearSearch">
          <img :src="iconClass" :alt="bankAlt" class="w-6 h-6" />
        </span>
      </label>

      <!-- view icon -->
      <label @click="toggleView"
        class="currentIcon absolute m-2 bg-white border border-slate-300 cursor-pointer rounded-md py-2 pl-3 pr-3">
        <img :src="viewIcon" :alt="iconAlt" @click="switchIcon" class="w-1/5 w-6 h-6" />
      </label>
    </div>

    <!-- dynamic component -->
    <component :is="activeViewComponent" :bankNames="searchBank"></component>

    <!-- footer  -->

    <div class="foot">
      <button type="button"
        class="inline-block rounded-full bg-sky-500 text-lg hover:bg-sky-700 px-6 pt-2.5 pb-2 self-center w-full">
        Continue
      </button>
    </div>
  </div>
</template>

<script>
import ListView from '../src/components/ListView.vue'
import GridView from '../src/components/GridView.vue'

export default {
  name: 'DynamicView',
  components: {
    ListView,
    GridView
  },
  data() {
    return {
      activeView: 'List',
      icon: true,
      search: '',
      bankNames: [],
      bankIcon: "../src/assets/icons/search.svg",
      crossicon: "../src/assets/icons/cross.svg",
      bankAlt: 'search icon',
      gridIcon: "../src/assets/icons/grid.svg",
      listIcon: "../src/assets/icons/list.svg",
      iconListAlt: 'list icon',
      iconGridAlt: 'grid icon'
    }
  },
  created() {
    fetch('../src/assets/data.json')
      .then(res => res.json())
      .then(data => {
        this.bankNames = data;
      });
  },
  computed: {
    activeViewComponent() {
      return this.activeView === 'Grid' ? ListView  : GridView ;
    },
    searchBank() {
      return this.bankNames.filter(bank => {
        return bank.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    viewIcon() {
      return this.icon ? this.listIcon  : this.gridIcon
    },
    iconAlt() {
      return this.icon ? this.iconGridAlt : this.iconListAlt
    },
    iconClass() {
      return this.search ? this.crossicon : this.bankIcon;
    }
  },
  methods: {
    toggleView() {
      this.activeView = this.activeView === 'Grid' ? 'List' : 'Grid';
    },
    switchIcon() {
      this.icon = !this.icon
    },
    clearSearch() {
      this.search = '';
    }
  }
}
</script>

<style scoped>
.grid-text {
  font-size: 10px;
}

.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
}

.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: #fff;
  padding: 10px;
}
</style>
