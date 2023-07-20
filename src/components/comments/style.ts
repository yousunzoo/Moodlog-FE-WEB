import styled from 'styled-components'

export const Comments = styled.div`
  padding: 20px;

  color: ${({ theme: { mode } }) => mode.textColor};
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
    position: relative;

    textarea {
      border: none;
      outline: none;
      resize: none;
      display: block;
      flex-grow: 1;
      padding: 8px 10px;
      height: auto;
      border: 1px solid ${({ theme: { mode } }) => mode.border};
      border-radius: 5px;
      color: #333;
      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme: { mode } }) => mode.main02};
        border-radius: 20px;
      }
      &::-webkit-scrollbar-track {
        background: #eee;
        border-radius: 20px;
      }
    }

    button {
      padding: 8px 10px;
      color: ${({ theme: { mode } }) => mode.buttonText};
      background-color: ${({ theme: { mode } }) => mode.main02};
      border-radius: 5px;
      cursor: pointer;
    }

    .alert {
      position: absolute;
      bottom: 5px;
      left: 10px;
      color: ${({ theme: { mode } }) => mode.palette01};
      font-size: 14px;
    }
  }
`

interface CommentProp {
  img: string
}

export const Comment = styled.div<CommentProp>`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 20px, 1fr;
  column-gap: 10px;
  margin-top: 20px;
  cursor: default;

  .profile_img {
    width: 60px;
    height: 60px;
    grid-row: span 2;

    background-image: ${({ img }) => (img !== '' ? `url(${img})` : "url('/assets/icons/profile.png')")};
    background-position: center;
    background-size: cover;
    border-radius: 50%;
  }

  .comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    .user {
      font-weight: 600;
    }

    .date {
      color: ${({ theme: { mode } }) => mode.grey03};
      font-size: 12px;
    }
  }
  .comment-body {
    display: flex;
    gap: 10px;

    p {
      flex-grow: 1;
      word-break: keep-all;
      word-wrap: normal;
      white-space: pre-wrap;
    }

    .delete {
      width: 30px;
      height: 30px;
      color: ${({ theme: { mode } }) => mode.palette01};
      text-align: center;
      cursor: pointer;
    }
  }
`
