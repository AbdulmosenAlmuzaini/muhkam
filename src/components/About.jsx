const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">من نحن</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>شركة مَحكم للمحاماة والاستشارات القانونية</strong> هي شركة مرخصة تقدم خدماتها القانونية والشرعية للأفراد والشركات، وتضم نخبة من المستشارين والمحامين المؤهلين لتمثيل عملائنا بكفاءة ونزاهة.
            </p>
          </div>
          <div className="about-trust hover-lift">
            <div className="trust-score">4.9</div>
            <div className="trust-stars">⭐⭐⭐⭐⭐</div>
            <p className="trust-text">تقييم مبني على آراء المراجعين والمستفيدين</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
