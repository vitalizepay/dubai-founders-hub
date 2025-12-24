import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight, BookOpen, Video, Award, TrendingUp, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Visibility",
    description: "Reach IBC's curated audience of founders, investors, and business leaders in the Dubai ecosystem.",
  },
  {
    icon: Award,
    title: "Authority",
    description: "Editorial credibility preserved. Each story positions you as a thought leader in your space.",
  },
  {
    icon: BookOpen,
    title: "Digital Footprint",
    description: "Permanent, high-quality content that continues working for your personal and business brand.",
  },
];

const formats = [
  {
    icon: BookOpen,
    title: "Written Stories",
    description: "In-depth editorial pieces exploring your journey, insights, and business philosophy.",
    features: ["Professional writing", "SEO optimized", "Permanent archive"],
  },
  {
    icon: Video,
    title: "Video Interviews",
    description: "Produced video content capturing your story in a compelling visual format.",
    features: ["Professional production", "Multi-platform", "Shareable assets"],
  },
];

const Stories = () => {
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
                IBC Stories
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6">
                Founder Stories That Endure
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                IBC Stories is a paid media platform featuring Indian founders and businesses. Editorial credibility preserved while building your lasting digital presence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is IBC Stories */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-tight mb-6">
                Your Story, Professionally Told
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                IBC Stories features paid founder stories and interviews. The per-piece model preserves editorial credibility while generating high-margin, upfront cash flow for IBC.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every story is crafted to highlight your unique journey, insights, and vision. No advertorials. No puff pieces. Just authentic, valuable content.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="group">
                  Feature Your Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-6"
            >
              {formats.map((format, index) => (
                <div
                  key={format.title}
                  className="p-6 rounded-2xl bg-card border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <format.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-medium text-foreground mb-2">
                        {format.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{format.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {format.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-section">
        <div className="container-wide">
          <SectionHeader
            badge="Benefits"
            title="Why Feature Your Story"
            description="Build lasting authority and visibility in the Dubai-Indian business ecosystem."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-display font-medium text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefit */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-accent/5 border border-accent/20"
          >
            <div className="flex items-start gap-4 mb-6">
              <CheckCircle className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-medium text-foreground mb-2">
                  Complimentary for Members
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  IBC Members receive one complimentary IBC Story per year as part of their membership. This ensures every member builds their professional visibility within the ecosystem.
                </p>
              </div>
            </div>
            <Link to="/membership">
              <Button variant="gold" className="ml-12">
                Learn About Membership
              </Button>
            </Link>
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
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
              Ready to Share Your Story?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Whether you're a member or not, we'd love to hear about your journey and explore featuring your story.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="group">
                Feature Your Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Stories;
