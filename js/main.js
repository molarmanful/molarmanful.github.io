Vue.use(window['vue-masonry-plugin'].VueMasonryPlugin)
Vue.use(VueLazyload, {
  observer: true
})

let vm = new Vue({
  el: '#app',
  components: {WinDrag, WinProj, WinArt, MasonGrid, MasonGridItem, RootContent, ProjPrev, ArtPrev},
  data: {
    show: false,
    tabs: {
      home: 'HOME',
      about: 'ABOUT',
      proj: 'PROJECTS',
      art: 'ARTWORK',
      links: 'LINKS'
    },
    active: 'home',
    hello: 'Hello.',
    scroll: 0,
    winprojs: {},
    winarts: {}
  },
  methods: {
    sideClick(e){
      this.active = e.target.name
      this.scroll = 0
      this.$nextTick(_=>{
        this.$redrawVueMasonry()
      })
    }
  },
  mounted(){
    this.show = true
  }
})

let helloop = _=>{
  vm.hello = 'Hello.'

  setTimeout(_=>{
    vm.hello = ['HĦḢḨ', 'eęëẽ', 'l1łĺ', 'l1łĺ', 'oøòṏ', '.?!,'].map(a=> a[Math.random() * a.length | 0]).join``
    setTimeout(_=>{
      helloop()
    }, 50)
  }, Math.random() * 900.5 + 100 | 0)
}
helloop()
