"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerColumns = [
  { header: "Quick Links", links: ["Features", "Tools", "Stories", "FAQs"] },
  { header: "Contact", links: ["LinkedIn", "X(Twitter)", "Instagram"] },
  { header: "Legal", links: ["Terms of Service", "Privacy Policy"] },
  {
    header: "Stay Connected",
    links: ["Subscribe to career tips & platform updates:"],
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14">
        {footerColumns.map(({ header, links }) => {
          const isStayConnected = header === "Stay Connected";
          return (
            <div key={header}>
              <h3 className="font-semibold text-2xl text-foreground mb-4.5">
                {header}
              </h3>
              <ul className="space-y-4.5">
                {links.map((link) => {
                  return (
                    <li
                      className="text-foreground font-medium text-xl "
                      key={link}
                    >
                      {link}
                    </li>
                  );
                })}
              </ul>
              {isStayConnected && (
                <form
                  onSubmit={handleSubmit}
                  className="mt-4 flex flex-col gap-2 max-w-sm"
                >
                  {status === "success" ? (
                    <p className="text-green-600 font-semibold text-base animate-fade-in">
                      ✓ Thanks for subscribing!
                    </p>
                  ) : (
                    <>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-10 px-4 border-marketing-border/30 bg-background text-base rounded-xl focus-visible:ring-2 focus-visible:ring-marketing-border"
                        required
                        disabled={status === "loading"}
                      />
                      <Button
                        type="submit"
                        disabled={status === "loading"}
                        className="h-10 px-5 bg-marketing-border text-white hover:bg-marketing-border/90 text-base font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-marketing-border/10 disabled:opacity-50"
                      >
                        {status === "loading" ? "..." : "Subscribe"}
                      </Button>
                    </>
                  )}
                </form>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-12 flex flex-col gap-4.5 justify-center items-center text-base font-medium">
        <p>© 2026 DevTrackIt</p>
        <p className="text-center">Built for tech professionals everywhere.</p>
      </div>
    </footer>
  );
};

export default Footer;
