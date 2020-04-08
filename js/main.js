class Drag {
  constructor(){
    this.drag = null
    this.x = 0
    this.y = 0

    $('body').on('mousedown', '.dragclick', e=>{
      this.drag = $($(e.target).parents('.drag')[0])
      this.x = e.offsetX
      this.y = e.offsetY
      $('.container').append(this.drag)
    }).mousemove(e=>{
      this.drag && this.drag.offset({top: e.pageY - this.y, left: e.pageX - this.x})
    }).mouseup(_=>{
      this.drag = null
    })
  }
}

let grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.size',
  gutter: '.gutter',
  percentPosition: true,
  initLayout: false
})

let rand = s=> s[Math.random() * s.length | 0]
helloop = _=>{
  setTimeout(_=>{
    $('#hello').text(['HĦḢḨ', 'eęëẽ', 'l1łĺ', 'l1łĺ', 'oøòṏ', '.?!,'].map(rand).join``)
    setTimeout(_=>{
      $('#hello').text('Hello.')
      helloop()
    }, 50)
  }, Math.random() * 900.5 + 100 | 0)
}

$(_=>{
  new Drag()
  helloop()
  $('body').removeClass('fade')
})

$('#root .side a').click(e=>{
  e.preventDefault()
  $('#root .content').removeClass('active')
  $(e.target.href.replace(/^.*#/, '#')).addClass('active')
  grid.masonry()
  $('#root .head span').text(e.target.innerText)
})

$('#art img').click(e=>{
  let data = decodeURI(e.target.src.replace(/^.*\/(.+)\.\w+$/, '$1')).split`_`
  let match = $(`.winimg[name="${data.join`_`}"]`)[0]
  if(match){
    $('.container').append(match)
  } else {
    $('.container').append(`
      <div class="winimg drag" name="${data.join`_`}">
        <div class="head dragclick">
          ${`<i>${data[0]}</i>&nbsp;- ${data[1]}, ${data[2]}`}
        </div>
        <div class="close">&#9746;</div>
        <div class="body">${e.target.outerHTML}</div>
      </div>
    `)

    $('.winimg .close').click(e=>{
      $(e.target).parent().remove()
    })
  }
})
