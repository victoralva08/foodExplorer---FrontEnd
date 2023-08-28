import styles from 'styled-components'

export const Container = styles.div`

  h1 {
    cursor: pointer;
  }

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.625em;

  font-size: clamp(0.375em, 4vw, 1.25em);
  white-space: nowrap;
  font-weight: bold;

  svg {
    width: clamp(1em, 4vw, 1.875em);
  }

  
  div {
    display: flex;
    flex-direction: column;
  }

  span {

    line-height: 0.187em;
    font-size: 0.8em;
    color: ${ ({theme}) => theme.COLORS.PRICE_TEXT };
    align-self: end;

  }


`