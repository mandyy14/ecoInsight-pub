declare module "feather-icons-react";
declare module "react-responsive-masonry";
declare module "swiper";
declare module "swiper/react";
declare module "basiclightbox" {
  interface BasicLightboxInstance {
    show: () => void;
    close: () => void;
  }

  const basicLightbox: {
    create: (
      content: string | HTMLElement,
      options?: object
    ) => BasicLightboxInstance;
  };

  export default basicLightbox;
}
