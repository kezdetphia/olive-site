import Image from "next/image";
import Link from "next/link";
import cloud from "@/assets/cloud1.jpeg";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image src={cloud} alt="Cloud background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-[#102643]/65" />

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-10 md:px-10">
        <div className="rounded-3xl border border-white/40 bg-white/82 p-8 text-[#122644] shadow-2xl backdrop-blur-md">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-4xl">Privacy Policy</h1>
            <Link href="/" className="rounded-full bg-[#17385f] px-4 py-2 text-sm font-semibold text-white">
              Back to Olive
            </Link>
          </div>

          <p className="mb-4 text-sm text-[#2f4f73]">Last updated: March 3, 2026</p>
          <p className="mb-4 leading-7">
            Olive respects your privacy. This policy explains how information is collected,
            used, and protected when you use Olive.
          </p>

          <h2 className="mt-6 text-2xl">1. Information We Collect</h2>
          <p className="mt-2 leading-7">
            Olive may collect account details, prayer journal content, app usage data, and
            optional messages sent to the AI mentor feature.
          </p>

          <h2 className="mt-6 text-2xl">2. How We Use Information</h2>
          <p className="mt-2 leading-7">
            Information is used to deliver core app features, improve your Bible reading and
            spiritual guidance experience, maintain service quality, and provide support.
          </p>

          <h2 className="mt-6 text-2xl">3. Sharing</h2>
          <p className="mt-2 leading-7">
            Olive does not sell personal information. Data is only shared when needed for
            trusted service operations, legal compliance, or with your explicit consent.
          </p>

          <h2 className="mt-6 text-2xl">4. Data Security</h2>
          <p className="mt-2 leading-7">
            Olive uses reasonable technical and organizational safeguards to protect user
            data, but no method of transmission or storage is fully risk-free.
          </p>

          <h2 className="mt-6 text-2xl">5. Contact</h2>
          <p className="mt-2 leading-7">
            For privacy requests or questions, contact: <strong>fhrmk8@gmail.com</strong>
          </p>
        </div>
      </main>
    </div>
  );
}
