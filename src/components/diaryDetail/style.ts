import styled from 'styled-components'

export const DiaryDetail = styled.div`
  padding: 80px 25px 0px;

  .mood {
    display: flex;
    justify-content: center;

    img {
      width: 60px;
      height: 60px;
    }
  }

  .date {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    line-height: 1.4;
    color: ${({ theme: { mode } }) => mode.textColor};
    .day {
      color: ${({ theme: { mode } }) => mode.main01};
    }
  }

  .diary {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;

    img {
      margin-bottom: 10px;
      max-width: 100%;
      max-height: 375px;
      object-fit: cover;
    }

    p {
      text-align: center;
      line-height: 1.4;
      color: ${({ theme: { mode } }) => mode.textColor};
    }
  }

  .auth {
    color: #aaa;
    font-size: 14px;
    text-align: right;
  }
`
