export const defaultHeroStyles = `
  .hero-text{
    max-height: 80px;
     -webkit-line-clamp: unset;
}
  .hero {
    background-image: linear-gradient(
        86.77deg,
        rgba(17, 17, 17, 1) 0%,
        rgba(17, 17, 17, 0) 50%
      ),
      url(../../../images/home-mobile-1x.jpg);
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .hero {
      background-image: linear-gradient(
          86.77deg,
          rgba(17, 17, 17, 1) 0%,
          rgba(17, 17, 17, 0) 50%
        ),
        url(../../../images/home-mobile-2x.jpg);
    }
  }

@media screen and (min-width: 768px) {
  .hero-text{
    max-height: 64px;
}
  .hero {
    background-image: linear-gradient(
        86.77deg,
        #111111 0%,
        rgba(17, 17, 17, 0) 50%
      ),
      url(../../../images/home-tablet-1x.jpg);
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .hero {
      background-image: linear-gradient(
          86.77deg,
          #111111 0%,
          rgba(17, 17, 17, 0) 50%
        ),
        url(/images/home-tablet-2x.jpg);
    }
  }
}
@media screen and (min-width: 1280px) {
  .hero-text{
    max-height: 76px;
}

  .hero {
    background-image: linear-gradient(
        86.77deg,
        #111111 0%,
        rgba(17, 17, 17, 0) 50%
      ),
      url(../../../images/home-desktop-1x.jpg);
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .hero {
      background-image: linear-gradient(
          86.77deg,
          #111111 0%,
          rgba(17, 17, 17, 0) 50%
        ),
        url(../../../images/home-desktop-2x.jpg);
    }
  }
}`