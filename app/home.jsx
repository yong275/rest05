/* 토리키즈 — 홈 페이지 */
function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="blob float" style={{ width: 120, height: 120, background: 'var(--yellow)', left: '6%', top: '18%' }}></div>
        <div className="blob float-slow" style={{ width: 80, height: 80, background: 'var(--coral)', right: '46%', top: '8%' }}></div>
        <div className="blob float" style={{ width: 60, height: 60, background: 'var(--mint)', left: '48%', bottom: '10%' }}></div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">🐿️ 우리 아이 첫 배움 친구</span>
            <h1>놀이처럼 배우는<br /><span className="u">한글·수학·알파벳</span><br /><span className="hl">토리</span>와 함께 쑥쑥!</h1>
            <p className="lead">유아부터 초등 저학년까지, 하루 15분 놀이 학습으로 우리 아이가 스스로 배우는 즐거움을 찾아요.</p>
            <div className="hero-cta">
              <a href="#/apply" className="btn btn-primary btn-lg">14일 무료체험 시작하기</a>
              <a href="#/courses" className="btn btn-ghost btn-lg">코스 둘러보기</a>
            </div>
            <div className="hero-trust">
              <div className="t"><b><CountUp to={120000} /></b><span>누적 수강 어린이</span></div>
              <div className="t"><b><CountUp to={4.9} dec />점</b><span>학부모 만족도</span></div>
              <div className="t"><b><CountUp to={98} />%</b><span>학습 지속률</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-stage">
              <div className="ring"></div>
              <div className="mascot float">🐿️</div>
            </div>
            <div className="hero-card float" style={{ left: '-4%', top: '14%' }}>
              <span className="ic" style={{ background: 'var(--coral-soft)' }}>가</span>
              <div>한글 떼기<br /><small style={{ color: 'var(--ink-soft)', fontWeight: 500 }}>기초부터 또박또박</small></div>
            </div>
            <div className="hero-card float-slow" style={{ right: '-6%', top: '42%' }}>
              <span className="ic" style={{ background: 'var(--yellow-soft)' }}>＋</span>
              <div>수 놀이<br /><small style={{ color: 'var(--ink-soft)', fontWeight: 500 }}>숫자가 재밌어요</small></div>
            </div>
            <div className="hero-card float" style={{ left: '8%', bottom: '4%' }}>
              <span className="ic" style={{ background: 'var(--mint-soft)' }}>A</span>
              <div>알파벳<br /><small style={{ color: 'var(--ink-soft)', fontWeight: 500 }}>노래로 쉽게</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head tac">
            <span className="eyebrow">3가지 핵심 과목</span>
            <h2 className="sec-title">우리 아이 첫 배움, 세 가지로 충분해요</h2>
            <p className="sec-sub">발달 단계에 딱 맞춘 커리큘럼으로 한글·수학·알파벳의 기초를 단단하게 잡아줘요.</p>
          </Reveal>
          <div className="subjects">
            <Reveal as="a" href="#/courses" className="subject han d1">
              <div className="ico">가</div>
              <h3>한글 또박또박</h3>
              <p>자음·모음 놀이부터 받침, 짧은 문장 읽기까지 단계별로 차근차근.</p>
              <span className="go">한글 코스 보기 →</span>
            </Reveal>
            <Reveal as="a" href="#/courses" className="subject math d2">
              <div className="ico num123">123</div>
              <h3>수학 쑥쑥</h3>
              <p>숫자 세기, 모으기·가르기, 시계와 도형까지 손으로 익히는 수 감각.</p>
              <span className="go">수학 코스 보기 →</span>
            </Reveal>
            <Reveal as="a" href="#/courses" className="subject abc d3">
              <div className="ico">A</div>
              <h3>알파벳 신나게</h3>
              <p>파닉스 노래와 그림으로 알파벳과 첫 영어 단어를 자연스럽게.</p>
              <span className="go">알파벳 코스 보기 →</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sec sec-blue">
        <div className="blob float" style={{ width: 140, height: 140, background: 'rgba(255,255,255,.12)', right: '4%', top: -30 }}></div>
        <div className="wrap">
          <Reveal className="sec-head tac">
            <span className="eyebrow">숫자로 보는 토리</span>
            <h2 className="sec-title" style={{ color: '#fff' }}>아이도 부모도 믿고 맡기는 이유</h2>
          </Reveal>
          <div className="stats">
            <Reveal className="stat d1"><div className="num"><CountUp to={120000} /><span className="suf">명+</span></div><div className="lbl">함께한 어린이</div></Reveal>
            <Reveal className="stat d2"><div className="num"><CountUp to={4.9} dec /><span className="suf">점</span></div><div className="lbl">학부모 만족도 (5점 만점)</div></Reveal>
            <Reveal className="stat d3"><div className="num"><CountUp to={320} /><span className="suf">개+</span></div><div className="lbl">놀이형 학습 콘텐츠</div></Reveal>
            <Reveal className="stat d4"><div className="num"><CountUp to={98} /><span className="suf">%</span></div><div className="lbl">한 달 후 학습 지속률</div></Reveal>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Popular courses */}
      <section className="sec sec-sky">
        <div className="wrap">
          <Reveal className="sec-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <div>
              <span className="eyebrow">인기 코스</span>
              <h2 className="sec-title">지금 가장 사랑받는 코스</h2>
              <p className="sec-sub">또래 친구들이 가장 많이 듣는 인기 코스를 모았어요.</p>
            </div>
            <a href="#/courses" className="btn btn-ghost">전체 코스 보기 →</a>
          </Reveal>
          <div className="course-grid">
            {[
              { tone: 'han', emoji: '📖', tag: ['chip-han', '한글'], title: '처음 만나는 한글', desc: '자음·모음을 그림과 노래로 익히고, 또박또박 따라 쓰며 글자와 친해져요.', age: '👶 5~7세', n: '24강', rate: '4.9', d: 'd1' },
              { tone: 'math', emoji: '🔢', tag: ['chip-math', '수학'], title: '숫자랑 친구하기', desc: '1부터 100까지 수 세기, 모으기와 가르기를 블록 놀이로 신나게 배워요.', age: '👶 6~8세', n: '30강', rate: '4.8', d: 'd2' },
              { tone: 'abc', emoji: '🔤', tag: ['chip-abc', '알파벳'], title: '알파벳 파닉스 송', desc: 'A부터 Z까지 노래와 율동으로, 첫 영어 단어를 자연스럽게 익혀요.', age: '👶 5~8세', n: '26강', rate: '4.9', d: 'd3' },
            ].map((c) => (
              <Reveal as="article" key={c.title} className={'course ' + c.d}>
                <div className={'thumb media tone-' + c.tone}><div className="dot-grid"></div><span className="emoji">{c.emoji}</span><span className={'tag chip ' + c.tag[0]}>{c.tag[1]}</span></div>
                <div className="body">
                  <h3>{c.title}</h3>
                  <p className="desc">{c.desc}</p>
                  <div className="meta"><span>{c.age}</span><span>📅 총 <b>{c.n}</b></span><span>⏱️ 회당 15분</span></div>
                  <div className="foot">
                    <span className="stars">★★★★★ <span style={{ color: 'var(--ink-soft)' }}>{c.rate}</span></span>
                    <span className="price"><s>월 39,000</s>월 29,000원</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why TORI */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head tac">
            <span className="eyebrow">왜 토리일까요?</span>
            <h2 className="sec-title">아이가 스스로 켜는 학습</h2>
            <p className="sec-sub">강요 없이 매일 즐겁게. 토리만의 학습 설계를 소개해요.</p>
          </Reveal>
          <div className="feature-grid">
            <Reveal className="feature card-hover d1"><div className="ic" style={{ background: 'var(--coral-soft)', color: 'var(--coral)' }}>🎮</div><h3>놀이형 학습</h3><p>게임처럼 미션을 깨며 배워요. 스티커와 보상으로 매일 스스로 접속해요.</p></Reveal>
            <Reveal className="feature card-hover d2"><div className="ic" style={{ background: 'var(--yellow-soft)', color: '#a86a00' }}>📈</div><h3>발달 맞춤 단계</h3><p>아이 수준을 진단해 딱 맞는 난이도부터. 너무 쉽지도 어렵지도 않게.</p></Reveal>
            <Reveal className="feature card-hover d3"><div className="ic" style={{ background: 'var(--mint-soft)', color: 'var(--mint)' }}>📱</div><h3>부모 리포트</h3><p>오늘 무엇을 배웠는지 매주 알림으로. 우리 아이 성장이 한눈에 보여요.</p></Reveal>
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="sec sec-cream">
        <div className="wrap">
          <Reveal className="sec-head tac">
            <span className="eyebrow">수강 후기</span>
            <h2 className="sec-title">먼저 시작한 부모님들의 이야기</h2>
          </Reveal>
          <div className="review-grid">
            {[
              { q: '한글 떼기 스트레스가 사라졌어요. 아이가 먼저 "토리 하자!" 하고 태블릿을 가져와요.', av: ['var(--coral)', '민'], who: '민준 엄마', sub: '6세 아이 · 한글 코스', d: 'd1' },
              { q: '숫자를 어려워했는데 블록 놀이로 배우니 금방 늘었어요. 매주 리포트도 정말 유용해요.', av: ['var(--yellow)', '서'], who: '서연 아빠', sub: '7세 아이 · 수학 코스', d: 'd2' },
              { q: '영어 노래를 흥얼거리며 알파벳을 말해요. 하루 15분이라 부담도 없고 꾸준히 하게 돼요.', av: ['var(--mint)', '하'], who: '하윤 엄마', sub: '5세 아이 · 알파벳 코스', d: 'd3' },
            ].map((r) => (
              <Reveal key={r.who} className={'review ' + r.d}>
                <p className="quote">{r.q}</p>
                <div className="who"><span className="avatar" style={{ background: r.av[0] }}>{r.av[1]}</span><div><b>{r.who}</b><span>{r.sub}</span></div></div>
              </Reveal>
            ))}
          </div>
          <Reveal className="tac" style={{ marginTop: 40 }}><a href="#/reviews" className="btn btn-ghost">더 많은 후기 보기 →</a></Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <CtaBand title="지금 14일 무료체험을 시작해요" text="카드 등록 없이 바로 시작. 우리 아이에게 딱 맞는 코스를 찾아드릴게요."
            primary={['/apply', '무료체험 신청하기']} secondary={['/faq', '궁금한 점 보기']} />
        </div>
      </section>
    </main>
  );
}
window.Home = Home;
