import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
html{
  margin: 0px;
  padding: 0px;
  color: var(--off_white);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  background: var(--primary);
  background: linear-gradient(100deg, #0F326F 15%, var(--primary)  100%);
  background: -moz-linear-gradient(100deg, #0F326F 15%, var(--primary) 10%);
  background: -webkit-linear-gradient(100deg, #0F326F 15%, var(--primary)  100%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#181F2B", endColorstr="#0B3A8B", GradientType=1 );
}

*, li, ul, a{
  list-style: none;
  text-decoration: none;
}

*, button, input{
  border: none;
  outline: none;
  background-color: transparent;
}

:root{
  --primary: #181f2b;
  --secondary: #09101c;
  --tertiary: #010205;
  --off_white: #ebebeb;
  --red: #f23f84;
}

`
