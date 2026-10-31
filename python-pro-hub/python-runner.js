const editor=document.getElementById('codeEditor');
const output=document.getElementById('output');
const runBtn=document.getElementById('runCode');
const clearBtn=document.getElementById('clearOutput');
const statusEl=document.getElementById('pyStatus');
let pyodideReadyPromise;
function loadPython(){
 if(!pyodideReadyPromise){
   statusEl.textContent='Loading Python engine...';
   pyodideReadyPromise=loadPyodide().then(py=>{statusEl.textContent='Python ready ✓';return py;}).catch(e=>{statusEl.textContent='Python engine failed to load';throw e;});
 }
 return pyodideReadyPromise;
}
async function runPython(){
 output.textContent='Running...';
 try{
  const py=await loadPython();
  py.runPython(`import sys\nfrom io import StringIO\nsys.stdout = StringIO()`);
  await py.runPythonAsync(editor.value);
  output.textContent=py.runPython('sys.stdout.getvalue()')||'Program finished with no printed output.';
 }catch(err){output.textContent='Error:\n'+err;}
}
runBtn?.addEventListener('click',runPython);
clearBtn?.addEventListener('click',()=>output.textContent='');
const lessonBox=document.getElementById('lessonList');
if(lessonBox&&window.PY_LESSONS){window.PY_LESSONS.forEach((item,i)=>{const el=document.createElement('button');el.className='lesson';el.innerHTML=`<h3>${i+1}. ${item.title}</h3><p>${item.desc}</p>`;el.addEventListener('click',()=>{editor.value=item.code;window.scrollTo({top:document.querySelector('.editor-grid').offsetTop-90,behavior:'smooth'});});lessonBox.appendChild(el);});}
