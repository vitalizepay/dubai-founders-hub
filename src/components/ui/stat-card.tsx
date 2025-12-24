import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  index?: number;
  highlight?: boolean;
  className?: string;
}

export const StatCard = ({
  value,
  label,
  description,
  index = 0,
  highlight = false,
  className,
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "p-6 rounded-2xl border",
        highlight
          ? "bg-accent/10 border-accent/30"
          : "bg-card border-border/50",
        className
      )}
    >
      <div className={cn(
        "text-4xl md:text-5xl font-display font-semibold mb-2",
        highlight ? "text-accent" : "text-foreground"
      )}>
        {value}
      </div>
      <div className="text-lg font-medium text-foreground">{label}</div>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
};
