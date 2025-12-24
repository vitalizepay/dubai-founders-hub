import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight, Users, Calendar, BookOpen, Gift, Shield, CheckCircle } from "lucide-react";

const memberBenefits = [
  {
    icon: Users,
    title: "Curated Network Access",
    description: "Connect with verified Indian founders, professionals, and business leaders in Dubai.",
  },
  {
    icon: Calendar,
    title: "Closed Networking Events",
    description: "Exclusive access to members-only meetups and networking sessions.",
  },
  {
    icon: Gift,
    title: "Preferential Workshop Access",
    description: "Priority registration and member pricing for all IBC workshops and events.",
  },
  {
    icon: BookOpen,
    title: "Annual IBC Story",
    description: "One complimentary founder story per year to build your professional visibility.",
  },
];

const whoShouldApply = [
  "Indian founders building businesses in Dubai",
  "Professionals seeking meaningful business connections",
  "Executives expanding into the Middle East market",
  "Entrepreneurs looking for trusted partnerships",
  "Leaders who value quality over quantity",
];

const Membership = () => {
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
                Membership
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6">
                Join the Curated Network
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                IBC membership is application-based. We prioritize quality over volume, ensuring every member adds value to the ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="What You Get"
            title="Member Benefits"
            description="Annual membership includes access to the curated network, exclusive events, and complimentary media coverage."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {memberBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-8 rounded-2xl bg-card border border-border/50 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application-Based */}
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
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-accent">Quality Control</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-tight mb-6">
                Application-Based Entry
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Unlike open-door communities, IBC reviews every application. This ensures the network maintains its value and every member benefits from high-quality interactions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We look for founders and professionals who share our values: long-term thinking, genuine connection, and contribution to the ecosystem.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <h3 className="text-xl font-display font-medium text-foreground mb-6">
                Who Should Apply
              </h3>
              <div className="space-y-4">
                {whoShouldApply.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
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
                Ready to Apply?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Submit your application and join Dubai's most curated network of Indian founders and professionals.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Apply for Membership
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;
