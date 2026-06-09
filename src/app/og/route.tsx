import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Dynamic params
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Learn. Build. Launch.'
      
    const type = searchParams.get('type') || 'default'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#121212',
            color: 'white',
            fontFamily: 'sans-serif',
            position: 'relative',
          }}
        >
          {/* Bottom Orange Strip */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              backgroundColor: '#FF6B00',
            }}
          />

          {/* Deltav.in text bottom right */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              right: '48px',
              fontSize: 14,
              color: 'white',
              fontFamily: 'sans-serif',
            }}
          >
            deltav.in
          </div>

          {/* Left Column: Branding */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '40%',
              paddingLeft: '64px',
            }}
          >
            {/* Delta Triangle */}
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '40px solid transparent',
                borderRight: '40px solid transparent',
                borderBottom: '70px solid #FF6B00',
                marginBottom: '20px',
              }}
            />
            
            {/* Text logo */}
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: 'white',
                letterSpacing: '0.1em',
                marginBottom: '8px',
              }}
            >
              DELTA V
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#A1A1AA',
                letterSpacing: '0.05em',
              }}
            >
              Learn. Build. Launch.
            </div>
          </div>

          {/* Right Column: Title and Type */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '60%',
              paddingRight: '64px',
            }}
          >
            {type !== 'default' && (
              <div
                style={{
                  color: '#FF6B00',
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                {type === 'course' ? 'COURSE' : type === 'workshop' ? 'WORKSHOP' : type}
              </div>
            )}
            
            <div
              style={{
                fontSize: 56,
                fontWeight: 600,
                color: 'white',
                lineHeight: 1.2,
              }}
            >
              {title}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.error(e)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
