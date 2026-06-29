const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">شركة مَحكم للمحاماة والاستشارات القانونية</h1>
        <p className="hero-subtitle">
          ريادة قانونية وحلول متكاملة تنطلق من طيبة الطيبة لخدمة عملائنا في كافة أرجاء المملكة.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary hover-lift">طلب استشارة قانونية الآن</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
