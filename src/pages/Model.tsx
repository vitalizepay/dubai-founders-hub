import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight, Users, Sparkles, TrendingUp, Wallet, ArrowDownRight, ArrowUpRight } from "lucide-react";

const flywheelSteps = [
  {
    step: "01",
    title: "Curated Members",
    description: "Application-based membership ensures high-quality participants. Each member adds credibility to the network.",
    icon: Users,
  },
  {
    step: "02",
    title: "High-Quality Interactions",
    description: "Curated members lead to meaningful business discussions, genuine connections, and valuable knowledge exchange.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Credibility Builds",
    description: "Consistent quality interactions establish IBC as the trusted ecosystem for Indian founders in Dubai.",
    icon: TrendingUp,
  },
  {
    step: "04",
    title: "Demand Increases",
    description: "Growing reputation attracts more high-quality applicants, sponsors, and media opportunities.",
    icon: ArrowUpRight,
  },
  {
    step: "05",
    title: "Pricing Power",
    description: "Strong demand enables premium pricing for memberships, events, and media placements.",
    icon: Wallet,
  },
  {
    step: "06",
    title: "Profit Reinvests",
    description: "Profits fund ecosystem improvements, further strengthening the flywheel for the next cycle.",
    icon: ArrowDownRight,
  },
];

const Model = () => {
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
                The IBC Model
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6">
                How the Flywheel Works
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                IBC operates on a flywheel model where curated members lead to high-quality interactions, which build credibility, increasing demand and creating pricing power.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flywheel Steps */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flywheelSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-card border border-border/50 hover-lift"
              >
                <span className="absolute top-6 right-6 text-5xl font-display font-bold text-accent/10">
                  {step.step}
                </span>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-display font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Flywheel */}
      <section className="section-padding bg-gradient-section">
        <div className="container-narrow">
          <SectionHeader
            badge="Compounding Effect"
            title="Each Cycle Strengthens the System"
            description="The key insight is that each component reinforces the others over time. Unlike linear business models, the flywheel accelerates."
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-lg mx-auto"
          >
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30 animate-spin" style={{ animationDuration: "30s" }} />
            
            {/* Middle Ring */}
            <div className="absolute inset-8 rounded-full border border-border" />
            
            {/* Inner Ring */}
            <div className="absolute inset-16 rounded-full bg-accent/5 border border-accent/20" />
            
            {/* Center */}
            <div className="absolute inset-24 rounded-full bg-card border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-display font-semibold text-accent mb-1">IBC</div>
                <div className="text-sm text-muted-foreground">Credibility Flywheel</div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
              Members
            </div>
            <div className="absolute top-1/4 right-0 translate-x-1/2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
              Quality
            </div>
            <div className="absolute bottom-1/4 right-0 translate-x-1/2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
              Credibility
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
              Demand
            </div>
            <div className="absolute bottom-1/4 left-0 -translate-x-1/2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
              Pricing
            </div>
            <div className="absolute top-1/4 left-0 -translate-x-1/2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
              Profit
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-tight mb-6">
                Long-Term Thinking Creates Sustainable Advantage
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                IBC is designed for durability. We don't chase short-term metrics. Instead, we build persistent infrastructure that becomes more valuable with each passing year.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-foreground">Multiple engines reinforce each other</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-foreground">Credibility compounds year over year</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-foreground">Capital-light operations maximize efficiency</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-foreground">Diversified revenue reduces risk</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 md:p-12 rounded-3xl bg-card border border-border/50"
            >
              <h3 className="text-2xl font-display font-medium text-foreground mb-6">
                Ready to Explore?
              </h3>
              <p className="text-muted-foreground mb-8">
                Learn more about our revenue streams, financial projections, or investment structure.
              </p>
              <div className="space-y-4">
                <Link to="/revenue" className="block">
                  <Button variant="outline" className="w-full justify-between group">
                    Revenue & Financials
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/investors" className="block">
                  <Button variant="gold" className="w-full justify-between group">
                    Investor Overview
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Model;
