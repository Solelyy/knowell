# Lessons Learned

## /app
Next JS uses app router for file-based routing. Any folder inside the /app became a route. In app, which is the root /, it has page.tsx and layout. In layout.tsx, this is the App.tsx in React. It doesnt handle the routing in layout.tsx 'cause file-based handles it already, which the thing it differs from React. 

## layout.tsx
In layout.tsx, this is where you specificy the meta data, like the title of the document, etc. It doesn't handle the UI only the structure.

## page.tsx
This is the normal React. Next know that it is the children inside layout.tsx

## next/font/google
Instead of requesting for a font during run time, next js do it in compile/build time. In traditional way (HTML/CSS), we do it: 
<link href="https://fonts.googleapis.com/css2?family=Inter" />
but in next js, import { Inter, Poppins, Fira_Code } from "next/font/google"; and then configure what we need, for example:
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

## loaders 
Prepares the asset before it is being needed. For example, preparing the meal before having a customer.

## Content Delivery Network (CDN)
A CDN is a network of globally distributed servers that deliver content from the closest location to the user, reducing latency and improving load times. Instead of serving content from a single server, CDNs replicate content across multiple regions. Building a CDN is expensive, so developers typically use CDN providers.

## package.json 
It describes what we want, but not exactly what we got. Npm looks inside it and runs the command.

## package-lock.json
This is the exact version of what we want. It solves the problem of having different versions. This file should always be committed to git. So when others will clone the project, they will install the same versions.

## Trailing comma (dangling comma)
This is having a comma after each property, even if it is only one. Not always required, but recommended even in industry codebases. Examples:

useEffect(() => {
}, []);

const obj = {
  a: 1,
};

## antialiased
Gives smoother text. It provides modern look for text. Other style is subpixel-antialiased, which is sharper and more crispier look, best for body-heavy reading, older LCD screens. 

## design tokens
Design tokens are CSS variables (usually in :root) that represent centralized design decisions. Components and utilities reference these tokens instead of hardcoded values, making the system consistent, scalable, and easy to change.
Example:
:root {
  --background: #FFFFFF;
}

.dark {
  --darkBg: #F2F00FF;
}

## shadcn
Ready made UI components that are customizable built using tailwind and radix UI, it is an open-source. 

- shadcn prefers OKLCH over HEX or HSL.
OKLCH is a perceptually uniform color space, meaning changes in lightness or chroma look consistent to the human eye.

This is especially useful for dark mode, because colors keep the same “feel” when switching themes.

Example:
:root {
  --background: oklch(0.98 0.02 85); /* light */
}
.dark {
  --background: oklch(0.145 0 0);    /* dark */
}

- Reference it in tailwind.config.js:
theme: {
  extend: {
    colors: {
      background: 'oklch(var(--background))',
    },
  },
}
