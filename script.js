/* ═══════════════════════════════════════
   webprishtina — script.js v3
═══════════════════════════════════════ */

/* ════ NAVBAR ════ */
(function(){
  const nav  = document.getElementById('navbar');
  const hbg  = document.getElementById('hamburger');
  const menu = document.getElementById('navLinks');
  const links = menu.querySelectorAll('.nav-link');
  const sections = [...document.querySelectorAll('section[id]')];

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    const y = window.scrollY + 90;
    let cur = '';
    sections.forEach(s => { if (s.offsetTop <= y) cur = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  }, { passive: true });

  hbg.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') menu.classList.remove('open');
  });
})();

/* ════ SCROLL REVEAL ════ */
(function(){
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ════ TYPEWRITER ════ */
(function(){
  const el = document.getElementById('typewriter');
  if (!el) return;
  const words = ['DIGITAL MASTERPIECES','WEB EXPERIENCES','BRAND IDENTITIES','MARKETING RESULTS','BUSINESS GROWTH'];
  let wi = 0, ci = 0, del = false;
  function tick() {
    const w = words[wi];
    if (!del) {
      el.textContent = w.slice(0, ++ci);
      if (ci === w.length) { del = true; setTimeout(tick, 2200); return; }
    } else {
      el.textContent = w.slice(0, --ci);
      if (ci === 0) { del = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(tick, del ? 38 : 82);
  }
  setTimeout(tick, 900);
})();

/* ════ HERO COUNTERS ════ */
(function(){
  const nums = document.querySelectorAll('.hnum');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseFloat(el.dataset.target);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const dec    = parseInt(el.dataset.dec) || 0;
      const dur = 1600, t0 = performance.now();
      (function frame(now) {
        const p = Math.min((now - t0) / dur, 1);
        const v = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + (target * v).toFixed(dec) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      })(t0);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(n => obs.observe(n));
})();

/* ════ FAQ ACCORDION ════ */
(function(){
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.fq').addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });
})();

/* ════ PROJECT CARDS ════ */
(function(){
  const PROJECTS = [
    /* ── REAL ── */
    {
      live: true,
      name: 'Master Service Chef',
      cat: 'Media',
      desc: 'RTK Television culinary competition — full digital production including web platform, social media strategy and marketing. Reached 1M+ viewers across Kosovo.',
      tags: ['React', 'Next.js', 'Node.js', 'Vercel'],
      url: 'https://masterservicechef.com',
    },
    {
      live: true,
      name: 'Nyja Solutions',
      cat: 'SaaS',
      desc: 'AI prompt design & solutions platform with OpenAI integration. Prompt gallery, categories, and file upload system built for enterprise clients.',
      tags: ['React', 'Vite', 'OpenAI', 'Vercel'],
      url: 'https://nyjasolutionspromptdesigns.vercel.app',
    },
    /* ── CONCEPT ── */
    {
      live: false,
      name: 'Dev Path',
      cat: 'SaaS',
      desc: 'Interactive developer roadmap platform with skill trees, progress tracking, and curated learning resources for junior developers.',
      tags: ['React', 'Node.js', 'MongoDB'],
      url: 'https://dev-path-hazel.vercel.app',
    },
    {
      live: false,
      name: 'Frix Friterie',
      cat: 'Web',
      desc: 'Modern restaurant website with digital menu, allergen filters, and an online pre-order system integrated with POS.',
      tags: ['HTML', 'CSS', 'JS'],
      url: 'https://frixfriterie.vercel.app',
    },
    {
      live: false,
      name: 'Matisse Cakery',
      cat: 'Branding',
      desc: 'Premium bakery brand identity — custom logo, pastel packaging system, and a full e-commerce website concept for a high-end cakery.',
      tags: ['Figma', 'HTML', 'CSS'],
      url: 'https://matissecakery.vercel.app',
    },
    {
      live: false,
      name: 'Auto Sallon Alberti',
      cat: 'Web',
      desc: 'Automotive dealership showcase site with searchable inventory, vehicle detail pages, and integrated lead capture system.',
      tags: ['HTML', 'CSS', 'JS'],
      url: 'https://autosallonalberti.vercel.app',
    },
    {
      live: false,
      name: 'DP Perfumum',
      cat: 'E-comm',
      desc: 'Luxury perfume e-commerce platform with an immersive product exploration experience, scent quiz, and wishlist system.',
      tags: ['React', 'Shopify', 'JS'],
      url: 'https://dpperfumum.vercel.app',
    },
    {
      live: false,
      name: 'Patundshmëri',
      cat: 'Web',
      desc: 'Real estate marketplace with advanced property search, interactive map view, and mortgage calculator for the Kosovo market.',
      tags: ['React', 'Laravel', 'Maps API'],
      url: 'https://patundshmeri.vercel.app',
    },
    {
      live: false,
      name: 'ExCoins',
      cat: 'SaaS',
      desc: 'Crypto exchange dashboard with real-time price charts, portfolio tracking, and swap interface for popular assets.',
      tags: ['React', 'WebSockets', 'Chart.js'],
      url: 'https://excoins.vercel.app',
    },
    {
      live: false,
      name: 'Yummy Bubble Tea',
      cat: 'Web',
      desc: 'Bubble tea shop website with a customizable drink builder, pickup scheduling, and loyalty points concept.',
      tags: ['HTML', 'CSS', 'JS'],
      url: 'https://yummybubbletea.vercel.app',
    },
    {
      live: false,
      name: 'Buffalo',
      cat: 'Branding',
      desc: 'Bold American restaurant brand identity system — aggressive typography, raw textures, and a full visual language for print and digital.',
      tags: ['Figma', 'HTML', 'CSS'],
      url: 'https://buffalo-umber.vercel.app',
    },
    {
      live: false,
      name: 'Hillstone',
      cat: 'Web',
      desc: 'Premium boutique hotel website with immersive room galleries, availability booking, and bespoke concierge request flow.',
      tags: ['Next.js', 'React', 'Vercel'],
      url: 'https://hillstone-fi89.vercel.app',
    },
  ];

  const grid = document.getElementById('projGrid');
  if (!grid) return;

  PROJECTS.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'pcard reveal';
    card.innerHTML = `
      <div class="pcard-top">
        <div class="pcard-status ${p.live ? 'live' : 'concept'}">
          <span class="pcard-dot ${p.live ? 'live' : 'concept'}"></span>
          ${p.live ? 'Live' : 'Concept'}
        </div>
        <span class="pcard-cat">${p.cat}</span>
      </div>
      <div class="pcard-name">${p.name}</div>
      <div class="pcard-desc">${p.desc}</div>
      <div class="pcard-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="pcard-foot">
        ${p.url
          ? `<a href="${p.url}" target="_blank" rel="noopener" class="pcard-live-btn">${p.live ? 'Watch Live ↗' : 'Watch Demo ↗'}</a>`
          : `<span class="pcard-nda">Private / NDA</span>`}
        <span class="pcard-num">${String(i + 1).padStart(2, '0')}</span>
      </div>`;
    grid.appendChild(card);
  });

  /* re-observe the freshly created cards for scroll reveal */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 55);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
  grid.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* ── mobile carousel ── */
  const prevBtn   = document.getElementById('projPrev');
  const nextBtn   = document.getElementById('projNext');
  const counterEl = document.getElementById('projCounter');
  let projIdx = 0;

  const isMobile = () => window.innerWidth <= 768;
  const total    = PROJECTS.length;

  function updateProjCarousel() {
    if (!isMobile()) { grid.style.transform = ''; return; }
    grid.style.transform = `translateX(-${projIdx * 100}%)`;
    if (counterEl) counterEl.textContent =
      `${String(projIdx + 1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
    if (prevBtn) prevBtn.style.opacity = projIdx === 0 ? '.3' : '1';
    if (nextBtn) nextBtn.style.opacity = projIdx >= total - 1 ? '.3' : '1';
  }

  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (projIdx > 0) { projIdx--; updateProjCarousel(); }
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    if (projIdx < total - 1) { projIdx++; updateProjCarousel(); }
  });

  window.addEventListener('resize', () => { projIdx = 0; updateProjCarousel(); });
  updateProjCarousel();
})();

/* ════ AI NEWS CAROUSEL ════ */
(function(){
  const newsData = [
    { t:'GPT-5 Architecture',      b:'OpenAI unveiled GPT-5 with 200K context windows, improved reasoning, and dramatically reduced hallucination rates — a major leap in LLM reliability.' },
    { t:'Quantum ML Breakthrough',  b:'IBM & Google demonstrated quantum advantage in ML tasks, achieving 100× speedups on optimization problems that stump classical hardware.' },
    { t:'Neural Interface Record',  b:'Neuralink hit 40 WPM thought-typing in clinical trials — a 3× improvement over prior BCI records, enabling paralyzed patients to communicate.' },
    { t:'Autonomous Agents Scale',  b:'Agent frameworks like CrewAI and Claude\'s Agent SDK are now in enterprise environments handling multi-step workflows without human input.' },
    { t:'Edge AI Chips Surge',      b:'Apple, Qualcomm & MediaTek ship silicon capable of running 7B+ parameter models locally, eliminating cloud dependency for many AI tasks.' },
    { t:'Multimodal Models Advance',b:'Latest multimodal LLMs process video, audio, and images simultaneously — enabling real-time cross-modal reasoning at near-human accuracy.' },
    { t:'EU AI Act in Effect',      b:'The EU AI Act mandates risk classification for all AI systems. Major firms are deploying red-teaming and ethics boards to ensure compliance.' },
    { t:'Synthetic Data Revolution',b:'Leading AI labs now replace 40–60% of real training data with synthetic datasets, cutting costs while improving model robustness.' },
    { t:'RAG Systems Hit 95%',      b:'New retrieval-augmented generation techniques combining dense+sparse retrieval and re-ranking push accuracy above 95% on enterprise KBs.' },
    { t:'Vector DBs at Scale',      b:'Pinecone, Weaviate & pgvector handle trillion-scale vector searches with sub-millisecond latency, enabling global semantic search in real-time.' },
    { t:'AI Hardware Wars',         b:'NVIDIA Blackwell, AMD MI300X, and custom chips from Amazon (Trainium) and Google (TPU v5) reshape compute — costs down 40% YoY.' },
    { t:'Federated Learning Matures',b:'Federated learning widely deployed in healthcare and finance — models train across decentralized data without centralizing sensitive info.' },
    { t:'Green AI Push',            b:'Major AI labs commit to carbon-neutral training by 2026. Distillation and sparse training cut energy per inference by up to 80%.' },
    { t:'UN AI Safety Accord',      b:'The UN AI Safety Summit produced binding agreements on frontier AI testing. 30 nations now require pre-deployment safety evaluations.' },
    { t:'Computer Vision Leaps',    b:'Vision transformers surpass human accuracy in industrial defect detection and medical imaging, processing 4K video at 120fps on dedicated silicon.' },
    { t:'Code Gen Matures',         b:'Code models now pass competitive programming benchmarks at 78% — comparable to senior engineers on routine implementation tasks.' },
    { t:'AI in Healthcare',         b:'FDA approved 15 new AI-powered diagnostic tools in 2025 covering radiology, pathology, and genomics. AI diagnosis is standard at leading hospitals.' },
    { t:'Humanoid Robots Deploy',   b:'Boston Dynamics, Figure & 1X are deploying humanoid robots in warehouses. Foundation models enable zero-shot task generalization.' },
    { t:'AGI Safety Advances',      b:'Anthropic, DeepMind & OpenAI publish major advances in interpretability. Steering vector techniques enable reliable model behavior control at scale.' },
    { t:'AI Content Watermarking',  b:'China mandates watermarking for AI-generated content. The US considers similar rules — platform liability for AI outputs litigated in 12 countries.' },
    { t:'Grokking Explained',       b:'Researchers explain why transformers suddenly generalize after extended training — opening new doors in model compression and efficiency.' },
    { t:'RLAIF Replaces RLHF',      b:'RL from AI Feedback and Constitutional AI are becoming the dominant training paradigm, enabling safer and more instruction-following models.' },
  ];

  const track    = document.getElementById('newsTrack');
  const dotsWrap = document.getElementById('newsDots');
  const prevBtn  = document.getElementById('newsPrev');
  const nextBtn  = document.getElementById('newsNext');
  if (!track) return;

  const PERPAGE = () => window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
  let idx = 0;

  /* build cards */
  newsData.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'nbox';
    card.innerHTML = `
      <div class="nbox-top">
        <div class="nbox-title">${item.t}</div>
        <span class="nbox-num">${String(i + 1).padStart(2, '0')}</span>
      </div>
      <div class="nbox-preview">${item.b}</div>
      <div class="nbox-body"><div class="nbox-body-inner">${item.b}</div></div>
      <button class="nbox-toggle">Read more +</button>`;
    card.addEventListener('click', () => {
      const open = card.classList.contains('expanded');
      document.querySelectorAll('.nbox.expanded').forEach(c => c.classList.remove('expanded'));
      card.querySelector('.nbox-toggle').textContent = open ? 'Read more +' : 'Close −';
      if (!open) card.classList.add('expanded');
      else card.querySelector('.nbox-toggle').textContent = 'Read more +';
    });
    track.appendChild(card);
  });

  /* dots */
  function totalPages() { return Math.ceil(newsData.length / PERPAGE()); }
  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < totalPages(); i++) {
      const d = document.createElement('button');
      d.className = 'ndot' + (i === idx ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  }

  function goTo(i) {
    const pp = PERPAGE();
    idx = Math.max(0, Math.min(i, totalPages() - 1));
    const cards = track.querySelectorAll('.nbox');
    const cardW = cards[0] ? cards[0].offsetWidth + 14 : 0;
    track.style.transform = `translateX(-${idx * pp * cardW}px)`;
    dotsWrap.querySelectorAll('.ndot').forEach((d, j) => d.classList.toggle('active', j === idx));
    prevBtn.style.opacity = idx === 0 ? '0.35' : '1';
    nextBtn.style.opacity = idx >= totalPages() - 1 ? '0.35' : '1';
  }

  prevBtn.addEventListener('click', () => goTo(idx - 1));
  nextBtn.addEventListener('click', () => goTo(idx + 1));
  window.addEventListener('resize', () => { buildDots(); goTo(0); });

  buildDots();
  goTo(0);
})();

/* ════ CONTACT FORM ════ */
(function(){
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = document.getElementById('submitBtn');
    const txt  = document.getElementById('submitText');
    const load = document.getElementById('submitLoader');
    const ok   = document.getElementById('formSuccess');
    const err  = document.getElementById('formError');
    btn.disabled = true; txt.style.display = 'none'; load.style.display = 'inline';
    ok.style.display = 'none'; err.style.display = 'none';
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }
      });
      if (res.ok) { form.reset(); ok.style.display = 'block'; }
      else throw new Error();
    } catch { err.style.display = 'block'; }
    finally { btn.disabled = false; txt.style.display = 'inline'; load.style.display = 'none'; }
  });
})();

/* ════ KOSOVO LIVE CLOCK ════ */
(function(){
  const timeEl = document.getElementById('kosovoTime');
  const dateEl = document.getElementById('kosovoDate');
  if (!timeEl) return;
  function update() {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('en-GB', { timeZone: 'Europe/Belgrade', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    dateEl.textContent = now.toLocaleDateString('en-GB', { timeZone: 'Europe/Belgrade', weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
  }
  update();
  setInterval(update, 1000);
})();

/* ════ BACK TO TOP ════ */
(function(){
  const btn = document.getElementById('backTop');
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 500), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ════ CHATBOT ════ */
(function(){
  const toggle   = document.getElementById('chatToggle');
  const panel    = document.getElementById('chatPanel');
  const input    = document.getElementById('chatInput');
  const msgs     = document.getElementById('chatMsgs');
  const fabLogo  = document.getElementById('chatFabLogo');
  const closeIco = document.getElementById('chatCloseIco');
  let open = false;

  toggle.addEventListener('click', () => {
    open = !open;
    panel.classList.toggle('open', open);
    fabLogo.style.display  = open ? 'none'  : 'block';
    closeIco.style.display = open ? 'block' : 'none';
  });
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendChatMessage(); });

  const KB = [
    { k:['hello','hi','hey','hej','salam','start','help'], r:'Hello! How can I help you?\n\nAsk me about:\n• Services & pricing\n• Starting a project\n• Booking a call\n• Our portfolio\n• Contact info' },
    { k:['service','offer','what do','provide'], r:'We offer 6 core services:\n\n— Web Development\n— Social Media Marketing\n— Social Media Management\n— Logo & Branding\n— Graphic Design\n— Digital Marketing\n\nWhich interests you?' },
    { k:['web','website','develop','build','code','app'], r:'Our web stack includes React, Next.js, Vue.js, Node.js, Laravel, and Python. 247+ projects built — from landing pages to full SaaS platforms.\n\nCheck the Projects section for live examples.' },
    { k:['social','instagram','facebook','tiktok','marketing','campaign'], r:'Social media services:\n\n— Marketing: paid ads, campaigns, influencer\n— Management: daily posting, engagement, growth\n— Analytics: tracking & reporting\n\n$27,000+ in ad spend managed. +23% avg ROI improvement.' },
    { k:['price','cost','how much','rate','budget','fee','discount','offer'], r:'🎉 LIMITED OFFER — 40% OFF right now!\n\nPricing (after 40% discount):\n\n• Landing page: from €180 (was €300)\n• Business site: from €480 (was €800)\n• E-commerce: from €720 (was €1,200)\n• Social media: from €150/mo (was €250)\n• Branding: from €210 (was €350)\n\nDon\'t miss this — book your free call today:\ncal.com/anesdemolli' },
    { k:['time','timeline','how long','deadline','week','month'], r:'Typical timelines:\n\n• Landing page: 1–2 weeks\n• Business site: 2–4 weeks\n• E-commerce: 4–6 weeks\n• Web app: 6–12 weeks\n• Branding: 1–2 weeks' },
    { k:['contact','reach','email','phone','whatsapp'], r:'Reach us at:\n\n— Phone: +383 (44) 366/680\n— Email: info@anesdemolli.tech\n— WhatsApp: +383 (44) 366/680\n— Location: Prishtina, Kosovo\n\nOr fill the contact form on this page.' },
    { k:['book','call','meeting','schedule','consult','cal'], r:'Book a free 30-min strategy call:\n\ncal.com/anesdemolli\n\nOr click "Book on Cal.com" in the Contact section. No commitment — just a conversation.' },
    { k:['project','portfolio','work','example','case','built'], r:'247+ projects completed!\n\nReal projects:\n— Master Service Chef (RTK TV, 1M+ viewers)\n— Nyja Solutions (AI prompt platform)\n\nPlus many concept explorations. Scroll to Projects → click any item in the terminal.' },
    { k:['about','who','company','team','story','founded'], r:'webprishtina — full-service digital agency in Prishtina, Kosovo.\n\n— Founded: 2021\n— 5+ years experience\n— 247 projects done\n— $27K+ ad spend managed\n— 300M+ views generated' },
    { k:['rtk','master service chef','television','tv'], r:'Our flagship project!\n\n— RTK Television (national broadcaster)\n— 1M+ viewers\n— 4.8 rating\n— 50+ episodes\n\nWe handled web, social strategy & digital marketing.\n\nmasterservicechef.com' },
    { k:['prishtina','kosovo','location','where','based'], r:'Based in Prishtina, Kosovo.\n\nOur symbol is "Hyjnesha Ne Front" — the Goddess at the Front — representing strength and vision.\n\nWe serve clients locally and internationally.' },
  ];

  function findReply(msg) {
    const l = msg.toLowerCase();
    for (const item of KB) {
      if (item.k.some(k => l.includes(k))) return item.r;
    }
    return 'Not sure about that one.\n\n— Phone: +383 (44) 366/680\n— Email: info@anesdemolli.tech\n— Book a call: cal.com/anesdemolli\n\nOr ask about: services, pricing, timeline, projects, or contact!';
  }

  function addMsg(text, type) {
    const w = document.createElement('div'); w.className = `cmsg ${type}`;
    const b = document.createElement('div'); b.className = 'cbubble'; b.textContent = text;
    const t = document.createElement('div'); t.className = 'ctime';
    t.textContent = new Date().toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' });
    w.appendChild(b); w.appendChild(t); msgs.appendChild(w); msgs.scrollTop = msgs.scrollHeight;
    return b;
  }

  function showTyping() {
    const w = document.createElement('div'); w.className = 'cmsg cbot';
    w.innerHTML = '<div class="typing-ind"><div class="tyd"></div><div class="tyd"></div><div class="tyd"></div></div>';
    msgs.appendChild(w); msgs.scrollTop = msgs.scrollHeight; return w;
  }

  function typeText(bubble, text) {
    bubble.textContent = ''; let i = 0;
    const iv = setInterval(() => {
      bubble.textContent += text[i++];
      msgs.scrollTop = msgs.scrollHeight;
      if (i >= text.length) clearInterval(iv);
    }, 11);
  }

  window.sendChatMessage = function() {
    const val = input.value.trim(); if (!val) return;
    input.value = '';
    addMsg(val, 'cuser');
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      const w = document.createElement('div'); w.className = 'cmsg cbot';
      const b = document.createElement('div'); b.className = 'cbubble';
      const t = document.createElement('div'); t.className = 'ctime';
      t.textContent = new Date().toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' });
      w.appendChild(b); w.appendChild(t); msgs.appendChild(w); msgs.scrollTop = msgs.scrollHeight;
      typeText(b, findReply(val));
    }, 480 + Math.random() * 550);
  };

  window.sendSuggestion = function(text) {
    input.value = text; sendChatMessage();
    const chips = msgs.querySelector('.chat-chips');
    if (chips) chips.remove();
  };
})();
