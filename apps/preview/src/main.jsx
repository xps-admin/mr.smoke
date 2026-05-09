import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Bell, MapPin, Menu, Search, ShoppingBag, X } from 'lucide-react';
import './styles.css';

const navItems = ['Home', 'About Us', 'Store Locator', 'Contact Us', 'Job Application'];
const categories = ['Vape', 'Disposables', 'Kratom', 'Accessories', 'Dietary Supplements', 'Nootropics', 'Nicotine Replacement', 'Energy Enhancement', 'Mood Changers'];
const locations = ['Margate', 'Hollywood', 'Lauderdale 1', 'Lauderdale 2', 'Coral Springs', 'Pembroke Pines', 'North Palm Beach', 'Tallahassee', 'Delray Beach', 'Jacksonville / Orange Park', 'Pompano Beach', 'Atlantis', 'Pompano Beach 2', 'Lake Worth - Coming Soon'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const [query, setQuery] = useState('');
  const filteredLocations = useMemo(() => locations.filter((name) => name.toLowerCase().includes(query.toLowerCase())), [query]);

  if (!entered) {
    return <main className="age-screen"><section className="glass age-card"><p className="eyebrow">Client preview only</p><h1>MR. SMOKE</h1><p>This sandbox preview is not a live store. Final policy, fulfillment, and launch approvals are required.</p><button onClick={() => setEntered(true)}>Enter Preview</button></section></main>;
  }

  return <main className="site-shell"><header className="topbar"><a className="brand" href="#home">MR. SMOKE</a><nav className="desktop-nav">{navItems.slice(0,4).map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>)}</nav><button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button></header>{menuOpen && <div className="menu-overlay"><aside className="glass drawer"><button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button><p className="eyebrow">Menu</p>{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<a href="#instagram" onClick={() => setMenuOpen(false)}>Instagram</a></aside></div>}<section className="hero" id="home"><div className="glass hero-card"><p className="eyebrow">Florida retail storefront</p><h1>Mr.Smoke Digital Store Sandbox</h1><p>Dark visual storefront concept using the current site structure, upgraded navigation, category browsing, and location discovery.</p><div className="hero-actions"><a className="primary-btn" href="#categories"><ShoppingBag size={18}/> Browse Categories</a><a className="secondary-btn" href="#store-locator"><MapPin size={18}/> Find Location</a></div></div></section><section className="section" id="categories"><div className="section-heading"><p className="eyebrow">What we sell</p><h2>Category-first preview</h2><p>No online checkout is enabled in this sandbox. Product data and launch policy must be approved first.</p></div><div className="category-grid">{categories.map((category) => <article className="glass category-card" key={category}><div className="category-icon">{category[0]}</div><h3>{category}</h3><p>Preview category. Product import pending approval.</p><button>Request Info</button></article>)}</div></section><section className="section about" id="about-us"><div className="glass split-card"><div><p className="eyebrow">About us</p><h2>Premium local retail experience.</h2></div><p>Built to preserve the current brand feel while preparing a cleaner store-ready structure, client approval flow, and multi-location discovery path.</p></div></section><section className="section" id="store-locator"><div className="section-heading"><p className="eyebrow">Store locator</p><h2>South Florida and beyond</h2><div className="search-box"><Search size={18}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search locations" /></div></div><div className="location-grid">{filteredLocations.map((location) => <article className="glass location-card" key={location}><h3>{location}</h3><p>Hours and address enrichment pending final location audit.</p></article>)}</div></section><section className="section" id="contact-us"><div className="glass split-card"><div><p className="eyebrow">Automation ready</p><h2>Push and social draft queue.</h2></div><p><Bell size={18}/> Notifications and social campaigns remain draft-only until approved.</p></div></section><footer>Sandbox preview. No live commerce. No production deployment.</footer></main>;
}

createRoot(document.getElementById('root')).render(<App />);
