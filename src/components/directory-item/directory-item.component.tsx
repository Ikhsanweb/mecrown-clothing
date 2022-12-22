import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

type HomeCategory = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
};

type DirectoryItemProps = {
  category: HomeCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandle = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandle}>
      {/* <img alt=""/> */}
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
