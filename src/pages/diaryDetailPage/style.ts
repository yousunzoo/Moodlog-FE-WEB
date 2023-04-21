import styled from 'styled-components'

export const TopBar = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: 40px 1fr 40px;

  top: 0;
  left: 0;

  padding: 10px 20px;
  width: 100%;
  height: 60px;

  .right,
  .left,
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    cursor: default;
  }

  .right {
    .dropdown {
      position: absolute;
      flex-direction: column;
      top: 50px;
      right: 10px;
      width: 80px;
      text-align: center;
      background-color: ${({ theme }) => theme.white01};
      border: 1px solid ${({ theme }) => theme.grey01};
      border-radius: 5px;

      &.hidden {
        display: none;
      }

      li {
        padding: 8px 10px;

        &.delete {
          color: ${({ theme }) => theme.palette01};
        }
        &:hover {
          background-color: ${({ theme }) => theme.white02};
        }
      }
    }
  }
`

export const DiaryDetail = styled.div`
  padding: 80px 20px 0px;

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
    line-height: 1.5;

    .day {
      color: ${({ theme }) => theme.grey03};
    }
  }

  .diary {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;

    p {
      text-align: center;
      line-height: 1.4;
    }
  }
`

export const Comments = styled.div`
  padding: 20px;

  .interact {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      cursor: pointer;
    }
  }

  .create-comment {
    display: flex;
    gap: 5px;

    textarea {
      border: none;
      outline: none;
      resize: none;

      display: block;
      flex-grow: 1;
      padding: 5px 10px;
      height: auto;
      border: 1px solid ${({ theme }) => theme.brown01};
      border-radius: 5px;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.brown02};
        border-radius: 20px;
      }
      &::-webkit-scrollbar-track {
        background: #eee;
        border-radius: 20px;
      }
    }

    button {
      padding: 8px 10px;
      color: ${({ theme }) => theme.white01};
      background-color: ${({ theme }) => theme.brown01};
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .comments {
    .comment {
      margin-top: 20px;

      .comment-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;

        .user {
          font-weight: 600;
        }

        .date {
          color: ${({ theme }) => theme.grey03};
          font-size: 12px;
        }
      }
      .comment-body {
      }
    }
  }
`
