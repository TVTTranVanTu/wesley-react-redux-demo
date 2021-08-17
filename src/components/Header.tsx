import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { fetchCategoriesRequest } from '../redux/actions/categoriesActions';
import { RootState } from '../redux/reducers/rootReducer';
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { pending, categories, error } = useSelector((state: RootState) => state.categories);
  console.log(categories);

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, [dispatch]);
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <img alt="logo" src={logo} />
            <h2>Hoạt hình 3D</h2>
          </div>
          <div className="header-right">
            <ul className="list-menu">
              <li className="menu-item">
                <Link to="/categories">Thể loại</Link>
                <ul className="dropdown__box">
                  {pending ? (
                    ''
                  ) : error ? (
                    ''
                  ) : (
                    <>
                      {categories.map((category, index) => (
                        <li className="dropdown__item" key={index}>
                          <Link to={`/${category.categoryname}`} className="link-inserted">
                            {category.categoryname}
                          </Link>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/about">Thông tin</Link>
              </li>
              <li className="menu-item">
                <Link to="/contact">Liên hệ</Link>
              </li>
              <li className="menu-item">
                <Link to="/login">Đăng nhập</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
