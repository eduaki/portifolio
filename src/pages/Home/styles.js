import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;

  .info-wrapper{
    margin: 0 auto;
    max-width: 800px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    div{
      display: flex;
      flex-direction: column;

      .title{
        display: block;
        margin-top: -150px;
        margin-bottom: 30px;
      }

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

      h2{
        text-align: center;
        font-size: 40px;
      }

      p{
        font-size: 18px;
      }
      
    }

    img{
      width: 350px;
      border-top-left-radius: 25%;
      border-top-right-radius: 5%;
      border-bottom-left-radius: 5%;
      border-bottom-right-radius: 25%;
    }
  }

`;