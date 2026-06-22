// ----- year -----
document.getElementById('yr').textContent = new Date().getFullYear();

// ----- header scroll state -----
const hdr = document.getElementById('hdr');
const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 40);
onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

// ----- mobile nav -----
function closeNav(){ document.getElementById('mnav').classList.remove('open'); }

// ----- reveal on scroll -----
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* =====================================================================
   お問い合わせフォームの送信処理
   ---------------------------------------------------------------------
   初期状態では mailto: でメールソフトを起動します。
   送信先アドレスを下の TO に設定してください。
   ▼ Formspree など外部フォームに変える場合：
     1. この mailto 処理を削除
     2. <form> タグに action="https://formspree.io/f/xxxx" method="POST" を追加
   ===================================================================== */
const TO = "your-email@example.com";   // ← 受信したいメールアドレスに変更
document.getElementById('contactForm').addEventListener('submit', function(ev){
  ev.preventDefault();
  const f = ev.target;
  const g = id => (f.querySelector('#'+id)?.value || '').trim();
  const body =
`お名前：${g('name')}
会社・屋号：${g('company')}
メール：${g('email')}
種別：${g('type')}
ご予算：${g('budget')}
希望納期：${g('deadline')}

ご相談内容：
${g('message')}`;
  const subject = `【お問い合わせ】${g('type')} / ${g('name')}様`;
  window.location.href =
    `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});