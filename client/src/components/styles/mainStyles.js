import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';


export const MainBtn = styled(Button)`
  background: #584036;
  border-radius: 0px;
  width: 100px;
  height: 50px;
  border-color: #584036;
  margin: 10px;

  &:hover: {
    background-color: #584036 !important;
    background: #584036 !important;
    opacity: 0.7;
  }
` 

export const MainBtn2 = styled(Button)`
  background: white;
  border-radius: 0px;
  width: 100px;
  height: 50px;
  border-color: #584036;
  color: #584036;
  margin: 10px;

  &:hover: {
    background-color: #584036 !important;
    background: #584036 !important;
    opacity: 0.7;
  }
` 

export const HeadImg = styled(Image)`
  width: 600px;
  height: 600px;
  object-fit: cover !important;
`

export const MainHeader = styled.h1`
  color: #D6BCAA !important;
`