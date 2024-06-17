import { HeroAvatar, HeroSocial, Section } from '@/components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <span className="text-blue-500">
            A software consultant that specialises in Azure and Microsoft
            Technologies
          </span>
        </>
      }
      description={
        <>
          Results-driven Software Architect with over 15 years of comprehensive
          experience in the software industry, specializing in Azure solutions
          for the past 7 years. Proven track record of translating business
          challenges into high-quality technical specifications through direct
          engagement with end-users. Adept at maintaining a security-centric
          approach, with a background spanning both the defence and fintech
          sectors. Recognized as a strong leader and collaborative team player,
          committed to fostering an environment that drives project success.
          Co-Organiser of .NET Thames Valley meetup group, passionate about
          creating a community for sharing knowledge For opportunities please
          contact shaun@bigwhitesolutions.com
        </>
      }
      socialButtons={
        <>
          <a href="https://github.com/bigwhitesolutions">
            <HeroSocial
              src="/assets/images/github-mark-white.png"
              alt="Github icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/shaunpearsonbws/">
            <HeroSocial
              src="/assets/images/LI-In-square.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://cv.shaunpearson.dev/">
            <HeroSocial src="/assets/images/cv-white.png" alt="CV icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
