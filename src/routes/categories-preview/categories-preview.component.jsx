import { Fragment } from 'react';
import './categories-preview.styles.scss';

// import { CategoriesContext } from '../../contexts/categories.context';

// import ProductCard from '../../components/product-card/product-card.componenet';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <div className="categories-preview-container">
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </div>
  );
};

// {Object.keys(categoriesMap).map((title) => (
//   <Fragment key={title}>
//     <h2>{title}</h2>
//     <div className="products-container">
//       {categoriesMap[title].map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   </Fragment>
// ))}
export default CategoriesPreview;
