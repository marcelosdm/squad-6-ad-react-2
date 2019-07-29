import styled from 'styled-components'

export const Avatar = styled.div`
  width: 25%;
  min-width: 340px;
`

export const Block = styled.div`
  /* background-color : #FFE4C4; */
  min-width: 250px;
  width: 300px;
  padding: 40px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

export const Imagem = styled.div`
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-image: url('../../img/jorge.jpeg');
`

export const Link = styled.div`
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  height: auto;
  border: 0.32mm solid #bebebe;
  border-radius: 3px;
`

export const Text = styled.p`
  text-align: center;
`

export const Button = styled.span`
  background-color: #d3d3d3;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: px;

  :hover {
    background-color: #cdc9c9;
  }
`
