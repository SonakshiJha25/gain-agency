import { Mail, ExternalLink } from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6 text-[#4A3DD5]" />,
      title: "Email Us",
      value: "gain.org.in@gmail.com",
      description: "For general inquiries, sales, and partnerships.",
      link: "mailto:gain.org.in@gmail.com",
    },
    {
      icon: <ExternalLink className="w-6 h-6 text-[#4A3DD5]" />,
      title: "Instagram",
      value: "@gain.ads",
      description: "Follow us for tips, updates, and case highlights.",
      link: "https://www.instagram.com/gain.ads/",
    },
    {
      icon: <ExternalLink className="w-6 h-6 text-[#4A3DD5]" />,
      title: "LinkedIn",
      value: "GAIN Ads",
      description: "Connect with us for professional updates and insights.",
      link: "https://www.linkedin.com/company/gain-ads/",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-[24px] font-black tracking-[-0.04em] text-[#152268]">
          Get in Touch
        </h2>
        <p className="mt-2 text-[14px] leading-[1.6] text-slate-700">
          Have questions about scaling your brand on Amazon? Reach out — we usually respond within 24–48 hours.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {contactDetails.map((detail, idx) => (
          <a
            key={idx}
            href={detail.link}
            target={detail.link.startsWith("http") ? "_blank" : undefined}
            rel={detail.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-start gap-4 p-6 bg-[#f4f3ff]/50 border border-[#e2dfff] rounded-2xl transition-all duration-300 hover:bg-[#f4f3ff] hover:border-[#d6c4ff] hover:shadow-md hover:shadow-purple-100/30 focus:outline-none"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-white border border-[#e2dfff] rounded-xl shrink-0">
              {detail.icon}
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#152268] mb-0.5">
                {detail.title}
              </h3>
              <p className="text-[14px] font-semibold text-[#4A3DD5] mb-1">
                {detail.value}
              </p>
              <p className="text-[12px] leading-[1.5] text-slate-700">
                {detail.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
