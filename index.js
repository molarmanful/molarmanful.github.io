function u(x) {
  r=new XMLHttpRequest()
  r.open("GET",x)
  return r.status==0||r.status==200
}
p=function(){
  t.innerHTML+='$ <span id=i onblur=i.focus() contenteditable></span>'
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
      (t.innerHTML+='')
    :I.match(/^\s*repo($|\s)/)?
      I.match(/repo +\S+/)&&I.match(/repo +(\S+)/)[1]?
        (
          U=I.match(/repo +(\S+)/)[1],
          u(U)?(location.href=U):(t.innerHTML+='Repo not found.\n')
        )
      :(t.innerHTML+="Missing argument NAME.\n")
    :I.match(/^\s*clear($|\s)/)?
      (t.innerHTML='')
    :I.match(/^\s*test($|\s)/)?
      (t.innerHTML+='')
    :I.match(/^\s*help($|\s)/)?
      (t.innerHTML+=h.innerHTML+'\n')
    :I.match(/^\s*echo($|\s)/)?
      I.match(/echo +.+/)&&I.match(/echo +(.+)/)[1]&&(t.innerText+=I.match(/echo +(.+)/)[1]+'\n')
    :(t.innerHTML+="Command not found. Type 'help' for a list of commands.\n"),
    p()
  )
}
