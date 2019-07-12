import styled from 'styled-components'

export const Head = styled.header`
  align-items: center;
  display: flex;
  background-color: #24292e;
  color: #fff;
  flex-wrap: nowrap;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-right: 16px !important;
  padding: 16px;
`

export const Img = styled.img`
  src: ${props => props.src};
  alt: ${props => props.alt};

  padding-right: ${props => (props.logo ? '16px' : '5px')};
`

export const Label = styled.label`
  background-color: hsla(0, 0%, 100%, 0.125);
  border: 0;
  border-radius: 3px;
  display: flex;
  padding: 0 6px;
  vertical-align: middle;
`

export const Input = styled.input`
  type: ${props => props.type}
  placeholder: ${props => props.placeholder}

  background: none;
  border: none 2px;
  border-radius:  3px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;

  line-height: 20px;
  height: 28px;
  padding: 0 3px;

`

export const ButtonNew = styled.button`
  position: relative;
  top: -6px;
  border: 0;
  transition: all 40ms linear;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 2px;
  margin-right: 2px;
`
