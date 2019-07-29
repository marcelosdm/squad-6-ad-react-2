import styled from 'styled-components'

export const Section = styled.section`
  overflow: hidden;
  padding: 10px;
  background-color: #fff;
`

export const Container = styled.div`
  /* background-color : whitesmoke; */
  padding: 10px;

  /* max-width-lg */
  max-width: 50rem;

  /* container */
  margin-left: auto;
  margin-right: auto;
  position: relative;

  display: flex;
  flex-flow: column wrap;
  align-items: center;

  &::before {
    background-color: #e6ebf1;
    bottom: 0;
    content: '';
    display: block;
    left: -10px;
    position: absolute;
    top: 0;
    width: 2px;
    z-index: 1;
  }
`
