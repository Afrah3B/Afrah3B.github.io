import { Layout } from "./components/Layout";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { CredentialsTeaser } from "./components/sections/CredentialsTeaser";
import { EarlierExperiments } from "./components/sections/EarlierExperiments";
import { EngineeringJourney } from "./components/sections/EngineeringJourney";
import { Hero } from "./components/sections/Hero";
import { Principles } from "./components/sections/Principles";
import { Problems } from "./components/sections/Problems";
import { ProofStrip } from "./components/sections/ProofStrip";
import { SelectedWork } from "./components/sections/SelectedWork";
import { Toolkit } from "./components/sections/Toolkit";
import { usePageMeta } from "./utils/usePageMeta";

export function App() {
  usePageMeta({
    title: "Afrah Bawhab - Software Engineer",
    description:
      "Portfolio of Afrah Bawhab, a Software Engineer who turns unclear ideas and real-world problems into working software.",
  });

  return (
    <Layout>
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <EngineeringJourney />
      <Problems />
      <About />
      <Principles />
      <Toolkit />
      <EarlierExperiments />
      <CredentialsTeaser />
      <Contact />
    </Layout>
  );
}
