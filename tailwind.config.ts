/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          black: '#000000',
          dark: '#0a0a0a',
          panel: '#111111',
          border: '#333333',
          purple: '#a855f7',
          red: '#ef4444',
          green: '#22c55e',
          yellow: '#facc15',
          pink: '#ec4899',
          cyan: '#06b6d4',
          white: '#ffffff',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        jp: ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'glitch-2': 'glitch2 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'psychedelic': 'psychedelic 20s linear infinite',
        'psychedelic-reverse': 'psychedelic 25s linear infinite reverse',
        'psychedelic-fast': 'psychedelic 12s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee 25s linear infinite reverse',
        'scan-line': 'scanLine 8s linear infinite',
        'rotate-border': 'rotateBorder 4s linear infinite',
        'pulse-border': 'pulseBorder 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-left': 'slideLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'rotate-in': 'rotateIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'clip-reveal': 'clipReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'zoom-bounce': 'zoomBounce 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'shake': 'shake 0.5s ease-in-out',
        'spin-slow': 'spin 12s linear infinite',
        'spin-slower': 'spin 20s linear infinite',
        'drift': 'drift 15s ease-in-out infinite',
        'drift-alt': 'drift 18s ease-in-out infinite reverse',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'text-shimmer': 'textShimmer 3s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        glitch2: {
          '0%, 100%': { textShadow: '2px 0 #ef4444, -2px 0 #06b6d4' },
          '25%': { textShadow: '-2px 0 #ef4444, 2px 0 #06b6d4' },
          '50%': { textShadow: '2px 2px #ef4444, -2px -2px #06b6d4' },
          '75%': { textShadow: '-2px -2px #ef4444, 2px 2px #06b6d4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        psychedelic: {
          '0%': { transform: 'translateX(-100%) rotate(0deg)' },
          '100%': { transform: 'translateX(100%) rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scanLine: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        rotateBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseBorder: {
          '0%, 100%': { boxShadow: '4px 4px 0px 0px #a855f7' },
          '50%': { boxShadow: '6px 6px 0px 0px #ef4444' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(80px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-80px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(80px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-80px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-10deg) scale(0.8)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
        clipReveal: {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        zoomBounce: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(30px, -20px) rotate(90deg)' },
          '50%': { transform: 'translate(-20px, 30px) rotate(180deg)' },
          '75%': { transform: 'translate(15px, 15px) rotate(270deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
