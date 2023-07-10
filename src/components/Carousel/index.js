
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Carousel.css"

const CarouseApp = ({ produtc, title }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 1, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 2, spacing: 20 },
            },
            "(min-width: 1300px)": {
                slides: { perView: 4, spacing: 20 },
            },
        },
        slides: { perView: 1 },

        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })
    return (
        <>
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="corasel-vitrine">
                <div className="navigation-wrapper nav-cont">
                    <div ref={sliderRef} className="keen-slider">
                        {produtc?.map((item, i) => {
                            return (
                                <div className="keen-slider__slide">

                                    <div className="card d-flex align-items-center p-5">
                                        <div>
                                            <img src={item.img} width='100px' alt={item.description} />
                                        </div>

                                        <div>
                                            R${item.price}
                                        </div>
                                        <div>
                                            {item.description}
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

export default CarouseApp