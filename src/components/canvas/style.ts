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
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  overflow: hidden;
`

export const ColorPicker = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px solid ${({ theme }) => theme.border};
`

export const DisableColorPicker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.input};
  span {
    color: ${({ theme }) => theme.textColor};
  }
`
export const ColorItem = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.border};
  background-color: ${({ color, theme }) => theme[`palette${color}`]};
  &.active {
    border: 3px solid ${({ theme }) => theme.placeholder};
    box-sizing: content-box;
  }
`

export const SizePicker = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: ${({ theme }) => theme.textColor};
  font-size: 20px;
`

export const Slider = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 240px;
  background-color: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-top: -5px;
    background-color: ${({ theme }) => theme.main01};
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 3px;
    background: ${({ value, theme }) =>
      value
        ? `linear-gradient(to right, ${theme.main01} ${Number(value) * 2}%, ${theme.card}
 ${Number(value) * 2}% 100%)`
        : theme.placeholder};
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
  gap: 20px;
`

export const ToolItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.main01};
  color: ${({ theme }) => theme.main01};
  border-radius: 20px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.buttonText};
    background-color: ${({ theme }) => theme.main01};
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 20px;
`

export const ActionItem = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.main02};
  background-size: 18px 18px;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 0px;
  &[data-action='undo'] {
    background-image: url('assets/icons/prev.png');
  }
  &[data-action='redo'] {
    background-image: url('assets/icons/next.png');
  }
  &[data-action='reset'] {
    background-image: url('assets/icons/reset.png');
  }
`

export const CanvasArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - (190px + 60px));
`

export const Canvas = styled.canvas`
  border: 4px solid ${({ theme }) => theme.border};
`

export const SelectPhotoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.card};
  border-top: 2px solid ${({ theme }) => theme.border};
`

export const SelectPhotoLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 120px;
  height: 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.main01};
  color: ${({ theme }) => theme.buttonText};
`

export const SelectPhoto = styled.input`
  display: none;
`
