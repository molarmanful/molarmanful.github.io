$(_=>{

  let cl = x=>{
    [['.l','L'],['.lv','Lv'],['.lp','Lp'],['.lpv','Lpv'],['.lpV','LpV']].map(a=>{
      $('.B').eq(x).find(a[0]).addClass(a[1])
    })
  }

  $('body').fadeIn(1000,_=>{

    $.scrollify({
      section:'.B',
      updateSection:false,
      setHeights:false,
      scrollSpeed:500,
      updateHash:false,
      scrollbars:false,
      before:x=>{
        $('body').attr('class','b'+x)
        $('.L,.Lv,.Lp,.Lpv,.LpV').removeClass('L Lv Lp Lpv LpV')
        let ord='□□□□□'
        ord[x]='■'
        $('#side').css({color:$('.B').eq(x).css('color')}).html(ord.replace(/(?=.)/g,'<br>'))
      },
      after:cl
    })

    cl(0)
    $('#side').css('color',$('.B').eq(0).css('color'))

  })

  $('.sd').click(_=>$.scrollify.next())
  $('.su').click(_=>$.scrollify.previous())

  $(window).on('beforeunload',_=>scrollTo(0,0))

})
