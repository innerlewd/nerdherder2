import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Stay Nerdy</h5>
            <p>
              Nerd is the Word
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Creators</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Lance Mok</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Seas Patton</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Seth Dousman</a>
              </li>
              </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="www.google.com"> NerdUp.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
