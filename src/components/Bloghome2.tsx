import React from "react";

export default function Bloghome2() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การพัฒนาคุณภาพการบริหารจัดการภาครัฐ 4.0
              {/* <small>Subheading</small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Blog Home 2</li>
            </ol>
          </div>
          <div className="blog-entries">
            {/* Blog Post */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#">
                      <img
                        className="img-fluid rounded"
                        src="images/blog-img-01.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <h2 className="card-title">
                      การพัฒนาคุณภาพการบริหารจัดการภาครัฐ 4.0
                    </h2>
                    <p className="card-text">
                      การพัฒนาคุณภาพการบริหารจัดการภาครัฐในยุคใหม่
                      จะต้องนำเทคโนโลยีดิจิทัลและเทคโนโลยีปัญญาประดิษฐื์มาใช้ในการบริหารจัดการองค์การ
                      เพื่อการให้บริการแก่ประชาชน
                    </p>
                    <a
                      href="assets/PMQA1.pdf "
                      target="blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      ศึกษารายละเอียดเพิ่มเติม
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
                โพสต์เมื่อวันที่8 มกราคม 2568 โดย
                <a href="#">อาภาศิริ</a>
              </div>
            </div>
            {/* Blog Post */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#">
                      <img
                        className="img-fluid rounded"
                        src="images/blog-img-02.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <h2 className="card-title">ปรัชญาการคิดเชิงออกแบบ UX/UI</h2>
                    <p className="card-text">
                      เพื่อการเปลี่ยนแปลงและการพัฒนาองค์การในภาครัฐ
                    </p>
                    <a
                      href="assets/PMQA 4.0-25-32.pdf.pdf"
                      target="blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      ศึกษารายละเอียดเพิ่มเติม
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
                โพสต์วันที่ 8 มกราคม 2568 โดย
                <a href="#">อาภาศิริ</a>
              </div>
            </div>
            {/* Blog Post */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#">
                      <img
                        className="img-fluid rounded"
                        src="images/blog-img-03.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <h2 className="card-title">ปรัชญาการคิดเชิงวิพากษ์</h2>
                    <p className="card-text">
                      เพื่อการเปลี่ยนแปลงและการพัฒนาองค์การในภาครัฐ
                    </p>
                    <a
                      href="assets/PMQA3.pdf"
                      target="blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      ศึกษารายละเอียดเพิ่มเติม
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
                โพสต์วันที่ 8 มกราคม 2568 โดย
                <a href="#">อาภาศิริ</a>
              </div>
            </div>
            {/* Blog Post */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#">
                      <img
                        className="img-fluid rounded"
                        src="images/blog-img-04.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <h2 className="card-title">ลักษณะสำคัญขององค์การ</h2>
                    <p className="card-text">
                      PMQA 4.0 - Organizational Profile
                    </p>
                    <a href="assets/PMQA4.pdf" className="btn btn-primary">
                      ศึกษารายละเอียดเพิ่มเติม
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
                โพสต์เมื่อวันที่8 มกราคม 2568 โดย
                <a href="#">อาภาศิริ</a>
              </div>
            </div>
            {/* Blog Post */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#">
                      <img
                        className="img-fluid rounded"
                        src="images/blog-img-04.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <h2 className="card-title">Digital Process Redesign</h2>
                    <p className="card-text">
                      ความสามารถในการนำเทคโนโลยีดิจิทัลมาใช้ในกระบวนการทำงาน
                    </p>
                    <a href="assets/PMQA5.pdf" className="btn btn-primary">
                      ศึกษารายละเอียดเพิ่มเติม
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
                โพสต์เมื่อวันที่8 มกราคม 2568 โดย
                <a href="#">อาภาศิริ</a>
              </div>
            </div>
            {/* Blog Post */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#">
                      <img
                        className="img-fluid rounded"
                        src="images/blog-img-04.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <h2 className="card-title">Post Title</h2>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis aliquid atque, nulla? Quos cum ex quis soluta,
                      a laboriosam. Dicta expedita corporis animi vero voluptate
                      voluptatibus possimus, veniam magni quis!
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
                Posted on January 1, 2017 by
                <a href="#">Start Bootstrap</a>
              </div>
            </div>
          </div>
          <div className="pagination_bar_arrow">
            {/* Pagination */}
            <ul className="pagination justify-content-center mb-4">
              <li className="page-item">
                <a className="page-link" href="#">
                  ← Older
                </a>
              </li>
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Newer →
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
