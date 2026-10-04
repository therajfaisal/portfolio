import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './contact.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.contact__animate'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container contact__inner">
        <div className="contact__text contact__animate">
          <p className="eyebrow">Get In Touch</p>
          <h2>Let's build something extraordinary together</h2>
          <p className="contact__sub">
            Have an opportunity, project collaboration, or just want to connect?
            Feel free to send a message or reach out directly.
          </p>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <p style={{ color: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              📧 <strong>Email:</strong> 
              <a href="mailto:mdfaisal53346@gmail.com" style={{ color: '#ff4d4d', textDecoration: 'none' }}>
                mdfaisal53346@gmail.com
              </a>
            </p>
            <p style={{ color: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              📞 <strong>Phone:</strong> 
              <a href="tel:+917322016023" style={{ color: '#ff4d4d', textDecoration: 'none' }}>
                +91 7322016023
              </a>
            </p>
            <p style={{ color: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              📍 <strong>Location:</strong> India
            </p>
          </div>
        </div>

        <form className="contact__form contact__animate" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="contact__success">Thank you! Your message has been sent. I'll get back to you soon. ✨</div>
          ) : (
            <>
              <div className="contact__row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea rows="4" placeholder="Tell me about your project or inquiry..." required />
              <button type="submit" className="btn btn-primary">Send Message →</button>
            </>
          )}
        </form>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} Shah Faisal. All rights reserved.</span>
          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </section>
  )
}
