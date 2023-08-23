const { styled } = require("styled-components");

export const InputFind = styled.input`
display: block;
position: relative;
      width: 100%;
      height: calc(2.25rem + 2px);
      padding: 0.375rem 0.75rem;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #bdbdbd;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      &:focus{
        color: #212529;
      background-color: #fff;
      border-color: #bdbdbd;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
      }
      `
export const IconSearch = styled.span`
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      bottom: 0;
      right: 0;
      width: 2.5rem;
      border: 1px solid #bdbdbd;
      background-color: #f5f5f5;
      cursor: pointer;
      color: #212529;
      transition: background-color 0.15s ease-in-out;
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      &:hover {
      background-color: #e0e0e0;
    }
      ` 
      