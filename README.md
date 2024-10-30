## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Email JS
- Vite
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Immersive Hero**: An eye-catching 3D hacker room that responds to mouse movements, surrounded by animated mini-models.

👉 **Interactive About Me**: A sleek bento grid layout featuring personal info, a 3D globe pinpointing location, tech stack icons, and a one-click email copy option.

👉 **Dynamic Project Showcase**: Browse through projects while watching live demos inside a 3D computer model, seamlessly switching between different projects.

👉 **Interest**: A dedicated section highlighting interest.

👉 **Easy Contact Form**: A user-friendly email form for visitors to reach out directly from your portfolio.

👉 **Fully Responsive**: Optimized layout ensuring a smooth experience across all devices, from desktop to mobile.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

**Cloning the Repository**

```bash
git clone https://github.com/sujal-19/Portfolio-Website.git
cd Portfolio-Website
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};
```

</details>

<details>
<summary><code>index.css</code></summary>

```css
@import url('https://fonts.cdnfonts.com/css/general-sans');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  scroll-behavior: smooth;
}

body {
  background: #010103;
  font-family: 'General Sans', sans-serif;
}

@layer utilities {
  .c-space {
    @apply sm:px-10 px-5;
  }

  .head-text {
    @apply sm:text-4xl text-3xl font-semibold text-gray_gradient;
  }

  .nav-ul {
    @apply flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20;
  }

  .nav-li {
    @apply text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5;
  }

  .nav-li_a {
    @apply text-lg md:text-base hover:text-white transition-colors;
  }

  .nav-sidebar {
    @apply absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block;
  }

  .text-gray_gradient {
    @apply bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent;
  }

  /* button component */
  .btn {
    @apply flex gap-4 items-center justify-center cursor-pointer p-3 rounded-md bg-black-300  transition-all active:scale-95 text-white mx-auto;
  }

  .btn-ping {
    @apply animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75;
  }

  .btn-ping_dot {
    @apply relative inline-flex rounded-full h-3 w-3 bg-green-500;
  }

  /* hero section */
  .hero_tag {
    @apply text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal;
  }

  /* about section */
  .grid-container {
    @apply w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5;
  }

  .grid-headtext {
    @apply text-xl font-semibold mb-2 text-white font-generalsans;
  }

  .grid-subtext {
    @apply text-[#afb0b6] text-base font-generalsans;
  }

  .copy-container {
    @apply cursor-pointer flex justify-center items-center gap-2;
  }

  /* projects section  */
  .arrow-btn {
    @apply w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient;
  }

  .tech-logo {
    @apply w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center;
  }

  /* clients section */
  .client-container {
    @apply grid md:grid-cols-2 grid-cols-1 gap-5 mt-12;
  }

  .client-review {
    @apply rounded-lg md:p-10 p-5 col-span-1 bg-black-300 bg-opacity-50;
  }

  .client-content {
    @apply flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7;
  }

  /*  work experience section */
  .work-container {
    @apply grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12;
  }

  .work-canvas {
    @apply col-span-1 rounded-lg bg-black-200 border border-black-300;
  }

  .work-content {
    @apply col-span-2 rounded-lg bg-black-200 border border-black-300;
  }

  .work-content_container {
    @apply grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 px-2.5;
  }

  .work-content_logo {
    @apply rounded-3xl w-16 h-16 p-2 bg-black-600;
  }

  .work-content_bar {
    @apply flex-1 w-0.5 mt-4 h-full bg-black-300 group-hover:bg-black-500 group-last:hidden;
  }

  /* contact section */
  .contact-container {
    @apply max-w-xl relative z-10 sm:px-10 px-5 mt-12;
  }

  .field-label {
    @apply text-lg text-white-600;
  }

  .field-input {
    @apply w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none;
  }

  .field-btn {
    @apply bg-black-500 px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3;
  }

  .field-btn_arrow {
    @apply w-2.5 h-2.5 object-contain invert brightness-0;
  }

  /*  footer */
  .social-icon {
    @apply w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200;
  }
}

.waving-hand {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

.arrow-gradient {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1) 10%,
    rgba(255, 255, 255, 0.000025) 50%,
    rgba(255, 255, 255, 0.000025) 50%,
    rgba(255, 255, 255, 0.025) 100%
  );
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(14deg);
  }
  30% {
    transform: rotate(-8deg);
  }
  40% {
    transform: rotate(14deg);
  }
  50% {
    transform: rotate(-4deg);
  }
  60% {
    transform: rotate(10deg);
  }
  70% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
```

</details>

<details>
<summary><code>components/Ring.js</code></summary>

```js
import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          },
        );
    },
    {
      dependencies: position,
    },
  );

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
```

</details>

<details>
<summary>About Earth Maps</summary>

```js
globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
```

</details>

## <a name="links">🔗 Links</a>

Here is the list of all the resources used in the project video:

- [Hacker Room](https://sketchfab.com/3d-models/hacker-room-stylized-a0cfe6edf2dd494c8a95addf6bb13a10)
- [Computer](https://sketchfab.com/3d-models/3d-computer-sketchfab-weekly-11-mar23-d9931a9aba7c4ea1bc12b2a59dcef16e)
- [Target Model](https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf)
- [React Logo](https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e)
- [gltfjsx](https://gltf.pmnd.rs/)
- [ReadyPlayerMe](https://readyplayer.me/)
- [Mixamo](https://www.mixamo.com/)
#
