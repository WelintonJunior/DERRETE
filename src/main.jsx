import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Flame, Menu, X, Sparkles, Utensils, Heart, Leaf, Quote } from 'lucide-react';
import './styles.css';

const navItems = [
  ['historia', 'A história'],
  ['produto', 'A vela gastronômica'],
  ['mesa', 'À mesa'],
  ['agradecimentos', 'Agradecimentos'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="wordmark" href="#top" aria-label="DERRETÊ, início" onClick={closeMenu}>DERRETÊ<span>°</span></a>
        <nav className={`nav ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contato" onClick={closeMenu}>Conheça a proposta <ArrowUpRight size={16} /></a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> Vela gastronômica <span className="eyebrow-dot"></span></p>
            <h1>Manteiga que <em>derrete</em><br />para compartilhar.</h1>
            <p className="hero-text">Um alimento tradicional transformado em experiência à mesa: acenda, deixe derreter e descubra uma nova forma de receber.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#produto">Descobrir a DERRETÊ <ArrowDown size={17} /></a>
              <a className="text-link" href="#historia">Nossa história <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-art reveal delay-1" aria-label="Logo e vela gastronômica DERRETÊ">
            <div className="halo halo-one" />
            <div className="halo halo-two" />
            <div className="hero-card">
              <span className="card-stamp">feito para<br /><strong>compartilhar</strong></span>
              <img src="./logo-derrete.jpeg" alt="Logo DERRETÊ — Manteiga que derrete para compartilhar" />
              <div className="card-caption"><span>01</span><span>acenda o momento</span><span>✦</span></div>
            </div>
            <div className="floating-note"><Flame size={15} /> manteiga clarificada</div>
          </div>
          <div className="hero-bottom"><span>01 / 04</span><span className="scroll-note">role para explorar <ArrowDown size={15} /></span><span className="hero-rule" /></div>
        </section>

        <section className="intro section-pad" id="historia">
          <div className="section-kicker">A história por trás do derretê</div>
          <div className="intro-grid">
            <div className="intro-title"><span className="number">01</span><h2>O sabor de uma<br /><em>ideia acesa.</em></h2></div>
            <div className="intro-copy"><p className="lead">A DERRETÊ nasceu para transformar o jeito de compartilhar comida.</p><p>Somos uma marca brasileira que acredita que os melhores encontros começam com um gesto simples — e terminam em volta da mesa. Criamos velas gastronômicas comestíveis à base de manteiga clarificada para que o servir também seja parte da experiência.</p><a className="text-link" href="#produto">Conheça nosso propósito <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="quote-band"><Quote size={22} /><p>“Inovação, funcionalidade e apresentação em uma chama que dá vontade de provar.”</p><span>— DERRETÊ</span></div>
        </section>

        <section className="product-section section-pad" id="produto">
          <div className="product-heading"><div><span className="section-kicker light">A proposta de valor</span><h2>Uma vela que<br /><em>alimenta.</em></h2></div><p>Para acender na mesa, deixar derreter e servir com tudo o que combina com uma boa história.</p></div>
          <div className="product-stage">
            <div className="product-visual"><div className="product-glow" /><div className="candle"><div className="flame"><i /></div><div className="wick" /><div className="butter-top"></div><div className="butter-body"><span>vela<br /><small>gastronômica</small></span></div></div><span className="visual-label label-left">acenda</span><span className="visual-label label-right">sirva</span></div>
            <div className="product-info"><span className="product-tag">a experiência</span><h3>A experiência começa<br />antes da primeira mordida.</h3><p>Feita com manteiga clarificada e ingredientes selecionados, a vela DERRETÊ une o calor de uma chama à delicadeza de um acompanhamento. O resultado é uma manteiga aromática, cremosa e pronta para compartilhar.</p><div className="feature-list"><div><Sparkles size={19} /><span><b>Inovação</b><small>um jeito novo de servir</small></span></div><div><Heart size={19} /><span><b>Afeto</b><small>comida que aproxima</small></span></div><div><Utensils size={19} /><span><b>Funcionalidade</b><small>do fogo para o pão</small></span></div></div></div>
          </div>
        </section>

        <section className="flavors section-pad">
          <div className="flavors-top"><div><span className="section-kicker">Dois jeitos de começar</span><h2>Escolha seu<br /><em>aroma.</em></h2></div><p>O toque defumado é a assinatura que conecta cada ingrediente ao calor da chama.</p></div>
          <div className="flavor-grid"><article className="flavor-card herbs"><div className="flavor-icon"><Leaf size={27} /></div><span className="flavor-num">01</span><h3>Ervas<br />Finas</h3><p>Notas verdes, delicadas e perfumadas para acompanhar pães artesanais, queijos frescos e conversas longas.</p><div className="flavor-foot"><span>perfil suave</span><span>✦</span></div></article><article className="flavor-card chimichurri"><div className="flavor-icon"><Flame size={27} /></div><span className="flavor-num">02</span><h3>Chimichurri<br /><em>defumado</em></h3><p>Ervas marcantes e uma camada defumada para quem gosta de sabor com presença e personalidade.</p><div className="flavor-foot"><span>perfil intenso</span><span>✦</span></div></article></div>
        </section>

        <section className="table-section section-pad" id="mesa">
          <div className="table-copy"><span className="section-kicker light">A experiência à mesa</span><h2>Feita para<br /><em>circular.</em></h2><p>Na DERRETÊ, cada vela é um convite para colocar o pão no centro, aproximar as mãos e deixar a conversa seguir.</p><a className="button button-light" href="#contato">Leve para a sua mesa <ArrowUpRight size={17} /></a></div>
          <div className="table-collage"><div className="collage-main"><span className="plate-glyph">✦</span><strong>pão<br />quente</strong></div><div className="collage-small small-one"><span>queijos</span></div><div className="collage-small small-two"><span>tábuas<br />de frios</span></div><div className="collage-note">a mesa fica<br /><em>mais gostosa</em><span>✦</span></div></div>
        </section>

        <section className="thanks section-pad" id="agradecimentos">
          <div className="thanks-top"><span className="section-kicker">Com carinho, a nossa turma</span><span className="number">04</span></div>
          <div className="thanks-content"><h2>Agradecimentos<br /><em>especiais.</em></h2><div className="thanks-copy"><p>Este projeto foi construído com curiosidade, dedicação e muitas trocas. Agradecemos especialmente aos professores que nos inspiraram a transformar uma ideia em algo que pode chegar à mesa.</p><div className="signature"><span>com afeto,</span><strong>Angel, Bianca, Mariana<br />& Yasmin</strong><small>6º semestre · Gestão Empresarial</small></div></div></div>
          <div className="thanks-footer"><span>DERRETÊ</span><span>manteiga que derrete para compartilhar</span><span>2026 ✦</span></div>
        </section>

        <section className="contact-strip" id="contato"><div><span className="eyebrow">Uma ideia para compartilhar</span><h2>Acenda a conversa.</h2></div><a className="button button-light" href="mailto:oi@derrete.com.br">Fale com a DERRETÊ <ArrowUpRight size={17} /></a></section>
      </main>
      <footer><span>© DERRETÊ</span><span>feito para ficar à mesa</span><a href="#top">voltar ao topo <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
