p=function(){
  t.innerHTML+='$ <span id=i contenteditable></span>'
  i.focus()
}
p()

onkeydown=function(e){
  e.key=='Enter'&&(
    e.preventDefault(),
    I=i.innerHTML,
    t.removeChild(i),
    t.innerHTML+=I+'\n',
    I.match(/^\s*$/)?
      (t.innerHTML+='\n')
    :I.match(/^\s*cd($|\s)/)?
      I.match(/cd +\S+/)&&I.match(/cd +(\S+)/)[1]&&(location.href='https://github.com/molarmanful/'+I.match(/cd +(\S+)/)[1])
    :I.match(/^\s*clear($|\s)/)?
      (t.innerHTML='')
    :I.match(/^\s*help($|\s)/)?
      (t.innerHTML+=h.innerHTML+'\n')
    :I.match(/^\s*echo($|\s)/)?
      I.match(/echo +.+/)&&I.match(/echo +(.+)/)[1]&&(t.innerText+=I.match(/echo +(.+)/)[1]+'\n')
    :(t.innerHTML+="Command not found. Type 'help' for a list of commands.\n"),
    p()
  )
}

i.onblur=function(){i.focus()}
