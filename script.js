"use strict";
/* ==========================================================================
   MZ STORE — single-file site. Edit the CONFIG blocks below; nothing else needs touching.

   HOW TO REPLACE IMAGES: every image has its own path below. Put your file at that
   path (or change the path). If a file is missing, a neutral placeholder showing the
   expected path appears instead, so you never see a broken image.
   Set CFG.placeholderLabels=false before launch to hide the path text on placeholders.
   Paths live in: IMG (logo, about), HERO (5 banners: d=desktop, m=mobile, bg=optional
   background), CATS (3 category cards), PRODUCTS (img + gallery[]), FRAG (5 cards).
   ========================================================================== */
const CFG={
  wa:"923212102756",waShow:"+92 321 2102756",email:"mzperfumes2.0@gmail.com",
  tiktok:"https://www.tiktok.com/@mz.perfumes2.0",pay:"03212102756",
  maxQty:20,placeholderLabels:true,fragHover:false,site:"",
  /* Delivery: null = unknown (shown as "To be confirmed"). Example: chargesByCity:{Karachi:250} */
  ship:{defaultCharge:null,freeShippingThreshold:null,chargesByCity:{}}
};
const IMG={
  logo:"assets/images/logo/mz-store-logo.svg",
  about:"about.png",
  aboutBg:"" /* optional section background, e.g. assets/images/about/bg.webp */
};
/* a = text alignment (left|center|right), ov = overlay strength 0-1, c/c2 = buttons.
   Button targets: "#products" | "category:men" | "product:janan-gold" | "whatsapp" | "https://..." */

const HERO = [
  {
    t: "Discover your signature scent",
    x: "Premium fragrances in 3 ml, 5 ml, 30 ml and 50 ml bottles. Start small and find your favourite.",
    c: ["Shop all fragrances", "#products"],
    c2: ["Chat on WhatsApp", "whatsapp"],
    a: "left",
    ov: 0.45,
    d: "banner1.png",
    m: "assets/images/banners/banner-01-mobile.webp",
    bg: "",
    pos: "center"
  },
  {
    t: "Fragrances that match your personality",
    x: "Sizes start from {from}. Try a small bottle before you commit to a bigger one.",
    c: ["Browse the collection", "#products"],
    a: "right",
    ov: 0.5,
    d: "banner2.png",
    m: "assets/images/banners/banner-04-mobile.webp",
    bg: "",
    pos: "center"
  },
  {
    t: "Find your favourite perfume at MZ Store",
    x: "Delivery all over Pakistan. Order on WhatsApp with Cash on Delivery or Easypaisa.",
    c: ["Start shopping", "#products"],
    c2: ["Order on WhatsApp", "whatsapp"],
    a: "center",
    ov: 0.45,
    d: "banner3.png",
    m: "assets/images/banners/banner-05-mobile.webp",
    bg: "",
    pos: "center"
  }
];

const CATS=[
{k:"men",t:"Fragrances for Him",c:"Explore Men's Collection",img:"men.jfif",pos:"center",ov:.6,alt:"Men's fragrances"},
{k:"women",t:"Fragrances for Her",c:"Explore Women's Collection",img:"for girl.jfif",pos:"center",ov:.6,alt:"Women's fragrances"},
{k:"unisex",t:"Fragrances for Everyone",c:"Explore Unisex Scents",img:"unisex.jfif",pos:"center",ov:.6,alt:"Unisex fragrances"}
];
/* Five image-only cards. p = product opened on click. note = optional hover text (needs CFG.fragHover=true). */
const FRAG=[
{p:"creed-aventus",img:"frag1.png",pos:"center",note:""},
{p:"janan-gold",img:"frag2.png",pos:"center",note:""},
{p:"ignite",img:"ignite.png",pos:"center",note:""},
{p:"gucci-flora",img:"gucci.png",pos:"center",note:""},
{p:"black-opium",img:"black.png",pos:"center",note:""}
];
/* Prices: change them once here. cat = men | women | unisex | "" (blank = shown under All only).
   badge = optional label (e.g. "New"). stock: null = not tracked, 0 = sold out, number = units. */
