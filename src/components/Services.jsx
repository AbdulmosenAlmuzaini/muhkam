const Services = () => {
  const services = [
    {
      title: "التمثيل القضائي والترافع",
      desc: "تمثيل العملاء أمام كافة درجات المحاكم (العامة، التجارية، العمالية، الإدارية، اللجان شبه القضائية)."
    },
    {
      title: "الاستشارات القانونية والشرعية",
      desc: "تقديم الآراء والحلول القانونية الوقائية والشفهية والمكتوبة لمساعدة العميل في اتخاذ القرار السليم."
    },
    {
      title: "صياغة ومراجعة العقود",
      desc: "إعداد العقود والاتفاقيات والوثائق القانونية وتدقيقها لحفظ حقوق الأطراف وتجنب النزاعات المستقبلية."
    },
    {
      title: "أعمال التوثيق والتحكيم",
      desc: "توثيق العقود والإقرارات، والقيام بدور التحكيم لفض النزاعات ودياً وبسرعة."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">الخدمات والحلول القانونية</h2>
        <div className="services-grid">
          {services.map((srv, index) => (
            <div className="service-card hover-lift" key={index}>
              <div className="service-number">0{index + 1}</div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
