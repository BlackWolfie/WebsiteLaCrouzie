import { useEffect, useState } from "react"
import svg from '../../public/uploads/svg/top.svg'

const ScrollToTopButton = ( { color}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  }

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="60.737" height="49.512" viewBox="0 0 60.737 49.512">
            <path id="top-dly-purple" d="M30.368,10.158,0,43.836H13.567l16.8-49.512L49.475,43.836H60.737Z" transform="translate(0 5.676)" fill={color}/>
        </svg>
    </button>
  )
}

export default ScrollToTopButton