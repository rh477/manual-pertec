const fs = require('fs');
const PATH = 'c:/Users/rh/OneDrive/Documentos/ClaudeCode/ccos-ratos/projetos/manual-colaborador.html';
let html = fs.readFileSync(PATH, 'utf8');

// ── 1. CSS COMPLETO ───────────────────────────────────────────────────────────
const newCSS = `<style>
:root{--verde:#8DC63F;--vd:#6aaa28;--laranja:#F47920;--lj:#d4640f;--txt:#222;--sub:#444;--cinza:#f7f7f7}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Arial',sans-serif;background:#fff;color:var(--txt)}

/* ── NAV ── */
.nav-lat{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:300;display:flex;flex-direction:column;background:rgba(255,255,255,.97);border-radius:14px 0 0 14px;padding:0;box-shadow:-4px 0 20px rgba(0,0,0,.1);min-width:190px;transition:min-width .25s}
.nav-lat.recolhido{min-width:40px}
.nav-toggle{all:unset;cursor:pointer;display:flex;align-items:center;justify-content:flex-end;padding:12px 14px 10px;border-bottom:1px solid #f0f0f0;color:#aaa;font-size:14px;width:100%;box-sizing:border-box}
.nav-lat.recolhido .nav-toggle{justify-content:center;border-bottom:none}
.nav-arrow{display:inline-block;transition:transform .25s}
.nav-lat.recolhido .nav-arrow{transform:rotate(180deg)}
.nav-items{display:flex;flex-direction:column;padding:6px 0}
.nav-lat.recolhido .nav-items{display:none}
.nav-a{display:flex;align-items:center;gap:9px;text-decoration:none;padding:6px 16px;font-size:11.5px;color:#666;border-left:3px solid transparent;transition:all .15s;white-space:nowrap}
.nav-a:hover{color:var(--laranja);border-left-color:var(--laranja);background:rgba(244,121,32,.04)}
.nav-a.ativo{color:#111;font-weight:700;border-left-color:var(--verde);background:rgba(141,198,63,.07)}
.nav-cor{width:9px;height:9px;border-radius:50%;flex-shrink:0}

/* ── CAPA ── */
.capa{min-height:100vh;background:#fff;position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 320px}
.capa-logo{height:130px;object-fit:contain;display:block;margin-bottom:44px;position:relative;z-index:2}
.capa-mid{text-align:center;position:relative;z-index:2}
.capa-l1{font-size:72px;font-weight:200;color:#333;line-height:1.05;letter-spacing:-.5px}
.capa-l2{font-size:72px;font-weight:900;color:var(--txt);line-height:1.05}
.capa-sub{font-size:19px;color:#888;margin-top:18px;font-weight:300}
/* Mascotes da capa — Per topo-esquerda, Tec baixo-direita */
.capa-per{position:absolute;top:0;left:0;z-index:3}
.capa-per img{height:min(78vh,580px);object-fit:contain;display:block;filter:drop-shadow(0 20px 40px rgba(0,0,0,.15))}
.capa-tec{position:absolute;bottom:0;right:0;z-index:3}
.capa-tec img{height:min(78vh,580px);object-fit:contain;display:block;filter:drop-shadow(0 20px 40px rgba(0,0,0,.15))}
/* Decoração sutil da capa — barras finas no canto superior direito */
.capa-deco{position:absolute;top:0;right:0;width:200px;height:300px;pointer-events:none;overflow:hidden;z-index:1}
.deco-g1{position:absolute;top:-60px;right:-60px;width:120px;height:320px;background:var(--verde);transform:rotate(-20deg);border-radius:6px;opacity:.7}
.deco-g2{position:absolute;top:40px;right:60px;width:60px;height:200px;background:var(--vd);transform:rotate(-20deg);border-radius:6px;opacity:.4}
.deco-o1{position:absolute;top:120px;right:-30px;width:80px;height:200px;background:var(--laranja);transform:rotate(-20deg);border-radius:6px;opacity:.6}

/* ── SEÇÃO: layout flutuante ── */
.secao{min-height:100vh;background:#fff;border-top:1px solid #efefef;position:relative;overflow:hidden;scroll-margin-top:0}

/* Número grande decorativo no fundo */
.sec-num-bg{position:absolute;bottom:-20px;right:20px;font-size:240px;font-weight:900;color:var(--verde);opacity:.04;line-height:1;pointer-events:none;user-select:none;z-index:1;font-family:'Arial',sans-serif}
.sec-num-bg.pos-esq{right:auto;left:20px}

/* Conteúdo full-width com espaço para mascote */
.sec-content{padding:80px 400px 80px 100px;display:flex;flex-direction:column;justify-content:center;min-height:100vh;gap:0;position:relative;z-index:2}
.sec-content.mascote-esq{padding:80px 100px 80px 400px}

/* Pílula de rótulo */
.sec-badge-pill{display:inline-flex;align-items:center;background:var(--verde);color:#fff;font-size:12px;font-weight:700;padding:7px 22px;border-radius:30px;text-transform:uppercase;letter-spacing:.1em;margin-bottom:30px;width:fit-content}
.sec-title-wrap{margin-bottom:44px}
.sec-title-light{font-size:58px;font-weight:200;color:#2a2a2a;line-height:1.08;letter-spacing:-.5px}
.sec-title-bold{font-size:58px;font-weight:900;color:var(--txt);line-height:1.08}
.sec-body{display:flex;flex-direction:column;gap:20px}

/* Mascote flutuante sobre o conteúdo */
.sec-mascote{position:absolute;bottom:0;right:0;height:min(88vh,680px);width:auto;object-fit:contain;z-index:5;filter:drop-shadow(0 16px 32px rgba(0,0,0,.18))}
.sec-mascote.pos-esq{right:auto;left:0;transform:scaleX(-1)}
/* Flip no original: desfaz o flip para reposicionar */
.sec-mascote.era-flip{transform:scaleX(-1)}
.sec-mascote.pos-esq.era-flip{transform:scaleX(1)}

/* ── BOTÃO IMPRIMIR ── */
.btn-print{display:inline-flex;align-items:center;gap:8px;background:var(--verde);color:#fff;border:none;border-radius:12px;padding:14px 28px;font-size:16px;font-weight:700;cursor:pointer;margin-bottom:28px;transition:background .2s}
.btn-print:hover{background:var(--vd)}

/* ── CARDS DE CONTEÚDO ── */
.card{border-radius:14px;padding:24px 30px;border-left:5px solid #ddd;background:#fff;box-shadow:0 4px 16px rgba(0,0,0,.05)}
.card.verde{border-left-color:var(--verde);background:#f8fdf1}
.card.laranja{border-left-color:var(--laranja);background:#fff8f2}
.card.proibido{border-left-color:#cc2020;background:#fff5f5}
.card.atencao{border-left-color:var(--laranja);background:#fffbf0}
.card.legal{border-left-color:#3070cc;background:#f4f8ff}
.card.destaque{border-left-color:var(--vd);background:#f0fce6}
.card.branco{border-left-color:#ddd;background:#fff;border:1.5px solid #eee}
.card-tit{font-size:15.5px;font-weight:800;margin-bottom:14px;display:flex;align-items:center;gap:9px;text-transform:uppercase;letter-spacing:.04em}
.card-tit.verde{color:var(--vd)}
.card-tit.laranja{color:var(--lj)}
.card-tit.vermelho{color:#cc2020}
.card-tit.azul{color:#2060bb}
.ico{font-size:18px;flex-shrink:0}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:18px}

/* ── TIPOGRAFIA ── */
p{font-size:17px;line-height:1.9;color:var(--sub);margin-bottom:8px}
ul,ol{padding-left:22px;margin:4px 0 8px}
li{font-size:17px;line-height:1.9;color:var(--sub);margin-bottom:6px}
h3{font-size:18px;font-weight:800;color:var(--laranja);margin:16px 0 10px;letter-spacing:.04em;text-transform:uppercase}
h4{font-size:16px;font-weight:700;color:var(--txt);margin:14px 0 7px}
strong{color:var(--txt);font-weight:700}

/* ── VALORES ── */
.valores{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin:10px 0}
.valor{border-radius:16px;padding:22px 20px;box-shadow:0 4px 16px rgba(0,0,0,.1)}
.valor.verde-card{background:linear-gradient(135deg,var(--verde),var(--vd))}
.valor.laranja-card{background:linear-gradient(135deg,var(--laranja),var(--lj))}
.valor strong{display:block;font-size:15px;font-weight:800;color:#fff;margin-bottom:6px}
.valor span{font-size:14px;color:rgba(255,255,255,.92);line-height:1.6}

/* ── TABELA ── */
.tabela{width:100%;border-collapse:collapse;margin:14px 0;font-size:16px;border-radius:10px;overflow:hidden}
.tabela th{background:var(--verde);color:#fff;padding:13px 18px;text-align:left;font-weight:700}
.tabela td{padding:11px 18px;border-bottom:1px solid #eee;color:var(--sub)}
.tabela tr:nth-child(even) td{background:#f9fdf5}

/* ── TERMO ── */
.termo-box{background:#fafafa;border:1.5px solid #eee;border-radius:18px;padding:36px 44px}
.termo-box h4{color:var(--vd);font-size:17px;margin-bottom:20px;text-align:center;font-weight:700}
.linha-ass{border-bottom:1.5px solid #444;margin:26px 0 5px}
.campo-ass{font-size:12px;color:#888}

/* ── MISC ── */
.flip{transform:scaleX(-1)}
.rodape{text-align:center;padding:56px 20px;font-size:13px;color:#bbb;background:#fafafa;border-top:1px solid #efefef}

/* ── IMPRESSÃO ── */
@media print {
  body.printing-termo .nav-lat,
  body.printing-termo .capa,
  body.printing-termo #s1,body.printing-termo #s2,body.printing-termo #s3,
  body.printing-termo #s4,body.printing-termo #s5,body.printing-termo #s6,
  body.printing-termo #s7,body.printing-termo #s8,body.printing-termo #s9,
  body.printing-termo #s10,body.printing-termo #s11,body.printing-termo #s12,
  body.printing-termo #s13,body.printing-termo #s14,body.printing-termo #s15,
  body.printing-termo #s16,
  body.printing-termo .rodape{display:none!important}

  body.printing-termo #s17{min-height:auto!important;border:none!important}
  body.printing-termo .sec-mascote{display:none!important}
  body.printing-termo .sec-num-bg{display:none!important}
  body.printing-termo .sec-badge-pill{display:none!important}
  body.printing-termo .sec-title-wrap{display:none!important}
  body.printing-termo .btn-print{display:none!important}
  body.printing-termo .sec-content{
    padding:20mm!important;
    min-height:auto!important;
    width:100%!important
  }
  body.printing-termo .termo-box{
    border:none!important;
    background:#fff!important;
    padding:0!important
  }
  body.printing-termo .termo-box p,
  body.printing-termo .termo-box li{
    text-align:justify!important;
    font-size:12pt!important;
    line-height:1.8!important;
    color:#000!important
  }
  body.printing-termo .termo-box h4{
    font-size:14pt!important;
    text-align:center!important;
    margin-bottom:20pt!important
  }
  body.printing-termo .linha-ass{border-bottom:1pt solid #000!important;margin:20pt 0 4pt!important}
  body.printing-termo .campo-ass{font-size:10pt!important}
  body.printing-termo .assinatura p{font-size:12pt!important}
}

/* ── RESPONSIVE ── */
@media(max-width:900px){
  .secao{overflow:visible}
  .sec-content{padding:40px 28px!important;min-height:auto}
  .sec-title-light,.sec-title-bold{font-size:36px}
  .capa{padding:40px 20px}
  .capa-l1,.capa-l2{font-size:42px}
  .capa-per img,.capa-tec img{height:220px}
  .sec-mascote{height:220px;position:relative;bottom:auto;right:auto;left:auto;display:block;margin:0 auto}
  .nav-lat{display:none}
  .grid2{grid-template-columns:1fr}
}
</style>`;

