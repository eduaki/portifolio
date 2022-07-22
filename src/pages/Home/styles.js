import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;

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

  .tec-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 30px;

    .title{
      align-self: flex-start;
      margin-bottom: 15px;
    }

    .tec-list{
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      list-style: none;

      width: 1200px;
    }
  }

`;

export const TecBlock = styled.div`

  display: flex;
  padding: 5px;
  margin: 15px;

  .title{
    display: flex;
    flex-direction: row;
    align-items: center;

    h2{
      margin-left: 5px;
      font-size: 40px;
    }
  }

`