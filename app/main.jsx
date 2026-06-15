/* 토리키즈 — App 라우터 & 마운트 */
function App() {
  const route = useHashRoute();
  let Page;
  switch (route) {
    case '/courses': Page = Courses; break;
    case '/teachers': Page = Teachers; break;
    case '/reviews': Page = Reviews; break;
    case '/faq': Page = Faq; break;
    case '/apply': Page = Apply; break;
    default: Page = Home;
  }
  return (
    <React.Fragment>
      <Header route={route} />
      <Page key={route} />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
