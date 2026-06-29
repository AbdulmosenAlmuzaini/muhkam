const Objectives = () => {
  const objectives = [
    {
      title: "حفظ الحقوق والعدالة",
      desc: "تقديم خدمات قانونية تسهم في تعزيز العدالة وحماية مصالح الموكلين بمهنية عالية."
    },
    {
      title: "الوقاية القانونية",
      desc: "نشر الوعي القانوني وتوفير الدعم الاستباقي للشركات لتفادي الوقوع في الإشكالات القضائية."
    },
    {
      title: "التميز والابتكار الرقمي",
      desc: "توفير قنوات تواصل إلكترونية مرنة تمكن العميل من متابعة قضيته وتلقي الاستشارات بيسر وسهولة."
    },
    {
      title: "بناء شراكات مستدامة",
      desc: "السعي لكوننا الشريك القانوني الموثوق للقطاعين العام والخاص في منطقة المدينة المنورة والمملكة بشكل عام."
    }
  ];

  return (
    <section id="objectives" className="objectives">
      <div className="container">
        <h2 className="section-title">أهدافنا</h2>
        <div className="objectives-list">
          {objectives.map((obj, index) => (
            <div className="objective-item hover-lift" key={index}>
              <div className="objective-icon">🎯</div>
              <div className="objective-content">
                <h3 className="objective-title">{obj.title}</h3>
                <p className="objective-desc">{obj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
