let RootContent = {
  props: ['id', 'top'],
  template: `
    <div class="content" :id="id" v-show="$root.active == id" :top="top" @scroll="update">
      <slot></slot>
    </div>
  `,
  methods: {
    update(){
      this.top = this.$el.scrollTop
    },
    preserve(){
      this.$el.scrollTop = this.top
    }
  }
}

let ArtPrev = {
  props: ['src'],
  template: `
    <img :src="src" @click="artClick">
  `,
  methods: {
    getID(){
      return this.src.replace(/^.*\/(.+)\.\w+$/, '$1')
    },
    artInit(){
      this.$root.winarts[this.getID()] = {
        body: this.src
      }
    },
    artClick(e){
      e.stopPropagation()
      let win = this.$root.winarts[this.getID()]
      if(win){
        win.ref.show = true
        bus.$emit('make-top', win.ref)
      }
      else {
        this.artInit()
      }
    }
  }
}
