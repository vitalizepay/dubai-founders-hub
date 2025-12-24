import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/ui/stat-card";
import { ArrowRight, PieChart, TrendingUp, Shield, FileText } from "lucide-react";

const distributionDetails = [
  {
    title: "100% Annual Distribution",
    description: "IBC distributes 100 percent of annual net profit each year. No retained earnings policy.",
  },
  {
    title: "50/50 Split",
    description: "Fifty percent allocated to the founder and fifty percent distributed equally among investors.",
  },
  {
    title: "Equity Upside",
    description: "Investors also receive equity upside through SAFE notes, which are separate from dividend payouts.",
  },
];

const safeDetails = [
  { label: "Investment Structure", value: "SAFE Notes" },
  { label: "Valuation Cap", value: "Pre-agreed cap" },
  { label: "Discount Rate", value: "Standard terms" },
  { label: "Equity Conversion", value: "On future round" },
];

const Investors = () => {
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
                For Investors
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6">
                Clear Structure, Aligned Incentives
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                IBC offers a straightforward investment structure with 100% annual profit distribution and SAFE-based equity upside.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="100%" label="Profit Distributed" description="Annually" highlight />
            <StatCard value="50%" label="To Investors" description="Equal split among all" />
            <StatCard value="50%" label="To Founder" description="Aligned long-term" />
            <StatCard value="SAFE" label="Investment Structure" description="Standard terms" />
          </div>
        </div>
      </section>

      {/* Profit Distribution */}
      <section className="section-padding bg-gradient-section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <PieChart className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-accent">Profit Distribution</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-tight mb-6">
                Transparent Annual Dividends
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Unlike traditional startups that retain earnings for speculative growth, IBC distributes all profits annually. This creates immediate returns alongside equity upside.
              </p>
              
              <div className="space-y-6">
                {distributionDetails.map((detail, index) => (
                  <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-foreground mb-1">{detail.title}</h4>
                      <p className="text-muted-foreground">{detail.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="p-8 md:p-12 rounded-3xl bg-card border border-border/50">
                <h3 className="text-2xl font-display font-medium text-foreground mb-8 text-center">
                  Annual Distribution
                </h3>
                
                {/* Visual Split */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-16 rounded-xl bg-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-display font-semibold text-accent">50%</div>
                      <div className="text-xs text-muted-foreground">Investors</div>
                    </div>
                  </div>
                  <div className="flex-1 h-16 rounded-xl bg-secondary flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-display font-semibold text-foreground">50%</div>
                      <div className="text-xs text-muted-foreground">Founder</div>
                    </div>
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Investor share distributed equally among all investors</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SAFE Structure */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Investment Structure"
            title="SAFE Notes + Dividends"
            description="Investors receive both equity upside through SAFE conversion and immediate returns through annual profit distribution."
          />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-display font-medium text-foreground">SAFE Terms</h3>
              </div>
              <div className="space-y-4">
                {safeDetails.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-accent/5 border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-display font-medium text-foreground">Dual Returns</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Annual Dividends</h4>
                  <p className="text-muted-foreground text-sm">
                    50% of net profit distributed equally among all investors each year. Immediate cash returns from Year 1.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Equity Upside</h4>
                  <p className="text-muted-foreground text-sm">
                    SAFE notes convert to equity on future funding round. Investors benefit from company appreciation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk & Transparency */}
      <section className="section-padding bg-gradient-section">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-card border border-border/50"
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground text-center mb-4">
              Transparent & Conservative
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
              IBC is built on conservative financial assumptions. We prioritize predictable cash flow over speculative growth. All projections are based on realistic market conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="group">
                  Contact for Details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/revenue">
                <Button variant="outline" size="lg">
                  View Revenue Model
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
