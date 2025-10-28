"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Upload, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Data",
    description:
      "Import floorplans, amenities, and property details in seconds. Our AI instantly learns your development.",
  },
  {
    icon: Palette,
    title: "Brand & Configure",
    description:
      "Customize the assistant's voice, appearance, and knowledge base to match your brand identity.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "Go live with a single click. Your AI assistant is ready to serve thousands of residents 24/7.",
  },
];

export function HowItWorksPinned() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentStep = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2]);

  return (
    <section ref={containerRef} className="relative bg-carbon" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
                  How It Works
                </span>
                <h2 className="text-display-sm font-bold text-porcelain mb-6">
                  Three steps to transform resident experience
                </h2>
              </motion.div>

              <div className="space-y-8 mt-12">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const opacity = useTransform(
                    currentStep,
                    [index - 0.5, index, index + 0.5],
                    [0.3, 1, 0.3]
                  );
                  const scale = useTransform(
                    currentStep,
                    [index - 0.5, index, index + 0.5],
                    [0.95, 1, 0.95]
                  );

                  return (
                    <motion.div
                      key={index}
                      style={{ opacity, scale }}
                      className="flex gap-6 items-start"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-heading-md font-bold text-porcelain mb-2">
                          {step.title}
                        </h3>
                        <p className="text-hint text-body-md">{step.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="absolute left-0 top-0 w-1 bg-hint/20 rounded-full"
                style={{ height: "100%" }}
              >
                <motion.div
                  className="w-full bg-gold rounded-full"
                  style={{
                    height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                  }}
                />
              </motion.div>

              <div className="pl-12 h-[500px] flex items-center">
                <motion.div
                  className="w-full h-full bg-slate/50 border border-hint/20 rounded-lg flex items-center justify-center"
                  style={{
                    scale: useTransform(scrollYProgress, [0, 1], [0.9, 1]),
                  }}
                >
                  <p className="text-hint text-sm">Interactive demo placeholder</p>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
