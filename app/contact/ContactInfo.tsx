import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6 text-[#6d28d9]" />,
      title: "Email Us",
      value: "hello@gain.agency",
      description: "For general inquiries, sales, and partnerships.",
      link: "mailto:hello@gain.agency",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#6d28d9]" />,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Speak directly with one of our growth specialists.",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#6d28d9]" />,
      title: "Visit Our Office",
      value: "123 Broadway, Suite 400",
      description: "New York, NY 10006",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#6d28d9]" />,
      title: "Business Hours",
      value: "Mon - Fri: 9 AM - 6 PM EST",
      description: "Weekend inquiries will be addressed on Monday.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-[24px] font-black tracking-[-0.04em] text-[#020617]">
          Get in Touch
        </h2>
        <p className="mt-2 text-[14px] leading-[1.6] text-[#6b7280]">
          Have questions about scaling your brand? Choose the most convenient way to reach out, or fill out the form, and our team will get back to you promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactDetails.map((detail, idx) => {
          const content = (
            <div
              key={idx}
              className="
                flex flex-col p-6 bg-[#f7f4ff]/50 border border-[#ece4ff] 
                rounded-2xl transition-all duration-300 hover:bg-[#f7f4ff] 
                hover:border-[#d6c4ff] hover:shadow-md hover:shadow-purple-100/30
              "
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white border border-[#ece4ff] rounded-xl mb-4">
                {detail.icon}
              </div>
              <h3 className="text-[16px] font-bold text-[#020617] mb-1">
                {detail.title}
              </h3>
              <p className="text-[14px] font-semibold text-[#6d28d9] mb-1">
                {detail.value}
              </p>
              <p className="text-[12px] leading-[1.5] text-[#6b7280]">
                {detail.description}
              </p>
            </div>
          );

          if (detail.link) {
            return (
              <a
                href={detail.link}
                key={idx}
                target={detail.link.startsWith("http") ? "_blank" : undefined}
                rel={detail.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block focus:outline-none"
              >
                {content}
              </a>
            );
          }

          return content;
        })}
      </div>
    </div>
  );
}
