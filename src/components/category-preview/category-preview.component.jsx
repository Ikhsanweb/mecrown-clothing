import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  Preview,
} from './category-preview.styles';

import ProductCard from '../product-card/product-card.componenet';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title}>
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
