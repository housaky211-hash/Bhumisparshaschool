import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

export function useGsapReveal() {
  let ctx: gsap.Context | null = null

  function initReveals() {
    if (!import.meta.client) return
    ctx = gsap.context(() => {
      const els = document.querySelectorAll('[data-reveal]')
      els.forEach((el) => {
        const dir = (el as HTMLElement).dataset.reveal || 'up'
        const delay = parseFloat((el as HTMLElement).dataset.revealDelay || '0')
        const fromVars: gsap.TweenVars = { opacity: 0, duration: 0.7, ease: 'power3.out', delay }

        if (dir === 'up') fromVars.y = 80
        else if (dir === 'down') fromVars.y = -80
        else if (dir === 'left') fromVars.x = 80
        else if (dir === 'right') fromVars.x = -80
        else if (dir === 'scale') fromVars.scale = 0.5
        else if (dir === 'rotate') { fromVars.rotation = -10; fromVars.scale = 0.8 }

        gsap.from(el, fromVars)
      })
    })
  }

  onMounted(() => {
    setTimeout(initReveals, 100)
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}

export function useGsapScrollTrigger() {
  let ctx: gsap.Context | null = null

  function init() {
    if (!import.meta.client) return
    ctx = gsap.context(() => {
      const els = document.querySelectorAll('[data-parallax]')
      els.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax || '0.2')
        gsap.to(el, {
          yPercent: speed * 50,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    })
  }

  onMounted(() => {
    setTimeout(init, 200)
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}

export function useMouseGlow() {
  function handleMouseMove(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    target.style.setProperty('--mouse-x', `${x}%`)
    target.style.setProperty('--mouse-y', `${y}%`)
  }

  function bindGlow(el: HTMLElement) {
    el.addEventListener('mousemove', handleMouseMove)
  }

  function unbindGlow(el: HTMLElement) {
    el.removeEventListener('mousemove', handleMouseMove)
  }

  return { bindGlow, unbindGlow }
}
