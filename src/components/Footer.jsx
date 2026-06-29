const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-icon">⚖️</span>
            <span className="logo-text">مَحكم</span>
          </div>
          <p>شركة محكم للمحاماة والإستشارات القانونية.</p>
          <p>شريكك القانوني الموثوق في المدينة المنورة والمملكة.</p>
        </div>
        
        <div className="footer-col">
          <h4>معلومات الاتصال</h4>
          <ul className="contact-list">
            <li>📞 <a href="tel:0596155995" dir="ltr">0596155995</a></li>
            <li>💬 <a href="https://wa.me/966596155995" target="_blank" rel="noopener noreferrer">تواصل معنا عبر الواتساب</a></li>
            <li>📍 كورنيش وادي العقيق، البركة، المدينة المنورة 42371</li>
            <li>🗺️ الرمز الإضافي: FHRC+7F المدينة المنورة</li>
            <li>🕒 أوقات العمل: الأحد - الخميس | 8:00 صباحاً - 5:00 مساءً</li>
          </ul>
        </div>
        
        <div className="footer-col location-col">
          <h4>الموقع</h4>
          <div className="location-card">
            <div className="map-wrapper">
              <iframe 
                src="https://maps.google.com/maps?q=24.4716,39.5898&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع شركة محكم للمحاماة"
              ></iframe>
            </div>
            <div className="location-info">
              <p className="location-address">كورنيش وادي العقيق، البركة، المدينة المنورة 42371، المملكة العربية السعودية</p>
              <div className="location-actions">
                <a href="https://maps.google.com/?q=FHRC+7F" target="_blank" rel="noopener noreferrer" className="location-btn btn-directions">
                  <span className="btn-icon">🧭</span> الاتجاهات
                </a>
                <a href="tel:0596155995" className="location-btn btn-call" dir="ltr">
                  <span className="btn-icon">📞</span> الاتصال بـ 0596155995
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} شركة مَحكم للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
