import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import brandIcon from "./assets/icon.png";

const marketplaceUrl = "https://marketplace.visualstudio.com/";
const proCheckoutUrl =
  "mailto:bn.4u7agex@gmail.com?subject=Stacklens%20Pro%20Subscription";
const teamCheckoutUrl =
  "mailto:bn.4u7agex@gmail.com?subject=Stacklens%20Team%20Plan";

const supportedTech = ["TypeScript", "React", "Go", "Java", "Python", "JSON"];

const features = [
  {
    icon: "✦",
    title: "Intelligent Documentation",
    description:
      "Generate JSDoc, GoDoc, JavaDoc, and Python docstrings based on implementation logic, validation flows, return semantics, and business intent.",
  },
  {
    icon: "⌁",
    title: "Architecture Analysis",
    description:
      "Understand module relationships, service boundaries, project structure, and dependency flows without manually tracing every file.",
  },
  {
    icon: "◇",
    title: "Localization Generation",
    description:
      "Generate target-language JSON files from source localization files while preserving keys, nesting, placeholders, variables, and HTML tags.",
  },
  {
    icon: "⚡",
    title: "Editor-first Workflow",
    description:
      "No repetitive copy-pasting into external AI tools. Run Stacklens commands directly from VS Code and stay in your development flow.",
  },
];

const stats = [
  ["1-click", "documentation generation"],
  ["4+", "language doc styles"],
  ["AI", "architecture analysis"],
  ["JSON", "localization workflow"],
];

const workflow = [
  {
    number: "01",
    title: "Select file or project",
    description: "Run Stacklens from VS Code command palette or context menu.",
  },
  {
    number: "02",
    title: "AI analysis",
    description:
      "Stacklens backend analyzes code, structure, or localization content.",
  },
  {
    number: "03",
    title: "Generate output",
    description:
      "Get documentation, architecture insights, or translated JSON files.",
  },
];

const plans = [
  {
    name: "Free",
    description: "For individual developers trying Stacklens.",
    price: "₹0",
    suffix: "/month",
    cta: "Install extension",
    href: marketplaceUrl,
    variant: "secondary",
    items: [
      "Basic documentation generation",
      "Architecture analysis preview",
      "Localization up to 2500 words",
      "Community support",
    ],
  },
  {
    name: "Pro",
    description: "For active developers working on real projects.",
    price: "$49",
    suffix: "/month",
    cta: "Subscribe to Pro",
    href: proCheckoutUrl,
    variant: "primary",
    featured: true,
    items: [
      "Unlimited documentation generation*",
      "Advanced architecture insights",
      "Large localization files",
      "Priority AI processing",
      "Email support",
    ],
  },
  {
    name: "Team",
    description: "For small teams and growing engineering groups.",
    price: "$199",
    suffix: "/month",
    cta: "Contact for Team",
    href: teamCheckoutUrl,
    variant: "secondary",
    items: [
      "Everything in Pro",
      "Team usage pool",
      "Higher localization quota",
      "Shared project workflows",
      "Priority support",
    ],
  },
];

const techTags = [
  "VS Code Extension API",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "Groq",
  "Gemini",
  "OpenRouter",
  "Render",
];