const V=()=>[["3ml",120],["5ml",250],["30ml",1200],["50ml",2000]].map(a=>({size:a[0],price:a[1],stock:null}));
const PRODUCTS=[
{id:"creed-aventus",name:"Creed Aventus",cat:"men",desc:"A men's fragrance in four bottle sizes, from a 3 ml trial to a full 50 ml.",img:"creed.png",gallery:[],badge:"",variants:V(),active:true},
{id:"janan-gold",name:"Janan Gold",cat:"unisex",desc:"A fragrance for everyone, available in 3 ml, 5 ml, 30 ml and 50 ml.",img:"janan.png",gallery:[],badge:"",variants:V(),active:true},
{id:"ignite",name:"Ignite",cat:"unisex",desc:"A fragrance for everyone, available in 3 ml, 5 ml, 30 ml and 50 ml.",img:"oud.png",gallery:[],badge:"",variants:V(),active:true},
{id:"gucci-flora",name:"Gucci Flora",cat:"women",desc:"A women's fragrance in four bottle sizes, from a 3 ml trial to a full 50 ml.",img:"gucci1.png",gallery:[],badge:"",variants:V(),active:true},
{id:"black-opium",name:"Black Opium",cat:"women",desc:"A women's fragrance in four bottle sizes, from a 3 ml trial to a full 50 ml.",img:"opium.png",gallery:[],badge:"",variants:V(),active:true}
];
/* Add real reviews only: {name:"Ayesha K.",text:"...",rating:5,product:"Black Opium",verified:true} */
const REVIEWS=[];
const NAV=[["Home","#home","home"],["All Products","#products","all","all"],["For Men","#products","men","men"],["For Women","#products","women","women"],["Contact","#contact","contact"]];
const INFO_DRAFT='<p class="dn">Draft for owner review. Please confirm and edit before launch.</p>';
const INFO={
delivery:["Delivery information","<p>We deliver all over Pakistan. Delivery charges apply and are confirmed by MZ Store on WhatsApp before your order is confirmed.</p>"],
payment:["Payment methods","<p><b>Cash on Delivery:</b> pay when your order arrives.</p><p><b>Easypaisa advance payment:</b> send payment to "+CFG.pay+" as per MZ Store's confirmation, then share your Transaction ID. A Transaction ID alone does not verify payment; payment is only counted once MZ Store confirms it.</p>"],
faq:["Frequently asked questions","<details><summary>How do I order?</summary><p>Add perfumes to your cart, open checkout, fill in your details and press Send order on WhatsApp. Then press Send in WhatsApp.</p></details><details><summary>Which sizes are available?</summary><p>3 ml, 5 ml, 30 ml and 50 ml.</p></details><details><summary>Which payment methods do you accept?</summary><p>Cash on Delivery and Easypaisa advance payment.</p></details><details><summary>When is my order confirmed?</summary><p>Only after MZ Store replies on WhatsApp to confirm it and the delivery charges.</p></details>"],
returns:["Returns and refunds",INFO_DRAFT+"<p>[Owner to confirm: return window, item condition, who pays return shipping, and which sizes are eligible.]</p><p>If your order arrives damaged or incorrect, message us on WhatsApp with photos so we can help.</p>"],
privacy:["Privacy policy",INFO_DRAFT+"<p>When you order, you enter your name, phone number and delivery address. This information is placed in a WhatsApp message that you send to MZ Store, and is used only to process and deliver your order.</p><p>Your cart is saved in your own browser so it is still there when you return. This website does not store your payment credentials.</p>"],
terms:["Terms and conditions",INFO_DRAFT+"<p>Prices are in PKR (Rs.). An order is a request until MZ Store confirms it on WhatsApp. Delivery charges are confirmed before the order is confirmed. Easypaisa payments are counted only after MZ Store confirms them.</p><p>[Owner to add any further terms.]</p>"]
};
/* ===== HELPERS ===== */
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const R=n=>"Rs. "+Number(n).toLocaleString("en-US");
const lab=s=>s.replace(/(\d)\s*ml/i,"$1 ml");
const reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
function ph(l){const t=CFG.placeholderLabels?l:"";return"data:image/svg+xml,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#f6f0e6'/><stop offset='1' stop-color='#e2d4b8'/></linearGradient></defs><rect width='800' height='800' fill='url(#g)'/><g fill='none' stroke='#b08d45' stroke-width='3'><rect x='370' y='320' width='60' height='36' rx='4'/><rect x='340' y='356' width='120' height='140' rx='14'/></g><text x='400' y='536' font-family='sans-serif' font-size='20' fill='#8a6a2c' text-anchor='middle'>"+esc(t)+"</text></svg>")}
function fb(i){const p=i.parentElement;if(p&&p.tagName==="PICTURE"&&p.querySelector("source")){p.querySelectorAll("source").forEach(s=>s.remove());return}i.onerror=null;i.src=ph(i.dataset.l||"")}
const im=(s,alt,l,o)=>{o=o||{};return'<img src="'+esc(s||ph(l))+'" alt="'+esc(alt)+'" data-l="'+esc(l)+'"'+(o.e?' fetchpriority="high"':' loading="lazy"')+(o.p?' style="object-position:'+esc(o.p)+'"':"")+' onerror="fb(this)">'};
const tgt=t=>t==="whatsapp"?'href="https://wa.me/'+CFG.wa+'" target="_blank" rel="noopener"':t.indexOf("category:")==0?'href="#products" data-cat="'+t.slice(9)+'"':t.indexOf("product:")==0?'href="#products" data-p="'+t.slice(8)+'"':t.indexOf("http")==0?'href="'+t+'" target="_blank" rel="noopener"':'href="'+t+'"';
/* ===== STATE: cart ===== */
let cart=[],cur=null,last=null,tt,st={cat:"all",q:""},pm={},co={items:[],cart:true};
try{const s=JSON.parse(localStorage.getItem("mz_cart")||"[]");if(Array.isArray(s))cart=s}catch(e){}
const P=id=>PRODUCTS.find(p=>p.id===id&&p.active);
const VR=(p,s)=>p?p.variants.find(v=>v.size===s):null;
const lim=v=>v.stock==null?CFG.maxQty:Math.max(0,Math.min(CFG.maxQty,v.stock));
function clean(){cart=cart.filter(i=>{if(!i||typeof i!=="object")return false;const p=P(i.id),v=VR(p,i.size);if(!v)return false;i.qty=Math.min(parseInt(i.qty,10)||0,lim(v));if(i.qty<1)return false;i.name=p.name;i.price=v.price;i.img=p.img;return true})}
const save=()=>{try{localStorage.setItem("mz_cart",JSON.stringify(cart))}catch(e){}};
const sub=a=>a.reduce((t,i)=>t+i.price*i.qty,0);
const cnt=()=>cart.reduce((t,i)=>t+i.qty,0);
function ship(s,city){const c=CFG.ship,k=(city||"").trim().toLowerCase();if(c.freeShippingThreshold!=null&&s>=c.freeShippingThreshold)return 0;for(const n in c.chargesByCity)if(n.toLowerCase()===k)return c.chargesByCity[n];return c.defaultCharge}
const dtxt=d=>d==null?"To be confirmed":d===0?"Free":R(d);
function add(id,size,q){const p=P(id),v=VR(p,size);q=parseInt(q,10);if(!v||!(q>0)||lim(v)<1){toast("This size is not available.");return false}
const it=cart.find(i=>i.id===id&&i.size===size);if(it)it.qty=Math.min(it.qty+q,lim(v));else cart.push({id:id,size:size,qty:Math.min(q,lim(v))});clean();save();upd();return true}
function mk(id,size,q){const p=P(id),v=VR(p,size);return{id:id,size:size,qty:q,name:p.name,price:v.price,img:p.img}}
function upd(){const n=cnt();$("cc").textContent=n;$("cc").hidden=!n;rc()}
function rc(){const b=$("cB"),f=$("cF");
if(!cart.length){b.innerHTML='<div class="em"><p>Your cart is empty.</p><a class="b" href="#products" data-cat="all">Browse fragrances</a></div>';f.hidden=true;return}
b.innerHTML=cart.map(i=>{const p=P(i.id),v=VR(p,i.size);return'<div class="ci2" data-k="'+esc(i.id+"|"+i.size)+'">'+im(i.img,i.name,"Product: "+i.img)+'<div><b>'+esc(i.name)+'</b><select data-cs aria-label="Bottle size for '+esc(i.name)+'">'+p.variants.map(x=>'<option value="'+x.size+'"'+(x.size===i.size?" selected":"")+(x.stock===0?" disabled":"")+">"+lab(x.size)+" — "+R(x.price)+"</option>").join("")+'</select><div class="qt"><button data-qm aria-label="Decrease quantity"'+(i.qty<=1?" disabled":"")+'>−</button><span>'+i.qty+'</span><button data-qp aria-label="Increase quantity"'+(i.qty>=lim(v)?" disabled":"")+'>+</button></div></div><div class="rt"><b>'+R(i.price*i.qty)+'</b><button data-rm aria-label="Remove '+esc(i.name)+'">Remove</button></div></div>'}).join("");
const s=sub(cart),d=ship(s,"");
f.innerHTML='<div class="tr"><span>Subtotal ('+cnt()+' items)</span><b>'+R(s)+'</b></div><div class="tr"><span>Delivery</span><span>'+dtxt(d)+'</span></div><div class="tr t"><span>Total</span><span>'+(d==null?R(s)+" + delivery":R(s+d))+'</span></div>'+(d==null?'<p class="sm">Delivery charges will be confirmed before order confirmation.</p>':"")+'<button class="b g" data-co>Checkout</button>';f.hidden=false}
function cop(key,fn){const a=key.split("|"),it=cart.find(i=>i.id===a[0]&&i.size===a[1]);if(!it)return;fn(it);clean();save();upd()}
/* ===== LAYERS ===== */
function openL(id){closeL(true);const l=$(id);last=document.activeElement;l.classList.add("on");l.setAttribute("aria-hidden","false");cur=l;document.body.style.overflow="hidden";const f=l.querySelector("[data-f]")||l.querySelector("button,a,input");if(f)f.focus()}
function closeL(k){if(!cur)return;cur.classList.remove("on");cur.setAttribute("aria-hidden","true");cur=null;document.body.style.overflow="";if(!k&&last&&last.focus)last.focus()}
document.addEventListener("keydown",e=>{if(!cur)return;if(e.key==="Escape"){closeL();return}if(e.key!=="Tab")return;
const f=[].slice.call(cur.querySelectorAll("a[href],button:not([disabled]),input:not([disabled]),select,textarea,summary")).filter(x=>x.offsetParent!==null||x===document.activeElement);if(!f.length)return;
const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}});
function toast(m,v){const t=$("ts");t.innerHTML=esc(m)+(v?' <button data-cart>View cart</button>':"");t.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("on"),3200)}
function go(id){requestAnimationFrame(()=>{const e=$(id);if(!e)return;e.scrollIntoView({behavior:reduce?"auto":"smooth"});try{history.replaceState(null,"","#"+id)}catch(x){}})}
/* ===== RENDER: static parts ===== */
function mq(id,l){const g=l.concat(l).map(s=>"<span>"+esc(s)+"</span>").join("");$(id).innerHTML="<div>"+g+g+"</div>"}
mq("mq1",["MZ STORE — YOUR SIGNATURE SCENT","PREMIUM FRAGRANCES FOR EVERY OCCASION","DELIVERY AVAILABLE ALL OVER PAKISTAN","FIND YOUR NEXT FAVOURITE PERFUME","SHOP YOUR FAVOURITE FRAGRANCES TODAY"]);
mq("mq2",["Find your signature scent","Every fragrance tells a story","Discover MZ Store","Your scent, your personality"]);
$("st").innerHTML='<a href="https://wa.me/'+CFG.wa+'" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp: '+CFG.waShow+'</a><a href="mailto:'+CFG.email+'"><i class="fa-regular fa-envelope"></i> '+CFG.email+'</a><span>Delivery available throughout Pakistan</span>';
$("logo").innerHTML='<img src="'+esc(IMG.logo)+'" alt="MZ Store" height="40" onerror="this.replaceWith(Object.assign(document.createElement(\'span\'),{className:\'wm\',textContent:\'MZ Store\'}))">';
const navH=NAV.map(a=>'<a href="'+a[1]+'" data-n="'+a[2]+'"'+(a[3]?' data-cat="'+a[3]+'"':"")+">"+a[0]+"</a>").join("");
$("nv").innerHTML=navH;$("mn").innerHTML=navH+'<a href="https://wa.me/'+CFG.wa+'" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp us</a>';
$("wf").href="https://wa.me/"+CFG.wa;
$("epN").textContent=CFG.pay;
$("cp").textContent="© "+new Date().getFullYear()+" MZ Store. All rights reserved.";
$("ai").innerHTML=im(IMG.about,"MZ Store fragrances","About image: "+IMG.about);
if(IMG.aboutBg)$("about").style.backgroundImage="url('"+IMG.aboutBg+"')";
if(CFG.site){const l=document.createElement("link");l.rel="canonical";l.href=CFG.site;document.head.appendChild(l)}
const minP=Math.min.apply(null,PRODUCTS.map(p=>Math.min.apply(null,p.variants.map(v=>v.price))));
$("cx").innerHTML='<a href="https://wa.me/'+CFG.wa+'" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i><b>WhatsApp</b><span>'+CFG.waShow+'</span></a><a href="mailto:'+CFG.email+'"><i class="fa-regular fa-envelope"></i><b>Email</b><span>'+CFG.email+'</span></a><a href="'+CFG.tiktok+'" target="_blank" rel="noopener"><i class="fa-brands fa-tiktok"></i><b>TikTok</b><span>@mz.perfumes2.0</span></a>';
$("fgd").innerHTML='<div><h3>MZ Store</h3><p>Premium fragrances in four bottle sizes, delivered all over Pakistan.</p><div class="so"><a href="'+CFG.tiktok+'" target="_blank" rel="noopener" aria-label="MZ Store on TikTok"><i class="fa-brands fa-tiktok"></i></a><a href="https://wa.me/'+CFG.wa+'" target="_blank" rel="noopener" aria-label="WhatsApp MZ Store"><i class="fa-brands fa-whatsapp"></i></a></div></div>'
+'<div><h3>Quick links</h3><ul>'+NAV.map(a=>'<li><a href="'+a[1]+'"'+(a[3]?' data-cat="'+a[3]+'"':"")+">"+a[0]+"</a></li>").join("")+'</ul></div>'
+'<div><h3>Customer information</h3><ul>'+[["delivery","Delivery Information"],["payment","Payment Methods"],["faq","Frequently Asked Questions"],["returns","Returns and Refunds"],["privacy","Privacy Policy"],["terms","Terms and Conditions"]].map(a=>'<li><a href="#info-'+a[0]+'" data-info="'+a[0]+'">'+a[1]+"</a></li>").join("")+'</ul></div>'
+'<div><h3>Contact</h3><ul><li>WhatsApp: '+CFG.waShow+'</li><li>Email: '+CFG.email+'</li><li>Delivery: all over Pakistan, with applicable charges</li><li>Easypaisa: '+CFG.pay+'</li></ul></div>';
$("cg").innerHTML=CATS.map(c=>'<a class="cc rv" href="#products" data-cat="'+c.k+'" style="--ov:'+c.ov+'">'+im(c.img,c.alt,"Category: "+c.img,{p:c.pos})+'<div class="tx"><h3>'+esc(c.t)+'</h3><span class="b g">'+esc(c.c)+"</span></div></a>").join("");
$("fg").innerHTML=FRAG.map(f=>{const p=P(f.p);if(!p)return"";return'<button class="fc rv" data-open="'+p.id+'" aria-label="View '+esc(p.name)+'">'+im(f.img,p.name+" fragrance mood image","Fragrance card: "+f.img,{p:f.pos})+(CFG.fragHover&&f.note?"<small>"+esc(f.note)+"</small>":"")+"</button>"}).join("");
$("rvw").innerHTML=REVIEWS.length?'<div class="rg">'+REVIEWS.map(r=>'<figure class="rc rv"><div>'+(r.rating?'<em aria-label="'+r.rating+' out of 5 stars">'+"★".repeat(r.rating)+"</em>":"")+'</div><blockquote>'+esc(r.text)+'</blockquote><figcaption><b>'+esc(r.name)+"</b>"+(r.product?" · "+esc(r.product):"")+(r.verified?" · Verified purchase":"")+"</figcaption></figure>").join("")+"</div>":'<div class="nr rv"><p>Your experience matters to us. Place your first order and share your feedback with MZ Store.</p></div>';
/* ===== PRODUCTS ===== */
const sizes=(p,sel)=>p.variants.map(v=>'<button type="button" class="ch" data-sz="'+v.size+'" aria-pressed="'+(v.size===sel)+'"'+(v.stock===0?" disabled":"")+">"+lab(v.size)+"</button>").join("");
function card(p){const v=p.variants.find(x=>x.stock!==0)||p.variants[0],out=p.variants.every(x=>x.stock===0);
return'<article class="cd rv" data-id="'+p.id+'" data-s="'+v.size+'"><button class="ci" data-open="'+p.id+'" aria-label="View '+esc(p.name)+'">'+im(p.img,p.name+" perfume","Product: "+p.img)+(out?'<b class="bg so">Sold out</b>':p.badge?'<b class="bg">'+esc(p.badge)+"</b>":"")+'</button><div class="cb"><h3><button data-open="'+p.id+'">'+esc(p.name)+'</button></h3><p>'+esc(p.desc)+'</p><div class="sz" role="group" aria-label="Bottle size">'+sizes(p,v.size)+'</div><div class="pr"><strong data-pr>'+R(v.price)+'</strong><span data-sl>'+lab(v.size)+'</span></div><div class="ac"><button class="b" data-add'+(out?" disabled":"")+'>Add to cart</button><button class="b g" data-buy'+(out?" disabled":"")+'>Buy now</button><button class="b o w2" data-open="'+p.id+'">View details</button></div></div></article>'}
function rg(){const q=st.q.toLowerCase(),l=PRODUCTS.filter(p=>p.active&&(st.cat==="all"||p.cat===st.cat)&&p.name.toLowerCase().indexOf(q)>-1);
$("gr").innerHTML=l.length?l.map(card).join(""):'<p class="em">No perfumes found'+(st.q?" for “"+esc(st.q)+"”":" in this category yet")+".</p>";
document.querySelectorAll("[data-tab]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.tab===st.cat));
$("qc").hidden=!st.q;$("qc").textContent="Clear search: “"+st.q+"”";rev();spy()}
function setCat(c){st.cat=c;st.q="";$("q").value="";rg()}
function mkPM(id,size){const p=P(id);if(!p)return;const v=VR(p,size)||p.variants.find(x=>x.stock!==0)||p.variants[0];pm={id:id,size:v.size,q:1,g:0};
const g=[p.img].concat(p.gallery||[]);
$("pB").innerHTML='<div class="pm"><div><div class="main" id="pM">'+im(g[0],p.name,"Product: "+g[0],{e:1})+"</div>"+(g.length>1?'<div class="th">'+g.map((s,i)=>'<button data-g="'+i+'" class="'+(i?"":"on")+'" aria-label="Show image '+(i+1)+'">'+im(s,"","Gallery: "+s)+"</button>").join("")+"</div>":"")+'</div><div class="pi"><h2>'+esc(p.name)+'</h2><span class="sm">'+({men:"For men",women:"For women",unisex:"Unisex"}[p.cat]||"Fragrance")+"</span><p>"+esc(p.desc)+'</p><div class="sz" role="group" aria-label="Bottle size">'+p.variants.map(v=>'<button type="button" class="ch" data-ps="'+v.size+'" aria-pressed="false"'+(v.stock===0?" disabled":"")+">"+lab(v.size)+"</button>").join("")+'</div><div><strong style="font-size:26px" id="pP"></strong><div class="sm" id="pU"></div></div><div class="qt" style="width:max-content"><button data-pq="-1" aria-label="Decrease quantity">−</button><span id="pQ">1</span><button data-pq="1" aria-label="Increase quantity">+</button></div><div class="ac"><button class="b" data-pa>Add to cart</button><button class="b g" data-pbuy>Buy now</button></div><div class="bx"><span><b>Delivery:</b> all over Pakistan. Charges are confirmed by MZ Store before your order is confirmed.</span><span><b>Payment:</b> Cash on Delivery or Easypaisa advance payment.</span><a href="https://wa.me/'+CFG.wa+"?text="+encodeURIComponent("Hi MZ Store, I have a question about "+p.name+".")+'" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Ask about this perfume on WhatsApp</a></div></div></div>';
pms();openL("pL")}
function pms(){const p=P(pm.id),v=VR(p,pm.size);pm.q=Math.max(1,Math.min(pm.q,lim(v)||1));
$("pB").querySelectorAll("[data-ps]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.ps===pm.size));
$("pP").textContent=R(v.price*pm.q);$("pU").textContent=R(v.price)+" per "+lab(v.size)+" bottle";$("pQ").textContent=pm.q;
$("pB").querySelectorAll("[data-pa],[data-pbuy]").forEach(b=>b.disabled=lim(v)<1)}
function openInfo(k){const i=INFO[k];if(!i)return;$("iB").innerHTML="<h2>"+i[0]+"</h2>"+i[1];openL("iL")}
/* ===== CHECKOUT ===== */
const cf=$("cf");
function openCO(items,fromCart){if(!items.length){toast("Your cart is empty.");return}co={items:items,cart:fromCart};$("coMain").hidden=false;$("coDone").hidden=true;rs();openL("coL")}
function rs(){const s=sub(co.items),d=ship(s,cf.elements.city.value);
$("coS").innerHTML=co.items.map(i=>'<div class="cs">'+im(i.img,i.name,"Product: "+i.img)+"<span><b>"+esc(i.name)+"</b><br>"+lab(i.size)+" × "+i.qty+"</span><b>"+R(i.price*i.qty)+"</b></div>").join("")+'<div class="tr" style="margin-top:8px"><span>Subtotal</span><b>'+R(s)+'</b></div><div class="tr"><span>Delivery</span><span>'+dtxt(d)+'</span></div><div class="tr t"><span>Total</span><span>'+(d==null?R(s)+" + delivery":R(s+d))+"</span></div>"+(d==null?'<p class="sm">Delivery charges will be confirmed before order confirmation.</p>':"");
$("epA").textContent="Product total: "+R(s)+(d==null?". Delivery charges are not included and will be confirmed by MZ Store on WhatsApp.":d===0?". Delivery is free.":". Delivery: "+R(d)+". Total: "+R(s+d)+".")}
const RULES=[["name",v=>v.trim().length>=3,"Enter your full name."],["phone",v=>/^(?:\+?92|0)3\d{9}$/.test(v.replace(/[\s-]/g,"")),"Enter a valid Pakistani mobile number, e.g. 0321 2102756."],["address",v=>v.trim().length>=10,"Enter your complete delivery address."],["city",v=>v.trim().length>=2,"Enter your city."],["province",v=>!!v,"Select your province."],["tx",v=>!v.trim()||/^[A-Za-z0-9-]{6,30}$/.test(v.trim()),"Transaction ID must be 6–30 letters or numbers."]];
cf.addEventListener("submit",e=>{e.preventDefault();
const d={};new FormData(cf).forEach((v,k)=>{d[k]=String(v)});let bad=null;
RULES.forEach(r=>{const el=cf.elements[r[0]],ok=(r[0]==="tx"&&d.pay!=="ep")||r[1](d[r[0]]||"");el.setAttribute("aria-invalid",!ok);el.parentElement.querySelector(".er").textContent=ok?"":r[2];if(!ok&&!bad)bad=el});
if(bad){bad.focus();return}
if(!co.items.length){toast("Your cart is empty.");return}
const s=sub(co.items),dl=ship(s,d.city),L=["MZ STORE — NEW ORDER","","Customer Name: "+d.name.trim(),"Phone: "+d.phone.trim(),"City: "+d.city.trim(),"Province: "+d.province,"Address: "+d.address.trim()];
if(d.note&&d.note.trim())L.push("Delivery Instructions: "+d.note.trim());
L.push("","ORDER ITEMS:");
co.items.forEach(i=>{L.push("- "+i.name+" — "+lab(i.size),"  Quantity: "+i.qty,"  Unit Price: "+R(i.price),"  Item Total: "+R(i.price*i.qty),"")});
L.push("Subtotal: "+R(s),"Delivery: "+dtxt(dl),"Total: "+(dl==null?R(s)+" + delivery (to be confirmed)":R(s+dl)),"","Payment Method: "+(d.pay==="ep"?"Easypaisa (advance payment)":"Cash on Delivery"));
if(d.pay==="ep")L.push("Transaction Reference: "+(d.tx.trim()||"Not provided yet"));
L.push("","Please confirm my order and delivery charges.");
const url="https://wa.me/"+CFG.wa+"?text="+encodeURIComponent(L.join("\n"));
$("wl").href=url;$("coMain").hidden=true;$("coDone").hidden=false;
const w=window.open(url,"_blank");if(w)w.opener=null;
$("sent").focus()});
cf.addEventListener("change",e=>{if(e.target.name==="pay"){const ep=e.target.value==="ep";$("epP").hidden=!ep;$("codN").hidden=ep}});
cf.elements.city.addEventListener("input",rs);
$("back").onclick=()=>{$("coMain").hidden=false;$("coDone").hidden=true};
$("sent").onclick=()=>{if(co.cart){cart=[];save();upd()}closeL(true);toast("Thank you! MZ Store will confirm your order on WhatsApp.")};
/* ===== HERO ===== */
let hi=0,hov=false,usr=false,ht;
const hero=$("home");
$("sls").innerHTML=HERO.map((h,i)=>'<section class="sl '+h.a+(i?"":" on")+'" style="--ov:'+h.ov+(h.bg?";background-image:url('"+h.bg+"')":"")+'" aria-roledescription="slide" aria-label="'+(i+1)+" of "+HERO.length+'"><picture>'+(h.m?'<source media="(max-width:767px)" srcset="'+esc(h.m)+'">':"")+im(h.d,"","Banner "+(i+1)+": "+h.d,{e:!i,p:h.pos})+'</picture><div class="ct"><h2>'+esc(h.t)+"</h2><p>"+esc(h.x).replace("{from}",R(minP))+'</p><div class="ab"><a class="b g" '+tgt(h.c[1])+">"+esc(h.c[0])+"</a>"+(h.c2?'<a class="b o" '+tgt(h.c2[1])+">"+esc(h.c2[0])+"</a>":"")+"</div></div></section>").join("");
$("dots").innerHTML=HERO.map((h,i)=>'<button data-hd="'+i+'" aria-label="Go to slide '+(i+1)+'"><i></i></button>').join("");
function sh(n){hi=(n+HERO.length)%HERO.length;hero.querySelectorAll(".sl").forEach((s,i)=>{s.classList.toggle("on",i===hi);s.inert=i!==hi});$("dots").querySelectorAll("button").forEach((b,i)=>i===hi?b.setAttribute("aria-current","true"):b.removeAttribute("aria-current"))}
function auto(){clearInterval(ht);if(!hov&&!usr&&!reduce&&!document.hidden)ht=setInterval(()=>sh(hi+1),6500)}
hero.addEventListener("mouseenter",()=>{hov=true;auto()});hero.addEventListener("mouseleave",()=>{hov=false;auto()});
hero.addEventListener("focusin",()=>{hov=true;auto()});hero.addEventListener("focusout",()=>{hov=false;auto()});
document.addEventListener("visibilitychange",auto);
let tx=0,ty=0;
hero.addEventListener("touchstart",e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
hero.addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5)sh(hi+(dx<0?1:-1))},{passive:true});
$("hpz").onclick=()=>{usr=!usr;$("hpz").innerHTML='<i class="fa-solid fa-'+(usr?"play":"pause")+'"></i>';$("hpz").setAttribute("aria-label",usr?"Play slideshow":"Pause slideshow");auto()};
/* ===== SEARCH ===== */
const qi=$("q"),qr=$("qr");
qi.addEventListener("input",()=>{const v=qi.value.trim().toLowerCase();if(!v){qr.hidden=true;return}
const l=PRODUCTS.filter(p=>p.active&&p.name.toLowerCase().indexOf(v)>-1);
qr.innerHTML=l.length?l.map(p=>'<button data-open="'+p.id+'">'+im(p.img,"","Product: "+p.img)+"<span>"+esc(p.name)+"<small>From "+R(Math.min.apply(null,p.variants.map(x=>x.price)))+"</small></span></button>").join(""):"<p>No perfumes found.</p>";qr.hidden=false});
qi.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();st.q=qi.value.trim();st.cat="all";qr.hidden=true;rg();go("products")}else if(e.key==="Escape")qr.hidden=true});
document.addEventListener("click",e=>{if(!e.target.closest(".sr"))qr.hidden=true});
$("qc").onclick=()=>{st.q="";qi.value="";rg()};
/* ===== NAV SPY, REVEAL ===== */
const SP=[["home","home"],["categories","home"],["products","pr"],["about",""],["contact","contact"]];
let tick=false;
function spy(){const y=window.scrollY+$("hd").offsetHeight+60;let k="";SP.forEach(a=>{const e=$(a[0]);if(e&&e.getBoundingClientRect().top+window.scrollY<=y)k=a[1]});if(k==="pr")k=(st.cat==="men"||st.cat==="women")?st.cat:"all";
document.querySelectorAll("[data-n]").forEach(a=>{if(a.dataset.n===k)a.setAttribute("aria-current","true");else a.removeAttribute("aria-current")})}
window.addEventListener("scroll",()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{tick=false;spy()})},{passive:true});
const io="IntersectionObserver"in window?new IntersectionObserver((es,o)=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");o.unobserve(x.target)}}),{threshold:.1}):null;
if(io)document.documentElement.classList.add("js");
function rev(){document.querySelectorAll(".rv:not(.in)").forEach(e=>{if(io)io.observe(e);else e.classList.add("in")})}
function hh(){document.documentElement.style.setProperty("--hh",$("hd").offsetHeight+"px")}
window.addEventListener("resize",hh);window.addEventListener("load",hh);
/* ===== EVENTS ===== */
document.addEventListener("click",e=>{const t=e.target,c=s=>t.closest(s);let x;
if(c("[data-x]")){closeL();return}
if(x=c("[data-cart]")){openL("cL");return}
if(c("[data-co]")){openCO(cart.map(i=>Object.assign({},i)),true);return}
if(x=c("[data-tab]")){setCat(x.dataset.tab);return}
if(x=c("[data-hs]")){sh(hi+parseInt(x.dataset.hs,10));return}
if(x=c("[data-hd]")){sh(parseInt(x.dataset.hd,10));return}
if(x=c("[data-cp]")){const done=()=>toast("Easypaisa number copied.");if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(CFG.pay).then(done,()=>toast("Copy failed. Please select the number and copy it."));else toast("Copy is not supported here. Please select the number and copy it.");return}
const cd=c(".cd");
if(cd&&(x=c("[data-sz]"))){cd.dataset.s=x.dataset.sz;cd.querySelectorAll("[data-sz]").forEach(b=>b.setAttribute("aria-pressed",b===x));const v=VR(P(cd.dataset.id),x.dataset.sz);cd.querySelector("[data-pr]").textContent=R(v.price);cd.querySelector("[data-sl]").textContent=lab(v.size);return}
if(cd&&c("[data-add]")){if(add(cd.dataset.id,cd.dataset.s,1))toast(P(cd.dataset.id).name+" ("+lab(cd.dataset.s)+") added to cart.",1);return}
if(cd&&c("[data-buy]")){openCO([mk(cd.dataset.id,cd.dataset.s,1)],false);return}
if(x=c("[data-open]")){qr.hidden=true;mkPM(x.dataset.open,x.closest(".cd")?x.closest(".cd").dataset.s:"");return}
if(x=c(".ci2")){const k=x.dataset.k;if(c("[data-qm]"))cop(k,i=>{i.qty-=1});else if(c("[data-qp]"))cop(k,i=>{i.qty+=1});else if(c("[data-rm]"))cop(k,i=>{i.qty=0});return}
if(c("#pB")){
if(x=c("[data-ps]")){pm.size=x.dataset.ps;pms();return}
if(x=c("[data-pq]")){pm.q+=parseInt(x.dataset.pq,10);pms();return}
if(x=c("[data-g]")){const p=P(pm.id),g=[p.img].concat(p.gallery||[]),i=parseInt(x.dataset.g,10);$("pM").innerHTML=im(g[i],p.name,"Product: "+g[i],{e:1});$("pB").querySelectorAll("[data-g]").forEach(b=>b.classList.toggle("on",b===x));return}
if(c("[data-pa]")){if(add(pm.id,pm.size,pm.q))toast(P(pm.id).name+" ("+lab(pm.size)+") added to cart.",1);return}
if(c("[data-pbuy]")){const it=mk(pm.id,pm.size,pm.q);openCO([it],false);return}}
if(x=c("a[href^='#']")){const h=x.getAttribute("href");if(h.length<2)return;e.preventDefault();closeL(true);
if(x.dataset.info){openInfo(x.dataset.info);return}
if(x.dataset.cat)setCat(x.dataset.cat);
if(x.dataset.p){go("products");mkPM(x.dataset.p,"");return}
go(h.slice(1))}});
$("cB").addEventListener("change",e=>{const s=e.target.closest("[data-cs]");if(!s)return;cop(s.closest(".ci2").dataset.k,it=>{const ex=cart.find(i=>i.id===it.id&&i.size===s.value&&i!==it);if(ex){ex.qty+=it.qty;it.qty=0}else it.size=s.value})});
$("mbtn").onclick=()=>openL("mL");
/* ===== INIT ===== */
clean();save();upd();rg();sh(0);auto();hh();spy();
if(location.hash.indexOf("#info-")===0)openInfo(location.hash.slice(6));
