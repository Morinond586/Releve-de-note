import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="copyright">
        &copy; Copy : {" "}
        <strong>
          <span>22-12-24</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="#">M.J.K</a>
      </div>
    </footer>
  );
}

export default Footer;