html = html.replace(/<style>[\s\S]*?<\/style>/, newCSS);
console.log('CSS atualizado ✓');

// ── 2. CAPA: retira deco grande, logo centralizada, Per topo-esq, Tec baixo-dir ──
const newCapa = `<!-- ========== CAPA ========== -->
<section class="capa" id="capa">
  <div class="capa-deco" aria-hidden="true">
    <div class="deco-g1"></div>
    <div class="deco-g2"></div>
    <div class="deco-o1"></div>
  </div>
  <img src="../marca/LogoPertec-FundoTransparente%20(1).png" class="capa-logo" alt="Pertec Móveis">
  <div class="capa-mid">
    <div class="capa-l1">Manual do</div>
    <div class="capa-l2">Colaborador</div>
    <div class="capa-sub">Políticas Internas — Pertec Móveis</div>
  </div>
  <div class="capa-per"><img src="../marca/Per%20pulando.png" alt="Per"></div>
  <div class="capa-tec"><img src="../marca/Tec%20pulando.png" alt="Tec"></div>
</section>`;

html = html.replace(/<!-- ={10} CAPA ={10} -->[\s\S]*?<\/section>/, newCapa);
console.log('Capa atualizada ✓');

// ── 3. S17: adicionar botão imprimir ─────────────────────────────────────────
html = html.replace(
  `  <div class="sec-body">
    <div class="termo-box">`,
  `  <div class="sec-body">
    <button class="btn-print" onclick="document.body.classList.add('printing-termo');window.print();setTimeout(function(){document.body.classList.remove('printing-termo')},1500)">🖨️ Imprimir Termo</button>
    <div class="termo-box">`
);
console.log('Botão imprimir adicionado ✓');

