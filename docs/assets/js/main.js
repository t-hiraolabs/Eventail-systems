// ----- intro screen -----
// 初回訪問時のみ、数秒間 Hero 相当の情報を全画面表示してから通常表示へ切り替える
(function(){
  const intro = document.getElementById('intro');
  if(!intro) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.body.classList.add('intro-active');
  window.setTimeout(()=>{
    intro.classList.add('intro-hide');
    document.body.classList.remove('intro-active');
    if(reduceMotion){ intro.remove(); }
    else{ intro.addEventListener('transitionend', ()=> intro.remove(), {once:true}); }
  }, reduceMotion ? 1200 : 2200);
})();

// ----- year -----
document.getElementById('yr').textContent = new Date().getFullYear();

// ----- header scroll state -----
const hdr = document.getElementById('hdr');
const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 40);
onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

// ----- mobile nav -----
function closeNav(){
  document.getElementById('mnav').classList.remove('open');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
}

// ----- reveal on scroll -----
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* =====================================================================
   お問い合わせフォームの送信処理
   ---------------------------------------------------------------------
   Formspree（https://formspree.io/）へPOST送信します。
   1. Formspreeでフォームを作成し、発行されたendpointを
      index.html の <form action="..."> に設定してください。
   2. 送信後は自動で完了メッセージへ切り替わります。
   ===================================================================== */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async function(ev){
  ev.preventDefault();
  const form = ev.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = '送信中…';

  try{
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if(res.ok){
      form.innerHTML = '<p class="form-success">お問い合わせありがとうございます。内容を確認のうえ、24時間以内にご返信いたします。</p>';
    } else {
      throw new Error('送信に失敗しました');
    }
  } catch(err){
    submitBtn.disabled = false;
    submitBtn.textContent = 'この内容で送信する';
    alert('送信に失敗しました。お手数ですが hiraolabs@gmail.com へ直接ご連絡ください。');
  }
});
