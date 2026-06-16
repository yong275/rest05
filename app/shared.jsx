/* 토리키즈 — 공통 컴포넌트 & 훅 (React) */
const { useState, useEffect, useRef } = React;

/* ---------- 데이터 ---------- */
const THEMES = [
  { id: 'blue-yellow', label: '파랑 · 노랑', a: '#2F6BFF', b: '#FFB72B' },
  { id: 'red-yellow', label: '빨강 · 노랑', a: '#EE4B43', b: '#FFC02E' },
  { id: 'blue-pink', label: '파랑 · 핑크', a: '#2F6BFF', b: '#FF5FA2' },
  { id: 'green-yellow', label: '초록 · 노랑', a: '#16A86C', b: '#FFB72B' },
  { id: 'purple-pink', label: '보라 · 핑크', a: '#8B5CF6', b: '#FF6FB0' },
  { id: 'teal-coral', label: '청록 · 코랄', a: '#16A9C6', b: '#FF6B5C' },
];
const NAV = [
  ['/courses', '코스'],
  ['/teachers', '선생님'],
  ['/reviews', '수강후기'],
  ['/faq', '자주 묻는 질문'],
];

/* ---------- 라우팅 (해시) ---------- */
function navigate(path) { window.location.hash = '#' + path; }
function useHashRoute() {
  const read = () => {
    const h = window.location.hash.replace(/^#/, '');
    return h && h.startsWith('/') ? h : '/';
  };
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onHash = () => { setRoute(read()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

/* ---------- 테마 / 모드 훅 ---------- */
function freeze() { document.documentElement.classList.add('theme-switching'); }
function thaw() {
  requestAnimationFrame(() => requestAnimationFrame(() =>
    document.documentElement.classList.remove('theme-switching')));
}
function useThemeMode() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('tori-theme') || 'blue-yellow'; } catch (e) { return 'blue-yellow'; }
  });
  const [mode, setMode] = useState(() => {
    try { return localStorage.getItem('tori-mode') || 'light'; } catch (e) { return 'light'; }
  });
  useEffect(() => {
    freeze();
    const link = document.getElementById('themeStyle');
    if (link) link.setAttribute('href', 'themes/' + theme + '.css');
    try { localStorage.setItem('tori-theme', theme); } catch (e) {}
    thaw();
  }, [theme]);
  useEffect(() => {
    freeze();
    if (mode === 'dark') document.documentElement.setAttribute('data-mode', 'dark');
    else document.documentElement.removeAttribute('data-mode');
    try { localStorage.setItem('tori-mode', mode); } catch (e) {}
    thaw();
  }, [mode]);
  return { theme, setTheme, mode, setMode };
}

