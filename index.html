<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CivicSense Live</title>
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#0a1730">
<link rel="icon" href="icon-192.png">
<style>
:root{--bg:#0a1730;--card:#112447;--ink:#e8f1ff;--mute:#8ea3c7;--acc:#1de4d0;--line:#22386a}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,sans-serif;padding:14px}
h1{font-size:20px;margin:0 0 4px}.m{color:var(--mute);font-size:13px}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px;margin-top:12px}
.vw{position:relative;background:#000;border-radius:8px;overflow:hidden;min-height:180px}
video,canvas{width:100%;display:block}canvas{position:absolute;left:0;top:0}
button,select,input{font:inherit;border-radius:8px;border:1px solid var(--line);padding:9px 12px}
button,select{background:var(--acc);color:#04202a;font-weight:600}
button.alt{background:transparent;color:var(--ink)}
input{background:#0a1730;color:var(--ink);flex:1;min-width:0}
.row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:8px}
#wb{margin-top:8px;padding:10px 12px;border-radius:8px;background:#0a1730;border:1px solid var(--line);font-weight:700;font-size:16px;color:var(--mute)}
#wb.on{color:#ff8a8a;border-color:#ff5c5c}
#status{color:var(--acc);font-size:13px;margin-top:8px}
.v{display:flex;gap:10px;padding:10px 0;border-top:1px solid var(--line)}
.v img{width:112px;height:112px;object-fit:cover;border-radius:6px;flex:none}
.v small{display:block;color:var(--mute);margin-top:2px}
.pl{display:inline-block;background:#f5d742;color:#111;font-weight:700;padding:2px 8px;border-radius:4px;letter-spacing:1px}
.po{color:var(--acc);font-style:italic;margin-top:4px}
.thr{margin-top:4px;padding:6px 8px;border-radius:6px;background:#3a1420;border:1px solid #ff5c5c;color:#ffb3b3;font-weight:700}
.tag{font-size:11px;border:1px solid var(--acc);color:var(--acc);border-radius:10px;padding:1px 7px}
#toast{position:fixed;top:12px;left:50%;transform:translateX(-50%) translateY(-150%);transition:transform .3s;z-index:9999;background:#3a1420;border:1px solid #ff5c5c;color:#fff;border-radius:10px;padding:10px 14px;max-width:92vw;box-shadow:0 6px 24px rgba(0,0,0,.5);font-size:14px}
#toast.show{transform:translateX(-50%) translateY(0)}
.stats{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:8px}
.stats div{background:#0a1730;border:1px solid var(--line);border-radius:8px;padding:8px 4px;text-align:center}
.stats b{display:block;font-size:18px}
.stats span{font-size:11px;color:var(--mute)}
#map{height:260px;border-radius:8px;margin-top:8px;border:1px solid var(--line);background:#0a1730}
.rules{width:100%;border-collapse:collapse;font-size:12px;margin-top:6px;color:var(--mute)}
.rules td{padding:3px 4px;border-top:1px solid var(--line)}
.rules td:last-child{text-align:right;color:var(--ink);font-weight:600}
@media(max-width:480px){.stats{grid-template-columns:repeat(3,1fr)}}
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css">
</head><body>
<div style="max-width:640px;margin:auto">
<h1>CivicSense Live</h1>
<div class="m">Camera + AI + GPS. Runs fully on your phone.</div>
<div class="card">
 <div class="vw"><video id="v" playsinline muted></video><canvas id="o"></canvas></div>
 <div id="wb">Waste: none detected</div>
 <div class="row"><button id="start">Start camera</button><button class="alt" id="man">Report manually</button><button class="alt" id="addVeh">+ Vehicle</button>
 <label class="alt" style="font-weight:600;border:1px solid var(--line);border-radius:8px;padding:9px 12px;cursor:pointer">Upload photo / video<input type="file" id="up" accept="image/*,video/*" style="display:none"></label></div>
 <div class="row"><span class="m">Fine ₹</span>
  <select id="fine"><option value="auto" selected>Auto (rules)</option><option value="100">100</option><option value="200">200</option><option value="500">500</option></select>
  <input id="name" placeholder="Person name" value="Nivetha.S"></div>
 <div id="plateRow" style="display:none"><div class="row"><span class="m" id="vehLbl">🚗 Vehicle found</span></div>
  <div class="row"><input id="vname" placeholder="Vehicle name / model (e.g. Honda Activa)"><input id="plate" placeholder="Plate number (if camera cannot read)"></div></div>
 <div class="row"><span class="m">Waste type</span>
  <select id="wtype" style="flex:1;background:#0a1730;color:var(--ink)">
   <option value="">Auto (AI detects)</option><option>Plastic bottle</option><option>Plastic cover / bag</option>
   <option>Paper waste</option><option>Food waste</option><option>Disposable cup</option><option>Glass bottle</option>
   <option>Garbage bag (dumping)</option><option>Cigarette / small waste</option></select></div>
 <div class="row"><span class="m">Camera ID</span><input id="camid" value="CAM-01 (Main Road)"></div>
 <div id="status">Loading AI models (first time takes a few seconds)...</div>
 <div id="live" class="m" style="margin-top:4px"></div>
</div>
<div class="card"><b>Authority Dashboard</b>
 <div class="stats">
  <div><b id="sT">0</b><span>Total</span></div>
  <div><b id="sP">0</b><span>Pending</span></div>
  <div><b id="sV">0</b><span>Verified</span></div>
  <div><b id="sR">0</b><span>Resolved</span></div>
  <div><b id="sF">₹0</b><span>Fines</span></div>
 </div>
 <div id="map"></div>
 <div class="m" style="margin-top:6px">GIS map: red = Pending, yellow = Verified, green = Resolved.</div>
 <details style="margin-top:6px"><summary class="m">Fine rules (local authority)</summary>
 <table class="rules">
  <tr><td>Littering – food waste</td><td>₹200</td></tr>
  <tr><td>Littering – plastic / glass waste</td><td>₹500</td></tr>
  <tr><td>Littering from vehicle</td><td>₹1000</td></tr>
  <tr><td>Garbage dumping (3+ items or bag/bin)</td><td>₹2000</td></tr>
  <tr><td>Repeat vehicle (same number plate)</td><td>×2</td></tr>
 </table></details>
</div>
<div class="card"><b>Violation records</b><div id="log"><div class="m">None yet.</div></div>
 <div class="row"><button class="alt" id="clr">Clear records</button></div></div>
<div class="card"><b>About CivicSense</b>
<p class="m">An AI-powered smart city platform that detects pollution and littering in public areas. Camera images are analysed by computer vision, GPS records the exact location, and number plate recognition helps identify responsible vehicles. Photo evidence is stored with time and location. Every incident needs human verification before a fine is final.</p>
<p class="m">Demo covers: AI detection, GPS location, number plate reading, evidence capture, fine records, verify and resolve steps, and awareness messages. Full platform adds CCTV and drone feeds, GIS hotspot prediction, cleanup task assignment, before-and-after checks, an authority dashboard and citizen complaints.</p></div>
</div>
<div id="toast"></div>

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.17.0"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.2.3"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2.1.1"></script>
<script src="https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>
<script>
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
const $=id=>document.getElementById(id),v=$('v'),o=$('o'),cx=o.getContext('2d');
const COCO_WASTE=['bottle','cup','bowl','banana','apple','orange','sandwich','wine glass','donut','cake','pizza','hot dog','carrot','broccoli','fork','knife','spoon'];
const VEH=['car','motorcycle','bus','truck','bicycle'];
const VNAME={car:'Car',motorcycle:'Bike / Motorcycle',bus:'Bus',truck:'Truck / Lorry',bicycle:'Bicycle'};
let lastVeh=null;   // {txt,t}
const VSUB=[['motor scooter','Scooter','motorcycle'],['moped','Moped','motorcycle'],['mountain bike','Bicycle','bicycle'],['bicycle','Bicycle','bicycle'],
 ['sports car','Sports car','car'],['convertible','Convertible car','car'],['jeep','Jeep / SUV','car'],['limousine','Limousine','car'],['minivan','Minivan','car'],
 ['cab','Taxi','car'],['beach wagon','Station wagon','car'],['racer','Race car','car'],['police van','Police van','truck'],['ambulance','Ambulance','truck'],
 ['pickup','Pickup truck','truck'],['garbage truck','Garbage truck','truck'],['tow truck','Tow truck','truck'],['trailer truck','Trailer lorry','truck'],
 ['moving van','Van','truck'],['fire engine','Fire engine','truck'],['tractor','Tractor','truck'],['school bus','School bus','bus'],['minibus','Minibus','bus'],
 ['trolleybus','Bus','bus'],['recreational vehicle','Camper van','truck'],['go-kart','Go-kart','car']];
function vsub(r){for(const x of r){const n=x.className.toLowerCase();const m=VSUB.find(v=>n.includes(v[0]));if(m&&x.probability>.1)return{name:m[1],coco:m[2],p:x.probability}}return null}
function vehDesc(d){let c='';try{c=colorName(d.bbox)}catch(e){}return (c?c[0].toUpperCase()+c.slice(1)+' ':'')+VNAME[d.class]}
function vehList(V){const m={};V.forEach(d=>m[VNAME[d.class]]=(m[VNAME[d.class]]||0)+1);return Object.entries(m).map(([k,n])=>n>1?n+' '+k:k).join(', ')}
function noteVeh(V){if(!V.length)return null;const big=V.slice().sort((a,b)=>b.bbox[2]*b.bbox[3]-a.bbox[2]*a.bbox[3])[0];
 lastVeh={txt:vehDesc(big),t:Date.now()};$('vehLbl').textContent='🚗 '+lastVeh.txt+' found';return lastVeh.txt}
const curVeh=()=>lastVeh&&(imgMode||Date.now()-lastVeh.t<15000)?lastVeh.txt:'';
const KW=['plastic','paper','cardboard','can','box','sack','garbage','trash','tissue','beer','soda','pop bottle','water bottle','basket','bottle','plastic bag','carton','paper towel','toilet tissue','packet','envelope','cup','mug','ashcan','milk can','diaper','crate','jug','tray','pill','bag','jar','tin','wrapper','flask','thermos','bucket','pail','plate','pot'];
const NICE={bottle:'Plastic bottle',cup:'Disposable cup',bowl:'Food container','wine glass':'Glass waste',banana:'Food waste (banana)',apple:'Food waste (apple)',orange:'Food waste (orange)',sandwich:'Food waste',donut:'Food waste',cake:'Food waste',pizza:'Food waste','hot dog':'Food waste',carrot:'Food waste',broccoli:'Food waste',fork:'Plastic cutlery',knife:'Cutlery',spoon:'Plastic cutlery'};
const POEMS=['குப்பையை குப்பைத் தொட்டியில் போடுங்கள், நகரத்தை காப்போம்!','சுத்தம் சுகம் தரும்.','Plastic today, poison tomorrow. Say no to littering.','Clean streets reflect clean minds.','One bottle on the road is one step back for our city.','Bin it, don\'t fling it.','Keep it clean, keep it green, a tidy street is a happy scene.','A clean city starts with you.','Drop it in the bin, let the city win.','Waste in the bin, pride within.','Your litter is someone\'s problem; your bin is everyone\'s solution.'];
let det,mob,ocr,dets=[],busy=false,tick=0,gps=null,mobW=null,vehPlate=null,plateBusy=false,fails=0,cool={};
let recs=[];try{recs=JSON.parse(localStorage.getItem('cs_recs')||'[]')}catch(e){}

navigator.geolocation&&navigator.geolocation.watchPosition(p=>gps=p.coords,()=>{},{enableHighAccuracy:true});
(async()=>{try{await tf.ready();det=await cocoSsd.load();$('status').textContent='Ready. Tap "Start camera".'}catch(e){$('status').textContent='Detector failed to load: '+(e.message||e)+'. Check internet and refresh.'}
 try{mob=await mobilenet.load({version:2,alpha:1.0})}catch(e){try{mob=await mobilenet.load()}catch(_){}}})();

async function getCam(){
 if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw{name:'NoSupport'};
 try{return await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false})}
 catch(e){if(e.name==='NotAllowedError'||e.name==='SecurityError')throw e;
  return await navigator.mediaDevices.getUserMedia({video:true,audio:false})}}
$('start').onclick=async()=>{
 imgMode=false;imgWaste=null;vehPlate=null;clearInterval(imgTimer);
 try{v.srcObject=await getCam();await v.play();
 o.width=v.videoWidth;o.height=v.videoHeight;$('status').textContent=det?'Watching: persons, vehicles, number plates and waste.':'Camera on. AI model still loading, please wait...';$('start').style.display='none';startLoop()}
 catch(e){const n=e&&e.name;$('status').textContent=
  n==='NotAllowedError'||n==='SecurityError'?'Camera blocked. Tap the lock/camera icon near the address bar, set Camera to Allow, then refresh.':
  n==='NotReadableError'||n==='TrackStartError'?'Camera is busy. Close other apps using the camera (Zoom, Meet, WhatsApp call, Camera app) and try again.':
  n==='NotFoundError'||n==='DevicesNotFoundError'?'No camera found on this device.':
  n==='NoSupport'?'This browser cannot open the camera. Open the github.io link in Chrome or Edge.':
  'Camera error: '+((e&&e.message)||n||e)}};

function colorName(b){const t=document.createElement('canvas');t.width=t.height=1;const c=t.getContext('2d');
 const [x,y,w,h]=b;c.drawImage(v,x+w*.3,y+h*.2,w*.4,h*.3,0,0,1,1);const [r,g,bl]=c.getImageData(0,0,1,1).data;
 const P={red:[200,40,40],orange:[240,130,30],yellow:[235,210,50],green:[50,160,70],blue:[40,90,200],purple:[130,60,170],pink:[240,130,170],white:[235,235,235],black:[25,25,25],grey:[128,128,128],brown:[110,70,40]};
 let best='',d=1e9;for(const k in P){const q=P[k],e=(q[0]-r)**2+(q[1]-g)**2+(q[2]-bl)**2;if(e<d){d=e;best=k}}return best}
const ctr=b=>[b[0]+b[2]/2,b[1]+b[3]/2];
const near=(a,b)=>{const[ax,ay]=ctr(a),[bx,by]=ctr(b);return Math.hypot(ax-bx,ay-by)<Math.max(a[2],a[3])*1.1};

let vehSeen=0;
let manualVeh=false;
function showPlate(on){if(manualVeh)on=true;if(!on&&($('plate').value.trim()||$('vname').value.trim())&&[$('plate'),$('vname')].includes(document.activeElement))return;
 $('plateRow').style.display=on?'block':'none';if(!on){$('plate').value='';$('vname').value=''}}
let shown=0,looping=0,thrW=null,lastConf=0,itemCount=0,imgMode=false,imgSrc=null,imgWaste=null;
function startLoop(){if(!looping){looping=1;loop()}}
async function loop(){
 if(imgMode){setTimeout(loop,350);return}   // photo is analysed once, carefully (analyzePhoto)
 if(det&&!shown&&v.readyState>=2){shown=1;$('status').textContent='Watching: persons, vehicles, number plates and waste.'}
 if(v.readyState>=2&&!busy&&det){busy=true;
  try{dets=await det.detect(v,15);tick++;await analyze();draw()}catch(e){$('status').textContent='Detect error: '+(e.message||e)}
  busy=false}
 setTimeout(loop,350)}

async function analyze(){
 const P=dets.filter(d=>d.class==='person'&&d.score>.7);
 const V=dets.filter(d=>VEH.includes(d.class)&&d.score>.5);
 const W=dets.filter(d=>COCO_WASTE.includes(d.class)&&d.score>.3);
 let waste=null,wb=null;itemCount=W.length;
 if(W.length){waste=NICE[W[0].class]||W[0].class;wb=W[0].bbox;lastConf=W[0].score}
 else if(mob&&tick%3===0){
  try{const r=await mob.classify(v,3);for(const x of r){const n=x.className.toLowerCase();
   if(x.probability>.3&&KW.some(k=>n.includes(k))){const nm=x.className.split(',')[0];mobW={n:nm[0].toUpperCase()+nm.slice(1),t:Date.now(),p:x.probability};break}}}catch(e){}}
 if(!waste&&mobW&&Date.now()-mobW.t<3000){waste=mobW.n;lastConf=mobW.p;itemCount=Math.max(itemCount,1)}
 $('wb').textContent=P.length&&waste?`⚠ Littering Detected – ${Math.round(lastConf*100)}% · Person throwing: ${waste}`:V.length&&waste?`⚠ ${curVeh()||vehDesc(V.slice().sort((a,b)=>b.bbox[2]*b.bbox[3]-a.bbox[2]*a.bbox[3])[0])} throwing: ${waste}`:waste?'Waste detected: '+waste:'Waste: none detected';
 thrW=(P.length||V.length)&&waste?waste:null;$('wb').className=waste?'on':'';
 $('live').textContent=`Persons: ${P.length} · Vehicles: ${V.length}${V.length?' ('+vehList(V)+')':''} · Waste: ${waste||'none'}`;
 if(V.length)vehSeen=Date.now();showPlate(Date.now()-vehSeen<15000);
 // person + waste
 if(P.length&&waste&&ok('p',6000)){
  const p=wb?P.slice().sort((a,b)=>(near(a.bbox,wb)?0:1)-(near(b.bbox,wb)?0:1))[0]:P[0];
  let who=`${P.length} person(s) seen. One wearing a ${colorName(p.bbox)} top`;
  if(wb)who+=near(p.bbox,wb)?`, holding or standing next to the ${waste.toLowerCase()}.`:`; ${waste.toLowerCase()} lying nearby.`;else who+='.';
  add({kind:'Littering: '+waste,waste,who,name:$('name').value.trim()||'Unknown (enter name)',fine:+$('fine').value})}
 // vehicle + plate
 if(V.length){
  const big=V.slice().sort((a,b)=>b.bbox[2]*b.bbox[3]-a.bbox[2]*a.bbox[3])[0];const vd=noteVeh(V);
  if(!plateBusy&&tick%6===0)readPlate(big.bbox);
  const typed=$('plate').value.trim().toUpperCase().replace(/^(NULL|NONE|NA|N\/A|-)$/,'');
  const pl=(vehPlate&&Date.now()-vehPlate.t<8000)?vehPlate.txt:(fails>=3&&typed?typed:null);
  if(pl?ok('v'+pl,10000):(waste&&!P.length&&ok('vw',10000)))add({kind:'Vehicle violation: '+vd,veh:vd,waste:waste||'Waste thrown from vehicle',plate:pl||'',name:$('name').value.trim(),fine:Math.min(+$('fine').value,500)})}}

function ok(k,ms){const n=Date.now();if(cool[k]&&n-cool[k]<ms)return false;cool[k]=n;return true}

async function readPlate(b){
 plateBusy=true;$('status').textContent='Reading number plate...';
 try{
  if(!ocr){ocr=await Tesseract.createWorker('eng');await ocr.setParameters({tessedit_char_whitelist:'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ',tessedit_pageseg_mode:'6'})}
  const[x,y,w,h]=b,c=document.createElement('canvas');c.width=Math.max(w*2,200);c.height=Math.max(h*.55*2,100);
  const g=c.getContext('2d');g.filter='grayscale(1) contrast(1.8)';g.drawImage(v,x,y+h*.45,w,h*.55,0,0,c.width,c.height);
  const{data}=await ocr.recognize(c);const t=data.text.toUpperCase().replace(/[^A-Z0-9]/g,'');
  const m=t.match(/[A-Z]{2}\d{1,2}[A-Z]{1,3}\d{4}/);
  if(m){vehPlate={txt:m[0],t:Date.now()};fails=0}else fails++;
 }catch(e){fails++}
 $('status').textContent=vehPlate&&Date.now()-vehPlate.t<8000?'Plate read: '+vehPlate.txt:(fails>=3?'Plate not readable. Type it in the plate box.':'Watching...');
 plateBusy=false}

function draw(){cx.clearRect(0,0,o.width,o.height);cx.lineWidth=3;cx.font='bold 16px sans-serif';
 for(const d of dets){if(d.score<(imgMode?.25:.4))continue;const[x,y,w,h]=d.bbox;
  const col=d.class==='person'?'#f5b942':VEH.includes(d.class)?'#5ec8ff':COCO_WASTE.includes(d.class)?'#ff5c5c':'#9a9ab0';
  let lb=`${COCO_WASTE.includes(d.class)?(NICE[d.class]||d.class):d.class} ${Math.round(d.score*100)}%`;
  if(VEH.includes(d.class)&&vehPlate&&Date.now()-vehPlate.t<8000)lb+=' · '+vehPlate.txt;
  let c2=col;
  if(thrW&&(d.class==='person'||VEH.includes(d.class))){lb=`Littering Detected ${Math.round(lastConf*100)}% · ${thrW.toLowerCase()}`;c2='#ff3b3b'}
  const col2=c2;cx.strokeStyle=col2;cx.strokeRect(x,y,w,h);const tw=cx.measureText(lb).width+8;
  cx.fillStyle=col2;cx.fillRect(x,Math.max(0,y-22),tw,22);cx.fillStyle=col2==='#ff3b3b'?'#fff':'#000';cx.fillText(lb,x+4,Math.max(16,y-5))}}

function snap(){const src=imgMode&&imgSrc?imgSrc:v,sw=imgMode&&imgSrc?imgSrc.width:v.videoWidth,sh=imgMode&&imgSrc?imgSrc.height:v.videoHeight;
 const c=document.createElement('canvas');c.width=480;c.height=Math.round(480*sh/sw)||160;
 try{const g=c.getContext('2d');g.drawImage(src,0,0,c.width,c.height);if(imgMode)g.drawImage(o,0,0,c.width,c.height);return c.toDataURL('image/jpeg',.7)}catch(e){return''}}

const FOOD=/food|banana|apple|orange|sandwich|pizza|donut|cake|carrot|broccoli|hot dog/i;
const DUMP=/bag|bucket|pail|crate|ashcan|bin|carton|diaper/i;
function ruleFine(r){
 let cat,fine;
 if(itemCount>=3||DUMP.test(r.waste||'')){cat='Garbage dumping';fine=2000}
 else if(r.plate||r.veh||/vehicle/i.test(r.kind)){cat='Littering from vehicle';fine=1000}
 else if(FOOD.test(r.waste||'')){cat='Littering – food waste';fine=200}
 else{cat='Littering – plastic / glass waste';fine=500}
 const key=r.plate||'';
 const repeat=key&&recs.some(x=>x.plate===key);
 if(repeat){fine*=2;cat+=' (repeat offender ×2)'}
 return{cat,fine}}
function add(r){
 const vn=$('vname').value.trim();if(vn&&(r.veh||r.plate||manualVeh)){r.vname=vn;if(!r.veh)r.veh='Vehicle'}
 const rf=ruleFine(r);r.cat=rf.cat;
 if($('fine').value==='auto'||!isFinite(r.fine))r.fine=rf.fine;
 r.cam=$('camid').value.trim()||'CAM-01';r.conf=lastConf?Math.round(lastConf*100):null;
 r.id='V-'+String((recs[0]?+recs[0].id.slice(2):0)+1).padStart(3,'0');r.time=new Date().toLocaleString();r.status='Pending';
 r.poem=POEMS[Math.floor(Math.random()*POEMS.length)];r.img=snap();r.ll=gps?`${gps.latitude},${gps.longitude}`:'';r.gps=gps?`${gps.latitude.toFixed(5)}, ${gps.longitude.toFixed(5)}`:'N/A';
 recs.unshift(r);recs=recs.slice(0,25);save();render();$('status').textContent=r.id+' recorded.';notify(r)}
function save(){try{localStorage.setItem('cs_recs',JSON.stringify(recs))}catch(e){recs.forEach(r=>r.img='');try{localStorage.setItem('cs_recs',JSON.stringify(recs))}catch(_){}}}

function render(){
 dash();
 $('log').innerHTML=recs.length?recs.map(r=>`<div class="v">${r.img?`<img src="${r.img}">`:''}<div>
  <b>${r.kind}</b> <span class="tag">${r.status}</span>
  <small>1. Name: <b style="color:var(--ink)">${r.name||'Vehicle owner (via plate)'}</b></small>
  <small>2. Location: ${r.ll?`<a style="color:var(--acc)" target="_blank" href="https://maps.google.com/?q=${r.ll}">${r.gps} (open map)</a>`:'N/A (turn on GPS)'}</small>
  <small>3. Fine: <b style="color:var(--ink)">₹${r.fine}</b> · ${r.cat||r.kind}</small>
  <div class="thr">4. Waste: ${r.waste}${r.conf?` (AI ${r.conf}%)`:''}</div>${r.who?`<small>${r.who}</small>`:''}
  <small>5. Evidence: photo, ${r.time}, ${r.id}${r.cam?' · '+r.cam:''}</small>
  <div class="po">6. Awareness: “${r.poem||POEMS[0]}”</div>
  ${r.veh||r.plate?`<small>7. Vehicle: <b style="color:var(--ink)">🚗 ${r.veh||'Vehicle'}</b>${r.vname?` · Name: <b style="color:var(--ink)">${r.vname}</b>`:''} · Number plate: ${r.plate?`<span class="pl">${r.plate}</span>`:'not readable'}</small>`:''}
  ${r.status==='Pending'?`<div class="row"><button class="alt" data-a="Verified" data-i="${r.id}">Verify</button></div>`:r.status==='Verified'?`<div class="row"><button class="alt" data-a="Resolved" data-i="${r.id}">Resolve</button></div>`:''}
  </div></div>`).join(''):'<div class="m">None yet.</div>'}
$('log').onclick=e=>{const b=e.target.closest('button');if(!b)return;const r=recs.find(x=>x.id===b.dataset.i);if(r){r.status=b.dataset.a;save();render()}};
$('clr').onclick=()=>{recs=[];save();render()};
async function wasteName(){
 if($('wtype').value&&!(imgMode&&imgWaste))return $('wtype').value;
 if(imgMode&&imgWaste)return imgWaste;
 const w=dets.find(d=>COCO_WASTE.includes(d.class)&&d.score>.3);
 if(w)return NICE[w.class]||w.class;
 if(mob){try{const r=await mob.classify(v,5);
  for(const x of r){const n=x.className.toLowerCase();if(x.probability>.12&&KW.some(k=>n.includes(k))){const t=x.className.split(',')[0];return t[0].toUpperCase()+t.slice(1)}}
  if(r[0]&&r[0].probability>.2)return 'Object: '+r[0].className.split(',')[0]+' ('+Math.round(r[0].probability*100)+'%)'}catch(e){}}
 return $('wtype').value||'Waste reported by user'}
$('man').onclick=async()=>{
 if(!v.srcObject&&!v.currentSrc){$('status').textContent='Start the camera or upload a photo/video first.';return}
 $('status').textContent='Identifying waste...';
 const typed=$('plate').value.trim().toUpperCase().replace(/^(NULL|NONE|NA|N\/A|-)$/,''),pl=(vehPlate&&Date.now()-vehPlate.t<8000)?vehPlate.txt:typed;
 const waste=await wasteName();
 const vd=curVeh()||(manualVeh&&($('vname').value.trim()||typed)?'Vehicle':'');
 add(pl||vd?{kind:'Manual report ('+(vd||'vehicle')+')',veh:vd,waste,plate:pl,name:$('name').value.trim(),fine:Math.min(+$('fine').value,500)}
  :{kind:'Manual report',waste,name:$('name').value.trim()||'Unknown (enter name)',fine:+$('fine').value})};
// Upload photo / video (for laptops without a webcam)
function loadPic(f,url){
 return new Promise((res,rej)=>{
  const im=new Image();
  im.onload=()=>res(im);
  im.onerror=async()=>{
   try{res(await createImageBitmap(f))}   // second try
   catch(e){rej(new Error(/heic|heif/i.test(f.name+f.type)
    ?'iPhone HEIC photos are not supported. Save the photo as JPG/PNG and upload again.'
    :'This file is not a real photo (maybe a web page saved as .jpg). Use a JPG or PNG photo.'))}};
  im.src=url});}
let imgTimer=null;
$('up').onchange=async e=>{
 const f=e.target.files[0];if(!f)return;e.target.value='';
 if(v.srcObject&&v.srcObject.getTracks)v.srcObject.getTracks().forEach(t=>t.stop());
 clearInterval(imgTimer);v.pause();v.srcObject=null;v.removeAttribute('src');
 const url=URL.createObjectURL(f);
 try{
  if(f.type.startsWith('image/')){
   const im=await loadPic(f,url);
   const W=im.naturalWidth||im.width,H=im.naturalHeight||im.height;
   const c=document.createElement('canvas'),k=Math.min(1,1280/W);
   c.width=Math.round(W*k);c.height=Math.round(H*k);
   const g=c.getContext('2d'),paint=()=>g.drawImage(im,0,0,c.width,c.height);paint();
   imgTimer=setInterval(paint,200);
   v.srcObject=c.captureStream(5);
   imgMode=true;imgSrc=c;imgWaste=null;vehPlate=null;lastVeh=null;
  }else{v.src=url;v.loop=true;imgMode=false;imgSrc=null;imgWaste=null;vehPlate=null}
  await v.play();
  await new Promise(r=>{if(v.videoWidth)r();else v.onloadedmetadata=r});
  o.width=v.videoWidth;o.height=v.videoHeight;
  $('status').textContent=det?'Analysing uploaded '+(f.type.startsWith('image/')?'photo':'video')+'...':'File loaded. AI model still loading, please wait...';
  startLoop();
  if(imgMode)analyzePhoto(imgSrc);
 }catch(err){$('status').textContent='Could not open file: '+(err.message||err)}};

// ---------- Careful one-time analysis for uploaded photos ----------
function crop(src,b,pad){const[x,y,w,h]=b,px=w*pad,py=h*pad;
 const X=Math.max(0,x-px),Y=Math.max(0,y-py),W=Math.min(src.width-X,w+2*px),H=Math.min(src.height-Y,h+2*py);
 const c=document.createElement('canvas');c.width=Math.max(32,Math.round(W));c.height=Math.max(32,Math.round(H));
 c.getContext('2d').drawImage(src,X,Y,W,H,0,0,c.width,c.height);return c}
async function plateFrom(src,b){
 try{if(!ocr){ocr=await Tesseract.createWorker('eng');await ocr.setParameters({tessedit_char_whitelist:'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ',tessedit_pageseg_mode:'6'})}
  const[x,y,w,h]=b,c=document.createElement('canvas');c.width=Math.max(w*2,400);c.height=Math.max(h*2,160);
  const g=c.getContext('2d');g.filter='grayscale(1) contrast(1.8)';g.drawImage(src,x,y,w,h,0,0,c.width,c.height);
  const{data}=await ocr.recognize(c);const t=data.text.toUpperCase().replace(/[^A-Z0-9]/g,'').replace(/O(?=\d{4}$)/,'0');
  const m=t.match(/[A-Z]{2}\d{1,2}[A-Z]{1,3}\d{4}/)||t.match(/\d{2}BH\d{4}[A-Z]{1,2}/);return m?m[0]:null}catch(e){return null}}
async function analyzePhoto(src){
 while(!det){$('status').textContent='AI model loading, please wait...';await new Promise(r=>setTimeout(r,500))}
 $('status').textContent='Analysing photo carefully...';$('wb').textContent='Analysing photo...';$('wb').className='';
 for(let i=0;!mob&&i<40;i++){$('status').textContent='Loading waste classifier...';await new Promise(r=>setTimeout(r,500))}
 $('status').textContent='Analysing photo carefully...';
 dets=await det.detect(src,30,.2);
 const EXTRA={handbag:'Plastic cover / bag',book:'Paper waste',suitcase:'Garbage bag',backpack:'Garbage bag','sports ball':'Waste item',umbrella:'Waste item'};
 const P=dets.filter(d=>d.class==='person'&&d.score>.45);
 const V=dets.filter(d=>VEH.includes(d.class)&&d.score>.4);
 const W=dets.filter(d=>(COCO_WASTE.includes(d.class)||EXTRA[d.class])&&d.score>.25).sort((a,b)=>(COCO_WASTE.includes(b.class)-COCO_WASTE.includes(a.class))||b.score-a.score);
 let waste=null,wb=null;itemCount=W.length;lastConf=0;
 if(W.length){waste=NICE[W[0].class]||EXTRA[W[0].class]||W[0].class;wb=W[0].bbox;lastConf=W[0].score}
 if(mob&&(!W.length||!COCO_WASTE.includes(W[0].class))){
  // look at whole photo + each object + area around each person (hands)
  const parts=[src];
  for(const d of dets)parts.push(crop(src,d.bbox,d.class==='person'?.25:.15));
  for(const p of P){const[x,y,w,h]=p.bbox;parts.push(crop(src,[x-w*.3,y+h*.3,w*1.6,h*.7],0))}
  let best=null;
  for(const part of parts.slice(0,10)){try{const r=await mob.classify(part,5);
   for(const x of r){const n=x.className.toLowerCase();
    if(x.probability>.05&&KW.some(k=>n.includes(k))&&(!best||x.probability>best.p)){const nm=x.className.split(',')[0];best={n:nm[0].toUpperCase()+nm.slice(1),p:x.probability}}}}catch(e){}}
  if(best&&(!waste||best.p>lastConf)){waste=best.n;lastConf=best.p;itemCount=Math.max(itemCount,1)}}
 if(!waste&&$('wtype').value){waste=$('wtype').value;lastConf=0}
 imgWaste=waste;
 // number plate
 let pl=null;
 if(!V.length&&mob){try{const sb=vsub(await mob.classify(src,5));
  if(sb&&sb.p>.2){const d={class:sb.coco,score:sb.p,bbox:[2,2,src.width-4,src.height-4]};V.push(d);dets.push(d);
   lastVeh={txt:sb.name,t:Date.now()};$('vehLbl').textContent='🚗 '+sb.name+' found'}}catch(e){}}
 if(V.length){$('status').textContent='Reading number plate...';
  const big=V.slice().sort((a,b)=>b.bbox[2]*b.bbox[3]-a.bbox[2]*a.bbox[3])[0],[x,y,w,h]=big.bbox;noteVeh(V);
  if(mob){try{const sb=vsub(await mob.classify(crop(src,big.bbox,.05),5));if(sb){let c='';try{c=colorName(big.bbox)}catch(e){}
   lastVeh.txt=(c?c[0].toUpperCase()+c.slice(1)+' ':'')+sb.name;$('vehLbl').textContent='🚗 '+lastVeh.txt+' found'}}catch(e){}}
  pl=await plateFrom(src,[x,y+h*.45,w,h*.55])||await plateFrom(src,big.bbox)}
 if(!pl&&!P.length)pl=await plateFrom(src,[0,src.height*.4,src.width,src.height*.6]);
 const typed=$('plate').value.trim().toUpperCase().replace(/^(NULL|NONE|NA|N\/A|-)$/,'');
 if(!pl&&typed)pl=typed;
 if(pl)vehPlate={txt:pl,t:Date.now()+864e5};
 showPlate(!!(V.length||pl));if(pl)$('plate').value=pl;
 thrW=(P.length||V.length)&&waste?waste:null;draw();
 $('wb').textContent=P.length&&waste?`⚠ Littering Detected – ${Math.round(lastConf*100)}% · Person throwing: ${waste}`:V.length&&waste?`⚠ ${curVeh()||vehDesc(V.slice().sort((a,b)=>b.bbox[2]*b.bbox[3]-a.bbox[2]*a.bbox[3])[0])} throwing: ${waste}`:waste?'Waste detected: '+waste:'Waste: none detected';
 $('wb').className=waste?'on':'';
 $('live').textContent=`Persons: ${P.length} · Vehicles: ${V.length}${V.length?' ('+vehList(V)+')':''} · Waste: ${waste||'none'}${pl?' · Plate: '+pl:''}`;
 if(!waste){waste='Unidentified waste (verify photo)';lastConf=0;
  $('wb').textContent='⚠ Waste not clearly identified – recorded for verification. Pick "Waste type" for next time.';$('wb').className='on'}
 let who='';
 if(P.length){const p=wb?P.slice().sort((a,b)=>(near(a.bbox,wb)?0:1)-(near(b.bbox,wb)?0:1))[0]:P[0];
  who=`${P.length} person(s) seen. One wearing a ${colorName(p.bbox)} top`+(wb?(near(p.bbox,wb)?`, holding or next to the ${waste.toLowerCase()}.`:`; ${waste.toLowerCase()} lying nearby.`):'.')}
 const nm=$('name').value.trim();
 const vd=V.length?curVeh():'';
 add(V.length||pl?{kind:'Vehicle violation'+(vd?': '+vd:''),veh:vd,waste,plate:pl||'',name:nm,who,fine:+$('fine').value}
  :{kind:'Littering: '+waste,waste,who,name:nm||'Nivetha.S',fine:+$('fine').value})}
// ---------- Authority dashboard + GIS map ----------
let map=null,layer=null;
function dash(){
 const c=k=>recs.filter(r=>r.status===k).length;
 $('sT').textContent=recs.length;$('sP').textContent=c('Pending');$('sV').textContent=c('Verified');$('sR').textContent=c('Resolved');
 $('sF').textContent='₹'+recs.reduce((a,r)=>a+(+r.fine||0),0);
 if(typeof L==='undefined')return;
 if(!map){map=L.map('map',{attributionControl:true}).setView([13.0827,80.2707],11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap'}).addTo(map);
  layer=L.layerGroup().addTo(map)}
 layer.clearLayers();const pts=[];
 for(const r of recs){if(!r.ll)continue;const[a,b]=r.ll.split(',').map(Number);pts.push([a,b]);
  const col=r.status==='Resolved'?'#2ecc71':r.status==='Verified'?'#f5d742':'#ff4d4d';
  L.circleMarker([a,b],{radius:9,color:'#fff',weight:2,fillColor:col,fillOpacity:.9}).addTo(layer)
   .bindPopup(`<b>${r.id}</b> · ${r.cat||r.kind}<br>${r.waste}${r.veh?'<br>🚗 '+r.veh+(r.vname?' ('+r.vname+')':''):''}${r.plate?' · '+r.plate:''}<br>₹${r.fine} · ${r.status}<br>${r.time}<br>${r.cam||''}${r.img?`<br><img src="${r.img}" style="width:160px;margin-top:4px;border-radius:4px">`:''}`)}
 if(pts.length)map.fitBounds(pts,{maxZoom:17,padding:[30,30]});
 setTimeout(()=>map.invalidateSize(),100)}
// ---------- Real-time notification ----------
let actx=null;
function askNotify(){try{if('Notification'in window&&Notification.permission==='default')Notification.requestPermission()}catch(e){}
 try{actx=actx||new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}
$('start').addEventListener('click',askNotify);$('up').addEventListener('click',askNotify);$('man').addEventListener('click',askNotify);
function beep(){try{if(!actx)return;const o2=actx.createOscillator(),g=actx.createGain();o2.frequency.value=880;g.gain.value=.15;
 o2.connect(g);g.connect(actx.destination);o2.start();o2.stop(actx.currentTime+.25)}catch(e){}}
let tT=null;
function notify(r){
 const msg=`🚨 ${r.id}: ${r.cat} – ${r.waste}${r.veh?' · 🚗 '+r.veh+(r.vname?' ('+r.vname+')':''):''}${r.plate?' '+r.plate:''} · ₹${r.fine} · ${r.cam}${r.gps&&r.gps!=='N/A'?' · '+r.gps:''}`;
 const t=$('toast');t.textContent=msg+' · Sent to authority dashboard. “'+r.poem+'”';t.classList.add('show');
 clearTimeout(tT);tT=setTimeout(()=>t.classList.remove('show'),4500);beep();
 try{if('Notification'in window&&Notification.permission==='granted')new Notification('CivicSense alert: '+r.cat,{body:`${r.waste} · ₹${r.fine} · ${r.cam}`,icon:'icon-192.png'})}catch(e){}}
$('addVeh').onclick=()=>{manualVeh=!manualVeh;$('addVeh').textContent=manualVeh?'– Vehicle':'+ Vehicle';
 if(manualVeh&&!curVeh())$('vehLbl').textContent='🚗 Vehicle details';showPlate(manualVeh);if(manualVeh)$('vname').focus()};
render();
</script></body></html>
