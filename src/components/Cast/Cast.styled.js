import { ImageGallery } from "pages/Home/Home.styled";
import { styled } from "styled-components";

export const CastGallery = styled(ImageGallery)`
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

`
export const CastImg = styled.img`
border-radius: 5px;
    box-shadow: 0px 0px 6px 4px rgba(34, 60, 80, 0.25);
`