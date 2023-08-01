import styles from 'styled-components'

export const Container = styles.div`
  width: 100%;

    .swiper-button-next,
    .swiper-button-prev {

        background: none;
        color: ${ ({theme}) => theme.COLORS.TEXT };

        @media (min-width: 768px){
        width: 200px;
        }

    }

`