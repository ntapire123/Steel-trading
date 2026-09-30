import React from 'react'


const Hero = () => {

  return (
  <>
  <div className="container text-center my-5">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <img 
          src='/assets/homeHero.png'
          alt="Dashboard Hero" 
          className="img-fluid w-100 mb-5"
        />
      </div>
      <div className="col-12 signupContainer d-flex flex-column align-items-center">
        <h1 className='mt-2 mb-2 fs-1 font-weight-bold'>Invest in the steel</h1>
        <p className='text-muted mt-2 mb-3 max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tenetur.</p>
        <button type="button" className="btn btn-primary btn-lg mt-3 mb-3 px-5 py-2" style={{ maxWidth: '300px' }}>Sign up For Free</button>
      </div>
    </div>
  </div>
  </>
)
}


export default Hero