import { useRef } from "react"

export function useHorizontalDrag() {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseDown = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    let startX = e.pageX - el.offsetLeft
    let scrollLeft = el.scrollLeft

    const onMouseMove = (ev: MouseEvent) => {
      const x = ev.pageX - el.offsetLeft
      el.scrollLeft = scrollLeft - (x - startX)
    }
    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
  }

  return { ref, onMouseDown }
}