import {
  FeaturedCourses,
  Footer,
  Hero,
  Instrctors,
  TestimonialCards,
  UpcomingWebinars,
  WhyChooseUs,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instrctors />
      <Footer />
    </main>
  );
}
