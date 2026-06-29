import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم إرسال طلبك بنجاح. سنتواصل معك قريباً.');
    setFormData({ name: '', phone: '', type: '', details: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title" style={{ textAlign: 'right' }}>تواصل معنا</h2>
          <p>نحن هنا للاستماع إليك وتقديم الدعم القانوني الذي تحتاجه. املأ النموذج وسيقوم فريقنا بالتواصل معك في أقرب وقت ممكن.</p>
        </div>
        <div className="contact-form-wrapper hover-lift">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">الاسم الكامل</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="أدخل اسمك الكامل" />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">رقم الجوال</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="05xxxxxxxx" />
            </div>
            
            <div className="form-group">
              <label htmlFor="type">نوع التخصص المطلوب</label>
              <select id="type" name="type" value={formData.type} onChange={handleChange} required>
                <option value="" disabled>اختر التخصص</option>
                <option value="commercial">القانون التجاري والشركات</option>
                <option value="labor">القانون العمالي</option>
                <option value="realestate">العقارات والأوقاف</option>
                <option value="family">الأحوال الشخصية والتركات</option>
                <option value="admin">القانون الإداري</option>
                <option value="criminal">القانون الجزائي والجنائي</option>
                <option value="other">أخرى</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="details">تفاصيل الاستشارة أو القضية</label>
              <textarea id="details" name="details" value={formData.details} onChange={handleChange} rows="4" required placeholder="اكتب تفاصيل استشارتك هنا..."></textarea>
            </div>

            <div className="form-group">
              <label className="file-upload-label">
                <input type="file" className="file-input" accept=".pdf,image/*" />
                <span>📎 إرفاق ملفات (PDF أو صور)</span>
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary btn-submit">إرسال الطلب</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
