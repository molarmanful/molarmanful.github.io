let WinDrag = {
  data(){
    return {
      drag: false,
      x: 'no',
      y: 'no',
      x1: 0,
      x2: 0
    }
  },
  template: `
    <div class="drag" :style="dragPos()" @click="makeTop()">
      <div class="head dragclick" @mousedown="dragDown" @mousemove="dragMove">
        <slot name="title"></slot>
      </div>
      <slot></slot>
    </div>
  `,
  methods: {
    dragPos(){
      if(!isNaN(this.x) && !isNaN(this.y)){
        return {
          top: this.y + 'px',
          left: this.x + 'px'
        }
      }
      return {}
    },
    makeTop(){
      document.getElementById('app').appendChild(this.$el)
    },
    dragDown(e){
      this.drag = true
      this.x1 = e.clientX
      this.y1 = e.clientY
      this.makeTop()
    },
    dragMove(e){
      if(this.drag){
        this.x = this.$el.offsetLeft - this.x1 + e.clientX
        this.y = this.$el.offsetTop - this.y1 + e.clientY
        this.x1 = e.clientX
        this.y1 = e.clientY
      }
    },
    dragUp(){
      this.drag = false
    }
  },
  mounted(){
    this.x = this.$el.offsetLeft
    this.y = this.$el.offsetTop
    addEventListener('mouseup', this.dragUp)
    this.makeTop()
    bus.$on('make-top', ref=>{
      if(this.$el == ref.$el){
        console.log('asdf')
        this.makeTop()
      }
    })
  }
}

let WinArt = {
  data(){
    return {
      show: true,
    }
  },
  props: ['id', 'data'],
  components: {WinDrag},
  template: `
    <win-drag class="winimg art drag" v-show="show" :name="id">
      <template v-slot:title>
        <i>{{ idform()[0] }}</i> - {{ idform()[1] }}, {{ idform()[2] }}
      </template>
      <div class="close" @click="close">&#9746;</div>
      <div class="body"><img :src="data.body"></div>
    </win-drag>
  `,
  methods: {
    close(){
      this.show = false
    },
    idform(){
      return this.id.split`_`
    }
  },
  mounted(){
    this.$root.winarts[this.id].ref = this
  }
}
