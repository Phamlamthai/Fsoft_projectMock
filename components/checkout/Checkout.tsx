import React from 'react'
import styles from "./CheckOut.module.scss";
import './Checkout.module.scss'
const CheckOut = () => {

    const point = {
        cursor: "pointer"
    }
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5" >
                <div className="container">
                    <a className="navbar-brand" href="#">Your Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item d-flex align-items-center">
                                <a style={{ fontSize: '12px' }} className="nav-link font-weight-bold" href="#">CONTINUE SHOPPING</a>
                                <i className="fas fa-caret-right"></i>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="row col-10 mx-auto">
                <div className="col-lg-8 col-xs-12 ">
                    <div className="border-bottom  ">
                        <p>Shipping Informations</p>
                    </div>
                    <div className='mt-3 border p-4'>

                        <div className="d-flex justify-content-between ">
                            <div className="col-md-4 col-6">
                                <img width={'35%'} src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" className="rounded-circle pb-1" alt="Hình ảnh hình tròn" />
                                <p><i className="fas fa-map-marker-alt"></i> 63 Le Duc Tho Street</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, assumenda.</p>
                                <p>686868</p>
                            </div>
                            <div className="col-md-4 col-6 text-center">
                                <p><i className="fas fa-id-card"></i> Mr Huan</p>
                                <p><i className="fas fa-phone"></i> 123-456-789</p>
                            </div>
                            <div className="col-md-4 col-0 text-end"><i className="fas fa-minus-circle"></i></div>


                        </div>
                        <div style={{ marginTop: '-25px', marginBottom: "-25px" }} className='d-flex justify-content-between'>
                            <p></p>
                            <p className={styles.cursorPointer}>Active</p>
                        </div>
                    </div>
                    <div className='mt-3 border p-4'>

                        <div className="d-flex justify-content-between ">
                            <div className="col-md-4 col-6">
                                <img width={'35%'} src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" className="rounded-circle pb-1" alt="Hình ảnh hình tròn" />
                                <p><i className="fas fa-map-marker-alt"></i> 63 Le Duc Tho Street</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, assumenda.</p>
                                <p>686868</p>
                            </div>
                            <div className="col-md-4 col-6 text-center">
                                <p><i className="fas fa-id-card"></i> Mr Huan</p>
                                <p><i className="fas fa-phone"></i> 123-456-789</p>
                            </div>
                            <div className="col-md-4 col-0 text-end"><i className="fas fa-minus-circle"></i></div>


                        </div>
                        <div style={{ marginTop: '-25px', marginBottom: "-25px" }} className='d-flex justify-content-between'>
                            <p></p>
                            <p>Active</p>
                        </div>
                    </div>
                    <div style={point} className='border border-2 border-secondary  mt-4 d-flex justify-content-center align-items-center p-1' >
                        <span >ADD NEW ADDRESS +</span>
                    </div>
                    <div className='mt-3 border p-4'>
                        <div className='d-flex justify-content-between'>
                            <h5>Cart</h5>
                            <p>99 items</p>
                        </div>
                        <div className='row  mx-auto'>
                            <div className='col-sm-4 col-md-3 col-lg-2 col-6'>
                                <img src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" alt="" />
                                <div className='d-flex justify-content-between mt-1'>
                                    <img width={'35%'} src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" className="rounded-circle pb-1" alt="Hình ảnh hình tròn" />
                                    <p>L</p>
                                    <p>x 99</p>
                                </div>
                                <p className='font-weight-bold'>Lorem ipsum dolor</p>
                            </div>
                            <div className='col-sm-4 col-md-3 col-lg-2 col-6'>
                                <img src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" alt="" />
                                <div className='d-flex justify-content-between mt-1'>
                                    <img width={'35%'} src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" className="rounded-circle pb-1" alt="Hình ảnh hình tròn" />
                                    <p>L</p>
                                    <p>x 99</p>
                                </div>
                                <p className='font-weight-bold'>Lorem ipsum dolor</p>
                            </div>
                            <div className='col-sm-4 col-md-3 col-lg-2 col-6'>
                                <img src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" alt="" />
                                <div className='d-flex justify-content-between mt-1'>
                                    <img width={'35%'} src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" className="rounded-circle pb-1" alt="Hình ảnh hình tròn" />
                                    <p>L</p>
                                    <p>x 99</p>
                                </div>
                                <p className='font-weight-bold'>Lorem ipsum dolor</p>
                            </div>
                            <div className='col-sm-4 col-md-3 col-lg-2 col-6'>
                                <img src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" alt="" />
                                <div className='d-flex justify-content-between mt-1'>
                                    <img width={'35%'} src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" className="rounded-circle pb-1" alt="Hình ảnh hình tròn" />
                                    <p>L</p>
                                    <p>x 99</p>
                                </div>
                                <p className='font-weight-bold'>Lorem ipsum dolor</p>
                            </div>
                            <div className='col-sm-4 col-md-3 col-lg-2 col-6'>
                                <img src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" alt="" />
                                <div className='d-flex justify-content-between mt-1'>
                                    <img width={'35%'} src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" className="rounded-circle pb-1" alt="Hình ảnh hình tròn" />
                                    <p>L</p>
                                    <p>x 99</p>
                                </div>
                                <p className='font-weight-bold'>Lorem ipsum dolor</p>
                            </div>
                            <div className='col-sm-4 col-md-3 col-lg-2 col-6'>
                                <img src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" alt="" />
                                <div className='d-flex justify-content-between mt-1'>
                                    <img width={'35%'} src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" className="rounded-circle pb-1" alt="Hình ảnh hình tròn" />
                                    <p>L</p>
                                    <p>x 99</p>
                                </div>
                                <p className='font-weight-bold'>Lorem ipsum dolor</p>
                            </div>
                            <div className='col-sm-4 col-md-3 col-lg-2 col-6'>
                                <img src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" alt="" />
                                <div className='d-flex justify-content-between mt-1'>
                                    <img width={'35%'} src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" className="rounded-circle pb-1" alt="Hình ảnh hình tròn" />
                                    <p>L</p>
                                    <p>x 99</p>
                                </div>
                                <p className='font-weight-bold'>Lorem ipsum dolor</p>
                            </div>
                            <div className='col-sm-4 col-md-3 col-lg-2 col-6'>
                                <img src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" alt="" />
                                <div className='d-flex justify-content-between mt-1'>
                                    <img width={'35%'} src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" className="rounded-circle pb-1" alt="Hình ảnh hình tròn" />
                                    <p>L</p>
                                    <p>x 99</p>
                                </div>
                                <p className='font-weight-bold'>Lorem ipsum dolor</p>
                            </div>
                            <div className='col-sm-4 col-md-3 col-lg-2 col-6'>
                                <img src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" alt="" />
                                <div className='d-flex justify-content-between mt-1'>
                                    <img width={'35%'} src="https://cdn.brightschool.edu.vn/wp-content/uploads/2024/04/anh-lisa-de-thuong-1.jpg" className="rounded-circle pb-1" alt="Hình ảnh hình tròn" />
                                    <p>L</p>
                                    <p>x 99</p>
                                </div>
                                <p className='font-weight-bold'>Lorem ipsum dolor</p>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xs-12 ">
                    <div className="border-bottom  ">
                        <p>Payment Method</p>

                    </div>

                    <div className='p-4'>
                        <div className='d-flex align-items-center'>
                            <div>      <input type="radio" /></div>
                            <div className='m-3'>

                                <i className="fab fa-cc-paypal" style={{ fontSize: '50px' }}></i>
                            </div>
                            <div>
                                <h5 style={{ fontSize: '14px' }} className="font-weight-bold">Pay with Paypal</h5>
                                <span style={{ fontSize: '14px' }} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, temporibus. At repellat commodi ea perferendis!</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='d-flex align-items-center'>
                            <div>      <input type="radio" /></div>
                            <div className='m-3'>

                                <i className="far fa-credit-card" style={{ fontSize: '50px' }}></i>
                            </div>
                            <div>
                                <h5 style={{ fontSize: '14px' }} className="font-weight-bold">Pay with Paypal</h5>
                                <div className='d-flex'>
                                    <i style={{ fontSize: '30px', marginRight: '7px' }} className=" fab fa-cc-visa"></i>
                                    <i style={{ fontSize: '30px', marginRight: '7px' }} className=" fab fa-cc-mastercard"></i>
                                    <i style={{ fontSize: '30px', marginRight: '7px' }} className=" fab fa-cc-paypal"></i>
                                    <i style={{ fontSize: '30px', marginRight: '7px' }} className=" fab fa-cc-apple-pay"></i>
                                    <i style={{ fontSize: '30px', marginRight: '7px' }} className=" fab fa-cc-jcb"></i>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='d-flex align-items-center'>
                            <div>      <input type="radio" /></div>
                            <div className='m-3'>

                                <i className="fab fa-cc-amazon-pay" style={{ fontSize: '50px' }}></i>
                            </div>
                            <div>
                                <h5 style={{ fontSize: '14px' }} className="font-weight-bold">Pay with Paypal</h5>
                                <span style={{ fontSize: '14px' }} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, temporibus. At repellat commodi ea perferendis!</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom  ">
                        <h5>Order Summary</h5>
                    </div>
                    <div className='row mt-4'>
                        <div className='col'>
                            <input type="text" className="form-control mb-3" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div style={point} className='bg-dark d-flex justify-content-center align-items-center p-2  cursor-pointer ' >
                                <span className='text-white'>Apply</span>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4 mb-4'>
                        <div className='col'>
                            <div className='bg-light d-flex  p-2' >
                                <span className=''>Total: 9999$</span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div style={point} className='bg-primary d-flex justify-content-center align-items-center p-2 cursor-pointer ' >
                                <span className='text-white'>Place Order</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckOut
