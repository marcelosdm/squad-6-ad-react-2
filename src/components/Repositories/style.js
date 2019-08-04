import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export const DivTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const DivBusca = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const InputText = styled.input`
  display: flex;
  margin: 10px;
  font-size: 25px;
  line-height: 35px;
  flex: 1 1 200px;
`

export const SelectType = styled.select`
  display: flex;
  margin: 10px;
  min-width: 100px;

  :hover {
    cursor: pointer;
  }
`

export const OptionType = styled.option`
  display: flex;
  margin-left: 10px;
`

export const SpanButton = styled.span`
  display: flex;
  background-color: #00cd00;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  margin: 10px;

  :hover {
    background-color: #008b00;
    cursor: pointer;
  }
`

export const Repos = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
`

export const Link = styled.a`
  border: 2px solid transparent;
  border-bottom-color: ${props => (props.repo ? '#e36209' : '')};
  color: #586069;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: ${props => (props.repo ? '600' : '')};
  padding: 16px 8px;
  text-align: center;
  text-decoration: none;

  :hover {
    border-bottom: 2px solid transparent;
    border-bottom-color: #d1d5da;
    color: #24292e;
    transition: 0.2s ease;
  }
`
