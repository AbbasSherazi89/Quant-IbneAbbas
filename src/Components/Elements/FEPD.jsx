import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
const FEPD = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
            <div className="col-md-3">
                <h3 className='FEPD-h3' >Financial institutions</h3>
                <p className='FEPD-p'>Banks, investment firms, and other financial institutions, are harnessing blockchain to exchange information and assets more securely and cost-effectively.</p>
                <div className='img_arrow text-center'>
                  <BsArrowRight />
                </div>
            </div>
            <div className="col-md-3">
                <h3 className='FEPD-h3'>Enterprises</h3>
                <p className='FEPD-p'>Blockchain enables companies operating in multiple markets to exchange information and assets more securely and cost-effectively for uses as varied as cross-border payments, supply chain challenges, or raising capital.</p>
                <div className='img_arrow text-center'>
                  <BsArrowRight />
                </div>
            </div>
            <div className="col-md-3">
                <h3 className='FEPD-h3'>Partners</h3>
                <p className='FEPD-p'>Whether you’re a platform provider, an independent software vendor, or a technology consultant, chances are your clients are drawn to the benefits blockchain promises but daunted at the complexity and specialist knowledge required to realise them. We’re here to help.</p>
                <div className='img_arrow text-center'>
                  <BsArrowRight />
                </div>
            </div>
            <div className="col-md-3">
                <h3 className='FEPD-h3'>Developers</h3>
                <p className='FEPD-p'>Are you one of the few developers in the world who understands all the complexities of blockchain? Don’t worry. With Quant, you don’t need to be a distributed ledger technology expert to build game-changing blockchain-agnostic applications.</p>
                <div className='img_arrow text-center'>
                  <BsArrowRight />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FEPD
