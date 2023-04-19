import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

export const Form = styled.form`
  /* position: absolute; */
  top: 50%;
  /* left: 50%;
  transform: translate(-50%, -50%); */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 4px;
`

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 100%;
  height: 60px;
  background-color: #f8f8f8;
`

export const Button = styled.button`
  background-color: #998c84;
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
  width: 100%;
  height: 50px;
`

export const Logo = styled.img`
  margin: 20px
  width: 250px;
  height: 250px;
`

export const Signup = styled.p`
  font-size: 12px;
`

export const Span = styled.span`
  color: #a36856;
  margin: 0 10px;
  cursor: pointer;
`
