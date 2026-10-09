import { ImageResponse } from '@takumi-rs/image-response';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const revalidate = false;

const title = 'Self-host any app on your own infrastructure';
const description =
  'Free, self-hosted platform. Simple deployments from your repo. Use auto-deploy, a Dockerfile, or container image.';

export async function GET() {
  const svg = await readFile(path.join(process.cwd(), 'public/img/quickstack-icon.svg'));
  const logo = `data:image/svg+xml;base64,${svg.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: '72px',
        color: '#1f2937',
        backgroundColor: '#ffffff',
        backgroundImage:
          'radial-gradient(circle at 86% 12%, rgba(0, 214, 201, 0.16), transparent 30%)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <img src={logo} width="64" height="64" alt="QuickStack" />
        <span style={{ fontSize: '42px', fontWeight: 700, letterSpacing: '-1.5px' }}>
          QuickStack
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '940px' }}>
        <span style={{ fontSize: '66px', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-3px' }}>
          {title}
        </span>
        <span style={{ marginTop: '24px', fontSize: '30px', lineHeight: 1.35, color: '#475569' }}>
          {description}
        </span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      format: 'png',
    },
  );
}
