import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  Users,
  Calendar,
  BookOpen,
  Gift,
  CheckCircle,
  Sparkles,
  Crown,
  Star,
  Coffee,
  Mic,
  Shield,
} from "lucide-react";

const foundingBenefits = [
  "AED 1,500 (Year 1) with AED 1,080 lifetime renewal",
  "3 Free Workshops per year",
  "3 Additional workshops at 25% discount",
  "Priority seating & registration",
  "Premium business listing on website",
  "Annual business showcase (5 min at an event)",
  "Access to Founders Only Inner Circle",
  "15% discount on CEO dinners & paid events",
  "VIP check-in at events",
  "Founding Member badge (Lifetime)",
];

const annualBenefits = [
  "AED 1,200 per year",
  "Access to all 6 annual workshops",
  "1 Free Workshop per year",
  "Monthly coffee networking meetups",
  "Standard business listing",
  "Community networking & collaborations",
  "5% discount on paid IBC events",
  "Opportunity to be featured in IBC Stories",
];

const communityHighlights = [
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Six power workshops every year covering leadership, business growth, branding, sales strategy, technology, AI, and decision-making.",
  },
  {
    icon: Coffee,
    title: "Connect Regularly",
    description:
      "Monthly coffee networking meetups for meaningful conversations and relationship building in a relaxed environment.",
  },
  {
    icon: Mic,
    title: "IBC Stories",
    description:
      "Share your business journey through authentic narratives designed to inspire, educate, and strengthen the community.",
  },
  {
    icon: Users,
    title: "Member Visibility",
    description:
      "Get seen, heard, and remembered through business introductions, workshop spotlights, and networking sessions.",
  },
];

const whoItsFor = [
  "Founders & Co-founders",
  "CEOs & Managing Directors",
  "Business Owners & Partners",
  "Senior Decision-Makers",
  "Leaders valuing trusted connections",
];

