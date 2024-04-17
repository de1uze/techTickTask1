import "./index.css";

const Home = () => (
  <div className="home">
    <div className="photo">
      <img
        alt="mypic"
        className="img"
        src="https://res.cloudinary.com/da0yjkhei/image/upload/v1711115330/Image_fcdbrs.png"
      />
    </div>

    <div className="content">
      <img
        alt="hello"
        src="https://res.cloudinary.com/da0yjkhei/image/upload/v1711101415/Hello_surspt.png"
        class="hello"
      />
      <div className="h1">
        <h1 className="i">
          I'm <span className="surya">Pratik</span>
        </h1>
        <img
          alt="hi"
          className="wave"
          src="https://res.cloudinary.com/da0yjkhei/image/upload/v1711101661/Wave_n3dow1.png"
        />
      </div>
      <p className="p"> Frontend Developer </p>
      <p className="p">Based in India.</p>

      <div className="btn-con">
        <button className="btn1">Download CV</button>
        <button className="btn2">Get in Touch!</button>
      </div>
    </div>
  </div>
);

export default Home;
