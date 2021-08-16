import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { useEmblaCarousel } from "embla-carousel/react";
import * as Styles from './style';
import { timeSince } from "../../utils/helpers";
const EmblaCarousel = ({ slides, themeStore }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
                <div className="embla__slide" key={index}>
                    <a href={item.link} target="_blank" style={{ display: 'block', width: '100%'}}>
                        <div className="embla__slide__inner">
                            <img
                            className="embla__slide__img"
                            src={item.enclosure.link}
                            alt={item.title}
                            />
                        </div>
                        <Styles.CarouselContent themeStore={themeStore}>
                            <article>{item.title}</article>
                            <h4>{item.description}</h4>
                            <span>Theo Vietnamnet</span>
                            <p>{timeSince(new Date(item.pubDate))} trước</p>
                        </Styles.CarouselContent>
                    </a>
                </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
