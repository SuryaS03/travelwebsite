import "./FooterStyles.css"

const Footer =()=>{
    return(
<div className="footer">
    <div className="top">
        <div>
            <h1>
                Surya
            </h1>
            <p>
                Here are some that you can link pages!! ex. the contact logos are connected with links .
                
            </p>
        </div>
        <div>
            <a href="/https://www.facebook.com/">
                <i className="fa-brands fa-facebook-square">
                </i>
            </a>

            <a href="/https://www.instagram.com/">
                <i className="fa-brands fa-instagram-square">
                </i>
            </a>

            <a href="/https://www.behance.net/">
                <i className="fa-brands fa-behance-square">
                </i>
            </a>

            <a href="/https://twitter.com/">
                <i className="fa-brands fa-twitter-square">
                </i>
            </a>

            
        </div>
    </div>
    <div className="bottom">
        <div>
            <h4> Project</h4>
            <a href="/"> Changelog</a>
            <a href="/"> Status</a>
            <a href="/"> License</a>
            <a href="/"> All Versions</a>
            
            </div> 


            <div>
            <h4> Community</h4>
            <a href="/">GitHub</a>
            <a href="/"> Issues</a>
            <a href="/"> Project</a>
          
            
            
            </div> 
            

            <div>
            <h4> Help</h4>
            <a href="/"> Support</a>
            <a href="/"> Troubleshooting</a>
            <a href="/"> Contact Us</a>
            
            
            </div> 

            <div>
            <h4> Others</h4>
            <a href="/"> Terms of service</a>
            <a href="/"> Privacy policy</a>
            <a href="/"> License</a>
            
            
            </div> 
            
            </div>
</div>
    )
}
export default Footer;