import React from "react";
import {
  Crown,
  Users,
  HeartHandshake,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Globe2,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Camera,
  ArrowRight,
  Menu
} from "lucide-react";

const navItems = ["About", "Culture", "Programs", "Leadership", "Membership", "Contact"];

const values = [
  {
    icon: <Users />,
    title: "Unity",
    text: "Bringing Edo sons, daughters, families and friends together as one supportive community in Nottingham."
  },
  {
    icon: <Crown />,
    title: "Culture",
    text: "Preserving our language, heritage, music, dance, attire, values and traditional identity for the next generation."
  },
  {
    icon: <HeartHandshake />,
    title: "Empowerment",
    text: "Creating programmes that uplift women, mentor youth, strengthen families and promote leadership."
  }
];

const programmes = [
  "Women empowerment conferences and networking",
  "Youth mentoring, education and leadership talks",
  "Cultural showcases representing Bini, Esan, Etsako, Owan and Akoko-Edo",
  "Community welfare, support and integration in the UK",
  "Heritage celebrations, family gatherings and public awareness"
];

const gallery = [
  { title: "Cultural Celebration", img: "/cultural day.JPG" },
  { title: "Women Empowerment", img: "/women empowerment.jpg" },
  { title: "Community Unity", img: "/event 1.jpg" },
  { title: "Youth Leadership", img: "/event 2.JPG" }
];

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Edo State Diaspora Nottingham home">
          <span className="brand-icon"><Crown size={24} /></span>
          <span>
            <strong>Edo State Diaspora</strong>
            <small>Nottingham Chapter</small>
          </span>
        </a>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>

        <a className="nav-button" href="#membership">Join Us</a>
        <button className="menu-button" aria-label="Open menu"><Menu /></button>
      </header>

      <section id="home" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Unity • Culture • Empowerment • Legacy</p>
            <h1>Building a stronger Edo community in Nottingham.</h1>
            <p className="hero-lead">
              A home away from home for Edo people in Nottingham, United Kingdom — preserving our heritage, supporting our members, and empowering present and future generations.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#membership">Become a Member <ArrowRight size={18} /></a>
              <a className="secondary-btn" href="#programs">Explore Programmes</a>
            </div>
          </div>

          <div className="hero-card">
            <Globe2 className="hero-card-icon" />
            <h2>A bridge between home and abroad</h2>
            <p>
              We represent identity, dignity and community impact, connecting Edo heritage with life in Nottingham and beyond.
            </p>
            <div className="stats">
              <div><strong>5</strong><span>Edo Groups</span></div>
              <div><strong>1</strong><span>United Family</span></div>
              <div><strong>UK</strong><span>Diaspora Impact</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section split">
        <div>
          <p className="section-label">About Us</p>
          <h2>Who we are</h2>
          <p>
            Edo State Diaspora Nottingham is a vibrant community of people from Edo State, Nigeria, living in Nottingham and surrounding areas. We exist to promote unity, preserve our culture, support one another and build a meaningful legacy in the diaspora.
          </p>
          <p>
            Our community welcomes every Edo group — Bini, Esan, Etsako, Owan and Akoko-Edo — under one family of respect, service and belonging.
          </p>
        </div>

        <div className="mission-card">
          <Sparkles size={34} />
          <h3>Our Mission</h3>
          <p>
            To create a visible, united and empowered Edo community that uplifts families, celebrates heritage, mentors young people and contributes positively to Nottingham and Edo State.
          </p>
        </div>
      </section>

      <section id="culture" className="section culture-section">
        <div className="section-heading">
          <p className="section-label">Our Values</p>
          <h2>Rooted in heritage. Rising with purpose.</h2>
        </div>

        <div className="value-grid">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <span>{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="programs" className="section programs">
        <div className="program-panel">
          <div>
            <p className="section-label light">Community Programmes</p>
            <h2>Creating spaces for growth, culture and connection.</h2>
            <p>
              Our programmes are designed to strengthen families, empower women, inspire youth, promote leadership and celebrate the beauty of Edo culture.
            </p>
          </div>

          <ul className="program-list">
            {programmes.map((programme) => (
              <li key={programme}><ShieldCheck size={20} /> {programme}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="section-heading">
          <p className="section-label">Gallery</p>
          <h2>Moments that tell our story</h2>
          <p>Add real photos from your empowerment programmes, cultural events and community activities.</p>
        </div>

        <div className="gallery-grid">
         {gallery.map((item) => (
  <div className="gallery-card" key={item.title}>
    <img src={item.img} alt={item.title} className="gallery-img" />
    <h3>{item.title}</h3>
  </div>
))}
        </div>
      </section>

      <section id="leadership" className="section leadership">
        <div className="leader-card">
          <div className="leader-photo">
            <Crown size={60} />
          </div>
          <div>
            <p className="section-label">Leadership</p>
            <h2>Led with service, humility and vision.</h2>
            <p>
              Under the leadership of President Fredlyne Evbuomwan, Edo State Diaspora Nottingham continues to grow as a platform for unity, cultural pride, empowerment and positive community impact.
            </p>
            <blockquote>
              “Together, we preserve our roots, support one another and build a legacy our children will be proud of.”
            </blockquote>
          </div>
        </div>
      </section>

      <section id="membership" className="section membership">
        <div className="membership-content">
          <GraduationCap size={42} />
          <h2>Become part of the Edo family in Nottingham.</h2>
          <p>
            Whether you are newly arrived, a long-standing resident, a student, a family member, or a friend of Edo culture, there is a place for you in our community.
          </p>
          <a className="primary-btn" href="mailto:info@edodiasporanottingham.org">Register Interest</a>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Let’s connect</h2>
          <p>
            Reach out to join, volunteer, partner with us, or learn more about our community programmes and upcoming events.
          </p>

          <div className="contact-list">
            <p><MapPin /> Nottingham, United Kingdom</p>
            <p><Mail /> info@edodiasporanottingham.org</p>
            <p><Phone /> Add your phone number here</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Your name" />
          <input placeholder="Your email" />
          <input placeholder="Subject" />
          <textarea placeholder="Your message" />
          <button>Send Message</button>
        </form>
      </section>

      <footer>
        <strong>Edo State Diaspora Nottingham Chapter</strong>
        <p>© {new Date().getFullYear()} All Rights Reserved. Unity • Culture • Empowerment</p>
      </footer>
    </main>
  );
}
