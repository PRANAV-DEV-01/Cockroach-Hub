import { useState } from "react";
import { Phone, Copy, Check, Shield } from "lucide-react";
import toast from "react-hot-toast";

const contacts = [
  { id: 1, name: "NALSA Free Legal Aid", phone: "15100", category: "legal", description: "Free legal aid helpline", is_verified: true },
  { id: 2, name: "Ambulance - EMS", phone: "108", category: "medical", description: "Emergency ambulance", is_verified: true },
  { id: 3, name: "Child Helpline", phone: "1098", category: "helpline", description: "Child helpline 24/7", is_verified: true },
  { id: 4, name: "Women's Helpline", phone: "181", category: "legal", description: "National women's helpline", is_verified: true },
];

export default function Emergency() {
  const [cat, setCat] = useState("legal");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copy = async (id: number, phone: string) => {
    try { await navigator.clipboard.writeText(phone); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); toast.success("Copied!"); } catch {}
  };

  const filtered = contacts.filter(c => c.category === cat);

  return (
    <div className="max-w-7xl mx-auto px-4 py-5 space-y-5">
      <div className="ph-section"><div><h2>Emergency Directory</h2><div className="ph-section-accent" /></div></div>

      <div className="flex gap-2 overflow-x-auto">
        {["legal", "medical", "helpline"].map(k => (
          <button key={k} onClick={() => setCat(k)} className={`px-4 py-1.5 text-[12px] font-bold rounded-full ${cat === k ? "bg-ph-orange text-white" : "bg-gray-100 dark:bg-ph-card text-ph-text-muted"}`}>{k}</button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(c => (
          <div key={c.id} className="bg-white dark:bg-ph-dark-2 border border-ph-border-light dark:border-ph-border p-4">
            <div className="flex items-start justify-between">
              <h3 className="text-sm font-bold text-ph-text-dark dark:text-white">{c.name}</h3>
              {c.is_verified && <span className="ph-badge-green"><Shield className="h-3 w-3 inline mr-0.5" />Verified</span>}
            </div>
            {c.description && <p className="text-xs text-ph-text-muted mt-1">{c.description}</p>}
            <p className="text-lg font-black text-ph-orange my-2">{c.phone}</p>
            <div className="flex gap-2">
              <a href={`tel:${c.phone}`} className="ph-btn-primary flex-1"><Phone className="h-4 w-4" />Call</a>
              <button onClick={() => copy(c.id, c.phone)} className="ph-btn-primary bg-transparent border border-ph-border-light text-ph-text-dark dark:text-ph-text-secondary flex-1">
                {copiedId === c.id ? <><Check className="h-4 w-4" />Copied</> : <><Copy className="h-4 w-4" />Copy</>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
