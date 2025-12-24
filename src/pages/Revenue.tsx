import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/ui/stat-card";
import { ArrowRight, Users, Calendar, BookOpen, Mail, Handshake, CheckCircle } from "lucide-react";

const revenueStreams = [
  {
    icon: Users,
    title: "Annual Membership Fees",
    description: "Members pay an annual fee to access a curated network and closed networking meetups. Creates predictable, recurring revenue.",
    highlight: "Recurring & Predictable",
  },
  {
    icon: Calendar,
    title: "Paid Workshops & Events",
    description: "Curated business workshops and networking events with revenue from paid tickets and brand sponsorships.",
    highlight: "Variable Costs = Scalable Profit",
  },
  {
    icon: BookOpen,
    title: "IBC Stories",
    description: "Paid media platform featuring Indian founders. Per-piece pricing for written stories and video interviews.",
    highlight: "High-Margin Upfront Cash",
  },
  {
    icon: Mail,
    title: "Newsletter Sponsorships",
    description: "Targeted email newsletter for Indian founders. Single-sponsor format priced at AED 5,000 per email.",
    highlight: "Scalable with Audience Growth",
  },
  {
    icon: Handshake,
    title: "Brand Partnerships",
    description: "Strategic partnerships with brands seeking access to the curated Indian founder community in Dubai.",
    highlight: "Premium Positioning",
  },
];

const characteristics = [
  "Paid upfront — no accounts receivable",
  "Recurring revenue from memberships",
  "Capital-light operations",
  "Diversified income streams",
  "No dependence on speculative growth",
  "High operating leverage",
];

const costCategories = [
  { name: "Branding & Design", description: "Professional brand identity" },
  { name: "Website & CMS", description: "Digital infrastructure" },
  { name: "Legal & Admin", description: "Compliance and setup" },
  { name: "Marketing & Launch", description: "Initial awareness" },
  { name: "Operations", description: "Outsourced execution" },
];

const Revenue = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                Revenue & Business Model
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6">
                Diverse Income, Sustainable Margins
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                IBC generates revenue from multiple engines, reducing dependency on any single source while maintaining capital efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Revenue Engines"
            title="Five Engines of Growth"
            description="Each revenue stream operates independently while reinforcing the overall ecosystem credibility."
          />
          
          <div className="space-y-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-card border border-border/50 hover-lift"
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <stream.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <h3 className="text-xl font-display font-medium text-foreground">
                      {stream.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                      {stream.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {stream.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Characteristics */}
      <section className="section-padding bg-gradient-section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                Key Characteristics
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-tight mb-6">
                Built for Durability
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The IBC revenue model prioritizes cash flow predictability and operational efficiency over aggressive growth.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {characteristics.map((char, index) => (
                  <motion.div
                    key={char}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{char}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <StatCard value="65%" label="Net Margin" description="Year 1 target" highlight />
              <StatCard value="5" label="Revenue Streams" description="Diversified" />
              <StatCard value="100%" label="Upfront Payment" description="No receivables" />
              <StatCard value="Low" label="Fixed Costs" description="Outsourced ops" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Structure */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Cost Structure"
            title="Lean Setup, High Leverage"
            description="IBC operates with minimal fixed costs. Most execution is outsourced, preserving operating leverage."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {costCategories.map((cost, index) => (
              <motion.div
                key={cost.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center"
              >
                <h4 className="font-display font-medium text-foreground mb-2">{cost.name}</h4>
                <p className="text-sm text-muted-foreground">{cost.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-section">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
              Interested in the Numbers?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Explore our investor section for detailed financial projections and profit distribution mechanics.
            </p>
            <Link to="/investors">
              <Button variant="gold" size="lg" className="group">
                View Investor Overview
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Revenue;
