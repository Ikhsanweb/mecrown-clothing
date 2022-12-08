import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './shop.styles.scss';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { fetchCategoriesStart } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
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
export default Shop;
