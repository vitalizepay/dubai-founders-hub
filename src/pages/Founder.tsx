import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Briefcase, TrendingUp, Clock } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    value: "16+",
    label: "Years Experience",
    description: "Deep expertise across industries",
  },
  {
    icon: Globe,
    value: "Global",
    label: "Exposure",
    description: "US, Middle East, Europe",
  },
  {
    icon: Briefcase,
    value: "Multi-Sector",
    label: "Leadership",
    description: "Technology, Finance, Operations",
  },
  {
    icon: TrendingUp,
    value: "Scalable",
    label: "Focus",
    description: "Long-term sustainable progress",
  },
];

const Founder = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                Founder
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6">
                Praveen Kumar
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                With over 16 years of experience spanning multiple continents and industries, Praveen brings the perspective needed to build lasting business infrastructure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Founder of Novus Ventures. Previously led teams across technology, finance, and operations in the US, Middle East, and Europe. Focused on scalable, long-term progress over short-term wins.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="group">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-card to-secondary border border-border/50 overflow-hidden flex items-end justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="relative p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-accent">PK</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-foreground">Praveen Kumar</h3>
                  <p className="text-muted-foreground">Founder, IBC & Novus Ventures</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-gradient-section">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-display font-semibold text-foreground mb-1">
                  {item.value}
                </div>
                <div className="text-lg font-medium text-foreground mb-2">{item.label}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-tight mb-6">
              Long-Term Thinking
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              The best businesses are built patiently. IBC is designed as infrastructure that strengthens over time—not a quick exit or speculative venture. Every decision prioritizes durability over speed.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h4 className="font-display font-medium text-foreground mb-2">Quality Over Volume</h4>
                <p className="text-sm text-muted-foreground">
                  Curated membership ensures every interaction adds value. We grow deliberately, not rapidly.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h4 className="font-display font-medium text-foreground mb-2">Cash Flow Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Profitability from Year 1. No dependence on future funding rounds or speculative growth.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h4 className="font-display font-medium text-foreground mb-2">Aligned Incentives</h4>
                <p className="text-sm text-muted-foreground">
                  100% profit distribution keeps founder and investors aligned on sustainable value creation.
                </p>
              </div>
            </div>
          </motion.div>
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
            className="text-center p-12 rounded-3xl bg-card border border-border/50"
          >
            <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">
              Connect with Praveen
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Interested in learning more about IBC, exploring partnership opportunities, or discussing investment?
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="group">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Founder;
