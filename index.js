p=function(){
  t.innerHTML+='$ <span id=i onblur=i.focus() contenteditable></span>'
  i.focus()
}
p()

onkeydown=i.onkeyup=function(e){
  e.key=='Enter'&&(
    e.preventDefault(),
    I=i.innerHTML,
    t.removeChild(i),
    t.innerHTML+=I+'\n',
    I.match(/^\s*$/)?
      (t.innerHTML+='')
    :I.match(/^\s*clear($|\s)/)?
      (t.innerHTML='')
    :I.match(/^\s*test($|\s)/)?
      (t.innerHTML+='')
    :I.match(/^\s*help($|\s)/)?
      (t.innerHTML+=h.innerHTML+'\n')
    :I.match(/^\s*about($|\s)/)?
      (t.innerHTML+=a.innerHTML+'\n')
    :(t.innerHTML+="Command not found. Type 'help' for a list of commands.\n"),
    p()
  )
}
