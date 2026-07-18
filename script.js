const PROJECTS = [
  { id:'frilnce1', x:80,  y:120, icon:'Images/infumonjoicon.png',
    title:'Influmojo', subtitle:'Marketing',
    desc:'The wordmark combines clarity with playfulness to reflect a tech-driven, collaboration-first brand. Clean, geometric typography communicates modernity and professionalism, while the creative twist in the “ojo” turns the into eyes—a metaphor for insight, awareness, and connection.',
    type:'Branding',
    preview:['Images/influ1.png',
        'Images/influ2.png' ]},

  { id:'frilnce2', x:210, y:80, icon:'Images/groovi.png',
    title:'Groovi', subtitle:'Chocolate',
    desc:'The Groovi logo captures intimacy, connection, and modern sensuality through a refined, elegant wordmark. Its defining feature is the ligature between the “o” and “v,” symbolizing the harmony of feminine warmth and masculine stability. The graceful “g” and confident type treatment add fluidity and sophistication, positioning Groovi as bold yet approachable. More than a visual mark, it reflects the brand’s promise of helping couples feel closer, confident, and connected.',
    type:'Branding and Packaging',
    preview:['Images/groovi1.png',
    'Images/groovi2.png'] },

  { id:'odor1', x:360, y:150, icon:'Images/kremsi.png',
    title:'Kremsi', subtitle:'Drink',
    desc:'Kremsi is a fruity, kefir-based prebiotic drink made with live cultures and zero sugar crafted to taste like fun, not medicine. It comes in bold, feel-good flavors like Lemon, Cherry, Watermelon, and Orange, each one tangy, creamy, and secretly gut-friendly. It’s fermented, fizzy-ish, and ridiculously easy to love.',
    type:'Brandingg and Packaging',
    preview:['Images/kremsi1.jpg','Images/kremsi2.jpg','Images/kremsi3.jpg'] },

  { id:'creatorindia1', x:500, y:90, icon:'Images/acb.png',
    title:'Absolute Coffee Brewers', subtitle:'Cafe',
    desc:'The Absolute Coffee Brewers logo captures the café’s bold, playful energy. The chunky, rounded letterforms make the brand approachable and welcoming, signaling a space that’s lively, unpretentious, and perfect for everyday hangoutss. The initials—A, C, and B—are more than letters; they act as playful characters, bringing personality and a sense of community to the brand. “Coffee” remains at the heart of the logo, while “Brewers” emphasizes the creative, social, and energetic spirit of the space.',
    type:'Branding',
    preview:['Images/acb1.png','Images/acb2.png','Images/acb3.png'] },

  { id:'splitbite1', x:640, y:160, icon:'Images/sb.png',
    title:'Sourcebay', subtitle:'Logistics',
    desc:'The Sourcebay logo reflects efficiency, movement, and reliability—key qualities of modern supply and logistics. The clean, bold wordmark creates a strong and approachable identity, while the angled “b” introduces a sense of motion, symbolizing the dynamic flow of sourcing and distribution. The vibrant red color conveys energy and urgency, reinforcing the brand’s focus on fast, smart, and connected supply solutions.',
    type:'Branding',
    preview:['Images/sb1.png','Images/sb2.png','Images/sb3.png'] },

  { id:'gutfeeling1', x:120, y:320, icon:'Images/super.png',
    title:'Supherbman', subtitle:'Smoking Acessories',
    desc:'Supherbman exists because the brand needed a face that doesn’t take itself too seriously, even though the products are genuinely premium. He’s a superhero, but the kind who looks like he reads the manuals, labels his drawers, and still somehow saves the day anyway. The nerdy grin, the clean mask, the flying pose — it all leans into a fun, slightly goofy personality that makes the brand instantly likeable.',
    type:'Branding and Packaging',
    preview:['Images/super1.jpg','Images/super2.jpg','Images/super3.jpg'] },

  { id:'cornkaka1', x:280, y:380, icon:'Images/sun.png',
    title:'Sunbase', subtitle:'Sunscreen',
    desc:'Sunbase is a premium sunscreen made for people who want protection without compromise. Lightweight, fast-absorbing, and invisible on every skin tone, it keeps your skin safe, hydrated, and comfortable all day long. Because SPF should feel as good as it works.',
    type:'Branding and Packaging',
    preview:['Images/sun1.png','Images/sun2.png','Images/sun3.png'] },

  { id:'snackmap1', x:440, y:330, icon:'Images/subk.png',
    title:'Subkulture', subtitle:'Skincare',
    desc:'Subkulture is a modern skincare brand built on the belief that great skin starts with honest formulations and intentional design. Combining science-backed ingredients with a refined aesthetic, it creates products that are effective, uncomplicated, and made for everyday confidence.',
    type:'Branding and Packaging',
    preview:['Images/subk4.png','Images/subk1.png','Images/subk2.png','Images/subk3.png'] },

  { id:'mnm1', x:600, y:300, icon:'Images/nocaf.png',
    title:'Nocaff', subtitle:'Beverage',
    desc:'NOCAFF is a modern functional drink brand built for every hour of the day. Clean ingredients, purposeful formulations, and a bold visual identity come together to help you perform at your best, whenever the moment calls for it.',
    type:'Branding and Packaging',
    preview:['Images/nocaf1.jpg','Images/nocaf2.jpg','Images/nocaf3.jpg']},

  { id:'odor2', x:760, y:230, icon:'Images/her.png',
    title:'Herkin', subtitle:'Beauty',
    desc:'Herkin is built on the belief that exceptional design and exceptional products should work together. By blending functionality with a distinctive visual identity, it delivers experiences that are intuitive, premium, and memorable. Every element is crafted to communicate quality, inspire confidence, and create meaningful everyday interactions.',
    type:'Branding and Packaging',
    preview:['Images/her1.jpg','Images/her2.png','Images/her3.png'] },
];