// ── 4. SCRIPT: reestruturador atualizado ──────────────────────────────────────
const newScript = `<script>
// ── Nav scroll spy ────────────────────────────────────────────────────────────
const navAs=document.querySelectorAll('.nav-a[href^="#"]');
const alvos=[];
navAs.forEach(a=>{const id=a.getAttribute('href').slice(1);const el=document.getElementById(id);if(el)alvos.push({el,a})});
function atualizar(){
  const topo=window.scrollY+120;let atual=null;
  for(const{el,a}of alvos){if(el.offsetTop<=topo)atual=a}
  navAs.forEach(a=>a.classList.remove('ativo'));
  if(atual)atual.classList.add('ativo');
}
window.addEventListener('scroll',atualizar,{passive:true});
atualizar();

// ── Reestruturar layout: conteúdo full-width + mascote flutuante ──────────────
const LABELS={"s1":"Objetivo","s2":"Identidade","s3":"Estrutura","s4":"Aplicação","s5":"Diretrizes","s6":"Conduta","s7":"CLT & Direitos","s8":"Recrutamento","s9":"Onboarding","s10":"Benefícios","s11":"Saúde & Bem-Estar","s12":"Comunicação","s13":"Desligamento","s14":"Canal Ético","s15":"Disciplinar","s16":"Disposições Finais","s17":"Termo"};
// Números das seções para o fundo decorativo
const NUMS={"s1":"01","s2":"02","s3":"03","s4":"04","s5":"05","s6":"06","s7":"07","s8":"08","s9":"09","s10":"10","s11":"11","s12":"12","s13":"13","s14":"14","s15":"15","s16":"16","s17":"17"};

document.querySelectorAll('.secao').forEach(sec=>{
  const id=sec.id;
  const hdr=sec.querySelector('.sec-hdr');
  if(!hdr)return;
  const mascCol=hdr.querySelector('.sec-masc-col');
  const badge=hdr.querySelector('.sec-badge');
  const body=sec.querySelector('.sec-body');
  if(!mascCol||!badge||!body)return;

  // Detectar cor de acento
  const isLaranja=badge.classList.contains('laranja');
  const isRed=(badge.getAttribute('style')||'').includes('cc2020');
  const badgeColor=isRed?'#cc2020':isLaranja?'var(--laranja)':'var(--verde)';

  // Detectar imagem e direção
  const img=mascCol.querySelector('img');
  const hadFlip=img&&img.classList.contains('flip');
  const srcLower=img?(img.getAttribute('src')||'').toLowerCase():'';
  const isLado=srcLower.includes('para%20o%20lado')||srcLower.includes('para o lado');

  // Mascote à esquerda quando: aponta para o lado E não tem flip (original aponta direita → posicionar à esq → texto à direita)
  const mascoteEsq=isLado&&!hadFlip;

  // ── LEFT: conteúdo ──
  const secContent=document.createElement('div');
  secContent.className='sec-content'+(mascoteEsq?' mascote-esq':'');

  const pill=document.createElement('span');
  pill.className='sec-badge-pill';
  pill.style.background=badgeColor;
  pill.textContent=LABELS[id]||id;
  secContent.appendChild(pill);

  const titleWrap=document.createElement('div');
  titleWrap.className='sec-title-wrap';
  const titleEl=badge.querySelector('.sec-title');
  const titleText=titleEl?titleEl.innerHTML.replace(/<br\s*\/?>/gi,' ').replace(/<[^>]+>/g,'').trim():'';
  const words=titleText.split(' ');
  const mid=Math.ceil(words.length/2);
  const line1=words.slice(0,mid).join(' ');
  const line2=words.slice(mid).join(' ');
  const tl=document.createElement('div');
  tl.className='sec-title-light';
  tl.textContent=line1;
  const tb=document.createElement('div');
  tb.className='sec-title-bold';
  tb.textContent=line2||'';
  titleWrap.appendChild(tl);
  if(line2)titleWrap.appendChild(tb);
  secContent.appendChild(titleWrap);

  body.className='sec-body';
  secContent.appendChild(body);

  // ── Número decorativo de fundo ──
  const numBg=document.createElement('div');
  numBg.className='sec-num-bg'+(mascoteEsq?' pos-esq':'');
  numBg.textContent=NUMS[id]||'';

  // ── Mascote flutuante ──
  if(img){
    img.className='sec-mascote'+(hadFlip?' era-flip':'')+(mascoteEsq?' pos-esq':'');
  }

  // Reconstruir seção
  sec.innerHTML='';
  sec.appendChild(secContent);
  sec.appendChild(numBg);
  if(img)sec.appendChild(img);
});

// ── Nav toggle ────────────────────────────────────────────────────────────────
const navToggle=document.getElementById('navToggle');
const navLat=document.getElementById('navLat');
navToggle.addEventListener('click',()=>{
  navLat.classList.toggle('recolhido');
  navToggle.title=navLat.classList.contains('recolhido')?'Expandir menu':'Recolher menu';
});
</script>`;

html = html.replace(/<script>[\s\S]*?<\/script>/, newScript);
console.log('Script atualizado ✓');

// ── 5. SALVAR ─────────────────────────────────────────────────────────────────
fs.writeFileSync(PATH, html, 'utf8');
console.log('\nTudo salvo.');
