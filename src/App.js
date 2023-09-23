import Stats from './Components/Stats';
import './Components/style.scss';
import avatar from './images/image-victor.jpg';

function App() {
  return (
    <div className="content">
      <div className="wrapper">
        <div className="banner"></div>
        <div className="texts">
          <header>
            <img src={avatar} alt="profile" />
            <h1>
              Victor Crest <span>26</span>
            </h1>
            <p>London</p>
          </header>
          <footer>
            <Stats stat={80} text={'Followers'} />
            <Stats stat={803} text={'Likes'} />
            <Stats stat={1.4} text={'Photos'} />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
