$(_=>{
  let cl = x=>{
    [['.l','L'],['.lv','Lv'],['.lp','Lp'],['.lpv','Lpv'],['.lpV','LpV']].map(a=>{
      $('.B').eq(x).find(a[0]).addClass(a[1])
    })
  }

  $('body').fadeIn(1000, _=>{

    $('.C').fullpage({
      licenseKey: '0BD90318-FEBE4A0A-AB35E65A-31E4D65D',
      sectionSelector:'.B',
      verticalCentered: false,
      scrollingSpeed: 500,
      onLeave: (x,y)=>{
        $('body').attr('class', 'b'+y.index)
        $('.L,.Lv,.Lp,.Lpv,.LpV').removeClass('L Lv Lp Lpv LpV')
        let occ = 0
        let ord = '□□□□□'.replace(/./g, a=> occ++ == y.index ? '■' : a)
        $('#side').css({
          color: $('.B').eq(y.index).css('color')
        }).html(ord.replace(/(?=.)/g, '<br>'))
      },
      afterLoad: (x,y)=>{
        cl(y.index)
      }
    })

    cl(0)
    $('#side').css('color', $('.B').eq(0).css('color'))

  })

  $('.su').click(_=> $.fn.fullpage.moveSectionUp())
  $('.sd').click(_=> $.fn.fullpage.moveSectionDown())

  $(window).on('beforeunload', _=>scrollTo(0,0))
})