const desktop = document.getElementById('desktop');
let zTop = 10;
let selectedIcon = null;
const openWindows = {};

/* ---------------- render icons ---------------- */
PROJECTS.forEach(p=>{
  const el = document.createElement('div');
  el.className = 'icon';
  el.style.left = p.x + 'px';
  el.style.top  = p.y + 'px';
  el.dataset.id = p.id;
  el.innerHTML = `<img src="${p.icon}" draggable="false" alt=""><div class="label">${p.title}</div>`;
  desktop.appendChild(el);
  makeIconInteractive(el, p);
});

/* ---------------- icon: drag vs click, open window ---------------- */
function makeIconInteractive(el, p){
  let startX, startY, origX, origY, dragging=false, moved=false;

  el.addEventListener('pointerdown', e=>{
    e.preventDefault();
    startX = e.clientX; startY = e.clientY;
    origX = el.offsetLeft; origY = el.offsetTop;
    dragging = true; moved = false;
    el.setPointerCapture(e.pointerId);
  });

  el.addEventListener('pointermove', e=>{
    if(!dragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if(Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
    if(moved){
      el.style.left = (origX + dx) + 'px';
      el.style.top  = (origY + dy) + 'px';
    }
  });

  el.addEventListener('pointerup', e=>{
    dragging = false;
    if(!moved){
      if(selectedIcon) selectedIcon.classList.remove('selected');
      el.classList.add('selected');
      selectedIcon = el;
      openWindow(p);
    }
  });
}

/* ---------------- window: build, drag, close, toggle, focus ---------------- */
function openWindow(p){
  if(openWindows[p.id]){
    bringToFront(openWindows[p.id]);
    return;
  }
  const win = document.createElement('div');
  win.className = 'window';
  const offset = Object.keys(openWindows).length * 26;
  win.style.left = (140 + offset) + 'px';
  win.style.top  = (90 + offset) + 'px';
  win.style.zIndex = ++zTop;

  win.innerHTML = `
    <div class="window-titlebar">
      <div class="dots"><div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div></div>
      <div class="window-title">Information about: ${p.title}</div>
    </div>
    <div class="window-body">
      <div class="w-head">
        <img src="${p.icon}" alt="">
        <div>
          <div class="w-title">${p.title}</div>
          <div class="w-subtitle">${p.subtitle}</div>
        </div>
      </div>
      <div class="w-desc">${p.desc}</div>

      <div class="w-toggle" data-target="details-${p.id}"><span class="chev">▾</span> Details:</div>
      <div class="w-details" id="details-${p.id}">Type: ${p.type}</div>

      <div class="w-toggle" data-target="preview-${p.id}"><span class="chev">▾</span> Preview:</div>
      
      <div class="w-preview" id="preview-${p.id}">
    ${
        Array.isArray(p.preview)
        ? p.preview.map(img => `<img src="${img}" alt="">`).join("")
        : `<img src="${p.preview}" alt="">`
    }
</div>
    </div>
  `;
  desktop.appendChild(win);
  openWindows[p.id] = win;

  // close
  // close
const closeBtn = win.querySelector(".dot.red");

closeBtn.addEventListener("pointerdown", (e) => {
    e.stopPropagation();
});

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    win.remove();
    delete openWindows[p.id];
});

  // bring to front
  win.addEventListener('pointerdown', ()=> bringToFront(win));

  // drag by titlebar
  const bar = win.querySelector('.window-titlebar');
  let dX, dY, dOX, dOY, dragging=false;
  bar.addEventListener('pointerdown', e=>{
    dragging = true;
    dX = e.clientX; dY = e.clientY;
    dOX = win.offsetLeft; dOY = win.offsetTop;
    bar.setPointerCapture(e.pointerId);
    bringToFront(win);
  });
  bar.addEventListener('pointermove', e=>{
    if(!dragging) return;
    win.style.left = (dOX + (e.clientX - dX)) + 'px';
    win.style.top  = (dOY + (e.clientY - dY)) + 'px';
  });
  bar.addEventListener('pointerup', ()=> dragging = false);

  // collapsible toggles
  win.querySelectorAll('.w-toggle').forEach(t=>{
    t.addEventListener('click', ()=>{
      const target = document.getElementById(t.dataset.target);
      target.classList.toggle('hidden');
      t.classList.toggle('closed');
    });
  });
}

