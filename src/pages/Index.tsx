import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { StatCard } from "@/components/ui/stat-card";
import { Users, Calendar, Handshake, BookOpen, ArrowRight, TrendingUp, Shield, Repeat } from "lucide-react";

const engines = [
  {
    icon: Users,
    title: "Curated Membership",
    description: "Application-based entry ensures quality interactions. Members pay annual fees for access to an exclusive network of verified founders.",
  },
  {
    icon: Calendar,
    title: "Practical Workshops & Events",
    description: "Revenue-generating workshops and networking events with brand sponsorships. Variable costs enable scalable profitability.",
  },
  {
    icon: Handshake,
    title: "High-Quality Networking",
    description: "Closed networking meetups foster genuine business relationships. Quality over volume creates lasting professional connections.",
  },
  {
    icon: BookOpen,
    title: "IBC Stories",
    description: "Paid media platform featuring Indian founder stories. Per-piece model preserves editorial credibility while generating upfront revenue.",
  },
];

const stats = [
  { value: "65%", label: "Net Margin", description: "Capital-light operations" },
  { value: "5", label: "Revenue Streams", description: "Diversified income" },
  { value: "100%", label: "Profit Distribution", description: "Annual dividend policy" },
  { value: "50/50", label: "Founder-Investor Split", description: "Aligned incentives" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                Dubai's Premier Business Ecosystem
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-foreground leading-[1.1] mb-6">
                A Curated Business Ecosystem for{" "}
                <span className="text-gradient">Indian Founders</span>{" "}
                in Dubai
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
                Long-term business infrastructure that monetizes access, learning, and visibility within a trusted network. Quality over volume.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/membership">
                  <Button variant="hero" size="lg" className="group">
                    Apply for Membership
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/investors">
                  <Button variant="hero-outline" size="lg">
                    Investor Overview
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent blur-[150px]"
        />
      </section>

      {/* Four Engines Section */}
      <section className="section-padding bg-gradient-section">
        <div className="container-wide">
          <SectionHeader
            badge="The IBC Model"
            title="Four Engines of Value"
            description="Each component reinforces the others, creating a flywheel that compounds credibility, demand, and profit over time."
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {engines.map((engine, index) => (
              <FeatureCard
                key={engine.title}
                icon={engine.icon}
                title={engine.title}
                description={engine.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Flywheel Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                The Flywheel
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight mb-6">
                Credibility Compounds Into Profit
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                IBC operates on a flywheel model where curated members lead to high-quality interactions, which build credibility, increasing demand and creating pricing power and profit.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-medium text-foreground mb-1">Curated Access</h4>
                    <p className="text-muted-foreground">Application-based membership ensures quality at every touchpoint</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-medium text-foreground mb-1">Pricing Power</h4>
                    <p className="text-muted-foreground">High credibility enables premium positioning and sustainable margins</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Repeat className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-medium text-foreground mb-1">Compounding Value</h4>
                    <p className="text-muted-foreground">Each year strengthens the ecosystem and long-term cash flow</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-card border border-border/50 p-8 md:p-12 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Flywheel Visualization */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-border/50 animate-spin" style={{ animationDuration: "20s" }} />
                  <div className="absolute inset-8 rounded-full border border-accent/30" />
                  <div className="absolute inset-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-display font-semibold text-accent">IBC</div>
                      <div className="text-sm text-muted-foreground">Flywheel</div>
                    </div>
                  </div>
                  {/* Flywheel Points */}
                  {["Members", "Credibility", "Demand", "Profit"].map((label, i) => (
                    <div
                      key={label}
                      className="absolute w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center text-sm font-medium text-foreground"
                      style={{
                        top: i === 0 ? "0" : i === 2 ? "calc(100% - 80px)" : "50%",
                        left: i === 1 ? "0" : i === 3 ? "calc(100% - 80px)" : "50%",
                        transform: i === 0 || i === 2 ? "translateX(-50%)" : "translateY(-50%)",
                      }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-section">
        <div className="container-wide">
          <SectionHeader
            badge="The Numbers"
            title="Built for Profitability"
            description="A capital-light model with diversified revenue streams and aligned investor incentives."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                index={index}
                highlight={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 md:p-16 rounded-3xl bg-card border border-border/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
                Join the Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Whether you're a founder seeking trusted connections, a brand looking for partnership, or an investor evaluating opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/membership">
                  <Button variant="gold" size="lg">
                    Apply for Membership
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Partner with IBC
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
