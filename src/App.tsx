import { useState, type FormEvent } from 'react'
import { supabase } from './lib/supabase'
import { useScrollReveal, useNavbarScroll } from './hooks'
import {
  navLinks,
  heroMeta,
  heroCardItems,
  aboutFeatures,
  programCards,
  scheduleDays,
  countries,
  speakers,
  registrationBenefits,
  contactInfo,
  icons,
} from './data'

const { Calendar, Video, Mail, Phone, X, ArrowLeft, ChevronDown, CheckCircle2, Sparkles } = icons

function Navbar() {
  const scrolled = useNavbarScroll()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#hero" className="navbar-logo">
            <span className="navbar-logo-icon">
              <Sparkles size={20} color="#1a503c" />
            </span>
            ملتقى جودة التدريب
          </a>
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="navbar-link">
                {link.label}
              </a>
            ))}
            <a href="#registration" className="btn btn-accent navbar-cta">
              سجل الآن
            </a>
          </div>
          <button className="navbar-burger" onClick={() => setMobileOpen(true)} aria-label="القائمة">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMobileOpen(false)}
          style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', color: '#3e4641' }}
          aria-label="إغلاق"
        >
          <X size={24} />
        </button>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#registration" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
          سجل الآن
        </a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-pattern" />
        <div className="hero-glow" />
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Sparkles size={16} />
              الملتقى الأول لجودة التدريب والإعتماد المهني
            </div>
            <h1 className="hero-title">
              ملتقى جودة التدريب: من المعايير إلى <span className="accent-text">الأثر المهني</span>
            </h1>
            <p className="hero-desc">
              انضم إلى الملتقى الأول لجودة التدريب والاعتماد المهني عبر زووم، واكتسب مهارات قيادية وفرص تواصل
              مع خبراء من السودان والوطن العربي.
            </p>
            <div className="hero-meta">
              {heroMeta.map((item, i) => {
                const Icon = item.icon
                return (
                  <div className="hero-meta-item" key={i}>
                    <Icon size={18} />
                    <span>{item.text}</span>
                  </div>
                )
              })}
            </div>
            <div className="hero-actions">
              <a href="#registration" className="btn btn-accent">
                انضم إلينا الآن
                <ArrowLeft size={20} />
              </a>
              <a href="#about" className="btn btn-outline">
                تعرف على الملتقى
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <h3 className="hero-card-title">يحتوي الملتقى على:</h3>
              <ul className="hero-card-list">
                {heroCardItems.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>اكتشف المزيد</span>
        <ChevronDown size={20} />
      </div>
    </section>
  )
}

