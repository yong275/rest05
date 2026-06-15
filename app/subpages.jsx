/* 토리키즈 — 코스 & 선생님 페이지 */

function Courses() {
  const courses = [
    { tone: 'han', emoji: '📖', tag: ['chip-han', '한글'], title: '처음 만나는 한글', desc: '자음·모음을 그림과 노래로 익히고 또박또박 따라 써요.', age: '👶 5~7세', n: '24강', rate: '4.9', d: 'd1' },
    { tone: 'han', emoji: '✏️', tag: ['chip-han', '한글'], title: '받침과 첫 문장', desc: '받침 글자와 짧은 문장 읽기로 혼자 읽는 즐거움을 키워요.', age: '👶 6~8세', n: '28강', rate: '4.8', d: 'd2' },
    { tone: 'math', emoji: '🔢', tag: ['chip-math', '수학'], title: '숫자랑 친구하기', desc: '1~100 수 세기와 모으기·가르기를 블록 놀이로 배워요.', age: '👶 6~8세', n: '30강', rate: '4.8', d: 'd3' },
    { tone: 'math', emoji: '🕐', tag: ['chip-math', '수학'], title: '시계와 도형 놀이', desc: '시계 읽기와 기본 도형을 손으로 만지며 공간 감각을 키워요.', age: '👶 7~9세', n: '22강', rate: '4.7', d: 'd1' },
    { tone: 'abc', emoji: '🔤', tag: ['chip-abc', '알파벳'], title: '알파벳 파닉스 송', desc: 'A~Z를 노래와 율동으로, 첫 영어 단어를 자연스럽게 익혀요.', age: '👶 5~8세', n: '26강', rate: '4.9', d: 'd2' },
    { tone: 'abc', emoji: '🗣️', tag: ['chip-abc', '알파벳'], title: '첫 영어 단어 100', desc: '생활 속 단어를 그림 카드로 익히고 따라 말해보는 첫 스피킹.', age: '👶 6~9세', n: '20강', rate: '4.8', d: 'd3' },
  ];
  const steps = [
    ['레벨 진단', '3분 놀이 진단으로 우리 아이의 현재 단계를 확인해요.'],
    ['코스 추천', '진단 결과에 맞는 맞춤 코스를 토리가 추천해 드려요.'],
    ['무료체험', '14일 동안 카드 등록 없이 모든 콘텐츠를 즐겨요.'],
    ['매일 15분', '매일 짧은 학습과 리포트로 꾸준히 성장해요.'],
  ];
  const lessons = [
    ['1', '모음 친구들 (ㅏ ㅓ ㅗ ㅜ)', '입 모양 노래와 그림으로 기본 모음 소리를 익혀요.', ['발음', '노래'], 'd1'],
    ['2', '자음 친구들 (ㄱ ㄴ ㄷ ㄹ)', '손가락 따라쓰기로 자음의 모양과 소리를 연결해요.', ['쓰기', '놀이'], 'd2'],
    ['3', '글자 만들기 (가 나 다)', '자음과 모음을 합쳐 첫 글자를 스스로 만들어 봐요.', ['조합', '미션'], 'd3'],
    ['4', '단어 읽기 (사과·바나나)', '그림과 함께 짧은 단어를 또박또박 읽어내요.', ['읽기', '보상'], 'd4'],
  ];
  return (
    <main>
      <PageHero crumb="코스" title="토리의 전체 코스"
        desc="발달 단계와 관심사에 맞춰 고르는 한글·수학·알파벳 코스. 모든 코스는 14일 무료체험으로 시작할 수 있어요."
        blobs={<React.Fragment>
          <div className="blob float" style={{ width: 90, height: 90, background: 'var(--yellow)', left: '10%', top: '30%' }}></div>
          <div className="blob float-slow" style={{ width: 64, height: 64, background: 'var(--mint)', right: '12%', top: '24%' }}></div>
        </React.Fragment>} />

      <section className="sec">
        <div className="wrap">
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 46 }}>
            <span className="chip chip-blue">전체</span><span className="chip chip-han">한글</span><span className="chip chip-math">수학</span><span className="chip chip-abc">알파벳</span>
          </div>
          <div className="course-grid">
            {courses.map((c) => (
              <Reveal as="article" key={c.title} className={'course ' + c.d}>
                <div className={'thumb media tone-' + c.tone}><div className="dot-grid"></div><span className="emoji">{c.emoji}</span><span className={'tag chip ' + c.tag[0]}>{c.tag[1]}</span></div>
                <div className="body">
                  <h3>{c.title}</h3>
                  <p className="desc">{c.desc}</p>
                  <div className="meta"><span>{c.age}</span><span>📅 <b>{c.n}</b></span><span>⏱️ 15분</span></div>
                  <div className="foot"><span className="stars">★★★★★ <span style={{ color: 'var(--ink-soft)' }}>{c.rate}</span></span><span className="price">월 29,000원</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-sky">
        <div className="wrap">
          <Reveal className="sec-head tac">
            <span className="eyebrow">수강 절차</span>
            <h2 className="sec-title">시작은 4단계면 충분해요</h2>
            <p className="sec-sub">복잡한 준비 없이, 오늘 바로 우리 아이 학습을 시작할 수 있어요.</p>
          </Reveal>
          <div className="steps">
            {steps.map(([t, p], i) => (
              <Reveal key={t} className={'step d' + (i + 1)}><div className="n"></div><h3>{t}</h3><p>{p}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">커리큘럼 미리보기</span>
            <h2 className="sec-title">「처음 만나는 한글」 4주 여정</h2>
            <p className="sec-sub">한 주씩 차근차근. 놀이 미션을 깨며 자연스럽게 한글과 친해져요.</p>
          </Reveal>
          <div className="curric">
            {lessons.map(([wk, h, p, tags, d]) => (
              <Reveal key={wk} className={'lesson ' + d}>
                <div className="wk">{wk}<small>WEEK</small></div>
                <div><h4>{h}</h4><p>{p}</p></div>
                <div className="tag-list">{tags.map((t, i) => <span key={t} className={'chip ' + (i === 0 ? 'chip-han' : 'chip-blue')}>{t}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-cream">
        <div className="wrap">
          <CtaBand deco="📚" title="어떤 코스가 맞을지 고민되세요?" text="3분 레벨 진단으로 우리 아이에게 딱 맞는 코스를 찾아드릴게요." primary={['/apply', '무료 진단 시작하기']} />
        </div>
      </section>
    </main>
  );
}

function Teachers() {
  const teachers = [
    { tone: 'han', emoji: '👩‍🏫', chip: ['chip-han', '한글'], name: '김도담 선생님', role: '한글·읽기 리드 티처', bio: '"글자는 외우는 게 아니라 친해지는 거예요." 그림책 읽어주기로 아이의 마음을 먼저 엽니다.', cr: ['유아교육 전공 · 14년 경력', '그림책 지도사 1급', '한글 코스 24강 기획'], d: 'd1' },
    { tone: 'math', emoji: '👨‍🏫', chip: ['chip-math', '수학'], name: '박솔이 선생님', role: '수 감각·사고력 티처', bio: '손으로 만지고 눈으로 보는 수학. 블록과 놀이로 숫자를 무서워하지 않게 도와줍니다.', cr: ['아동수학교육 석사', '사고력 수학 11년 경력', '수학 코스 30강 기획'], d: 'd2' },
    { tone: 'abc', emoji: '🧑‍🏫', chip: ['chip-abc', '알파벳'], name: '이하늘 선생님', role: '파닉스·영어 노래 티처', bio: '영어는 노래로 시작해요. 따라 부르다 보면 어느새 알파벳과 단어가 입에 붙습니다.', cr: ['TESOL 자격 · 원어민 협업', '유아 영어 9년 경력', '파닉스 송 26곡 제작'], d: 'd3' },
    { tone: 'purple', emoji: '👩‍🎨', chip: ['chip-blue', '콘텐츠'], name: '정나래 선생님', role: '학습 일러스트·디자인', bio: '아이 눈높이의 캐릭터와 색으로 화면 구석구석을 즐거운 놀이터로 만듭니다.', cr: ['아동 일러스트 전문', '토리 마스코트 디자인', '320+ 콘텐츠 작업'], d: 'd1' },
    { tone: 'han', emoji: '🧑‍⚕️', chip: ['chip-blue', '발달'], name: '최유진 선생님', role: '아동심리·발달 자문', bio: "연령별 집중 시간과 동기를 연구해 '딱 15분' 학습 설계의 기준을 만듭니다.", cr: ['아동심리 박사 수료', '발달 단계 진단 설계', '학습 동기 연구'], d: 'd2' },
    { tone: 'math', emoji: '🧑‍💻', chip: ['chip-blue', '학부모 케어'], name: '한지호 선생님', role: '학습 코치·부모 리포트', bio: '매주 우리 아이의 학습을 정리해 드리고, 다음 한 주를 함께 계획합니다.', cr: ['학습 코칭 8년 경력', '주간 리포트 운영', '1:1 상담 케어'], d: 'd3' },
  ];
  const promises = [
    ['🌱', '강요하지 않아요', '스스로 하고 싶게 만드는 동기 설계. 학습은 즐거운 놀이여야 합니다.', 'd1'],
    ['👀', '한 명도 놓치지 않아요', '아이마다 다른 속도를 존중하고, 작은 성취도 함께 기뻐합니다.', 'd2'],
    ['🤝', '부모님과 함께해요', '학습은 집에서 완성됩니다. 매주 소통하며 함께 키워갑니다.', 'd3'],
  ];
  return (
    <main>
      <PageHero crumb="선생님" title="우리 아이를 키우는 선생님들"
        desc="유아교육·아동심리를 전공한 선생님들이 발달 단계에 맞춰 콘텐츠를 만들고, 아이의 작은 변화까지 살펴요."
        blobs={<React.Fragment>
          <div className="blob float" style={{ width: 84, height: 84, background: 'var(--coral)', left: '12%', top: '28%' }}></div>
          <div className="blob float-slow" style={{ width: 60, height: 60, background: 'var(--yellow)', right: '14%', top: '30%' }}></div>
        </React.Fragment>} />

      <section className="sec">
        <div className="wrap">
          <div className="teacher-grid">
            {teachers.map((t) => (
              <Reveal as="article" key={t.name} className={'teacher ' + t.d}>
                <div className={'photo media tone-' + t.tone}><div className="dot-grid"></div><span className="emoji">{t.emoji}</span></div>
                <div className="info">
                  <div className="sub"><span className={'chip ' + t.chip[0]}>{t.chip[1]}</span></div>
                  <h3>{t.name}</h3><div className="role">{t.role}</div>
                  <p className="bio">{t.bio}</p>
                  <ul className="credits">{t.cr.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-blue">
        <div className="wrap">
          <Reveal className="sec-head tac"><span className="eyebrow">선생님들의 약속</span><h2 className="sec-title" style={{ color: '#fff' }}>이 세 가지는 꼭 지켜요</h2></Reveal>
          <div className="feature-grid">
            {promises.map(([ic, h, p, d]) => (
              <Reveal key={h} className={'feature ' + d} style={{ background: 'rgba(255,255,255,.1)' }}>
                <div className="ic" style={{ background: 'rgba(255,255,255,.16)', color: '#fff' }}>{ic}</div>
                <h3 style={{ color: '#fff' }}>{h}</h3><p style={{ color: '#dce7ff' }}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <CtaBand title="선생님과 함께 시작해볼까요?" text="14일 무료체험으로 토리 선생님들의 수업을 직접 경험해 보세요." primary={['/apply', '무료체험 신청하기']} />
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Courses, Teachers });
