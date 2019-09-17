import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;  
`;

export const PreviewComponent = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TitleContainer = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover {
        color: gray;
    }
`;