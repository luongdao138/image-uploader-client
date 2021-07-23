import styled from 'styled-components';

export const Title = styled.h4`
  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;
  margin-bottom: 20px;
`;

export const State = styled.div`
  width: 100%;
  position: relative;
  background-color: #f2f2f2;
  border-radius: 8px;
  height: 6px;
  overflow: hidden;

  span {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    background: #2f80ed;
    border-radius: 8px;
    animation: load 1.75s linear infinite;
    @keyframes load {
      0% {
        left: -50%;
      }

      100% {
        left: 100%;
      }
    }
  }
`;
