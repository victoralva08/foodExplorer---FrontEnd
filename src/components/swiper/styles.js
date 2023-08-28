import styles from 'styled-components'

export const Container = styles.div`
  width: 100%;

  .swiper-button-next,
  .swiper-button-prev {

    background: none;
    color: ${ ({theme}) => theme.COLORS.TEXT };

    @media (min-width: 37.5em){
      width: 7.5em;
    }

    @media (min-width: 68.75em){
      width: 12.5em;
    }

  }
  
`