import styled from 'styled-components'

export const Container = styled.details`
  background-color: #e1e4e9;
  display: flex;
  flex-wrap: wrap;
  /* margin : 10px; */
  align-self: center;
  justify-self: center;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
`
export const Sumary = styled.summary`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
`

export const Span = styled.span`
  display: flex;
  flex-wrap: wrap;
`
export const Ul = styled.ul`
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  /* margin-top: 30px; */
  position: absolute !important;
  vertical-align: middle;
  width: 100px;
`

export const Li = styled.li`
  align-items: center;
  border-bottom: 1px solid #e1e4e8;
  color: #1b1f23;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  justify-content: flex-start;
  line-height: 20px;
  list-style-type: none;
  text-align: left;
  width: 100%;

  :last-child {
    border-bottom: 0;
  }
  :hover {
    background-color: #0366d6;
    color: #fff;
  }
`