function bringToFront(win){
  win.style.zIndex = ++zTop;
}
/* ---------------- Photoshop App ---------------- */

document.getElementById("ps-app").addEventListener("click", openPhotoshop);

function openPhotoshop(){

    if(document.getElementById("photoshop-window")){
        bringToFront(document.getElementById("photoshop-window"));
        return;
    }

    const win = document.createElement("div");

    win.className = "window";
    win.id = "photoshop-window";

    win.style.left = "240px";
    win.style.top = "170px";
    win.style.width = "420px";
    win.style.zIndex = ++zTop;

    win.innerHTML = `

    <div class="window-titlebar">

        <div class="dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
        </div>

        <div class="window-title">
            Adobe Photoshop
        </div>

    </div>

    <div class="ps-window">

        <div class="ps-icon">
            <img src="icons/adobe-photoshop-icon.png">
        </div>

        <div class="ps-text">

            <h3>Unable to Save</h3>

            <p>
            Photoshop has once again decided
            today isn't your day.
            </p>

            <p>
            Available memory:
            <b>0.003 MB</b>
            </p>

            <p>
            Estimated work lost:
            <b>6 hours 41 minutes.</b>
            </p>

        </div>

        <button class="ps-btn" id="ps-close">
    Cry and Continue
</button>

    </div>

    `;

    desktop.appendChild(win);
    const continueBtn = win.querySelector("#ps-close");

continueBtn.addEventListener("click",()=>{
    win.remove();
});

    bringToFront(win);

    /* close */

    win.querySelector(".dot.red").onclick=()=>win.remove();

    /* drag */

    const bar = win.querySelector(".window-titlebar");

    let x,y,l,t,drag=false;

    bar.onpointerdown=e=>{

    if(e.target.closest(".dots")) return;

    if(e.target.closest(".ps-btn")) return;

    drag=true;

    x=e.clientX;
    y=e.clientY;

    l=win.offsetLeft;
    t=win.offsetTop;

    bar.setPointerCapture(e.pointerId);

    bringToFront(win);

}

    bar.onpointermove=e=>{

        if(!drag) return;

        win.style.left=l+(e.clientX-x)+"px";
        win.style.top=t+(e.clientY-y)+"px";

    }

    bar.onpointerup=()=>drag=false;

}
document.getElementById("ai-app").addEventListener("click", openIllustrator);
function openIllustrator(){

    if(document.getElementById("illustrator-window")){
        bringToFront(document.getElementById("illustrator-window"));
        return;
    }

    const win=document.createElement("div");

    win.className="window";
    win.id="illustrator-window";

    win.style.left="300px";
    win.style.top="190px";
    win.style.width="460px";
    win.style.zIndex=++zTop;

    win.innerHTML=`

    <div class="window-titlebar">

        <div class="dots">

            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>

        </div>

        <div class="window-title">
            Adobe Illustrator
        </div>

    </div>

    <div class="ps-window">

        <div class="ps-icon">
            <img src="icons/adobe-illustrator-icon.png">
        </div>

        <div class="ps-text">

            <h3>Creative Conflict Detected</h3>

            <p>Client feedback received:</p>

            <ul class="ai-list">
                <li>"Can you make the logo bigger?"</li>
                <li>"Try Comic Sans."</li>
                <li>"Make it premium... but fun... and also corporate."</li>
                <li>"Can you finish it in 10 minutes?"</li>
            </ul>

            <p><b>Revisions Remaining:</b> ∞</p>

        </div>

        <button class="ps-btn" id="ai-close">
            Accept My Fate
        </button>

    </div>

    `;

    desktop.appendChild(win);

    bringToFront(win);

    const closeBtn=win.querySelector(".dot.red");

    closeBtn.addEventListener("pointerdown",e=>e.stopPropagation());

    closeBtn.addEventListener("click",e=>{
        e.stopPropagation();
        win.remove();
    });

    win.querySelector("#ai-close").onclick=()=>win.remove();

    const bar=win.querySelector(".window-titlebar");

    let drag=false,x,y,l,t;

    bar.onpointerdown=e=>{

        if(e.target.closest(".dots")) return;

        drag=true;

        x=e.clientX;
        y=e.clientY;

        l=win.offsetLeft;
        t=win.offsetTop;

        bar.setPointerCapture(e.pointerId);

        bringToFront(win);

    }

    bar.onpointermove=e=>{

        if(!drag) return;

        win.style.left=l+(e.clientX-x)+"px";
        win.style.top=t+(e.clientY-y)+"px";

    }

    bar.onpointerup=()=>drag=false;

}
document.getElementById("notes-app").addEventListener("click", openNotes);
function openNotes(){

    if(document.getElementById("notes-window")){
        bringToFront(document.getElementById("notes-window"));
        return;
    }

    const win=document.createElement("div");

    win.className="window";
    win.id="notes-window";

    win.style.left="180px";
    win.style.top="120px";
    win.style.width="650px";
    win.style.zIndex=++zTop;

    win.innerHTML=`

<div class="window-titlebar">

<div class="dots">
<div class="dot red"></div>
<div class="dot yellow"></div>
<div class="dot green"></div>
</div>

<div class="window-title">
About Me
</div>

</div>

<div class="notes-content">

<div class="profile">

<img src="Images/hero-photo.jpg">

<h2>Anand Mishra</h2>

<p class="role">
Brand Identity & Product Designer
</p>

</div>

<div class="notes-section">

<h3>Hello 👋</h3>

<p>

I'm a designer focused on creating memorable
brand identities and digital experiences.
I enjoy solving problems through design,
building visual systems, and experimenting
with interactive experiences like this portfolio.

</p>

</div>

<div class="notes-section">

<h3>Skills</h3>

<div class="skill-grid">

<span>Brand Identity</span>

<span>Packaging</span>

<span>UI / UX</span>

<span>Typography</span>

<span>Illustration</span>

<span>Motion</span>

<span>HTML</span>

<span>CSS</span>

<span>JavaScript</span>

<span>Figma</span>

<span>Illustrator</span>

<span>Photoshop</span>

</div>

</div>

<div class="notes-section">

<h3>Experience</h3>

<p>

• Brand Designer

<br>

• UI / UX Designer


</p>

</div>

<div class="notes-buttons">

<a href="Images/Anand Mishra.pdf" target="_blank" class="note-btn">

Download Resume

</a>

<a href="mailto:monilmishra4@gmail.com" class="note-btn">

Let's Talk

</a>

</div>

</div>

`;

    desktop.appendChild(win);

    bringToFront(win);

    const closeBtn=win.querySelector(".dot.red");

    closeBtn.addEventListener("pointerdown",e=>e.stopPropagation());

    closeBtn.onclick=()=>win.remove();

    const bar=win.querySelector(".window-titlebar");

    let drag=false,x,y,l,t;

    bar.onpointerdown=e=>{

        if(e.target.closest(".dots")) return;

        drag=true;

        x=e.clientX;

        y=e.clientY;

        l=win.offsetLeft;

        t=win.offsetTop;

        bringToFront(win);

        bar.setPointerCapture(e.pointerId);

    }

    bar.onpointermove=e=>{

        if(!drag) return;

        win.style.left=l+(e.clientX-x)+"px";

        win.style.top=t+(e.clientY-y)+"px";

    }

    bar.onpointerup=()=>drag=false;

}
document.getElementById("sketch-app").addEventListener("click", openSketch);
function openSketch(){

    if(document.getElementById("sketch-window")){
        bringToFront(document.getElementById("sketch-window"));
        return;
    }

    const win=document.createElement("div");

    win.className="window";
    win.id="sketch-window";

    win.style.width="820px";
    win.style.left="170px";
    win.style.top="90px";
    win.style.zIndex=++zTop;

    win.innerHTML=`

<div class="window-titlebar">

<div class="dots">

<div class="dot red"></div>

<div class="dot yellow"></div>

<div class="dot green"></div>

</div>

<div class="window-title">
Sketch Pad
</div>

</div>

<div class="sketch-toolbar">

<button id="clearCanvas">
Clear</button>

<input type="color" id="brushColor" value="#000000">

<input
type="range"
id="brushSize"
min="2"
max="20"
value="4">

</div>

<canvas
id="drawingCanvas"
width="760"
height="500">
</canvas>

`;

    desktop.appendChild(win);

    bringToFront(win);

    /* close */

    const closeBtn=win.querySelector(".dot.red");

    closeBtn.addEventListener("pointerdown",e=>e.stopPropagation());

    closeBtn.onclick=()=>win.remove();

    /* drag */

    const bar=win.querySelector(".window-titlebar");

    let drag=false,x,y,l,t;

    bar.onpointerdown=e=>{

        if(e.target.closest(".dots")) return;

        drag=true;

        x=e.clientX;
        y=e.clientY;

        l=win.offsetLeft;
        t=win.offsetTop;

        bringToFront(win);

        bar.setPointerCapture(e.pointerId);

    }

    bar.onpointermove=e=>{

        if(!drag) return;

        win.style.left=l+(e.clientX-x)+"px";
        win.style.top=t+(e.clientY-y)+"px";

    }

    bar.onpointerup=()=>drag=false;

    /* drawing */

    const canvas=win.querySelector("#drawingCanvas");

    const ctx=canvas.getContext("2d");

    ctx.lineCap="round";
    ctx.lineJoin="round";

    let drawing=false;

    canvas.addEventListener("pointerdown",(e)=>{

        drawing=true;

        ctx.beginPath();

        ctx.moveTo(e.offsetX,e.offsetY);

    });

    canvas.addEventListener("pointermove",(e)=>{

        if(!drawing) return;

        ctx.strokeStyle=win.querySelector("#brushColor").value;

        ctx.lineWidth=win.querySelector("#brushSize").value;

        ctx.lineTo(e.offsetX,e.offsetY);

        ctx.stroke();

    });

    window.addEventListener("pointerup",()=>drawing=false);

    win.querySelector("#clearCanvas").onclick=()=>{

        ctx.clearRect(0,0,canvas.width,canvas.height);

    };

}
document.getElementById("gallery-app").addEventListener("click", openWorkspace);
function openWorkspace(){

    if(document.getElementById("workspace-window")){
        bringToFront(document.getElementById("workspace-window"));
        return;
    }

    const win=document.createElement("div");

    win.className="window";
    win.id="workspace-window";

    win.style.width="760px";
    win.style.left="220px";
    win.style.top="80px";
    win.style.zIndex=++zTop;

    win.innerHTML=`

<div class="window-titlebar">

<div class="dots">
<div class="dot red"></div>
<div class="dot yellow"></div>
<div class="dot green"></div>
</div>

<div class="window-title">

Creative Workspace

</div>

</div>

<div class="workspace">

<div class="workspace-item">
<img src="Images/workspace/pantone.png">
<span>Brand Identity</span>
</div>

<div class="workspace-item">
<img src="Images/workspace/package.png">
<span>Packaging</span>
</div>

<div class="workspace-item">
<img src="Images/workspace/poster.png">
<span>Posters</span>
</div>

<div class="workspace-item">
<img src="Images/workspace/camera.png">
<span>Behind the Scenes</span>
</div>

<div class="workspace-item">
<img src="Images/workspace/sketchbook.png">
<span>Sketchbook</span>
</div>

<div class="workspace-item">
<img src="Images/workspace/coffee.png">
<span>Coffee</span>
</div>

</div>

`;

    desktop.appendChild(win);

    bringToFront(win);

    win.querySelector(".dot.red").onclick=()=>win.remove();

    const bar=win.querySelector(".window-titlebar");

    let drag=false,x,y,l,t;

    bar.onpointerdown=e=>{

        if(e.target.closest(".dots")) return;

        drag=true;

        x=e.clientX;
        y=e.clientY;

        l=win.offsetLeft;
        t=win.offsetTop;

        bringToFront(win);

        bar.setPointerCapture(e.pointerId);

    }

    bar.onpointermove=e=>{

        if(!drag) return;

        win.style.left=l+(e.clientX-x)+"px";
        win.style.top=t+(e.clientY-y)+"px";

    }

    bar.onpointerup=()=>drag=false;

}
document.getElementById("coffee-app").addEventListener("click", openCoffee);