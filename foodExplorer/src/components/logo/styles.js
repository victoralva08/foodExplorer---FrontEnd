import styles from 'styled-components'

export const Container = styles.div`

   display: flex;
   align-items: center;
   gap: 10px;


   font-size: clamp(6px, 4vw, 16px);
   white-space: nowrap;
   font-weight: bold;

   svg {
     width: clamp(16px, 4vw, 24px);
   }


`