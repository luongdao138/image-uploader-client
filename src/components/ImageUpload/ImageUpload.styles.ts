import styled from 'styled-components';

export const Title = styled.h4`
  font-weight: 500;
  font-size: ${({ small }: { small: boolean }) => (small ? '10px' : '18px')};
  color: #4f4f4f;
  color: ${({ small }: { small: boolean }) => (small ? '#828282' : '#4f4f4f')};
  text-align: center;
  margin-bottom: 10px;
`;

export const Dropzone = styled.div`
  width: 100%;
  height: 218px;
  border-radius: 12px;
  border: 1px dashed #97bef4;
  background-color: #f6f8fb;
  margin-top: 20px;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 500;
    font-size: 12px;
    color: #bdbdbd;
    margin-top: 30px;
  }
`;

export const Divider = styled.p`
  text-align: center;
  margin: 20px 0;
  color: #bdbdbd;
  font-weight: 500;
  font-size: 12px;
  color: #bdbdbd;
`;

export const Button = styled.button`
  background: #2f80ed;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  padding: 8px 14px;
`;
