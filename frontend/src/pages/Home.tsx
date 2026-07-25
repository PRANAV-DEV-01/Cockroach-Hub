import { Link } from "react-router-dom";
import { Phone, Radio, Scale, ShieldCheck, Send } from "lucide-react";

export default function Home() {
  const categories = [
    { to: "/emergency", title: "Emergency Directory", tag: "24/7", icon: Phone },
    { to: "/live-feed", title: "Live Feed", tag: "LIVE", icon: Radio },
    { to: "/legal-rights", title: "Know Your Rights", tag: "Popular", icon: Scale },
    { to: "/fact-check", title: "Fact Check", tag: "Verified", icon: ShieldCheck },
    { to: "/submit", title: "Submit Report", tag: "Anonymous", icon: Send },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-5">
      <div className="border border-cjp-maroon/30 bg-cjp-maroon/5 p-5 md:p-6">
        <h1 className="text-xl font-black text-white">
          Cockroach Janta Party — <span className="text-ph-orange">Helpline</span>
        </h1>
        <p className="text-sm text-ph-text-secondary mt-1">Works when the internet goes down. Every guide, every emergency number — cached on your phone.</p>
      </div>

      <div className="ph-section"><div><h2>Quick Access</h2><div className="ph-section-accent" /></div></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map(({ to, title, tag, icon: Icon }) => (
          <Link key={to} to={to} className="bg-white dark:bg-ph-dark-2 border border-ph-border-light dark:border-ph-border p-4 text-center hover:border-ph-orange transition-colors">
            <Icon className="h-8 w-8 mx-auto text-ph-orange mb-2" />
            <h3 className="text-sm font-bold text-ph-text-dark dark:text-white">{title}</h3>
            <span className="text-xs text-ph-text-muted">{tag}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
