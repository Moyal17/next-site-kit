"use client"
import {useEffect, useRef} from "react";
import Link from "next/link";
import {gsap} from "gsap";
import {Autoplay, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {FiLock, FiWind, FiShield, FiLink} from 'react-icons/fi'
import {TbQuote} from "react-icons/tb";
import config from "@/app/config/config.json";
import {markdownify} from "@/lib/utils/textConverter";
import Circle from "../components/Circle";
import ImageFallback from "@/app/components/ImageFallback";
import Cta from "../components/Cta";
import VideoPopup from "../components/VideoPopup";

const featuresList = [
  {
    icon: <FiLock size={24}/>, // feather icon: 'https://feathericons.com/'
    title: "Updated Security",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus"
  },
  {
    icon: <FiWind size={24}/>,
    title: "Magnetic Turning",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus"
  },
  {
    icon: <FiShield size={24}/>,
    title: "Secured & up-to-date",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus"
  },
  {
    icon: <FiLink size={24}/>,
    title: "Instant Link Sharing",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus"
  },
  {
    icon: <FiLock size={24}/>,
    title: "Updated Security",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus"
  },
  {
    icon: <FiWind size={24}/>,
    title: "Magnetic Turning",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus"
  }
]

const circles = [
  {
    className: "circle left-[10%] top-12",
    width: 32,
    height: 32,
    fill: false
  },
  {
    className: "circle left-[2.5%] top-[29%]",
    width: 85,
    height: 85
  },
  {
    className: "circle left-[22%] bottom-[48%]",
    width: 20,
    height: 20,
  },
  {
    className: "circle left-[15%] bottom-[37%]",
    width: 47,
    height: 47,
    fill: false,
  },
  {
    className: "circle left-[6%] bottom-[13%]",
    width: 62,
    height: 62,
    fill: false,
  },
  {
    className: "circle right-[12%] top-[15%]",
    width: 20,
    height: 20,
  },
  {
    className: "circle right-[2%] top-[30%]",
    width: 73,
    height: 73,
    fill: false,
  },
  {
    className: "circle right-[19%] top-[48%]",
    width: 37,
    height: 37,
    fill: false,
  },
  {
    className: "circle right-[33%] top-[54%]",
    width: 20,
    height: 20,
  },
  {
    className: "circle right-[3%] bottom-[20%]",
    width: 65,
    height: 65,
  }
]

interface HomeProps {
  pageDetails: any
}

const HomeContent: React.FC<HomeProps> = ({pageDetails}) => {
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);
  let data = pageDetails.data ? pageDetails.data : pageDetails;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const banner = document.querySelector<HTMLElement>(".banner");
      const bannerBg = document.querySelector<HTMLElement>(".banner-bg");
      const bannerContent = document.querySelector<HTMLElement>(".banner-content");
      const header = document.querySelector<HTMLElement>(".header");
      const tl = gsap.timeline();
      tl.fromTo(".banner-title", {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, delay: 0.5})
        .fromTo(".banner-btn", {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.5}, ">-0.4")
        .fromTo(".banner-img", {y: 20, opacity: 0,}, {y: 0, opacity: 1, duration: 0.5,}, ">-.5");

      //parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header?.clientHeight || '115'}`,
          scrub: true,
        },
      });
      if (banner && bannerBg) {
        const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.1;
        parallaxTl
          .fromTo(bannerBg, {y: 0}, {y: -position}).fromTo(bannerContent, {y: 0}, {y: position}, "<")
          .fromTo(".banner-bg .circle", {y: 0,}, {y: position,}, "<");
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="px-6 mx-auto">
      {/* Hero */}
      <section className="section banner pt-0">
        <div className="container-xl">
          <div className="relative">
            <div className="bg-theme banner-bg col-12 absolute top-0 left-0">
              { circles.map((circle, i) => (
                <Circle
                  key={`circle-${i}`}
                  className={circle.className}
                  width={circle.width}
                  height={circle.height}
                  fill={circle.fill || true}
                />
              ))}
            </div>
            <div className="row overflow-hidden rounded-2xl">
              <div className="col-12">
                <div className="row relative justify-center pb-10">
                  <div className="banner-content col-10 pt-20 pb-10 text-center">
                    {markdownify(pageDetails.banner.title, "h1", "mb-8 banner-title opacity-0")}
                    <div className="banner-btn opacity-0">
                      <Link className="btn btn-primary" href={pageDetails.banner.link.href}>
                        {pageDetails.banner.link.label}
                      </Link>
                    </div>
                  </div>
                  <div className="col-10">
                    <ImageFallback
                      className="banner-img opacity-0"
                      src={pageDetails.banner.media.source}
                      width={1170}
                      height={666}
                      priority={true}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-y border-border py-5">
              <div className="animate from-right col-12">
                <Swiper
                  loop={true}
                  slidesPerView={3}
                  breakpoints={{
                    992: {
                      slidesPerView: 5,
                    },
                  }}
                  spaceBetween={20}
                  modules={[Autoplay]}
                  autoplay={{delay: 3000}}>
                  {pageDetails.brands.items.map((item: any, index: number) => (
                    <SwiperSlide
                      className=" h-20 cursor-pointer py-6 px-6 grayscale  transition hover:grayscale-0 lg:px-10"
                      key={"brand-" + index}>
                      <div className="relative h-full">
                        <ImageFallback
                          className="object-contain"
                          src={item.media.source}
                          sizes="100vw"
                          alt=""
                          fill={true}
                          priority={true}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="section">
        <div className="container text-center">
          <div className="animate">
            {markdownify(pageDetails.features.subtitle, "p", "uppercase")}
            {markdownify(pageDetails.features.title, "h2", "mt-4 section-title")}
            {markdownify(pageDetails.features.description, "p", "mt-10")}
          </div>
          <div className="animate from-right relative mt-10">
            <Swiper
              slidesPerView={1}
              pagination={{
                type: "bullets",
                el: paginationRef.current,
                clickable: true,
                dynamicBullets: true,
              }}
              // autoplay={{ delay: 3000 }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                // eslint-disable-next-line no-param-reassign
                swiper.params.pagination.el = paginationRef.current;
              }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {featuresList.map((item, index) => (
                <SwiperSlide key={"feature-" + index}>
                  <div
                    className="feature-card m-4 rounded-md border border-transparent py-16 px-7 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                    <div
                      className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                      {item.icon}
                    </div>
                    <h3 className="h4 mt-6 mb-5">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="relative mt-9 flex justify-center">
              <div className="pagination " ref={paginationRef}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Into */}
      <section className="section pt-0">
        <div className="container-xl">
          <div className="relative px-4 py-[70px]">
            <div className="text-center">
              <div className="animate">
                {markdownify(pageDetails.intro.subtitle, "p", "uppercase")}
                {markdownify(pageDetails.intro.title, "h2", "mt-4 section-title")}
                {markdownify(pageDetails.intro.description, "p", "mt-10")}
              </div>
              <div className="mx-auto mt-10 h-full max-h-[394px] w-full max-w-[716px]">
                <VideoPopup id={pageDetails.intro.media.source} thumbnail={pageDetails.intro.media.thumbnail}/>
              </div>
            </div>
            <div className="bg-theme absolute top-0 left-0 w-full">
              <Circle
                className="left-[10%] top-12"
                width={32}
                height={32}
                fill={false}
              />
              <Circle className="left-[3%] top-[30%]" width={85} height={85}/>
              <Circle
                className="left-[22%] bottom-[52%]"
                width={20}
                height={20}
              />
              <Circle
                className="left-[15%] bottom-[35%]"
                width={47}
                height={47}
                fill={false}
              />
              <Circle
                className="left-[6%] bottom-[6%]"
                width={62}
                height={62}
                fill={false}
              />
              <Circle
                className="right-[12%] top-[12%]"
                width={20}
                height={20}
              />
              <Circle
                className="right-[2%] top-[30%]"
                width={73}
                height={73}
                fill={false}
              />
              <Circle
                className="right-[19%] top-[50%]"
                width={37}
                height={37}
                fill={false}
              />
              <Circle
                className="right-[33%] top-[52%]"
                width={20}
                height={20}
              />
              <Circle
                className="right-[5%] bottom-[18%]"
                width={65}
                height={65}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="section">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="animate lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto"
                src={pageDetails.speciality.items[0].media.source}
                width={575}
                height={511}
                alt="primary speciality"
              />
            </div>
            <div className="animate lg:col-5 lg:order-1">
              {markdownify(pageDetails.speciality.items[0].subtitle, "p", "uppercase")}
              {markdownify(pageDetails.speciality.items[0].title, "h2", "mt-4 section-title bar-left")}
              {markdownify(pageDetails.speciality.items[0].description, "p", "mt-10")}
            </div>
          </div>
          <div className="row items-center">
            <div className="animate lg:col-6">
              <ImageFallback
                className="mx-auto"
                src={pageDetails.speciality.items[1].media.source}
                width={575}
                height={511}
                alt="secondary speciality"
              />
            </div>
            <div className="animate lg:col-5">
              {markdownify(pageDetails.speciality.items[1].subtitle, "p", "uppercase")}
              {markdownify(pageDetails.speciality.items[1].title, "h2", "mt-4 section-title bar-left")}
              {markdownify(pageDetails.speciality.items[1].description, "p", "mt-10")}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section pt-0">
        <div className="container">
          <div className="animate text-center">
            {markdownify(pageDetails.testimonial.subtitle, "p", "uppercase")}
            {markdownify(pageDetails.testimonial.title, "h2", "mt-4 section-title")}
            {markdownify(pageDetails.testimonial.description, "p", "mt-10")}
          </div>
          <div className="animate row mt-10 items-center justify-center">
            <div className="xl:col-11">
              <div className="row items-center justify-center">
                <div className="hidden lg:col-3 xl:col-4 lg:block">
                  <ImageFallback
                    src="https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/testimonials-01.png"
                    width={455}
                    height={522}
                    alt="testimonials"
                  />
                </div>
                <div className="md:col-7 lg:col-6 xl:col-4">
                  {
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{
                        el: testimonialPaginationRef.current,
                        type: "bullets",
                        dynamicBullets: true,
                        clickable: true,
                      }}
                      autoplay={{delay: 3000}}
                      onBeforeInit={(swiper) => {
                        // @ts-ignore
                        // eslint-disable-next-line no-param-reassign
                        swiper.params.pagination.el = testimonialPaginationRef.current;
                      }}
                      className="testimonial-slider mx-auto max-w-[420px] cursor-pointer lg:max-w-[480px]">
                      {pageDetails.testimonial.items.map((item: any, index: number) => (
                        <SwiperSlide
                          className="text-center"
                          key={"testimonial-" + index}>
                          <div className="py-6 px-8 sm:py-12 md:px-10 lg:px-20 xl:px-12">
                            <TbQuote className="mx-auto rotate-180 text-5xl text-body sm:text-6xl lg:text-8xl"/>
                            <p className="text-[17px] lg:text-lg text-body mt-4 md:mt-5 xl:mt-8">{item.content}</p>
                            <div
                              className="mt-7 inline-block rounded-md bg-body p-7 shadow-[0_10px_50px_rgba(0,0,0,.08)] md:mt-5 lg:mt-8 xl:mt-5">
                              <ImageFallback
                                className="mx-auto rounded-full"
                                src={item.media.source}
                                width={90}
                                height={90}
                                priority={true}
                                alt={item.author}
                              />
                              <h6>{item.author}</h6>
                              <p>{item.profession}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  }
                  <div className="relative h-8">
                    <div
                      className="pagination absolute left-1/2 -translate-x-1/2"
                      ref={testimonialPaginationRef}
                    ></div>
                  </div>
                </div>
                <div className="hidden lg:col-3 xl:col-4 lg:block">
                  <ImageFallback
                    src="https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/testimonials-02.png"
                    width={455}
                    height={522}
                    alt="testimonials"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta */}
      {config.call_to_action.enable && <Cta/>}
    </main>
  )
}


export default HomeContent;