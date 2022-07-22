import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*, html{
  color: var(--off_white);
  background-color: var(--primary);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
  --secondary: #2d384a;
  --off_white: #f2f2f2;
  --white: #fff;
}

`
