import styles from 'styled-components'

export const Container = styles.div`
  width: 100%;

    .swiper-button-next,
    .swiper-button-prev {

        background: none;
        color: ${ ({theme}) => theme.COLORS.TEXT };

        @media (min-width: 600px){
          width: 120px;
        }

        @media (min-width: 1100px){
          width: 200px;
        }

    }

`