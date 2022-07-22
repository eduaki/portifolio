import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .detail{
    width: 100px;
    height: 4px;
    background-color: #f23f84;
    margin-top: -5px;
    margin-bottom: 3px;
    border-bottom-left-radius: 100%;
    border-top-right-radius: 100%;
  }

  .line2{
    margin: 0px;
    width: 80px;
    height: 3px;
    border-bottom-left-radius: 100%;
  }

  .skill-wrapper{
    display: flex;
      justify-content: center;
      flex-flow: row wrap;
      list-style: none;

      width: 1200px;
  }
`;
export const Block = styled.div`

  display: flex;
  padding: 5px;
  margin: 15px;

  .title{
    display: flex;
    flex-direction: row;
    align-items: center;

    h2{
      margin-left: 10px;
      font-size: 40px;
    }
  }

`