/* ---------- 마스코트 로고 ---------- */
function Mascot({ footer = false }) {
  const bg = footer ? 'rgba(255,255,255,.12)' : '#E9F1FF';
  const cap = footer ? '#A9C4FF' : '#1740C9';
  const body = footer ? '#5A8BFF' : '#2F6BFF';
  const stem = footer ? '#fff' : '#1740C9';
  return (
    <svg className="mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="22" r="22" fill={bg} />
      <rect x="21" y="6" width="2" height="6" rx="1" fill={stem} />
      <circle cx="22" cy="6.5" r="2" fill="#FFB72B" />
      <path d="M13 21c0-1 4-2 9-2s9 1 9 2c0 7-4 13-9 13s-9-6-9-13z" fill={body} />
      <path d="M11 19c0-4 5-7 11-7s11 3 11 7c0 1.6-1 2.2-2.2 2.2H13.2C12 21.2 11 20.6 11 19z" fill={cap} />
      <circle cx="18.6" cy="25" r="1.5" fill="#fff" />
      <circle cx="25.4" cy="25" r="1.5" fill="#fff" />
      <path d="M19 29c1.4 1.5 4.6 1.5 6 0" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- 스크롤 등장 ---------- */
function Reveal({ children, as = 'div', className = '', ...rest }) {
  const Tag = as;
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setVis(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setVis(true); io.unobserve(el); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={('reveal ' + (vis ? 'in ' : '') + className).trim()} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- 숫자 카운트업 ---------- */
function CountUp({ to, dec = false }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const run = () => {
      const dur = 1400; let start = null;
      const tick = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(to * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (!('IntersectionObserver' in window)) { setVal(to); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(); io.unobserve(el); } });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [to]);
  return <span ref={ref}>{dec ? val.toFixed(1) : Math.round(val).toLocaleString('ko-KR')}</span>;
}

/* ---------- 마퀴 ---------- */
function Marquee() {
  const seg = (
    <span>한글 떼기<i className="star">✦</i>수 놀이<i className="star">✦</i>파닉스<i className="star">✦</i>창의 사고력<i className="star">✦</i>매일 15분<i className="star">✦</i>놀이 학습<i className="star">✦</i></span>
  );
  return (
    <div className="marquee" style={{ background: 'var(--cream)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="marquee-track">{seg}{seg}</div>
    </div>
  );
}

/* ---------- CTA 배너 ---------- */
function CtaBand({ deco = '🐿️', title, text, primary = ['/apply', '무료체험 신청하기'], secondary }) {
  return (
    <Reveal className="cta-band">
      <span className="deco">{deco}</span>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a href={'#' + primary[0]} className="btn btn-yellow btn-lg">{primary[1]}</a>
        {secondary && <a href={'#' + secondary[0]} className="btn btn-white btn-lg">{secondary[1]}</a>}
      </div>
    </Reveal>
  );
}

/* ---------- 헤더 ---------- */
function Header({ route }) {
  const { theme, setTheme, mode, setMode } = useThemeMode();
  const [drawer, setDrawer] = useState(false);
  const [palette, setPalette] = useState(false);
  const palRef = useRef(null);
  useEffect(() => {
    const onDoc = (e) => { if (palRef.current && !palRef.current.contains(e.target)) setPalette(false); };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);
  useEffect(() => { setDrawer(false); }, [route]);
  return (
    <header className="site-header">
      <nav className="nav wrap">
        <a className="brand" href="#/" onClick={() => setDrawer(false)}>
          <Mascot /><span>토리<b>키즈</b></span>
        </a>
        <ul className={'nav-menu' + (drawer ? ' open' : '')}>
          {NAV.map(([path, label]) => (
            <li key={path}><a href={'#' + path} className={route === path ? 'active' : ''}>{label}</a></li>
          ))}
        </ul>
        <div className="nav-cta">
          <button className="mode-btn" aria-label="다크/라이트 모드 전환" title="다크/라이트 모드 전환"
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
            <span className="sun">☀️</span><span className="moon">🌙</span>
          </button>
          <div className="palette" ref={palRef}>
            <button className="palette-btn" aria-label="색상 테마 변경" title="색상 테마 변경"
              onClick={(e) => { e.stopPropagation(); setPalette((v) => !v); }}>🎨</button>
            <div className={'palette-menu' + (palette ? ' open' : '')}>
              <h5>색상 테마 🎨</h5>
              {THEMES.map((t) => (
                <button key={t.id} className={'palette-opt' + (theme === t.id ? ' active' : '')}
                  onClick={() => { setTheme(t.id); setPalette(false); }}>
                  <span className="palette-sw"><span className="h l" style={{ background: t.a }}></span><span className="h r" style={{ background: t.b }}></span></span>
                  <b>{t.label}</b><span className="chk">✓</span>
                </button>
              ))}
            </div>
          </div>
          <a href="#/apply" className="btn btn-primary">무료체험 신청</a>
          <button className="nav-toggle" aria-label="메뉴 열기" onClick={() => setDrawer((v) => !v)}>{drawer ? '✕' : '☰'}</button>
        </div>
      </nav>
    </header>
  );
}

/* ---------- 푸터 ---------- */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#/"><Mascot footer /><span style={{ color: '#fff' }}>토리키즈</span></a>
            <p>우리 아이의 첫 배움을 즐겁게. 한글·수학·알파벳을 놀이처럼 배우는 키즈 온라인 학습 토리키즈입니다.</p>
          </div>
          <div className="footer-col"><h4>학습</h4>
            <a href="#/courses">전체 코스</a><a href="#/courses">한글 또박또박</a><a href="#/courses">수학 쑥쑥</a><a href="#/courses">알파벳 신나게</a>
          </div>
          <div className="footer-col"><h4>토리키즈</h4>
            <a href="#/teachers">선생님 소개</a><a href="#/reviews">수강 후기</a><a href="#/reviews">학습 성과</a><a href="#/apply">무료체험</a>
          </div>
          <div className="footer-col"><h4>고객지원</h4>
            <a href="#/faq">자주 묻는 질문</a><a href="#/apply">수강 신청</a><a href="#/">이용약관</a><a href="#/">개인정보처리방침</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 토리키즈(TORI KIDS). 모든 콘텐츠의 저작권은 토리키즈에 있습니다.</span>
          <span>고객센터 1588-0000 · 평일 09:00–18:00</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- 서브페이지 히어로 ---------- */
function PageHero({ crumb, title, desc, blobs }) {
  return (
    <section className="page-hero">
      {blobs}
      <div className="wrap">
        <div className="breadcrumb"><a href="#/">홈</a> · {crumb}</div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  );
}

Object.assign(window, {
  THEMES, NAV, navigate, useHashRoute, useThemeMode,
  Mascot, Reveal, CountUp, Marquee, CtaBand, Header, Footer, PageHero,
});
