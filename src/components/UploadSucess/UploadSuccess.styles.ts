import styled from 'styled-components';

export const Title = styled.h4`
  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;
  margin-bottom: 20px;
  text-align: center;
`;

export const Icon = styled.span`
  color: #219653;
  font-size: 35px;
  margin-bottom: -5px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 225px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Copy = styled.div`
  position: relative;
  width: 100%;
  background: #f6f8fb;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  padding-right: 80px;
  margin-top: 20px;
  p {
    font-size: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  button {
    position: absolute;
    right: 0;
    top: 1px;
    bottom: 1px;
    width: 80px;
    font-size: 10px;
    background: #2f80ed;
    border-radius: 8px;
    color: #fff;
  }
`;

export const Button = styled.button`
  width: 80px;
  font-size: 10px;
  background: #219653;
  border-radius: 8px;
  color: #fff;
  padding: 8px 20px;
`;
