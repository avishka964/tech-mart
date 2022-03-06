import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import Loader from "../components/Loader"
import Message from "../components/Message"
import Product from "../components/Product"
import Paginate from "../components/Paginate"
import Meta from "../components/Meta"
import { listProducts } from "../actions/productActions"
import ProductCarousel from "../components/ProductCarousel"

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <div>
      <Meta />
      {!keyword && <ProductCarousel />}
      <h1 className="title">THE BEST SMART PHONES & ACCESSORIES SHOP</h1>
      <p className="desc">Sri Lanka's Premiere Online Electronic Store for Latest Smart Phones, Mobile Accessories, Speakers, Laptops, MacBooks with Easy Payment Plans.</p>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      )}
    </div>
  )
}

export default HomeScreen
