import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
`
export const PaletteWrapper = styled.div`
  width: 100%;
  height: 190px;
  background-color: ${({ theme }) => theme.white02};
  padding: 20px;
`

export const Palette = styled.div`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.grey01};
  border-radius: 20px;
`
export const ColorPicker = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.grey01};
`
export const ColorItem = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.grey03};
  background-color: ${({ color, theme }) => theme[`palette${color}`]};
`

export const SizePicker = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: ${({ theme }) => theme.grey03};
  font-size: 20px;
`

export const Slider = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 240px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-top: -5px;
    background-color: ${({ theme }) => theme.grey04};
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 3px;
    background: ${({ value, theme }) =>
      value
        ? `linear-gradient(to right, ${theme.grey04} ${value}%, ${theme.grey03}
 ${value}% 100%)`
        : theme.grey03};
  }
`
export const SelectArea = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`

export const Tools = styled.div`
  display: flex;
  gap: 30px;
`

export const ToolItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.brown01};
  color: ${({ theme }) => theme.white01};
  border-radius: 20px;
  width: 80px;
  height: 30px;
  cursor: pointer;
`

export const Actions = styled.div`
  display: flex;
  gap: 20px;
`

export const ActionItem = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.grey03};
  font-size: 0px;
  img {
    width: 18px;
    height: 18px;
  }
`
