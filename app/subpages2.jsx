/* 토리키즈 — 후기 / FAQ / 수강신청 페이지 */
const { useState: useStateP } = React;

function Reviews() {
  const reviews = [
    { q: '한글 떼기 스트레스가 사라졌어요. 아이가 먼저 "토리 하자!" 하고 태블릿을 가져와요.', av: ['var(--coral)', '민'], who: '민준 엄마', sub: '6세 · 한글 코스', d: 'd1' },
    { q: '숫자를 어려워했는데 블록 놀이로 배우니 금방 늘었어요. 매주 리포트도 정말 유용해요.', av: ['var(--yellow)', '서'], who: '서연 아빠', sub: '7세 · 수학 코스', d: 'd2' },
    { q: '영어 노래를 흥얼거리며 알파벳을 말해요. 하루 15분이라 부담 없이 꾸준히 해요.', av: ['var(--mint)', '하'], who: '하윤 엄마', sub: '5세 · 알파벳 코스', d: 'd3' },
    { q: '맞벌이라 학원 보내기 힘들었는데, 집에서 짧게 하니 일상이 훨씬 편해졌어요.', av: ['var(--purple)', '지'], who: '지우 엄마', sub: '7세 · 한글+수학', d: 'd1' },
    { q: '레벨 진단이 정확했어요. 너무 쉽지도 어렵지도 않은 딱 맞는 코스를 추천받았어요.', av: ['var(--blue-600)', '준'], who: '준서 아빠', sub: '8세 · 수학 코스', d: 'd2' },
    { q: '스티커 보상에 신나서 매일 스스로 해요. 칭찬 한마디에 아이 표정이 환해져요.', av: ['var(--coral)', '아'], who: '아인 엄마', sub: '6세 · 알파벳 코스', d: 'd3' },
  ];
  const stats = [
    [87, '%', '3개월 내 한글 떼기 완료', false, 'd1'],
    [2.4, '배', '학습 집중 시간 향상', true, 'd2'],
    [96, '%', '재등록 의향 응답', false, 'd3'],
    [15, '분', '하루 평균 학습 시간', false, 'd4'],
  ];
  return (
    <main>
      <PageHero crumb="수강후기 & 성과" title="아이들의 진짜 변화"
        desc="숫자로 보는 학습 성과와, 먼저 시작한 12만 가정의 생생한 이야기를 모았어요."
        blobs={<React.Fragment>
          <div className="blob float" style={{ width: 80, height: 80, background: 'var(--mint)', left: '13%', top: '30%' }}></div>
          <div className="blob float-slow" style={{ width: 64, height: 64, background: 'var(--coral)', right: '13%', top: '26%' }}></div>
        </React.Fragment>} />

      <section className="sec sec-blue">
        <div className="wrap">
          <Reveal className="sec-head tac"><span className="eyebrow">학습 성과</span><h2 className="sec-title" style={{ color: '#fff' }}>토리와 함께한 변화</h2></Reveal>
          <div className="stats">
            {stats.map(([to, suf, lbl, dec, d]) => (
              <Reveal key={lbl} className={'stat ' + d}><div className="num"><CountUp to={to} dec={dec} /><span className="suf">{suf}</span></div><div className="lbl">{lbl}</div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head tac"><span className="eyebrow">학부모 후기</span><h2 className="sec-title">먼저 경험한 부모님들의 이야기</h2><p className="sec-sub">실제 토리키즈를 수강한 가정의 후기입니다. 평균 만족도 4.9점 ★</p></Reveal>
          <div className="review-grid">
            {reviews.map((r) => (
              <Reveal key={r.who + r.sub} className={'review ' + r.d}>
                <p className="quote">{r.q}</p>
                <div className="who"><span className="avatar" style={{ background: r.av[0] }}>{r.av[1]}</span><div><b>{r.who}</b><span>{r.sub}</span></div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-cream">
        <div className="wrap" style={{ maxWidth: 840, textAlign: 'center' }}>
          <Reveal>
            <div className="stars" style={{ fontSize: '1.6rem' }}>★★★★★</div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3.4vw,2.2rem)', lineHeight: 1.5, margin: '18px 0 22px', color: 'var(--ink)' }}>"아이가 배움을 '해야 하는 것'이 아니라<br />'하고 싶은 것'으로 느끼게 됐어요."</p>
            <div className="who" style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}><span className="avatar" style={{ background: 'var(--blue-600)' }}>윤</span><div style={{ textAlign: 'left' }}><b>윤아 엄마</b><span style={{ display: 'block', color: 'var(--ink-soft)', fontSize: '.85rem' }}>7세 아이 · 한글·수학·알파벳 모두 수강</span></div></div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <CtaBand deco="⭐" title="다음 후기의 주인공은 우리 아이!" text="14일 무료체험으로 변화를 직접 확인해 보세요." primary={['/apply', '무료체험 신청하기']} />
        </div>
      </section>
    </main>
  );
}

function Faq() {
  const items = [
    ['몇 살부터 시작할 수 있나요?', '만 4세(유아)부터 초등 저학년까지 권장합니다. 가입 시 3분 레벨 진단을 통해 우리 아이에게 딱 맞는 단계와 코스를 추천해 드려요. 글자를 처음 접하는 아이도 그림과 노래로 부담 없이 시작할 수 있습니다.'],
    ['하루에 얼마나 학습하나요?', '유아·초등 저학년의 집중 시간을 고려해 회당 약 15분으로 설계했습니다. 짧지만 매일 꾸준히 하는 것이 핵심이에요. 아이가 더 하고 싶어 하면 추가 놀이 미션도 자유롭게 즐길 수 있습니다.'],
    ['무료체험은 어떻게 진행되나요?', '카드 등록 없이 14일간 모든 코스 콘텐츠를 이용할 수 있습니다. 체험 기간이 끝나도 자동 결제되지 않으니 안심하세요. 마음에 드시면 그때 원하는 코스를 선택해 등록하시면 됩니다.'],
    ['어떤 기기에서 이용할 수 있나요?', '태블릿, 스마트폰, PC 모두에서 이용 가능합니다. 아이의 눈 건강을 위해 태블릿 가로 화면 사용을 권장하며, 학습 시간 알림과 휴식 안내 기능도 제공합니다.'],
    ['부모가 옆에서 도와줘야 하나요?', '아이 혼자서도 따라갈 수 있도록 음성 안내와 캐릭터 가이드를 제공합니다. 다만 처음 며칠은 함께 봐주시면 아이가 더 편하게 적응해요. 매주 발송되는 부모 리포트로 학습 현황을 확인하실 수 있습니다.'],
    ['형제·자매가 함께 쓸 수 있나요?', '한 계정에 최대 3명의 아이 프로필을 만들 수 있고, 각자의 진도와 리포트가 따로 관리됩니다. 형제 등록 시 추가 할인도 제공하니 고객센터로 문의해 주세요.'],
    ['결제와 환불 정책이 궁금해요.', '월 단위 정기 결제이며 언제든 해지할 수 있습니다. 결제 후 7일 이내, 학습 진도가 일정 미만일 경우 전액 환불됩니다. 자세한 내용은 이용약관을 참고하시거나 고객센터로 문의 주세요.'],
  ];
  const [open, setOpen] = useStateP(0);
  return (
    <main>
      <PageHero crumb="자주 묻는 질문" title="궁금한 점이 있으신가요?"
        desc="학부모님들이 가장 많이 물어보신 질문을 모았어요. 더 궁금한 점은 고객센터로 연락 주세요."
        blobs={<React.Fragment>
          <div className="blob float" style={{ width: 80, height: 80, background: 'var(--yellow)', left: '14%', top: '30%' }}></div>
          <div className="blob float-slow" style={{ width: 60, height: 60, background: 'var(--blue-300)', right: '15%', top: '28%' }}></div>
        </React.Fragment>} />
      <section className="sec">
        <div className="wrap">
          <div className="faq-list">
            {items.map(([q, a], i) => (
              <Reveal key={q} className={'faq-item' + (open === i ? ' open' : '')}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>{q}<span className="ic">+</span></button>
                <div className="faq-a" style={{ maxHeight: open === i ? '400px' : '0' }}><div className="inner">{a}</div></div>
              </Reveal>
            ))}
          </div>
          <Reveal className="tac" style={{ marginTop: 48 }}>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 16 }}>찾는 답이 없으신가요?</p>
            <a href="#/apply" className="btn btn-primary">1:1 문의 / 무료체험 신청</a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Apply() {
  const [done, setDone] = useStateP(false);
  return (
    <main>
      <PageHero crumb="무료체험 신청" title="14일 무료체험 신청하기"
        desc="카드 등록 없이 바로 시작! 아이 정보를 남겨주시면 맞춤 코스를 추천해 드려요."
        blobs={<React.Fragment>
          <div className="blob float" style={{ width: 80, height: 80, background: 'var(--yellow)', left: '14%', top: '30%' }}></div>
          <div className="blob float-slow" style={{ width: 60, height: 60, background: 'var(--mint)', right: '15%', top: '26%' }}></div>
        </React.Fragment>} />
      <section className="sec">
        <div className="wrap">
          <div className="apply-grid">
            <Reveal as="form" className="form-card" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <div className="field"><label>학부모 이름 <span className="req">*</span></label><input type="text" placeholder="예) 홍길동" required /></div>
              <div className="field-row">
                <div className="field"><label>연락처 <span className="req">*</span></label><input type="tel" placeholder="010-0000-0000" required /></div>
                <div className="field"><label>이메일</label><input type="email" placeholder="parent@email.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label>아이 이름 <span className="req">*</span></label><input type="text" placeholder="아이 이름" required /></div>
                <div className="field"><label>아이 나이 <span className="req">*</span></label>
                  <select required defaultValue=""><option value="" disabled>선택해주세요</option><option>만 4세</option><option>만 5세</option><option>만 6세</option><option>만 7세</option><option>만 8세 이상</option></select>
                </div>
              </div>
              <div className="field">
                <label>관심 코스 <span className="req">*</span></label>
                <div className="radio-row">
                  {[['c1', '한글', true], ['c2', '수학'], ['c3', '알파벳'], ['c4', '전체 추천받기']].map(([id, lbl, def]) => (
                    <span className="radio-pill" key={id}><input type="radio" name="course" id={id} defaultChecked={!!def} /><label htmlFor={id}>{lbl}</label></span>
                  ))}
                </div>
              </div>
              <div className="field"><label>남기고 싶은 말 (선택)</label><textarea rows="3" placeholder="아이의 학습 상황이나 궁금한 점을 자유롭게 적어주세요."></textarea></div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>{done ? '신청이 접수되었어요! 🎉' : '무료체험 신청하기'}</button>
              <div className={'form-success' + (done ? ' show' : '')}>신청이 접수되었어요! 🎉 담당 선생님이 1영업일 이내에 연락드릴게요.</div>
            </Reveal>

            <aside className="apply-aside">
              <Reveal className="aside-card d1"><h4>무료체험 혜택 🎁</h4>
                <ul><li>✅ <b>14일간</b> 전 코스 무제한 이용</li><li>✅ 카드 등록 없이 시작, <b>자동결제 없음</b></li><li>✅ 3분 <b>레벨 진단</b> + 맞춤 코스 추천</li><li>✅ 첫 주 <b>학습 리포트</b> 무료 제공</li></ul>
              </Reveal>
              <Reveal className="aside-card d2" style={{ background: 'var(--sky)' }}><h4>이렇게 진행돼요</h4>
                <ul><li>1️⃣ <b>신청서 작성</b> (지금 여기!)</li><li>2️⃣ 담당 선생님 <b>확인 연락</b></li><li>3️⃣ <b>계정 생성</b> 후 바로 학습 시작</li></ul>
              </Reveal>
              <Reveal className="aside-card d3" style={{ background: 'var(--cream)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.4rem' }}>📞</div>
                <h4 style={{ margin: '8px 0 4px' }}>전화로 문의하기</h4>
                <p style={{ color: 'var(--ink-soft)', fontSize: '.92rem' }}>고객센터 <b style={{ color: 'var(--blue-700)' }}>1588-0000</b><br />평일 09:00–18:00</p>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Reviews, Faq, Apply });