const Membership = () => {
  const { toast } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    role: "",
    industry: "",
    yearsInBusiness: "",
    website: "",
    email: "",
    mobile: "",
    businessDescription: "",
    businessStage: "",
    whyJoin: "",
    hopeToGain: "",
    contribution: "",
    membershipType: "",
    willParticipate: false,
    understandsCuration: false,
    openToStories: "",
    declaration: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description:
        "Thank you for applying to IBC. We'll review your application and get back to you within 5 business days.",
    });
    setIsFormOpen(false);
    setFormStep(1);
    setFormData({
      fullName: "",
      companyName: "",
      role: "",
      industry: "",
      yearsInBusiness: "",
      website: "",
      email: "",
      mobile: "",
      businessDescription: "",
      businessStage: "",
      whyJoin: "",
      hopeToGain: "",
      contribution: "",
      membershipType: "",
      willParticipate: false,
      understandsCuration: false,
      openToStories: "",
      declaration: false,
    });
  };

  const nextStep = () => setFormStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setFormStep((prev) => Math.max(prev - 1, 1));

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
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                Meet. Connect. Grow.
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6">
                Build Better Business Connections
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                A curated business community for Indian founders, CEOs, and
                entrepreneurs in the UAE. IBC brings together decision-makers
                who value trust, learning, and long-term relationships over
                transactional networking.
              </p>
              <Button
                variant="premium"
                size="lg"
                className="group"
                onClick={() => setIsFormOpen(true)}
              >
                Apply for Membership
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The IBC Difference */}
      <section className="section-padding bg-gradient-section">
        <div className="container-wide">
          <SectionHeader
            badge="The IBC Difference"
            title="A Circle of Trust"
            description="IBC is not a mass networking group. It's a private, member-led business community designed to foster meaningful connections, shared learning, and real business growth within the Indian business ecosystem."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl premium-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Membership Plans"
            title="Choose Your Membership"
            description="IBC membership is curated to maintain quality and relevance. Members are selected to ensure high trust, meaningful participation, and a strong, supportive business environment."
          />

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Founding Membership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 rounded-2xl bg-card border-2 border-primary/50 shadow-lg hover-lift overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-xl">
                Limited
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-foreground">
                    Founding Membership
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Early member exclusive
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-display font-semibold text-foreground">
                  AED 1,500
                </span>
                <span className="text-muted-foreground ml-2">/ Year 1</span>
                <p className="text-sm text-primary mt-1">
                  Locked at AED 1,080 from Year 2 onwards
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {foundingBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="premium"
                className="w-full group"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    membershipType: "Founding Membership",
                  }));
                  setIsFormOpen(true);
                }}
              >
                Apply as Founding Member
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Annual Membership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl premium-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Star className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-foreground">
                    Annual Membership
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Standard membership
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-display font-semibold text-foreground">
                  AED 1,200
                </span>
                <span className="text-muted-foreground ml-2">/ year</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Standard renewal rate
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {annualBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="premium-outline"
                className="w-full group"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    membershipType: "Annual Membership",
                  }));
                  setIsFormOpen(true);
                }}
              >
                Apply as Annual Member
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inner Circle */}
      <section className="section-padding bg-gradient-section">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 rounded-2xl bg-card border border-accent/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-accent">
                      Founding Members Only
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                      The Inner Circle
                    </h2>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A private, invite-only group exclusively for Founding Members.
                  Get direct access to fellow founders and decision-makers,
                  peer-level discussions on growth and challenges, early access
                  to opportunities, collaborations, and closed-door
                  conversations built on trust.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 text-sm bg-accent/10 text-accent rounded-full">
                    Peer Discussions
                  </span>
                  <span className="px-3 py-1.5 text-sm bg-accent/10 text-accent rounded-full">
                    Early Opportunities
                  </span>
                  <span className="px-3 py-1.5 text-sm bg-accent/10 text-accent rounded-full">
                    Trust-Based Network
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                Who It's For
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-tight mb-6">
                Serious Growth. Trusted Connections.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                IBC is ideal for business leaders who value quality
                conversations, consistent engagement, and relationships that
                compound over time within the Indian business community.
              </p>
              <div className="space-y-4">
                {whoItsFor.map((item, index) => (
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <h3 className="text-xl font-display font-medium text-foreground mb-4">
                Curated Membership
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Membership is curated to preserve the integrity of the
                community. Founding Membership is limited. All applications are
                reviewed before confirmation.
              </p>
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <p className="text-sm text-muted-foreground italic">
                  "Visibility builds familiarity, familiarity builds trust, and
                  trust creates opportunity."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
                Ready to Join the Circle?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Submit your application and become part of Dubai's most curated
                network of Indian business leaders.
              </p>
              <Button
                variant="premium"
                size="lg"
                className="group"
                onClick={() => setIsFormOpen(true)}
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              IBC Membership Application
            </DialogTitle>
            <DialogDescription>
              Step {formStep} of 4 — Complete all sections to submit your
              application
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            {/* Step 1: Personal & Business Details */}
            {formStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-medium text-foreground border-b border-border pb-2">
                  Personal & Business Details
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                      placeholder="Your company"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role / Designation *</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) =>
                        handleInputChange("role", e.target.value)
                      }
                      placeholder="e.g., CEO, Founder"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry *</Label>
                    <Input
                      id="industry"
                      value={formData.industry}
                      onChange={(e) =>
                        handleInputChange("industry", e.target.value)
                      }
                      placeholder="Your industry"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                    <Input
                      id="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={(e) =>
                        handleInputChange("yearsInBusiness", e.target.value)
                      }
                      placeholder="e.g., 5 years"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website / LinkedIn (optional)</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) =>
                        handleInputChange("website", e.target.value)
                      }
                      placeholder="https://"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      value={formData.mobile}
                      onChange={(e) =>
                        handleInputChange("mobile", e.target.value)
                      }
                      placeholder="+971 XX XXX XXXX"
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Business Overview & Community Fit */}
            {formStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-medium text-foreground border-b border-border pb-2">
                  Business Overview
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="businessDescription">
                    Briefly describe your business (2–3 lines) *
                  </Label>
                  <Textarea
                    id="businessDescription"
                    value={formData.businessDescription}
                    onChange={(e) =>
                      handleInputChange("businessDescription", e.target.value)
                    }
                    placeholder="What does your business do?"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>What stage is your business currently in? *</Label>
                  <RadioGroup
                    value={formData.businessStage}
                    onValueChange={(value) =>
                      handleInputChange("businessStage", value)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="early" id="early" />
                      <Label htmlFor="early" className="font-normal">
                        Early Stage
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="growing" id="growing" />
                      <Label htmlFor="growing" className="font-normal">
                        Growing
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="established" id="established" />
                      <Label htmlFor="established" className="font-normal">
                        Established
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <h3 className="text-lg font-medium text-foreground border-b border-border pb-2 pt-4">
                  Community Fit
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="whyJoin">
                    Why do you want to join Indian Business Circle? *
                  </Label>
                  <Textarea
                    id="whyJoin"
                    value={formData.whyJoin}
                    onChange={(e) =>
                      handleInputChange("whyJoin", e.target.value)
                    }
                    placeholder="Your motivation for joining IBC"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hopeToGain">
                    What do you hope to gain from the IBC community? *
                  </Label>
                  <Textarea
                    id="hopeToGain"
                    value={formData.hopeToGain}
                    onChange={(e) =>
                      handleInputChange("hopeToGain", e.target.value)
                    }
                    placeholder="Your expectations from the community"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contribution">
                    How do you think you can contribute to the IBC community? *
                  </Label>
                  <Textarea
                    id="contribution"
                    value={formData.contribution}
                    onChange={(e) =>
                      handleInputChange("contribution", e.target.value)
                    }
                    placeholder="Your potential contribution"
                    rows={3}
                    required
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Membership Selection */}
            {formStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-medium text-foreground border-b border-border pb-2">
                  Membership Selection
                </h3>

                <div className="space-y-2">
                  <Label>Which membership are you applying for? *</Label>
                  <RadioGroup
                    value={formData.membershipType}
                    onValueChange={(value) =>
                      handleInputChange("membershipType", value)
                    }
                  >
                    <div className="flex items-start space-x-2 p-4 rounded-lg border border-border hover:border-accent/50 transition-colors">
                      <RadioGroupItem
                        value="Founding Membership"
                        id="founding"
                        className="mt-1"
                      />
                      <div>
                        <Label htmlFor="founding" className="font-medium">
                          Founding Membership (AED 1,500)
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Limited availability. Includes Inner Circle access,
                          priority benefits, and lifetime locked renewal rate.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 p-4 rounded-lg border border-border hover:border-accent/50 transition-colors">
                      <RadioGroupItem
                        value="Annual Membership"
                        id="annual"
                        className="mt-1"
                      />
                      <div>
                        <Label htmlFor="annual" className="font-medium">
                          Annual Membership (AED 1,200)
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Full community access, workshops, and networking
                          events.
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <h3 className="text-lg font-medium text-foreground border-b border-border pb-2 pt-4">
                  Engagement & Commitment
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="willParticipate"
                      checked={formData.willParticipate}
                      onCheckedChange={(checked) =>
                        handleInputChange("willParticipate", checked as boolean)
                      }
                    />
                    <div>
                      <Label htmlFor="willParticipate" className="font-normal">
                        I am willing to actively participate in workshops and
                        monthly meetups *
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="understandsCuration"
                      checked={formData.understandsCuration}
                      onCheckedChange={(checked) =>
                        handleInputChange(
                          "understandsCuration",
                          checked as boolean
                        )
                      }
                    />
                    <div>
                      <Label
                        htmlFor="understandsCuration"
                        className="font-normal"
                      >
                        I understand that IBC is a curated community and
                        applications are reviewed before approval *
                      </Label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: IBC Stories & Declaration */}
            {formStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-medium text-foreground border-b border-border pb-2">
                  IBC Stories (Optional)
                </h3>

                <div className="space-y-2">
                  <Label>
                    Would you be open to sharing your business journey as part
                    of IBC Stories?
                  </Label>
                  <RadioGroup
                    value={formData.openToStories}
                    onValueChange={(value) =>
                      handleInputChange("openToStories", value)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="stories-yes" />
                      <Label htmlFor="stories-yes" className="font-normal">
                        Yes, I'm interested
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="later" id="stories-later" />
                      <Label htmlFor="stories-later" className="font-normal">
                        Maybe later
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <h3 className="text-lg font-medium text-foreground border-b border-border pb-2 pt-4">
                  Declaration
                </h3>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="declaration"
                    checked={formData.declaration}
                    onCheckedChange={(checked) =>
                      handleInputChange("declaration", checked as boolean)
                    }
                    required
                  />
                  <div>
                    <Label htmlFor="declaration" className="font-normal">
                      I confirm that the information provided above is accurate
                      and complete. *
                    </Label>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    By submitting this application, you agree to IBC's community
                    guidelines. Your application will be reviewed and you will
                    receive a response within 5 business days.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={formStep === 1}
              >
                Previous
              </Button>

              {formStep < 4 ? (
                <Button type="button" variant="gold" onClick={nextStep}>
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="premium"
                  disabled={
                    !formData.declaration ||
                    !formData.willParticipate ||
                    !formData.understandsCuration
                  }
                >
                  Submit Application
                </Button>
              )}
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Membership;
