import React from 'react'

const Feeds = () => {
  return (
    <div className='container' style={{ marginTop: '100px'}}>
    <div className="row align-items-center">
        <div className="mx-auto col-10 col-md-8 col-lg-6">        
            <div className="card">
                  <div>
                    <p>colombo</p>
                  </div>
                  <hr></hr>
                <div className='col-lg-9'>
                <img className="card-img-top" src="..." alt="image"/>
                  <div className="card-body">
                    <div>
                      <p>Publisher</p>
                      <p>2024 January 05</p>
                    </div>
                    <h5 className="card-title">Economy crisis go up</h5>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                     typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                      desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <a href="" className="btn btn-light">Readmore ..</a>
                  </div>
                </div>   
            </div>
        </div>
    </div>
</div>
  )
}

export default Feeds