const $=s=>document.querySelector(s);
$('#formatJson')?.addEventListener('click',()=>{try{$('#jsonResult').textContent=JSON.stringify(JSON.parse($('#jsonInput').value),null,2)}catch(e){$('#jsonResult').textContent='Invalid JSON: '+e.message}});
$('#countText')?.addEventListener('input',e=>{const t=e.target.value.trim();const words=t? t.split(/\s+/).length:0;$('#countResult').textContent=`Characters: ${e.target.value.length} | Words: ${words} | Lines: ${e.target.value.split(/\n/).length}`});
$('#encodeBtn')?.addEventListener('click',()=>{try{$('#base64Result').textContent=btoa(unescape(encodeURIComponent($('#base64Input').value)))}catch(e){$('#base64Result').textContent=e.message}});
$('#decodeBtn')?.addEventListener('click',()=>{try{$('#base64Result').textContent=decodeURIComponent(escape(atob($('#base64Input').value)))}catch(e){$('#base64Result').textContent='Could not decode this value.'}});
$('#genPass')?.addEventListener('click',()=>{const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%';let out='';const arr=new Uint32Array(16);crypto.getRandomValues(arr);arr.forEach(n=>out+=chars[n%chars.length]);$('#passResult').textContent=out});