const faqs = [
  {
    question: "Does Stacklens send code outside VS Code?",
    answer:
      "Stacklens uses a backend AI service for generation features. Future versions can include stronger controls and account-based usage settings.",
    open: true,
  },
  {
    question: "Why is localization limited on the free plan?",
    answer:
      "Large localization files consume significant AI/translation resources. The free plan supports small files, while Pro unlocks larger files.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "Documentation generation supports JavaScript, TypeScript, Go, Java, and Python. Localization supports common target languages like Hindi, Bengali, German, French, Spanish, Japanese, and more.",
  },
  {
    question: "Can teams use Stacklens?",
    answer:
      "Yes. The Team plan is designed for shared engineering workflows, higher quotas, and priority support.",
  },
];

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <Features />
        <Workflow />
        <Pricing />
        <TechStack />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="Stacklens Home">
        <img src={brandIcon} alt="Brand mark" className="brand-mark" />
        <span>Stacklens</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="nav-cta" href="#pricing">
        Upgrade
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-grid">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="pulse-dot" />
          AI-powered VS Code productivity extension
        </div>
        <h2>
          Understand, document, and localize codebases without leaving VS Code.
        </h2>
        <p className="hero-subtitle">
          Stacklens helps developers generate intelligent code documentation,
          architecture insights, and localization files directly from their
          editor — with less context switching and less manual work.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#pricing">
            View plans
          </a>
          <a
            className="btn btn-secondary"
            href={marketplaceUrl}
            target="_blank"
            rel="noreferrer"
          >
            VS Code Marketplace
          </a>
        </div>
        <div className="trust-row" aria-label="Supported technologies">
          {supportedTech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="hero-card" aria-label="Stacklens workflow preview">
        <div className="window-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="code-preview">
          <div className="code-line">
            <span className="muted">// Stacklens</span>
          </div>
          <div className="code-line">
            <span className="accent">GenerateDocumentation</span>()
          </div>
          <div className="code-line">
            <span className="accent-purple">AnalyzeArchitecture</span>()
          </div>
          <div className="code-line">
            <span className="accent-green">CreateLocalization</span>(
            <span className="string">"de"</span>)
          </div>
        </div>
        <div className="insight-panel">
          <p className="small-label">Generated insight</p>
          <h3>Project structure detected</h3>
          <p>
            Routes, services, utilities, validation flows, and reusable
            components mapped automatically.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="section stats">
      {stats.map(([value, label]) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="section">
      <div className="section-heading">
        <span className="eyebrow">Features</span>
        <h2>
          Built for developers working with large or unfamiliar codebases.
        </h2>
        <p>
          Stacklens focuses on practical developer workflows inside VS Code.
        </p>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="section workflow-section">
      <div className="section-heading narrow">
        <span className="eyebrow">How it works</span>
        <h2>From source code to useful engineering context.</h2>
      </div>
      <div className="workflow">
        {workflow.map((step) => (
          <div className="workflow-step" key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="section-heading">
        <span className="eyebrow">Pricing</span>
        <h2>Choose the right plan for your development workflow.</h2>
        <p>
          Start free. Upgrade when your localization files and team workflows
          grow.
        </p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article
            className={`pricing-card${plan.featured ? " featured-plan" : ""}`}
            key={plan.name}
          >
            {plan.featured && <div className="badge">Most popular</div>}
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
            </div>
            <div className="price">
              {plan.price}
              <span>{plan.suffix}</span>
            </div>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className={`btn btn-${plan.variant} full`}
              href={plan.href}
              target={plan.href.startsWith("http") ? "_blank" : undefined}
              rel={plan.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
      <p className="pricing-note">
        *Fair usage applies to protect platform stability and prevent abuse.
      </p>
    </section>
  );
}

function TechStack() {
  return (
    <section className="section tech-section">
      <div className="tech-card">
        <div>
          <span className="eyebrow">Tech stack</span>
          <h2>Designed with a secure AI backend.</h2>
          <p>
            Stacklens uses a VS Code extension frontend connected to a backend
            AI service, keeping API keys out of the published extension and
            enabling future usage limits, subscriptions, and provider fallback.
          </p>
        </div>
        <div className="tech-tags">
          {techTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="section faq-section">
      <div className="section-heading narrow">
        <span className="eyebrow">FAQ</span>
        <h2>Common questions</h2>
      </div>
      <div className="faq-grid">
        {faqs.map((faq) => (
          <details key={faq.question} open={faq.open}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section final-cta">
      <div>
        <span className="eyebrow">Ready to ship faster?</span>
        <h2>Bring AI-powered code understanding into your editor.</h2>
        <p>
          Install Stacklens today and upgrade when your workflow needs more
          power.
        </p>
      </div>
      <a className="btn btn-primary" href="#pricing" style={{ padding: "0px 18px", display: "flex", whiteSpace: "nowrap" }}>
  Choose a plan
</a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="brand footer-brand">
        <img src={brandIcon} alt="Brand mark" className="brand-mark" />
        <span>Stacklens</span>
      </div>
      <p>© 2026 Stacklens. Built for developers.</p>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
