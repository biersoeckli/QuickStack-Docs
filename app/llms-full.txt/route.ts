import { faqs } from '@/components/landing/faq-section';
import { pillars } from '@/components/landing/features-section';
import { howItWorksSteps } from '@/components/landing/how-it-works-section';
import { useCases } from '@/components/landing/use-cases-section';
import { getLLMText, source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const scan = source.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  // Format features
  const featuresText = pillars.map(pillar =>
    `## ${pillar.title}\n${pillar.tagline}\n${pillar.items.map(item => `- ${item}`).join('\n')}`
  ).join('\n\n');

  // Format how it works
  const howItWorksText = howItWorksSteps.map(step =>
    `### ${step.number}. ${step.title}\n${step.description}${step.code ? `\n\`\`\`bash\n${step.code}\n\`\`\`` : ''}`
  ).join('\n\n');

  // Format FAQs
  const faqsText = faqs.map(faq =>
    `**${faq.question}**\n${faq.answer}`
  ).join('\n\n');

  // Format use cases
  const useCasesText = useCases.map(uc =>
    `### ${uc.title}\n${uc.description}\nTags: ${uc.tags.join(', ')}`
  ).join('\n\n');

  return new Response(`# QuickStack

QuickStack is a self-hosted platform for running applications on your own infrastructure. Deploy web apps, databases, and more with ease, while maintaining full control and security.

# Features

${featuresText}

# How It Works

${howItWorksText}

# Use Cases

${useCasesText}

# Frequently Asked Questions

${faqsText}

${scanned.join('\n\n')}`
  );
}
