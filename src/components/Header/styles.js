import styled from 'styled-components'

export const Head = styled.header`
  align-content: center;
  align-items: center;
  display: flex;
  background-color: #24292e;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  justify-content: space-around;
  margin-right: 16px !important;
  padding: 16px 6px;
  width: 100%;
`

export const Div = styled.div`
  align-items: center;
  display: flex;
  margin: 0 2px;
  /* flex-grow: 4; */
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
  margin-right: 8px !important;
  padding: 0 6px;
  vertical-align: middle;
`

export const Input = styled.input`
  type: ${props => props.type};
  placeholder: ${props => props.placeholder};

  background: none;
  border: none 2px;
  border-radius: 3px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  height: 28px;
  padding: 0 3px;
`

export const ButtonNew = styled.button`
  align-items: center;
  background: linear-gradient(180deg, rgb(90, 190, 87) 0, rgb(53, 146, 56) 100%),
    rgb(90, 190, 87);
  border: 1px solid #0f9b0f;
  border-radius: 3px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.3);
  color: #fff;
  cursor: pointer;
  display: flex;
  font: normal 12px Arial, Helvetica, sans-serif;
  font-weight: 600;
  justify-content: center;
  padding: 5px 10px;
  text-shadow: 0 1px 2px rgb(50, 114, 40);
  transform-origin: 50% 50% 0;
  z-index: auto;

  :hover {
    background: rgb(90, 190, 87);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
    transition: all 150ms cubic-bezier(0.42, 0, 0.58, 1);

    :active {
      border: 1px solid rgba(180, 180, 180, 0.2);
      background: rgba(77, 168, 74, 1);
      box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.1) inset;
      text-shadow: 0 1px 2px rgb(50, 114, 40);
    }
  }
`

export const MenuLink = styled.a`
  href: ${props => props.href};

  margin-right: 16px !important;
`
