import { GradientText, Newsletter, Section } from '@/components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          <GradientText>Work with me</GradientText>
        </>
      }
      description="If you would like to reach out to discuss opportunities please contact me at shaun@bigwhitesolutions.com"
    />
  </Section>
);

export { CTA };
