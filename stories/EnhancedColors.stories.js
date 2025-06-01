export default {
  title: 'Design System/Enhanced Colors',
  parameters: {
    docs: {
      description: {
        component: 'Comprehensive color system with brand colors, semantic colors, and interactive controls.',
      },
    },
  },
};

export const BrandColors = () => (
  <div style={{ padding: '20px', fontFamily: 'var(--font-family-sans)' }}>
    <h2>Brand Colors</h2>
    <div style={{ marginBottom: '40px' }}>
      {['primary', 'secondary', 'accent'].map(colorName => (
        <div key={colorName} style={{ marginBottom: '32px' }}>
          <h3 style={{ marginBottom: '16px', textTransform: 'capitalize' }}>{colorName}</h3>
          <div style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map(shade => (
              <div 
                key={shade}
                style={{ 
                  flex: 1, 
                  background: `hsl(var(--color-${colorName}-${shade}))`, 
                  padding: '16px 8px',
                  color: parseInt(shade) >= 500 ? 'white' : '#1a1a1a',
                  textAlign: 'center',
                  fontSize: '12px',
                  fontWeight: '500'
                }}
              >
                <div>{shade}</div>
                <div style={{ fontSize: '10px', opacity: 0.8, marginTop: '4px' }}>
                  --color-{colorName}-{shade}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const SemanticColors = () => (
  <div style={{ padding: '20px', fontFamily: 'var(--font-family-sans)' }}>
    <h2>Semantic Colors</h2>
    <div style={{ marginBottom: '40px' }}>
      {['success', 'warning', 'error'].map(colorName => (
        <div key={colorName} style={{ marginBottom: '32px' }}>
          <h3 style={{ marginBottom: '16px', textTransform: 'capitalize' }}>{colorName}</h3>
          <div style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            {['50', '100', '500', '600', '700'].map(shade => (
              <div 
                key={shade}
                style={{ 
                  flex: 1, 
                  background: `hsl(var(--color-${colorName}-${shade}))`, 
                  padding: '16px 8px',
                  color: parseInt(shade) >= 500 ? 'white' : '#1a1a1a',
                  textAlign: 'center',
                  fontSize: '12px',
                  fontWeight: '500'
                }}
              >
                <div>{shade}</div>
                <div style={{ fontSize: '10px', opacity: 0.8, marginTop: '4px' }}>
                  --color-{colorName}-{shade}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const NeutralColors = () => (
  <div style={{ padding: '20px', fontFamily: 'var(--font-family-sans)' }}>
    <h2>Neutral Colors</h2>
    <div style={{ marginBottom: '32px' }}>
      <div style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map(shade => (
          <div 
            key={shade}
            style={{ 
              flex: 1, 
              background: `hsl(var(--color-neutral-${shade}))`, 
              padding: '16px 8px',
              color: parseInt(shade) >= 500 ? 'white' : '#1a1a1a',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: '500'
            }}
          >
            <div>{shade}</div>
            <div style={{ fontSize: '10px', opacity: 0.8, marginTop: '4px' }}>
              --color-neutral-{shade}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const InteractiveColorEditor = {
  args: {
    primaryHue: 79,
    primarySaturation: 70,
    primaryLightness: 60,
    accentHue: 142,
    accentSaturation: 71,
    accentLightness: 45
  },
  argTypes: {
    primaryHue: { control: { type: 'range', min: 0, max: 360, step: 1 } },
    primarySaturation: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    primaryLightness: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    accentHue: { control: { type: 'range', min: 0, max: 360, step: 1 } },
    accentSaturation: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    accentLightness: { control: { type: 'range', min: 0, max: 100, step: 1 } }
  },
  render: ({ primaryHue, primarySaturation, primaryLightness, accentHue, accentSaturation, accentLightness }) => (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'var(--font-family-sans)',
      '--live-primary': `${primaryHue} ${primarySaturation}% ${primaryLightness}%`,
      '--live-accent': `${accentHue} ${accentSaturation}% ${accentLightness}%`
    }}>
      <h2>Interactive Color Editor</h2>
      <p>Use the controls panel to adjust colors in real-time!</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '20px' }}>
        <div style={{
          background: `hsl(var(--live-primary))`,
          color: 'white',
          padding: '32px 20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Primary Color</h3>
          <code style={{ fontSize: '14px' }}>HSL({primaryHue}, {primarySaturation}%, {primaryLightness}%)</code>
        </div>
        
        <div style={{
          background: `hsl(var(--live-accent))`,
          color: 'white',
          padding: '32px 20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Accent Color</h3>
          <code style={{ fontSize: '14px' }}>HSL({accentHue}, {accentSaturation}%, {accentLightness}%)</code>
        </div>
      </div>
      
      <div style={{ marginTop: '32px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
        <h4>CSS Variables Output:</h4>
        <pre style={{ fontSize: '14px', margin: '8px 0' }}>
{`--color-primary-500: ${primaryHue} ${primarySaturation}% ${primaryLightness}%;
--color-accent-500: ${accentHue} ${accentSaturation}% ${accentLightness}%;`}
        </pre>
      </div>
    </div>
  )
};
