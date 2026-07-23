import os

with open('logo-icon.svg', 'r') as f:
    icon_svg = f.read()

with open('logo-full.svg', 'r') as f:
    full_svg = f.read()

def make_tsx(name, svg_content):
    # Extract the inner <g> tags
    inner = svg_content.split('>', 1)[1].rsplit('<', 1)[0].strip()
    # Extract the viewBox
    viewBox = svg_content.split('viewBox="')[1].split('"')[0]
    
    # We should replace fill="#000000" with fill="currentColor"
    inner = inner.replace('fill="#000000"', 'fill="currentColor"')
    
    return f"""import React from 'react';

interface {name}Props extends React.SVGProps<SVGSVGElement> {{
  className?: string;
}}

export const {name}: React.FC<{name}Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="{viewBox}"
    {{...props}}
  >
    {inner}
  </svg>
);
"""

with open('LogoIcon.tsx', 'w') as f:
    f.write(make_tsx('LogoIcon', icon_svg))

with open('LogoFull.tsx', 'w') as f:
    f.write(make_tsx('LogoFull', full_svg))

print("Created LogoIcon.tsx and LogoFull.tsx")
