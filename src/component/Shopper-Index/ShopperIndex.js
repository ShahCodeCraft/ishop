import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { CrudCreate } from "../Crud/CrudCreate"
import { CrudDetails } from "../Crud/CrudDetails"
import { CrudEdit } from "../Crud/CrudEdit"
import { CrudIndex } from "../Crud/CrudIndex"
import { ShopperCategory } from "../Shopper-Home/ShopperCategory"
// import { ShopperDetails } from "../shopper-details/shopper-details"
// import { ShopperHome } from "../Shopper-Home/ShopperHome"
import { ShopperInvalid } from "../Shopper-Invalid/ShopperInvalid"
import { ShopperJewelery } from "../Shopper-Jewelery/ShopperJewelery"
import { ShopperLogin } from "../Shopper-Login/ShopperLogin"
import { ShopperRegister } from "../Shopper-Register/ShopperRegister";

export function ShopperIndex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
              <header className="d-flex p-1 justify-content-between">
                 <div>
                    <h2>Shopper.</h2>
                 </div>
                 <nav className="d-flex">
                    <div className="me-3"> <Link to="home" className="btn">Home</Link> </div>
                    <div className="me-3"> <Link to="products" className="btn">Products</Link> </div>
                    <div className="me-3"> <Link to="register" className="btn">Register</Link> </div>
                    <div className="me-3"> <Link to="category/men's clothing" className="btn">Men's Fashion</Link> </div>
                    <div className="me-3"> <Link to="category/women's clothing" className="btn">Women's Fashion</Link> </div>
                    <div className="me-3"> <Link to="category/jewelery" className="btn">Jewelery</Link> </div>
                    <div className="me-3"> <Link to="category/electronics" className="btn">Electronics</Link> </div>
                 </nav>
                 <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-cart4 me-3"></span>
                 </div>
              </header>
              <div className="mt-2 bg-dark text-white text-center p-1">
                ⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️
              </div>
              <div className="mt-3">
                <Routes>
                    {/* <Route path="/" element={<ShopperHome />} /> */}
                    {/* <Route path="home" element={<ShopperHome />} /> */}
                    <Route path="jewelery" element={<ShopperJewelery />} />
                    <Route path="category/:catname" element={<ShopperCategory />} />
                    {/* <Route path="details/:id" element={<ShopperDetails />} /> */}
                    <Route path="register" element={<ShopperRegister />} />
                    <Route path="login" element={<ShopperLogin />} />
                    <Route path="invalid" element={<ShopperInvalid />} />
                    <Route path="products" element={<CrudIndex />} />
                    <Route path="NewProduct" element={<CrudCreate />} />
                    <Route path="cruddetails/:id" element={<CrudDetails />}/>
                    <Route path="crudedit/:id" element={<CrudEdit />} />
                </Routes>
              </div>
            </BrowserRouter>
        </div>
    )
}
//shopper-index.js
