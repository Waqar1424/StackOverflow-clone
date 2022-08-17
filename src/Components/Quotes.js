import React from 'react'
import QuotesIcon from '../images/quotes.PNG'

function Quotes() {
  return (
        <div className='row quotes-main-div justify-content-center'>
                
                <div className='col-12 col-sm-3 quotes-div' align="left">
                        <img src={QuotesIcon}/>
                        <p>Stack Overflow for Teams has been a resource for our entire company. Not only for developers to solve problems, it’s also enabled our sales field to answer technical questions that help them close deals.</p>
                                <div>
                                        <hr />
                                        <p className='author-designation'>Director of Product Management</p>
                                        <p className='author-company'>Microsoft</p>    
                                </div>
                </div>
                
                <div className='col-12 col-sm-3 quotes-div' align="left">
                        <img src={QuotesIcon}/>
                        <p>Engineers should help solve the hardest questions, the unknowns, where being familiar with how the product was built is essential. But we don’t want to keep answering solved problems over and over again. That’s where Stack Overflow for Teams really helps.</p>
                                <div>
                                        <hr />
                                        <p className='author-designation'>Director of Product Management</p>
                                        <p className='author-company'>Microsoft</p>    
                                </div>
                </div>

                <div className='col-12 col-sm-3 quotes-div' align="left">
                        <img src={QuotesIcon}/>
                        <p>As we started to use [Stack Overflow for Teams] and saw how nice it was to have a repository of information, we started to see it spread to other teams. Our customer support team started using it, our people success team started using it, next thing we knew, we had [Slack] integrations all over the place.</p>
                                <div>
                                        <hr />
                                        <p className='author-designation'>Director of Product Management</p>
                                        <p className='author-company'>Microsoft</p>    
                                </div>
                </div>

                <div className='col-12 col-sm-3 quotes-div' align="left">
                        <img src={QuotesIcon}/>
                        <p>What we love about Stack Overflow for Teams is that it’s a very dynamic tool…there’s just so many ways to use this as a liaison between different teams and different knowledge bases.</p>
                                <div>
                                        <hr />
                                        <p className='author-designation'>Director of Product Management</p>
                                        <p className='author-company'>Microsoft</p>    
                                </div>                
                </div>
        </div>   
  )
}

export default Quotes