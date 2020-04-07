class Drag {
  constructor(){
    this.drag = null
    this.x = 0
    this.y = 0

    $('body').on('mousedown', '.dragclick', e=>{
      this.drag = $($(e.target).parents('.drag')[0])
      console.log(e.target)
      this.x = e.offsetX
      this.y = e.offsetY
    }).mousemove(e=>{
      this.drag && this.drag.offset({top: e.pageY - this.y, left: e.pageX - this.x})
    }).mouseup(_=>{
      this.drag = null
    })
  }
}

$(_=>{
  new Drag()
  $('body').removeClass('fade')
})

$('.side a').click(e=>{
  e.preventDefault()
  $('.content').removeClass('active')
  $(e.target.href.replace(/^.*#/, '#')).addClass('active')
  $('.head span').text(e.target.innerText)
})
