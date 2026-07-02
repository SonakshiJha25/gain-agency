"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CaseStudiesPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/resources");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#f4f3ff] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4A3DD5]"></div>
    </div>
  );
}