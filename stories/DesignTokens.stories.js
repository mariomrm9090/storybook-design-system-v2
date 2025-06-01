export default {
  title: 'Design System/Design Tokens',
  parameters: {
    docs: {
      description: {
        component: 'A showcase of all design tokens available in the system.',
      },
    },
  },
};

export const Colors = () => (
  <div style={{ padding: '20px', fontFamily: 'var(--font-family-sans)' }}>
    <h2>Color Tokens</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '40px' }}>
      {[
        { name: 'Primary', var: '--color-primary' },
        { name: 'Secondary', var: '--color-secondary' },
        { name: 'Accent', var: '--color-accent' },
        { name: 'Success', var: '--color-success' },
        { name: 'Warning', var: '--color-warning' },
        { name: 'Error', var: '--color-error' },
      ].map(color => (
        <div key={color.name} style={{ 
          padding: '20px', 
          background: `hsl(var(${color.var}))`, 
          color: 'white', 
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 8px 0' }}>{color.name}</h3>
          <code style={{ fontSize: '0.875rem', opacity: 0.9 }}>{color.var}</code>
        </div>
      ))}
    </div>
  </div>
);

export const Typography = () => (
  <div style={{ padding: '20px', fontFamily: 'var(--font-family-sans)' }}>
    <h2>Typography Tokens</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-bold)' }}>
        Heading 4XL Bold
      </div>
      <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-semibold)' }}>
        Heading 3XL Semibold
      </div>
      <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-medium)' }}>
        Heading 2XL Medium
      </div>
      <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-normal)' }}>
        Large Body Text Normal
      </div>
      <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-normal)' }}>
        Base Body Text Normal
      </div>
      <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-light)' }}>
        Small Text Light
      </div>
    </div>
  </div>
);

export const Spacing = () => (
  <div style={{ padding: '20px', fontFamily: 'var(--font-family-sans)' }}>
    <h2>Spacing Tokens</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {[
        { name: 'XS', var: '--spacing-xs' },
        { name: 'SM', var: '--spacing-sm' },
        { name: 'MD', var: '--spacing-md' },
        { name: 'LG', var: '--spacing-lg' },
        { name: 'XL', var: '--spacing-xl' },
        { name: '2XL', var: '--spacing-2xl' },
        { name: '3XL', var: '--spacing-3xl' },
      ].map(space => (
        <div key={space.name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            width: `var(${space.var})`, 
            height: '24px', 
            background: 'hsl(var(--color-accent))',
            borderRadius: 'var(--radius-sm)'
          }}></div>
          <span>{space.name} - {space.var}</span>
        </div>
      ))}
    </div>
  </div>
);
