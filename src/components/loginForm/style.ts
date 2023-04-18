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
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #f8f8f8;
`

export const Button = styled.button`
  background-color: #998c84;
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`

export const Signup = styled.p`
  font-size: 12px;
`

export const Span = styled.span`
  color: #a36856;
  margin: 0 10px;
  cursor: pointer;
`
