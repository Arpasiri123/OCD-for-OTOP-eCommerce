import Link from "next/link";
import React from "react";

export default function Portfoilo1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองค์การภาครัฐ
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
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                <Link
                    href={
                      "https://www.salika.co/2024/05/25/cloud-using-for-digital-goverment/"
                    }
                  >
                    ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                  กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                  </Link>
                  
                </p>
                <p>
                  “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-1-66.pdf"
                  target=" blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผลต้องประกอบด้วยกิจกรรมหลัก
                </h3>
                <p>
                  <Link
                    href={
                      "https://th.hrnote.asia/orgdevelopment/what-is-pdca-210610/"
                    }
                  >
                    PDCA : ความหมาย ประโยชน์ และตัวอย่างใช้ 4
                    ขั้นตอนเพื่อพัฒนาองค์กรอย่างต่อเนื่อง
                  </Link>
                </p>
                <p>
                  เพราะปัญหาเป็นสิ่งที่หลีกเลี่ยงไม่ได้
                  แต่เราสามารถเรียนรู้ที่จะแก้ปัญหานั้นได้
                  ซึ่งทุกวันนี้มีเครื่องมือแก้ไขปัญหาและพัฒนาองค์กรอยู่มากมายให้เลือกสรร
                  ขึ้นอยู่ว่าเครื่องมือใดเหมาะกับองค์กรนั้น ๆ มากกว่า ที่ผ่านมา
                  HREX เคยแนะนำสารพัดเครื่องมือด้าน HR หลายอย่าง เช่น POCCC,
                  POSDC, POLC ฯลฯ
                  มาครั้งนี้เราจะพูดถึงอีกหนึ่งกระบวนการที่ให้ความสำคัญมากกว่าแค่การวางแผน
                  แต่เน้นไปถึงการลงมือทำ ตรวจสอบ และปรับปรุงพัฒนาอย่างเป็นระบบ
                  เรียกว่า วงจรบริหารงานคุณภาพ PDCA
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-67-71.pdf"
                  target=" blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href={
                      "https://www.beryl8.com/th/newsroom/insights/284/8-%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%9E"
                    }
                  >
                    8 องค์ประกอบของกระบวนการจัดการการเปลี่ยนแปลงที่มีประสิทธิภาพ
                  </Link>
                </p>
                <p>
                  ในบทความนี้คุณจะได้รับข้อมูลเชิงลึกเกี่ยวกับกระบวนการและหลักการในการจัดการการเปลี่ยนแปลง
                  ที่ได้รวมองค์ประกอบที่สำคัญต่อการส่งเสริมในผลลัพธ์ของการจัดการการเปลี่ยนแปลงให้ประสบความสำเร็จมาไว้ที่เดียว
                  พบกับ 8
                  ขั้นตอนสำคัญสำหรับกระบวนการจัดการการเปลี่ยนแปลงที่มีประสิทธิภาพ,
                  ความท้าทายที่พบบ่อยของการจัดการการเปลี่ยนแปลง
                  เพื่อก้าวล้ำไปข้างหน้าและ
                  เครื่องมือสนับสนุนที่จำเป็นในการใช้กระบวนการจัดการการเปลี่ยนแปลง
                  กระบวนการจัดการการเปลี่ยนแปลงควรมีขั้นตอนต่อไปนี้ อันดับแรก
                  คือ ระบุโอกาสทางธุรกิจในการปรับปรุง
                  และขออนุมัติจากผู้ถือผลประโยขน์ร่วม
                  จากนั้นวางแผนและประเมินกระบวนการของคุณ
                  แจ้งให้ทราบถึงรายละเอียดการเปลี่ยนแปลงต่างๆ ติดตามความคืบหน้า
                  และประเมินความเสี่ยงต่อไป
                  หลายองค์กรทั้งหมดต้องประสบกับการเปลี่ยนแปลงอย่างต่อเนื่อง
                  ไม่ว่าจะเกิดจากการนำเทคโนโลยีใหม่ไปใช้งาน การอัปเดตกระบวนการ
                  การเริ่มความยินยอมเเละให้ความร่วมมือ การปรับโครงสร้างองค์กร
                  หรือการปรับปรุงการบริการลูกค้า
                  สิ่งนี้เหล่านี้ไม่จำเป็นต้องเป็นเเง่ลบเสมอไป
                  อันที่จริงการเปลี่ยนแปลงมักจำเป็นสำหรับการเติบโตและความสามารถในการทำผลกำไร
                  กระบวนการจัดการการเปลี่ยนแปลงอย่างสม่ำเสมอต่อเนื่องจะช่วยลดผลกระทบด้านลบของการเปลี่ยนแปลงต่อองค์กรและกับพนักงานของคุณได้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-72-75.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href={
                      "https://www.adpt.news/2017/09/13/7-factors-affecting-major-changes-org/"
                    }
                  >
                    7
                    ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญ่จากความคิดเห็นของผู้บริหาร
                    2000 คน
                  </Link>
                </p>
                <p>
                  ในการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า
                  2,000 ราย โดย McKinsey ในปี 2014
                  ตอนหนึ่งของรายงานได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งสำคัญที่ช่วยให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
                  ซึ่งมีด้วยกันอยู่ 7 ข้อ ที่สรุปมาให้อ่านกันแล้ววันนี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-76-78.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง</h3>

                <p>
                  <Link
                    href={
                      "https://www.nectec.or.th/news/news-pr-news/smc-openhouse2024.html"
                    }
                    target="blank"
                  >
                    เปิดบ้าน SMC 2024! เผยผลสำเร็จ 1 ปี
                    ยกระดับโรงงานด้วยเทคโนโลยี ลดต้นทุน-พลังงาน
                    เพิ่มประสิทธิภาพการผลิต พร้อมเดินหน้าภารกิจปี 68
                    หนุนใช้ดิจิทัลปั้นอุตสาหกรรม 4.0 อย่างยั่งยืน
                  </Link>
                </p>
                <p>
                  17 ธันวาคม 2567 ณ สำนักงานใหญ่ EECi จังหวัดระยอง :
                  ศูนย์นวัตกรรมการผลิตยั่งยืน หรือ SMC (Sustainable
                  Manufacturing Center)
                  ภายใต้เมืองนวัตกรรมระบบอัตโนมัติหุ่นยนต์และอิเล็กทรอนิกส์อัจฉริยะ
                  (ARIPOLIS) ในเขตนวัตกรรมระเบียงเศรษฐกิจพิเศษภาคตะวันออก
                  (Eastern Economic Corridor of Innovation: EECi)
                  หน่วยงานภายใต้สังกัดสำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ
                  (สวทช.) กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.)
                  ร่วมกับ พันธมิตรภาคอุตสาหกรรม
                  จัดกิจกรรมเปิดบ้านศูนย์นวัตกรรมการผลิตยั่งยืน (SMC Open House
                  2024) ภายใต้แนวคิด “เทคโนโลยีดิจิทัล
                  เปลี่ยนอุตสาหกรรมสู่อนาคตที่ยั่งยืน (Sustainable Digital
                  Transformation)”
                  พร้อมรายงานผลความก้าวหน้าการดำเนินงานที่ผ่านมา
                  แผนงานที่จะเกิดขึ้นในปี 2568 ของ SMC
                  และรายงานผลการสำรวจความพร้อมอุตสาหกรรม 4.0 ของไทยปี 2567
                  นอกจากนี้ภายในงานยังมีสัมมนา นิทรรศการ จากสมาชิก พันธมิตร
                  และคณะนักวิจัยของ SMC ที่เจาะลึกเรื่องราวเทคโนโลยีดิจิทัล
                  โซลูชัน และนวัตกรรมเพื่อยกระดับโรงงานอุตสาหกรรมการนำ Digital
                  Transformation ขับเคลื่อนโรงงานอย่างมีประสิทธิภาพและยั่งยืน
                  รวมทั้งกิจกรรมเยี่ยมชม SMC Testbed และ Business Matching
                  ช่วยต่อยอดเครือข่ายธุรกิจ
                  และความร่วมมือเพื่อเพิ่มขีดความสามารถของโรงงานอีกด้วย
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-79-82.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href={
                      "https://www.bot.or.th/th/research-and-publications/articles-and-publications/bot-magazine/256205CoverStory.html"
                    }
                  >
                    การเตรียมความพร้อมองค์กรสู่โลกยุคใหม่
                    ผ่านวัฒนธรรมแบบล่างขึ้นบน
                  </Link>
                </p>
                <p>
                  บริบทของโลกในอนาคตที่เปลี่ยนแปลงอย่างรวดเร็วและหลากหลายมิติ
                  นำมาสู่ความท้าทายของทุกองค์กรที่ต้องปรับตัวให้เท่าทันตลอด 3
                  ปีที่ผ่านมา ธนาคารแห่งประเทศไทย (ธปท.)
                  ได้ส่งเสริมวัฒนธรรมองค์กรแบบล่างขึ้นบน (bottom-up culture)
                  เพื่อกระจายอำนาจให้พนักงานสามารถตัดสินใจได้มากขึ้น
                  และเปิดโอกาสให้นำเสนอความคิดที่จะนำไปสู่นวัตกรรม
                  โดยมีตัวอย่างโครงการที่ ธปท. ได้ผลักดันอย่างเป็นรูปธรรม ได้แก่
                  ระบบ Internal Job Market
                  ที่เปิดโอกาสให้พนักงานขอย้ายงานตามความสนใจ โครงการ Power Up
                  BOT เวทีที่พนักงานสามารถนำเสนอไอเดียใหม่ ๆ ได้อย่างไม่จำกัด
                  และระบบการเรียนรู้ที่พนักงานสามารถเลือกพัฒนาตามความจำเป็นและความสนใจของตนเอง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-83-85.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง (Resistance to Change)</h3>
                <p>
                  <Link
                    href={
                      "https://www.investerest.co/attitude/the-5-forces-impacting-the-world-order/"
                    }
                  >
                    ความหมายซ่อนอยู่ในทุกความเปลี่ยนแปลง แรงขับเคลื่อน 5
                    ประการที่ส่งผลต่อระเบียบโลก โดย เรย์ ดาลิโอ
                  </Link>
                </p>
                <p>
                  ท่ามกลางความเปลี่ยนแปลงวันละเล็กวันละน้อยของโลกที่เคลื่อนเปลี่ยนหมุนไป
                  ระเบียบโลก (world order) จากเดิมที่เคยเป็นอยู่ก็ค่อย ๆ
                  ได้รับผลกระทบ และหากมีแรงขับเคลื่อนที่มากเพียงพอ
                  โลกใบนี้ก็อาจเปลี่ยนขั้วไปสู่หน้าประวัติศาสตร์ใหม่ได้ในที่สุด
                  ตามความเห็นของมหาเศรษฐีนักลงทุน เรย์ ดาลิโอ
                  ที่แสดงไว้ในหนังสือเรื่อง “Principles for Dealing with the
                  Changing World Order”
                  แรงขับเคลื่อนที่จะส่งผลกระทบต่อระเบียบโลก มีทั้งหมด 5 ประการ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-86-89.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การเอาชนะการต่อต้านการเปลี่ยนแปลง (Overcoming Resistance to
                  Change)
                </h3>
                <p>
                  <Link
                    href={"https://www.humanica.com/th/resistance-to-change/"}
                  >
                    การต่อต้านการเปลี่ยนแปลงคืออะไร องค์กรควรรับมืออย่างไร
                  </Link>
                </p>
                <p>
                  “การเปลี่ยนแปลง”
                  ในองค์กรเป็นเรื่องที่หลีกเลี่ยงไม่ได้ในโลกธุรกิจที่เคลื่อนไหวอย่างรวดเร็วในปัจจุบัน
                  ไม่ว่าจะเป็นการปรับเปลี่ยนกลยุทธ์ การนำเทคโนโลยีใหม่มาใช้
                  หรือการพัฒนาทักษะของบุคลากร
                  ล้วนเป็นสิ่งจำเป็นต่อการอยู่รอดและการเติบโตขององค์กร
                  แต่ท่ามกลางความจำเป็นนี้
                  การต่อต้านการเปลี่ยนแปลงกลับเป็นอุปสรรคสำคัญที่เราพบเห็นได้บ่อยครั้ง
                  จากการศึกษาพฤติกรรมองค์กร เพจ A Cup of Culture
                  ในฐานะที่ปรึกษาด้านการสร้างวัฒนธรรมองค์กร พบว่ามี 3
                  สาเหตุหลักที่ทำให้ผู้คนต่อต้านการเปลี่ยนแปลง ดังนี้ ไม่รู้
                  (Not Knowing) -
                  เมื่อพนักงานขาดความเข้าใจถึงเหตุผลและประโยชน์ของการเปลี่ยนแปลง
                  ทำให้เกิดความไม่มั่นใจและความกังวล ทำไม่ได้ (Not Able) -
                  แม้จะเข้าใจความจำเป็น
                  แต่ขาดทักษะหรือเครื่องมือที่จำเป็นในการรับมือกับการเปลี่ยนแปลง
                  ทำให้รู้สึกท้อแท้และหมดกำลังใจ ไม่อยากทำ (Not Willing) -
                  เกิดจากทัศนคติเชิงลบ ความเคยชินกับวิธีการเดิม
                  หรือความกลัวที่จะสูญเสียความมั่นคงในหน้าที่การงาน
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-90-92.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง (Creating a Vision to
                  Change)
                </h3>
                <p>
                  <Link
                    href={
                      "https://brandinside.asia/true-new-vision-thailand-leading-telco-tech-company/"
                    }
                  >
                    TRUE มั่นใจ หลังควบรวมเสร็จ ปีนี้ สัญญาณจะดีขึ้น
                    เดินหน้าชูวิสัยทัศน์เป็นผู้นำด้านโทรคมนาคมฯ
                  </Link>
                </p>
                <p>
                  TRUE เดินหน้าชูวิสัยทัศน์เป็นผู้นำบริษัทโทรคมนาคม-เทคโนโลยี
                  โดยมนัสส์ มานะวุฒิเวช ประธานคณะผู้บริหาร และชารัด เมห์โรทรา
                  รองประธานคณะผู้บริหาร บริษัท ทรูคอร์ปอเรชั่น จำกัด (มหาชน)
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-93-98.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์ (Steps of Creating a Vision)</h3>
                <p>
                  <Link href={"https://workpointtoday.com/ai-750156-2/"}>
                    ใช้ AI อย่างมีกลยุทธ์!! “วิทยาลัยนวัตกรรม ม.ธรรมศาสตร์”
                    พาติดตาม “องค์กรและ CIO ติดอาวุธอย่างไรในวันที่ AI
                    เป็นทรัพยากรหลัก??”
                  </Link>
                </p>
                <p>
                  ในยุคที่เทคโนโลยีดิจิทัลมีบทบาทในการกำหนดทิศทางธุรกิจ
                  การนำเครื่องมือที่สำคัญอย่าง AI
                  มาปรับใช้กลายเป็นปัจจัยที่สำคัญต่อการเสริมสร้างความสามารถในการแข่งขันสำหรับองค์กรทั่วโลก
                  ด้วยศักยภาพที่ช่วยเพิ่มประสิทธิภาพในการดำเนินงาน
                  พลิกโฉมกระบวนการทำงานที่ซับซ้อนให้คล่องตัว
                  และเปิดประตูสู่การสร้างนวัตกรรมที่ไม่เคยมีมาก่อน โดยการนำ AI
                  มาประยุกต์ใช้ในองค์กรไม่ได้เป็นเพียงแค่การปรับตัวให้ทันยุคสมัยเท่านั้น
                  แต่ยังเป็นกลยุทธ์สำคัญในการสร้างความได้เปรียบทางการแข่งขัน
                  เพราะองค์กรที่สามารถผสมผสาน AI
                  เข้ากับกระบวนการทำงานได้อย่างเหมาะสม
                  จะมีโอกาสพัฒนาความสามารถในการตอบสนองความต้องการของลูกค้าได้รวดเร็วและตรงจุดมากขึ้น
                  อีกทั้งยังช่วยลดต้นทุน เพิ่มคุณภาพของสินค้าและบริการ
                  และเปิดโอกาสใหม่ ในการสร้างรายได้ที่ยั่งยืนในระยะยาว
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-99-102.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การค้นหาผู้มีส่วนได้ส่วนเสีย (Identifying Key Stakeholders)
                </h3>
                <p>
                  <Link
                    href={
                      "https://www.footboom1.com/th/news/football/2337108-nff-and-stakeholders-optimistic-about-super-eagles-afcon-prospects"
                    }
                  >
                    ความหวังของ NFF
                    และผู้มีส่วนได้ส่วนเสียต่อโอกาสของซุปเปอร์อีเกิ้ลส์ใน AFCON
                  </Link>
                </p>
                <p>
                  ผู้มีส่วนได้ส่วนเสียในวงการฟุตบอลของต่างแสดงความมั่นใจอย่างเต็มที่หลังจากการจับสลากแบ่งกลุ่มสำหรับการแข่งขันฟุตบอลชิงแชมป์แห่งชาติแอฟริกา
                  (AFCON) ปี 2025
                  ซึ่งหลายคนมองว่ากลุ่มของซุปเปอร์อีเกิ้ลส์นั้นน่าพอใจอย่างมาก
                  อย่างไรก็ตาม
                  มีเสียงเรียกร้องให้ระมัดระวังต่อความเกียจคร้านที่อาจเกิดขึ้นในโอกาสนี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-103-106.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การโน้มน้าวผู้มีส่วนได้ส่วนเสีย (Influencing Stakeholders){" "}
                </h3>
                <p>
                  <Link
                    href={
                      "https://www.nairienroo.com/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2-%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D%E0%B9%84/"
                    }
                  >
                    ผู้มีส่วนได้เสีย สำคัญไฉน ? ในการทำ CSR
                  </Link>
                </p>
                <p>
                  เนื่องด้วยการตัดสินใจ และการดำเนินงานขององค์กร ย่อมส่งผลกระทบ
                  (Impacts) ซึ่งประกอบไปด้วยผลประโยชน์ (Interests)
                  และนำไปสู่ความคาดหวัง (Expectations) ที่มีของผู้มีส่วนได้เสีย
                  และสังคม ดังนั้นการชี้บ่งผู้มีส่วนได้ส่วนเสีย (Stakeholder
                  identification) จึงมีความสำคัญอย่างยิ่ง
                  และควรพิจารณาให้ครบถ้วนตลอดทั้งห่วงโซ่คุณค่า (Value chain)
                  และห่วงโซ่อุปทาน (Supply chain)
                  เพราะมีทั้งผู้มีส่วนได้เสียที่มีผลประโยชน์ร่วมกันกับองค์กร
                  และผู้มีส่วนได้เสียที่มีผลประโยชน์ขัดแย้งกันกับองค์กร
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-107-110.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง (Change-Management
                  Structures)
                </h3>
                <p>
                  <Link
                    href={"https://teachme-biz.com/blog/change-management/"}
                  >
                    เปลี่ยนองค์กรสู่ความสำเร็จด้วย Change Management
                  </Link>
                </p>
                <p>
                  สถานการณ์การแพร่ระบาดของโควิด19 นโยบายต่าง ๆ
                  ของภาครัฐและการเปลี่ยนแปลงของพฤติกรรมผู้บริโภค ทำให้องค์กรต่าง
                  ๆ
                  ต้องวางแผนกลยุทธ์การบริหารจัดการองค์กรกันใหม่เพื่อตามการเปลี่ยนแปลงของสนามธุรกิจให้ทัน
                  แต่ทุกการเปลี่ยนแปลงย่อมส่งผลกระทบต่อองค์กรและต่อพนักงานทุกคน
                  และนี่เองเป็นที่มาของการบริหารการเปลี่ยนแปลง (Change
                  Management) ที่จะทำอย่างไรให้การเปลี่ยนแปลงเกิดผลดีที่สุด
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-111-114.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การประคับประคองการเปลี่ยนแปลง (Sustaining Momentum) </h3>
                <p>
                  <Link
                    href={
                      "https://policywatch.thaipbs.or.th/article/economy-123"
                    }
                  >
                    แก้หนี้ครัวเรือนอย่างยั่งยืน ต้องใช้นโยบายเพิ่มรายได้
                  </Link>
                </p>
                <p>
                  ญหาหนี้ครัวเรือนไทย” เป็นปัญหาเศรษฐกิจที่พูดถึงกันมาก
                  โดยแง่ของเศรษฐกิจมหภาค วัดจากสัดส่วนหนี้ครัวเรือนต่อจีดีพี
                  ดังนั้นในหลายประเทศจึงมีกระบวนการลดสัดส่วนหนี้ครัวเรือนไทยต่อผลิตภัณฑ์มวลรวมในประเทศ(GDP)
                  หรือ Debt deleveraging ซึ่งแต่ละประเทศมีวิธีการต่างกัน
                  และล่าสุดรัฐบาลพยายามหามาตรการลดหนี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-115-119.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ทำเกิน</h3>
                <p>
                  <Link
                    href={
                      "https://www.footboom1.com/th/news/football/2337108-nff-and-stakeholders-optimistic-about-super-eagles-afcon-prospects"
                    }
                  >
                    ความหวังของ NFF
                    และผู้มีส่วนได้ส่วนเสียต่อโอกาสของซุปเปอร์อีเกิ้ลส์ใน AFCON
                  </Link>
                </p>
                <p>
                  ผู้มีส่วนได้ส่วนเสียในวงการฟุตบอลของต่างแสดงความมั่นใจอย่างเต็มที่หลังจากการจับสลากแบ่งกลุ่มสำหรับการแข่งขันฟุตบอลชิงแชมป์แห่งชาติแอฟริกา
                  (AFCON) ปี 2025
                  ซึ่งหลายคนมองว่ากลุ่มของซุปเปอร์อีเกิ้ลส์นั้นน่าพอใจอย่างมาก
                  อย่างไรก็ตาม
                  มีเสียงเรียกร้องให้ระมัดระวังต่อความเกียจคร้านที่อาจเกิดขึ้นในโอกาสนี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-103-106.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ทำเกิน</h3>
                <p>
                  7
                  ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญ่จากความคิดเห็นของผู้บริหาร
                  2000 คน
                </p>
                <p>
                  ในการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า
                  2,000 ราย โดย McKinsey ในปี 2014
                  ตอนหนึ่งของรายงานได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งสำคัญที่ช่วยให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
                  ซึ่งมีด้วยกันอยู่ 7 ข้อ ที่สรุปมาให้อ่านกันแล้ววันนี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/Chang project-72-75.pdf"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
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
