import styled from 'styled-components';

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  min-width: 300px;
`;

export const TitleName = styled.label`
  display: block;
  font-size: 32px;
  color: #fd7272;
  font-weight: 700;
`;

export const TitleNumber = styled.label`
  display: block;
  font-size: 32px;
  color: #fd7272;
  font-weight: 700;
`;

export const InputName = styled.input`
  border: 3px solid #2c3a47;
  min-width: 200px;
  min-height: 30px;
`;

export const InputNumber = styled.input`
  border: 3px solid #2c3a47;
  min-width: 200px;
  min-height: 30px;
`;

export const Btn = styled.button`
  display: block;
  margin-top: 20px;
  padding: 15px 25px;
  font-size: 22px;
  font-weight: 700;
  background-color: #fd7272;
  color: white;
`;
