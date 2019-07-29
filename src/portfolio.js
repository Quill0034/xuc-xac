import React, { Component } from "react"; 
import dice from "./assets/dice.png"; 
import blackjack from "./assets/blackjack.jpg";
import flip from "./assets/flip.png"; 

import Xucxac from "./xucxac";
import Blackjack from "./blackjack";
import Flip from "./flip";
export default class Portfolio extends Component{
    render() {
      return (
  
        <section className="page-section portfolio bg-light" id="portfolio">
        <div className="container" style={{paddingTop: '2rem', paddingBottom:'2rem'}}>
          {/* Portfolio Section Heading */}
          <h2 className="page-section-heading text-center text-uppercase mb-0">Portfolio</h2>
          {/* Icon Divider */}
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* Portfolio Grid Items */}
          <div className="row">
            {/* Portfolio Item 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={dice} alt="" />
              </div>
            </div>
            {/* Portfolio Item 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={blackjack} alt="" />
              </div>
            </div>
            {/* Portfolio Item 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={flip} alt="" />
              </div>
            </div>
            
          </div>
          {/* /.row */}
        </div>
        {/* Modal 1 */}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content"  >
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i className="fas fa-times" style={{position: 'relative',float: 'right', color: 'springgreen', fontSize: '4rem'}}/>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Cục xì ngầu ông bê lắc</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image */}
                    <img className="img-fluid rounded mb-5" src={dice} alt="" />
                    {/* Portfolio Modal - Text */}
                    {/* <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p> */}
                    <Xucxac/>
                    <button className="btn btn-primary mt-4" href="#" data-dismiss="modal">
                      <i className="fas fa-times fa-fw" />
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 2 */}
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i className="fas fa-times" style={{position: 'relative',float: 'right', color: 'springgreen', fontSize: '4rem'}}/>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Xì dách</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image */}
                    <img className="img-fluid rounded mb-5" src={blackjack} alt="" />
                    {/* Portfolio Modal - Text */}
                    <Blackjack/>
                    <button className="btn btn-primary mt-4" href="#" data-dismiss="modal">
                      <i className="fas fa-times fa-fw" />
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 3 */}
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i className="fas fa-times" style={{position: 'relative',float: 'right', color: 'springgreen', fontSize: '4rem'}}/>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* Portfolio Modal - Title */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tung đồng xu</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                      <div className="divider-custom-line" />
                      <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                      </div>
                      <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Modal - Image */}
                    <img className="img-fluid rounded mb-5" src="img/portfolio/circus.png" alt="" />
                    {/* Portfolio Modal - Text */}
                    <Flip/>
                    <button className="btn btn-primary mt-4" href="#" data-dismiss="modal">
                      <i className="fas fa-times fa-fw" />
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      );
    }
}