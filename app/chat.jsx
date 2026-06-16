/* 토리키즈 — AI 채팅 위젯 */
(function () {
  const { useState, useEffect, useRef } = React;

  const SYSTEM_PROMPT = `당신은 토리키즈의 친절한 AI 도우미 '토리'입니다.
토리키즈는 유아~초등 저학년(5~9세) 대상 한글·수학·알파벳 온라인 학습 서비스입니다.

[서비스 정보]
- 코스: 한글 또박또박(5~7세, 24강), 수학 쑥쑥(6~8세, 30강), 알파벳 파닉스 송(5~8세, 26강)
- 가격: 월 29,000원 (정가 39,000원 할인)
- 14일 무료체험 가능, 카드 등록 불필요
- 하루 15분 놀이형 학습, 매주 부모 리포트 제공
- 누적 수강 12만 명, 학부모 만족도 4.9점/5점
- 고객센터: 1588-0000 (평일 09:00~18:00)

[역할]
1. 서비스 문의(코스·가격·무료체험·수강신청·선생님)에 친절하게 답변
2. 한글·수학·알파벳 학습 관련 질문 도움
3. 밝고 따뜻한 말투, 이모지 적절히 사용
4. 모르는 내용은 솔직히 인정하고 고객센터 안내

3~5문장 이내로 간결하게 답변하세요.`;

  async function loadApiKeys() {
    try {
      const { createClient } = window.supabase;
      const client = createClient(
        window.TORI_CONFIG.supabaseUrl,
        window.TORI_CONFIG.supabaseAnonKey
      );
      const { data, error } = await client
        .from('config')
        .select('key, value')
        .in('key', ['solar_api_key', 'openai_api_key']);
      if (error) throw error;
      const keys = {};
      (data || []).forEach(row => { keys[row.key] = row.value; });
      return keys;
    } catch (e) {
      console.error('[Chat] API 키 로드 실패:', e);
      return {};
    }
  }

  async function callSolar(messages, apiKey) {
    const res = await fetch('https://api.upstage.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey },
      body: JSON.stringify({ model: 'solar-pro', messages, temperature: 0.7, max_tokens: 500 }),
    });
    if (!res.ok) throw new Error('Solar ' + res.status);
    const json = await res.json();
    return json.choices[0].message.content;
  }

  async function callOpenAI(messages, apiKey) {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey },
      body: JSON.stringify({ model: 'gpt-4o-mini', messages, temperature: 0.7, max_tokens: 500 }),
    });
    if (!res.ok) throw new Error('OpenAI ' + res.status);
    const json = await res.json();
    return json.choices[0].message.content;
  }

  async function getReply(messages, keys) {
    const payload = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.map(m => ({ role: m.role, content: m.content })),
    ];
    if (keys.solar_api_key) {
      try { return await callSolar(payload, keys.solar_api_key); }
      catch (e) { console.warn('[Chat] Solar 실패, OpenAI 폴백:', e); }
    }
    if (keys.openai_api_key) {
      return await callOpenAI(payload, keys.openai_api_key);
    }
    return '죄송해요, 현재 AI 연결에 문제가 있어요. 고객센터(1588-0000)로 문의해 주세요. 🙏';
  }

  function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [msgs, setMsgs] = useState([
      { role: 'assistant', content: '안녕하세요! 토리키즈 AI 도우미 토리예요 🐿️\n코스·가격·학습 관련 궁금한 점을 물어보세요!' },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const keysRef = useRef(null);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
      if (open && !keysRef.current) {
        loadApiKeys().then(k => { keysRef.current = k; });
      }
      if (open) setTimeout(() => inputRef.current?.focus(), 120);
    }, [open]);

    useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [msgs, loading]);

    async function send() {
      const text = input.trim();
      if (!text || loading) return;

      const next = [...msgs, { role: 'user', content: text }];
      setMsgs(next);
      setInput('');
      setLoading(true);

      try {
        const keys = keysRef.current || (keysRef.current = await loadApiKeys());
        const reply = await getReply(next, keys);
        setMsgs(prev => [...prev, { role: 'assistant', content: reply }]);
      } catch (e) {
        console.error('[Chat]', e);
        setMsgs(prev => [...prev, { role: 'assistant', content: '오류가 발생했어요. 잠시 후 다시 시도해 주세요. 🙏' }]);
      } finally {
        setLoading(false);
      }
    }

    function onKey(e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    }

    function autoResize(e) {
      e.target.style.height = 'auto';
      e.target.style.height = Math.min(e.target.scrollHeight, 96) + 'px';
    }

    return (
      <div className="chat-widget">
        {open && (
          <div className="chat-popup">
            <div className="chat-head">
              <div className="chat-head-info">
                <span className="chat-head-av">🐿️</span>
                <div>
                  <strong>토리 AI 도우미</strong>
                  <span className="chat-online">● 온라인</span>
                </div>
              </div>
              <button className="chat-close" onClick={() => setOpen(false)} aria-label="닫기">✕</button>
            </div>

            <div className="chat-body">
              {msgs.map((m, i) => (
                <div key={i} className={'chat-row ' + (m.role === 'user' ? 'user' : 'bot')}>
                  {m.role === 'assistant' && <span className="chat-av">🐿️</span>}
                  <div className="chat-bubble">{m.content}</div>
                </div>
              ))}
              {loading && (
                <div className="chat-row bot">
                  <span className="chat-av">🐿️</span>
                  <div className="chat-bubble chat-dots">
                    <span /><span /><span />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="chat-foot">
              <textarea
                ref={inputRef}
                className="chat-input"
                value={input}
                onChange={e => { setInput(e.target.value); autoResize(e); }}
                onKeyDown={onKey}
                placeholder="메시지를 입력하세요... (Enter 전송)"
                rows={1}
                disabled={loading}
              />
              <button
                className="chat-send"
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="전송"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <button
          className={'chat-fab' + (open ? ' open' : '')}
          onClick={() => setOpen(v => !v)}
          aria-label="AI 채팅 열기"
        >
          <span className="chat-fab-icon">{open ? '✕' : '🐿️'}</span>
          {!open && <span className="chat-fab-badge">AI</span>}
        </button>
      </div>
    );
  }

  window.ChatWidget = ChatWidget;
})();
