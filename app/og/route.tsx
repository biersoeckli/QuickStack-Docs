import { ImageResponse } from '@takumi-rs/image-response';

export const revalidate = false;

const title = 'Self-host any app on your own infrastructure';
const description =
  'Free, self-hosted platform. Simple deployments from your repo. Use auto-deploy, a Dockerfile, or container image.';

export function GET(request: Request) {
  const logo = new URL('/img/quickstack-icon.svg', request.url).toString();

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