function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className={`about-text fade-up ${visible ? 'visible' : ''}`} ref={ref}>
            <span className="section-label">عن الملتقى</span>
            <h2 className="section-title">الملتقى الأول لجودة التدريب والاعتماد المهني</h2>
            <p>
              بمشاركة نخبة المدربين والخبراء والاستشاريين في مجال التدريب من السودان والوطن العربي، ينطلق
              الملتقى الأول لجودة التدريب والاعتماد المهني، ليكون منصة علمية وعملية تجمع أبرز المفكرين
              والممارسين في صناعة التدريب.
            </p>
            <p>
              يهدف الملتقى إلى تطوير ممارسات جودة التدريب وبناء كوادر تدريبية مؤهلة وفق معايير مهنية
              عالمية، مع تبادل الخبرات العربية في هذا المجال الحيوي.
            </p>
            <div className="about-features">
              {aboutFeatures.map((f, i) => {
                const Icon = f.icon
                return (
                  <div className="about-feature" key={i}>
                    <div className="about-feature-icon">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={`about-visual fade-up ${visible ? 'visible' : ''}`}>
            <div className="about-image-wrap">
              <img
                src={`${import.meta.env.BASE_URL}about-forum.webp`}
                alt="ملتقى جودة التدريب"
                loading="lazy"
              />
            </div>
            <div className="about-badge">
              <div className="about-badge-number">10+</div>
              <div className="about-badge-label">دول عربية مشاركة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Program() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <section className="section program" id="program">
      <div className="container">
        <div className="section-header">
          <span className="section-label">برنامجنا</span>
          <h2 className="section-title">ماذا ينتظرك؟</h2>
          <p className="section-subtitle">
            برنامج غني ومتنوع يقدم تجربة تعليمية متكاملة في مجال جودة التدريب والاعتماد المهني
          </p>
        </div>
        <div className="program-grid" ref={ref}>
          {programCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                className={`program-card fade-up ${visible ? 'visible' : ''}`}
                key={i}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="program-card-icon">
                  <Icon size={28} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Schedule() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <section className="section schedule" id="schedule">
      <div className="container">
        <div className="section-header">
          <span className="section-label">محاور الملتقى</span>
          <h2 className="section-title">برنامج الأيام الثلاثة</h2>
          <p className="section-subtitle">
            ثلاثة أيام مليئة بالعلم والمعرفة والتفاعل، تغطي محاور جودة التدريب من الأسس إلى المستقبل
          </p>
        </div>
        <div className="schedule-days" ref={ref}>
          {scheduleDays.map((day, i) => (
            <div
              className={`schedule-day fade-up ${visible ? 'visible' : ''}`}
              key={i}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="schedule-day-header">
                <div className="schedule-day-num">{day.num}</div>
                <div>
                  <div className="schedule-day-title">{day.title}</div>
                  <div className="schedule-day-subtitle">{day.subtitle}</div>
                </div>
              </div>
              <ul className="schedule-topics">
                {day.topics.map((topic, j) => (
                  <li key={j}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Countries() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <section className="section countries" id="countries">
      <div className="container">
        <div className="section-header">
          <span className="section-label">المشاركة العربية</span>
          <h2 className="section-title">الدول المشاركة</h2>
          <p className="section-subtitle">
            نخبة من الخبراء والمتحدثين من عشر دول عربية يجمعهم شغف جودة التدريب
          </p>
        </div>
        <div className="countries-grid" ref={ref}>
          {countries.map((country, i) => (
            <div
              className={`country-card fade-up ${visible ? 'visible' : ''}`}
              key={i}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="country-flag">{country.flag}</div>
              <div className="country-name">{country.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Speakers() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  return (
    <section className="section speakers" id="speakers">
      <div className="container">
        <div className="section-header">
          <span className="section-label">نخبة المتحدثين</span>
          <h2 className="section-title">أبرز المشاركين</h2>
          <p className="section-subtitle">
            تعرف على خبرائنا وكبار المتحدثين في المجال من مختلف الدول العربية
          </p>
        </div>
        <div className="speakers-grid" ref={ref}>
          {speakers.map((speaker, i) => (
            <div
              className={`speaker-card fade-up ${visible ? 'visible' : ''}`}
              key={i}
              style={{ transitionDelay: `${(i % 5) * 0.08}s` }}
            >
              <div className="speaker-avatar">
                <img
                  src={`${import.meta.env.BASE_URL}speakers/${speaker.image}`}
                  alt={`صورة ${speaker.name}`}
                  loading="lazy"
                />
              </div>
              <div className="speaker-info">
                <div className="speaker-name">{speaker.name}</div>
                <div className="speaker-role">متحدث</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <h2>كن جزءًا من أكبر تجمع مهني عربي</h2>
          <p>
            شارك في أكبر تجمع مهني عربي يناقش مستقبل جودة التدريب ويجمع الخبراء والممارسين لصناعة أثر
            مهني مستدام.
          </p>
          <a href="#registration" className="btn btn-accent">
            انضم إلينا الآن
            <ArrowLeft size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Registration() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const fullName = formData.get('full_name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const country = formData.get('country') as string
    const profession = formData.get('profession') as string
    const organization = formData.get('organization') as string

    if (!fullName || !email) {
      setError('يرجى تعبئة الاسم والبريد الإلكتروني')
      setSubmitting(false)
      return
    }

    const { error: insertError } = await supabase.from('registrations').insert({
      full_name: fullName,
      email,
      phone,
      country,
      profession,
      organization,
    })

    if (insertError) {
      setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.')
      setSubmitting(false)
      return
    }

    setSuccess(true)
    setSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <section className="section registration" id="registration">
      <div className="container">
        <div className="registration-grid">
          <div className={`registration-info fade-up ${visible ? 'visible' : ''}`} ref={ref}>
            <span className="section-label">سجل الآن</span>
            <h2>سجل اليوم لتكون جزءًا من هذا الحدث المميز!</h2>
            <p>
              انضم إلى مئات المهتمين بجودة التدريب من جميع أنحاء العالم العربي. التسجيل مجاني ومفتوح
              للجميع.
            </p>
            <ul className="registration-info-list">
              {registrationBenefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <li key={i}>
                    <Icon size={22} />
                    {b.text}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={`registration-form-wrap fade-up ${visible ? 'visible' : ''}`}>
            {success ? (
              <div className="form-success">
                <CheckCircle2 size={48} color="#2d7d5c" style={{ margin: '0 auto 1rem' }} />
                <h3>تم تسجيلك بنجاح!</h3>
                <p>شكراً لتسجيلك في الملتقى الأول لجودة التدريب. سيصلك تفاصيل المشاركة قريباً.</p>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => setSuccess(false)}
                >
                  تسجيل شخص آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">
                    الاسم الكامل <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    className="form-input"
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      البريد الإلكتروني <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">رقم الهاتف</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      placeholder="+249 ..."
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">الدولة</label>
                    <select name="country" className="form-select" defaultValue="">
                      <option value="" disabled>
                        اختر دولتك
                      </option>
                      {countries.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.flag} {c.name}
                        </option>
                      ))}
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">المهنة</label>
                    <input
                      type="text"
                      name="profession"
                      className="form-input"
                      placeholder="مثال: مدرب، استشاري، مدير"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">جهة العمل</label>
                  <input
                    type="text"
                    name="organization"
                    className="form-input"
                    placeholder="اسم الجهة أو المؤسسة"
                  />
                </div>
                {error && <div className="form-error">{error}</div>}
                <button type="submit" className="btn btn-primary form-submit" disabled={submitting}>
                  {submitting ? 'جاري التسجيل...' : 'سجل الآن'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>الجمعية السودانية لجودة التدريب</h3>
            <p>
              الملتقى الأول لجودة التدريب والاعتماد المهني، منصة علمية وعملية تجمع نخبة الخبراء والممارسين
              في صناعة التدريب من السودان والوطن العربي.
            </p>
          </div>
          <div className="footer-col">
            <h4>روابط سريعة</h4>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <div className="footer-contact-item">
              <Mail size={18} />
              <span>{contactInfo.email}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <span>+249 91 213 1272</span>
            </div>
            <div className="footer-contact-item">
              <Calendar size={18} />
              <span>22 - 24 سبتمبر 2026</span>
            </div>
            <div className="footer-contact-item">
              <Video size={18} />
              <span>اون لاين - زووم</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 الجمعية السودانية لجودة التدريب. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Program />
        <Schedule />
        <Countries />
        <Speakers />
        <CTASection />
        <Registration />
      </main>
      <Footer />
    </>
  )
}
