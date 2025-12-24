import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { ArrowRight, Target, Users, TrendingUp, Globe, AlertCircle, CheckCircle } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Fragmented Networking",
    description: "Scattered groups with no continuity. Connections made at events rarely translate into lasting business relationships.",
  },
  {
    icon: AlertCircle,
    title: "Noisy, Transactional Spaces",
    description: "Most communities prioritize volume over value. The signal-to-noise ratio makes genuine connection nearly impossible.",
  },
  {
    icon: AlertCircle,
    title: "Lack of Curation",
    description: "Open-door policies attract everyone but serve no one. Without curation, credibility cannot be established or maintained.",
  },
];

const differences = [
  {
    icon: CheckCircle,
    title: "Curated Access",
    description: "Application-based membership ensures every interaction is meaningful. We prioritize quality over volume.",
  },
  {
    icon: CheckCircle,
    title: "Long-term Infrastructure",
    description: "IBC is not an event company. We build persistent business infrastructure that compounds value year over year.",
  },
  {
    icon: CheckCircle,
    title: "Compounding Credibility",
    description: "Each year strengthens the ecosystem. Members benefit from the accumulated trust and reputation of the network.",
  },
];

const About = () => {
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
                About IBC
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6">
                Building Trusted Business Infrastructure
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Indian Business Circle is a curated business ecosystem for Indian founders and professionals in Dubai, distinct from meetup-only, events-only, or media-only models.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
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
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-accent">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-tight mb-6">
                Long-Term Infrastructure, Not Short-Term Events
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                IBC functions as business infrastructure that monetizes access, learning, and visibility within a trusted network. We are building something that lasts.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike transactional networking groups, IBC is designed to strengthen over time. Every member, event, and story adds to our collective credibility and value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <Users className="w-8 h-8 text-accent mb-4" />
                <div className="text-2xl font-display font-semibold text-foreground mb-1">Curated</div>
                <p className="text-sm text-muted-foreground">Members</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <TrendingUp className="w-8 h-8 text-accent mb-4" />
                <div className="text-2xl font-display font-semibold text-foreground mb-1">Compounding</div>
                <p className="text-sm text-muted-foreground">Value</p>
              </div>
              <div className="col-span-2 p-6 rounded-2xl bg-accent/10 border border-accent/30">
                <Globe className="w-8 h-8 text-accent mb-4" />
                <div className="text-2xl font-display font-semibold text-foreground mb-1">Dubai</div>
                <p className="text-muted-foreground">Strategic hub connecting Indian founders to global opportunities in the Middle East, Africa, and beyond.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-gradient-section">
        <div className="container-wide">
          <SectionHeader
            badge="The Problem"
            title="Why Traditional Networking Fails"
            description="Most business communities suffer from fundamental structural issues that prevent meaningful value creation."
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <FeatureCard
                key={problem.title}
                icon={problem.icon}
                title={problem.title}
                description={problem.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why IBC is Different */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="The Solution"
            title="Why IBC is Different"
            description="We've designed IBC from first principles to address the core failures of traditional business networking."
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {differences.map((diff, index) => (
              <FeatureCard
                key={diff.title}
                icon={diff.icon}
                title={diff.title}
                description={diff.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dubai as Hub */}
      <section className="section-padding bg-gradient-section">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              Strategic Location
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight mb-6">
              Dubai: The Gateway
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Dubai's position as a global business hub makes it the ideal base for Indian founders expanding internationally. Access to Middle Eastern, African, and European markets, combined with favorable business policies, creates unmatched opportunity.
            </p>
            <Link to="/membership">
              <Button variant="gold" size="lg" className="group">
                Join the Network
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
