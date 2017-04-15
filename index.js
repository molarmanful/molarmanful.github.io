root={}
path=[]
get=function(o,p){
  return p.filter(x=>x).reduce((a,b)=>a&&a[b],o)
}
set=function(o,p,v){
  p=p.filter(x=>x)
  p.length>1?
    (o[p[0]]=set(o[p[0]]||{},p.slice(1),v))
  :(o[p[0]]=v)
  return o
}
unset=function(o,p){
  p=p.filter(x=>x)
  p.length>1?
    (o[p[0]]=unset(o[p[0]]||{},p.slice(1)))
  :delete o[p[0]]
  return o
}

p=function(){
  t.innerHTML+='guest@molarmanful:'+(path.length?path.slice(-1):'~')+'$ <span id=i onblur=i.focus() contenteditable></span>'
  i.focus()
}
p()

onkeydown=i.onkeyup=function(e){
  e.key=='Enter'&&(
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
    :I.match(/^ *ls($| )/)?
      I.match(/ls +((\w|-|\/)+)/)?
        typeof get(root,path.concat(I.match(/ls +((\w|-|\/)+)/)[1].split('/')))=='object'?
          (t.innerHTML+=Object.keys(get(root,path.concat(I.match(/ls +((\w|-|\/)+)/)[1].split('/')))).join('\n')+'\n')
        :(t.innerHTML+='Missing proper directory path.\n')
      :(t.innerHTML+=Object.keys(get(root,path)).join('\n')+'\n')
    :I.match(/^ *mkdir($| )/)?
      I.match(/mkdir +((\w|-|\/)+)/)?
        (root=set(root,path.concat(I.match(/mkdir +((\w|-|\/)+)/)[1].split('/')),{}))
      :(t.innerHTML+='Missing proper path.\n')
    :I.match(/^ *touch($| )/)?
      I.match(/touch +((\w|-|\/)+)/)?
        I.match(/touch +((\w|-|\/)+)/)&&get(root,path.concat(I.match(/touch +((\w|-|\/)+)/)[1].split('/')))?
          (t.innerHTML+='File exists.\n')
        :(root=set(root,path.concat(I.match(/touch +((\w|-|\/)+)/)[1].split('/')),''))
      :(t.innerHTML+='Missing proper path.\n')
    :I.match(/^ *rm($| )/)?
      I.match(/rm +((\w|-|\/)+)/)&&get(root,path.concat(I.match(/rm +((\w|-|\/)+)/)[1].split('/')))!=[]._?
        (root=unset(root,path.concat(I.match(/rm +((\w|-|\/)+)/)[1].split('/'))))
      :(t.innerHTML+='Missing proper path.\n')
    :I.match(/^ *cd($| )/)?
      I.match(/cd +((\w|-|\/)+)/)?
        I.match(/cd +((\w|-|\/)+)/)&&typeof get(root,path.concat(I.match(/cd +((\w|-|\/)+)/)[1].split('/')))=='object'?
          (path=path.concat(I.match(/cd +((\w|-|\/)+)/)[1].split('/')))
        :(t.innerHTML+='Missing proper directory path.\n')
      :I.match(/cd +\.\./)?
        path.pop()
      :(path=[])
    :I.match(/^ *cat($| )/)?
      I.match(/cat +((\w|-|\/)+)/)&&typeof get(root,path.concat(I.match(/cat +((\w|-|\/)+)/)[1].split('/')))=='string'?
        (t.innerHTML+=get(root,path.concat(I.match(/cat +((\w|-|\/)+)/)[1].split('/')))+'\n')
      :(t.innerHTML+='Missing proper file path.\n')
    :I.match(/^ *write($| )/)?
      I.match(/write +((\w|-|\/)+)/)&&typeof get(root,path.concat(I.match(/write +((\w|-|\/)+)/)[1].split('/')))=='string'?
        (root=set(root,path.concat(I.match(/write +((\w|-|\/)+)/)[1].split('/')),I.match(/write +((\w|-|\/)+) +(.+)/)[3]||''))
      :(t.innerHTML+='Missing proper file path.\n')
    :(t.innerHTML+="Command not found. Type 'info' for a list of commands.\n"),
    p()
  )
}
