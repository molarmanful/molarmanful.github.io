$(_=>{

  $('.B').each(_=>{
    $('#side').append('<a class="nav">□</a>')
  })
  $('.nav').eq(0).html('■')
  $('#side').css('color', $('.B').eq(0).css('color'))

  $('body').fadeIn(1000, _=>{

    $('.C').fullpage({
      licenseKey: '0BD90318-FEBE4A0A-AB35E65A-31E4D65D',
      sectionSelector:'.B',
      verticalCentered: false,
      onLeave: (x,y)=>{
        $('body').attr('class', 'b' + y.index)
        $('#side').css({
          color: $('.B').eq(y.index).css('color')
        })
        $('.nav').html('□').eq(y.index).html('■')
      }
    })

  })

  $('.su').click(_=> $.fn.fullpage.moveSectionUp())
  $('.sd').click(_=> $.fn.fullpage.moveSectionDown())
  $('.nav').click(e=> $.fn.fullpage.moveTo([...e.currentTarget.parentElement.children].indexOf(e.currentTarget)+1))
  $(window).on('beforeunload', _=> scrollTo(0,0))
})
