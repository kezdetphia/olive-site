import Image from "next/image";
import Link from "next/link";
import cloud from "@/assets/cloud4.jpeg";

export default function TermsAndConditionsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image src={cloud} alt="Cloud background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-[#0d2240]/65" />

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-10 md:px-10">
        <div className="rounded-3xl border border-white/40 bg-white/82 p-8 text-[#132849] shadow-2xl backdrop-blur-md">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-4xl">Terms & Conditions</h1>
            <Link href="/" className="rounded-full bg-[#17385f] px-4 py-2 text-sm font-semibold text-white">
              Back to Olive
            </Link>
          </div>

          <p className="mb-4 text-sm text-[#2f4f73]">Last updated: March 3, 2026</p>
          <p className="mb-4 leading-7">
            These Terms & Conditions govern your use of Olive. By accessing or using the app,
            you agree to these terms.
          </p>

          <h2 className="mt-6 text-2xl">1. Service Purpose</h2>
          <p className="mt-2 leading-7">
            Olive provides Bible reading tools, spiritual reflection features, and AI-guided
            support for informational and inspirational purposes.
          </p>

          <h2 className="mt-6 text-2xl">2. User Responsibilities</h2>
          <p className="mt-2 leading-7">
            You agree to use Olive lawfully and respectfully, and you are responsible for
            maintaining the confidentiality of your account credentials.
          </p>

          <h2 className="mt-6 text-2xl">3. AI Guidance Disclaimer</h2>
          <p className="mt-2 leading-7">
            Olive&apos;s AI mentor is not a substitute for professional medical, legal, or
            pastoral counseling and should not be relied on for emergency decisions.
          </p>

          <h2 className="mt-6 text-2xl">4. Changes to Service</h2>
          <p className="mt-2 leading-7">
            Olive may update features, content, or these terms at any time. Continued use
            after updates means you accept the revised terms.
          </p>

          <h2 className="mt-6 text-2xl">5. Contact</h2>
          <p className="mt-2 leading-7">
            Questions about these terms can be sent to: <strong>fhrmk8@gmail.com</strong>
          </p>
        </div>
      </main>
    </div>
  );
}
