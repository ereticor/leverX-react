import React from "react";
import SliderItem from "./SliderItem";

import './slider.scss';
import { sliderData } from "../../constants/slider";

interface State {
  index: number;
  interacted: boolean;
  transition: boolean;
}

export default class Slider extends React.Component<{}, State> {
  private slider: React.RefObject<HTMLUListElement> 
  constructor(props: {}) {
    super(props);

    this.state = { index: 1, interacted: false, transition: false };

    this.slider = React.createRef()

    this.transformSlide = this.transformSlide.bind(this)
    this.checkSlide = this.checkSlide.bind(this)
    this.autoSlide = this.autoSlide.bind(this)
  }

  transformSlide(dir: number, e?: React.MouseEvent) {
    if (!this.slider.current) {
      return
    }

    const { index, transition } = this.state;
    if (e) {
      this.setState({ interacted: true })

      setTimeout(() => this.setState({ interacted: false }), 3000);
    }

    this.slider.current!.classList.add("slider__list_transition");

    if (!transition) {
      if (dir == 1) {
        this.slider.current!.style.transform = `translateX(-${index + 1}00%)`
        this.setState({ index: index + 1 })
      } else {
        this.slider.current!.style.transform = `translateX(-${index - 1}00%)`;
        this.setState({ index: index - 1 })
      }
    }

    this.setState({ transition: true })
  }

  checkSlide() {
    this.slider.current!.classList.remove("slider__list_transition");

    if (this.state.index == 0) {
      this.slider.current!.style.transform = `translateX(-${2}00%)`;
      this.setState({ index: 2 })
    }

    if (this.state.index == 3) {
      this.slider.current!.style.transform = `translateX(-${1}00%)`;
      this.setState({ index: 1 })
    }

    this.setState({ transition: false })
  }

  autoSlide() {
    if (!this.state.interacted) {
      this.transformSlide(1);
    }
    setTimeout(this.autoSlide, 3000);
  }

  componentDidMount() {
    this.autoSlide()
  }

  render() {
    return (
      <>
        <div className="slider">
          <ul className="slider__list" ref={this.slider} onTransitionEnd={this.checkSlide}>
            {sliderData.map( (el, index) => <SliderItem key={index} {...el}/>)}
          </ul>
        </div>
        <button className="slider__left slider__btn" onClick={(e) => this.transformSlide(-1, e)}>&lt;</button>
        <button className="slider__right slider__btn" onClick={(e) => this.transformSlide(1, e)}>&gt;</button>
        <div className="slider__pagination">
          <label className="pagination__label" onClick={(e) => this.transformSlide(-1, e)}>
            <input type="radio" name="sliderPagination" checked={this.state.index === 1} />
            <span></span>
          </label>
          <label className="pagination__label" onClick={(e) => this.transformSlide(1, e)}>
            <input type="radio" name="sliderPagination" checked={this.state.index === 2}/>
            <span></span>
          </label>
        </div>
      </>
    );
  }
}
