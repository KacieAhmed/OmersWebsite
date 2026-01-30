import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Users,
  BookOpen,
  Calendar,
  MessageCircle,
  Award,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  Mail,
  Heart,
  Target,
  Lightbulb
} from 'lucide-react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo">
            Empower<span>Nisa</span>
          </a>
          <ul className="nav-links">
            <li><a href="#features">What We Offer</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-cta">
            <button className="btn btn-outline">Log In</button>
            <button className="btn btn-primary">Join Now</button>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>What We Offer</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button className="btn btn-primary">Join Now</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Free For All Muslim Women Entrepreneurs</span>
            </div>
            <h1>
              Your Success Is <span className="highlight">Our Mission</span>
            </h1>
            <p>
              Join a supportive community of Muslim women entrepreneurs. Get free mentorship,
              expert advice, and the resources you need to build and grow your business.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large">
                Apply to Join <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </button>
              <button className="btn btn-outline btn-large">
                Learn More
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Women Entrepreneurs</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Expert Mentors</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Free Access</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-container">
              <div className="hero-image-placeholder">
                <Heart size={80} />
                <span>Empowering Women<br />Building Dreams</span>
              </div>
              <motion.div
                className="floating-card card-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="floating-card-icon">
                  <Users size={24} />
                </div>
                <div className="floating-card-text">
                  <h4>Community Support</h4>
                  <p>Connect with peers</p>
                </div>
              </motion.div>
              <motion.div
                className="floating-card card-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="floating-card-icon">
                  <Award size={24} />
                </div>
                <div className="floating-card-text">
                  <h4>Expert Guidance</h4>
                  <p>Learn from the best</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">What We Offer</span>
            <h2>Everything You Need to Succeed</h2>
            <p>
              Access world-class resources, connect with experienced mentors,
              and join a community that understands your unique journey.
            </p>
          </motion.div>
          <motion.div
            className="features-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>1-on-1 Mentorship</h3>
              <p>
                Get paired with experienced women entrepreneurs who understand your
                challenges and can guide you through your business journey.
              </p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon">
                <MessageCircle size={32} />
              </div>
              <h3>Community Network</h3>
              <p>
                Connect with hundreds of like-minded Muslim women entrepreneurs.
                Share experiences, ask questions, and grow together.
              </p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon">
                <BookOpen size={32} />
              </div>
              <h3>Expert Workshops</h3>
              <p>
                Access exclusive workshops and masterclasses from industry experts
                covering marketing, finance, leadership, and more.
              </p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon">
                <Calendar size={32} />
              </div>
              <h3>Networking Events</h3>
              <p>
                Attend virtual and in-person events to expand your network,
                find collaborators, and discover new opportunities.
              </p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon">
                <Target size={32} />
              </div>
              <h3>Business Resources</h3>
              <p>
                Get access to templates, guides, and tools designed specifically
                to help you launch and scale your business.
              </p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon">
                <Lightbulb size={32} />
              </div>
              <h3>Accountability Groups</h3>
              <p>
                Join small groups of entrepreneurs who meet regularly to set goals,
                share progress, and keep each other motivated.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">How It Works</span>
            <h2>Your Journey Starts Here</h2>
            <p>
              Joining EmpowerNisa is simple. Here&apos;s how you can become part of our community.
            </p>
          </motion.div>
          <motion.div
            className="steps-container"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="step-card" variants={fadeInUp}>
              <div className="step-number">1</div>
              <h3>Apply Online</h3>
              <p>Fill out a simple application form telling us about yourself and your business goals.</p>
            </motion.div>
            <motion.div className="step-card" variants={fadeInUp}>
              <div className="step-number">2</div>
              <h3>Get Matched</h3>
              <p>We&apos;ll pair you with a mentor whose expertise aligns with your needs and goals.</p>
            </motion.div>
            <motion.div className="step-card" variants={fadeInUp}>
              <div className="step-number">3</div>
              <h3>Join Community</h3>
              <p>Access our private community platform and connect with fellow entrepreneurs.</p>
            </motion.div>
            <motion.div className="step-card" variants={fadeInUp}>
              <div className="step-number">4</div>
              <h3>Grow Together</h3>
              <p>Attend events, participate in workshops, and watch your business flourish.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Join hundreds of Muslim women entrepreneurs who are building successful
              businesses with the support of our community. It&apos;s completely free.
            </p>
            <button className="btn btn-primary btn-large">
              Apply Now — It&apos;s Free <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo">
                Empower<span>Nisa</span>
              </a>
              <p>
                Empowering Muslim women entrepreneurs with free mentorship, resources,
                and a supportive community to build successful businesses.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Programs</h4>
              <ul>
                <li><a href="#">Mentorship</a></li>
                <li><a href="#">Workshops</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Community</h4>
              <ul>
                <li><a href="#">Join Us</a></li>
                <li><a href="#">Become a Mentor</a></li>
                <li><a href="#">Success Stories</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 EmpowerNisa. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
