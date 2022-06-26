import 'on-the-case';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('.app'));

const App = () => {
  const title = 'Repo Template';
  const blurb = 'Get building...';

  return (
    <>
      <h1>{title}</h1>
      <p>{blurb}</p>
    </>
  );
};

root.render(<App />);
