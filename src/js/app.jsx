import 'on-the-case';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<App />, document.querySelector('.app'));
