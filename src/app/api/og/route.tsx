import { ImageResponse } from 'next/og'
 
export async function GET() {
  try {
    return new ImageResponse(
        (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              padding: '40px',
            }}
          >
            <img
              src="/icon.png"
              alt="TAMU Formula Electric Logo"
              style={{
                width: '400px',
                height: 'auto',
                marginBottom: '20px',
              }}
            />
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                color: '#490905',
                textAlign: 'center',
              }}
            >
              Texas A&M Formula Electric
            </h1>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        }
      )
  } catch (e) {
    return new Response('Failed to generate image', { status: 500 });
  }
}