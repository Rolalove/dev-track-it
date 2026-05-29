"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";

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
    <footer className="w-full max-w-6xl mx-auto px-6 pt-12 pb-16 md:px-12">
      <div
        className="flex items-center justify-center mb-10 opacity-15 select-none pointer-events-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <Logo size="lg" />
      </div>
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
                  const isStayConnected = header === "Stay Connected";
                  const isContact = header === "Contact";

                  const hrefMap: Record<string, string> = {
                    Features: "#features",
                    Tools: "#tools",
                    Stories: "#stories",
                    FAQs: "#faqs",
                    LinkedIn: "https://linkedin.com",
                    "X(Twitter)": "https://x.com",
                    Instagram: "https://instagram.com",
                    "Terms of Service": "#",
                    "Privacy Policy": "#",
                  };

                  const href = hrefMap[link] || "";

                  return (
                    <li
                      className="text-foreground font-medium text-xl "
                      key={link}
                    >
                      {!isStayConnected && href ? (
                        <a
                          href={href}
                          className="hover:text-marketing-primary transition-colors cursor-pointer"
                          {...(isContact
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {link}
                        </a>
                      ) : (
                        link
                      )}
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
                        className="h-10 px-4 border-marketing-primary/30 bg-background text-base rounded-xl focus-visible:ring-2 focus-visible:ring-marketing-primary"
                        required
                        disabled={status === "loading"}
                      />
                      <Button
                        type="submit"
                        disabled={status === "loading"}
                        className="h-10 px-5 bg-marketing-primary text-white hover:bg-marketing-primary/90 text-base font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-marketing-primary/10 disabled:opacity-50"
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
