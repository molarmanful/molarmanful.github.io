p=function(){
  t.innerHTML+='[guest@molarmanful.github.io]$ <span id=i onblur=i.focus() contenteditable></span>'
  i.focus()
}
p()

onkeydown=function(e){
  e.which==13&&(
    e.preventDefault(),
    I=i.innerHTML,
    t.removeChild(i),
    t.innerHTML+=I+'\n',
    I.match(/^ *$/)?
      0
    :I.match(/^ *clear($| )/)?
      (t.innerHTML='')
    :I.match(/^ *info($| )/)?
      (t.innerHTML+=h.innerHTML+'\n')
    :I.match(/^ *whoami($| )/)?
      (t.innerHTML+=a.innerHTML+'\n')
    :(t.innerHTML+="Command not found. Type 'info' for a list of commands.\n"),
    p()
  )
}
