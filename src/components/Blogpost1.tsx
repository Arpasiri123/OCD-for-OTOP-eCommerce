import React from "react";

export default function Blogpost1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              Post Title
              <small>Subheading</small>
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
          <div className="row">
            {/* Post Content Column */}
            <div className="col-lg-8">
              {/* Preview Image */}
              <img
                className="img-fluid rounded"
                src="images/blog-item-01.jpg"
                alt=""
              />
              <hr />
              {/* Date/Time */}
              <p>โพสเมื่อวันที่18 ธันวาคม 2567 โดยอาภาศิริ โพธิตะคุ</p>
              <hr />
              {/* Post Content */}
              <p className="lead">แนวคิดการเปลี่ยนแปลงและการพัฒนาองค์การ</p>
              <p>
                แนวคิดปรัชญากับการพัฒนาองค์การ ได้แก่
                <ul className="ml-4" style={{ listStyleType: "Lower-alpha" }}>
                  <li>
                    การกำหนดรูปแบบในการพัฒนาองค์การ การกำหนดตัวชี้วัดเป้าหมาย
                    และตัวชี้วัดให้ชัดเจน (KPI)
                  </li>

                  <li> มีแนวคิดเชิงบวกเกี่ยวกับองค์การ</li>
                  <li>มีที่ปรึกษาด้านการพัฒนาองค์การ</li>
                </ul>
              </p>
              <p className="lead">การพัฒนาองค์การคืออะไร</p>
              <p>
                การพัฒนาองค์การคือ
                <ul className="ml-4" style={{ listStyleType: "Upper-latin" }}>
                  <li>1.การกระทำที่มีการวางแผนล่วงหน้า</li>
                  <li> 2.นำไปปฎิบัติทั่วทั้งองค์การ</li>
                  <li>3.บริหารโดยผู้บริหารระดับสูง</li>
                  <li>
                    4.เพื่อเพิ่มประสิทธิผลและความสามารถขององคืการ
                    เป็นการเปลี่ยนแปลงกระบวนการขององค์การ
                  </li>
                  <li>
                    5.กิจกรรมพัฒนาองค์การที่วางแผนไว้(Planned
                    intervention)และสอดคล้องกับองค์ความรู้ด้านพฤติกรรมศาสตร์(Behavioral
                    Science)
                  </li>
                  <li>
                    6.กระบวนการเปลี่ยนแปลงวัฒนธรรมองค์การตามที่วางแผนไว้
                    ด้วยการประยุกต์ใช้เทคโนโลยี งานวิจัย และทฤษฎีBehavioral
                    Science
                  </li>
                  <li>
                    7.กิจกรรมพัฒนาองค์การที่วางแผนล่วงหน้า และอยู่บนพื้นฐานของ
                    Behavioral Sciences โดยมุ่งที่การปรับปรุงการทำงานขององค์การ
                    และการพัฒนาบุคคล
                  </li>
                  <li>
                    8.การเปลี่ยนแปลงวัฒนธรรม
                    เทคโนโลยีและการจัดการทั่วทั้งองค์การ
                    หรืออย่างน้อยมีหน่วยงานเกิดการเปลี่ยนแปลง
                  </li>
                  <li>
                    9.ระบบการวางแผนกลยุทธ์ด้าน Behavioral Science
                    สร้างความเข้าใจ ในพัฒนาและเปลี่ยนแปลงองค์การ
                    เพื่อปรับปรุงประสิทธิผล
                    และความสามารถขององค์การทั้งในปัจจุบันและอนาคต
                  </li>
                </ul>
              </p>
              <p className="lead">OD มีรากฐานมาจากอะไร</p>
              <ul className="ml-4" style={{ listStyleType: "Lower-roman" }}>
                OD ได้รับอิทธิพลองค์ความรู้มาจากศาสตร์ที่หลากหลาย ได้แก่
                <li>1.จิตวิทยาสังคม (Social Psychology)</li>
                <li>2.กระบวนการกลุ่ม (Group Dynamics)</li>
                <li>
                  3.จิตวิทยาอุตสาหกรรมและองค์การ (Industrial and Organization
                  Psychology)
                </li>
                <li>
                  4. ทฤษฎีการจัดการแบบมีส่วนร่วม (Participative Management
                  Theory)
                </li>
                <li>5. พฤติกรรมองค์การ (Organization Behavior)</li>
                <li>6.สังคมวิทยา (Sociology)</li>
                <li>7. จิตบำบัด (Psychotherapy)</li>
              </ul>
              <p className="lead"> ธรรมชาติของ OD คืออะไร</p>
              <p>
                ธรรมชาติของ OD (The Nature of OD)
                <ul className="ml-4">
                  <li>
                    1. OD เกี่ยวข้องศาสตร์หลายแขนง โดยมี Behavioral Sciences
                    เป็นแกนกลางหรือแกนหลัก
                  </li>
                  <li>2. เป้าหมายหลักของ OD คือปรับปรุงประสิทธิผลขององค์การ</li>
                  <li>
                    3. ขอบเขตของการทำ OD คือทำทั่วทั้งระบบ ได้แก่ ฝ่าย แผนก
                    กลุ่ม บุคคล ชุมชน ประเทศ ภูมิภาค
                  </li>
                  <li>
                    4. OD ตระหนักถึงความมุ่งมั่น สนับสนุน และการมีส่วนร่วม
                  </li>
                  <li>5. OD กลยุทธ์ระยะยาวที่องค์การได้วางแผนไว้</li>
                  <li>
                    6. OD ให้ความสำคัญกับระบบทั้งระบบ และองค์ประกอบของระบบ
                  </li>
                  <li>7. OD ต้องอาศัยความร่วมมือจากบุคคลต่างๆ</li>
                  8. OD คือกิจกรรมบนพื้นฐานทางวิชาการ ที่ออกแบบสำหรับการพัฒนา
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>ค่านิยม (Values)</li>
                    <li>ทัศนคติ (Attitudes)</li>
                    <li>บรรทัดฐาน (Norms)</li>
                    <li>วิธีการบริหารจัดการ (Management Practices)</li>
                  </ul>
                  <li>9.ผู้มีบทบาทสำคัญในการทำ OD</li>
                  <ul className="ml-4" style={{ listStyleType: "disc" }}>
                    <li>ทีมงาน/คณะกรรมการดำเนินโครงการ OD</li>
                    <li>ผู้จัดการฝ่ายต่างๆ (Line Manager)</li>
                    <li>ผู้อำนวยการความสะดวก (Facilitator)</li>
                    <li>อาจารย์ (Teacher)</li>
                    <li>ผู้ฝึกสอน (Coach)</li>
                  </ul>
                  <li>
                    10. OD ให้ความสำคัญกับการติดตามผลตามที่วางแผนไว้ (Planned
                    Follow-up)
                  </li>
                  <li>
                    11. OD เกี่ยวข้องกับการเปลี่ยนแปลง หรือปรับปรุงกระบวนการ
                    หรือโครงสร้างขององค์การ
                  </li>
                </ul>
              </p>
              <p className="lead"> ลักษณะสำคัญของ OD</p>
              <p>ลักษณะสำคัญของการพัฒนาองค์การ มีดังนี้</p>
              <p>
                1. OD เกี่ยวข้องกับการเปลี่ยน แปลงกลยุทธ์
                <ul className="ml-4">
                  <li>
                    โครงสร้างและ/หรือกระบวนการของระบบทั้งระบบ
                    มีความหมายครอบคลุมตั้งแต่องค์การ ฝ่ายหรือกลุ่มงาน
                  </li>
                </ul>
              </p>
              <p>
                2. OD เป็นการประยุกต์ใช้และถ่ายทอดความรู้และวิธีปฏิบัติด้าน
                Behavioral Science ให้กับสมาชิกขององค์การ
                <ul className="ml-4">
                  <li>
                    เช่น ภาวะผู้นำ กระบวนการกลุ่ม การออกแบบงาน กลยุทธ์
                    รูปแบบองค์การ ความสัมพันธ์ระหว่างประเทศ เป็นต้น
                  </li>
                </ul>
              </p>
              <p>3. OD เกี่ยวข้องกับการจัดการการเปลี่ยนแปลงตามที่วางแผนไว้</p>
              <p>
                4. OD
                เกี่ยวข้องกับการสร้างและส่งเสริมการเปลี่ยนแปลงให้ดำรงอยู่ต่อไป
              </p>
              <p>5. OD มุ่งปรับปรุงประสิทธิผลขององค์การ</p>
              <footer className="blockquote-footer">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
              <p>
                <p className="lead">
                  การพัฒนา OD จะต้องอยู่บนรากฐานของความรู้และค่านิยม ดังนี้
                </p>
              </p>
              <ul className="ml-4"></ul>
              1. ความเข้าใจในระบบสังคม (Understanding social systems)
              คือต้องเข้าใจในศาสตร์ที่เกี่ยวข้องกับการพัฒนาและเปลี่ยนแปลงองค์การ
              <p>
                <li>
                  จิตวิทยา จิตวิทยาสังคม สังคมวิทยา รัฐศาสตร์ เศรษฐศาสตร์ ปรัชญา
                  ศาสนา ฟิสิกส์และชีววิทยา เป็นต้น
                </li>
                2.เข้าใจในวิธีการและสาเหตุของการเปลี่ยนแปลง
                <ul className="ml-4"></ul>
                3.เข้าใจบทบาทบุคคลที่สาม (Third Party)
                ของที่ปรึกษาด้านการเปลี่ยนแปลง
                <li>
                  บุคคลที่ไม่มีส่วนได้ส่วนเสีย
                  เป็นที่ปรึกษาด้านการเปลี่ยนแปลงและการพัฒนาองค์การ
                </li>
                <ul className="ml-4"></ul>
                <p className="lead">ค่านิยมของ OD (OD Values)</p>
                <p>ลักษณะสำคัญของการพัฒนาองค์การ มีดังนี้</p>
                <li>
                  1. การส่งเสริมศักดิ์ศรีแห่งความเป็นมนุษย์ (State of Human
                  Dignity)
                </li>
                <li>
                  2. การยึดมั่นในคุณค่าของมนุษย์ (Humanistically Oriented )
                </li>
                <li>3. ความเท่าเทียม (Democracy)</li>
                <li>4. ความสุจริต (Honesty)</li>
                <li>5. การกระจายอำนาจ (Empowerment)</li>
                <li>6. ค้นหาปัญหาและเป็นวิทยาศาสตร์ (Inquiry and Sciences)</li>
                <li>7. มีจิตช่วยเหลือ (Being Helpful)</li>
                <ul className="ml-4"></ul>
                <p className="lead">สรุปค่านิยมของ OD ที่สำคัญ ได้แก่ </p>
                <li>
                  1. การให้ความเคารพและการมีส่วนร่วม (Respect and Inclusion)
                </li>
                <li>2. การให้ความร่วมมือ (Collaboration)</li>
                <li>3. ความจริงใจ (Authenticity)</li>
                <li>4. ความเข้าใจในตนเอง (Self-awareness)</li>
                <li>5. การกระจายอำนาจ (Empowerment)</li>
                <li>
                  6. ประชาธิปไตยและความเป็นธรรมในสังคม (Democracy and Social
                  Justice)
                </li>
                <ul className="ml-4"></ul>
                <p className="lead">
                  ข้อแตกต่างระหว่าง OD กับ Change Management (CM){" "}
                </p>
                <ul className="ml-4"></ul>
                <ul className="ml-4" style={{ listStyleType: "decimal" }}></ul>
                1. OD
                ทำให้องค์การตระหนักและสร้างการเรียนรู้ผ่านกระบวนการแก้ไขปัญหาหลัก
                <p>
                  -ส่วน CM
                  ประยุกต์วิธีการแก้ปัญหาอย่างมีเหตุผลในการทำให้เป้าหมายที่ต้องการบรรลุผล
                </p>
                2.OD มุ่งไปที่พลวัตของระบบในองค์การ
                ซึ่งเปิดพื้นที่ให้องค์การวิจัย
                สะท้อนและทบทวนรูปแบบของระบบที่ดำรงอยู่เวลานั้น
                <p>-ส่วน CM มุ่งไปที่ผลลัพธ์มากกว่า</p>
                3. OD
                ตั้งอยู่บนความร่วมมือระหว่างองค์การและที่ปรึกษาด้านพัฒนาองค์การในการกำหนดกระบวนการที่เกี่ยวข้อง
                <p>
                  -ส่วน CM
                  เน้นที่บทบาทของผู้เชี่ยวชาญหรือผู้ที่แก้ปัญหาได้อย่างเบ็ดเสร็จ
                </p>
                4. OD แก้ปัญหากระบวนการต่างๆ ที่ไม่ปรากฏชัดเจน เช่น
                การเปลี่ยนแปลงที่เกี่ยวข้องกับอำนาจ เชื้อชาติ
                เพศและสถานะทางสังคม และการอยู่ท่ามกลางแรงกดดันอื่นๆ ทางสังคม
                <p>
                  -ส่วน CM
                  จัดการกับการเปลี่ยนแปลงที่ปรากฏอย่างชัดเจนของสถานการณ์หนึ่งๆ{" "}
                </p>
                <ul className="ml-4"></ul>
                <p className="lead">
                  สรุปความแตกต่างระหว่าง OD และ Change Management (CM){" "}
                </p>
                1. OD
                <ul className="ml-4" style={{ listStyleType: "decimal" }}></ul>
                <p>-การเปลี่ยนแปลงเพื่อเพิ่มความสามารถของบุคลากร</p>
                <p>
                  -การเปลี่ยนแปลงตามที่วางแผนไว้ล่วงหน้า และยึดหลักการของ OD
                </p>
                <p>-การเปลี่ยนแปลงเพื่อเพิ่มมูลค่าทางเศรษฐกิจ</p>
                <p>-เป็นไปเพื่อผลทางการตลาด และไม่ได้ยึดหลักการของ OD</p>
                2. OD
                <ul className="ml-4" style={{ listStyleType: "decimal" }}></ul>
                <p>
                  -ส่งเสริมศักยภาพ ความมีส่วนร่วม และการพัฒนามนุษย์พร้อมๆ
                  กับเพิ่มผลประกอบการ และการสร้างการได้เปรียบเชิงแข่งขัน
                </p>
                <p>
                  -ถ่ายทอดความรู้
                  และทักษะเพื่อช่วยให้ระบบมีความสามารถในการจัดการการเปลี่ยนแปลงในอนาคต
                </p>
                <p>-มุ่งที่ต้นทุน คุณภาพและตารางการทำงาน</p>
                <p>-ไม่จำเป็นต้องมีการถ่ายทอดทักษะ</p>
                <p className="lead">พัฒนาการของ OD (The Revolution of OD)</p>
                <p>
                  1. มาจากรากฐานการฝึกอบรมเชิงปฏิบัติการ (Laboratory Training
                  Background หรือ T-group)
                </p>
                <p>2. มาจากรากฐาน Action Research และ Survey Feedback</p>
                <p>3. มาจากรากฐาน Normative Background</p>
                <li>
                  แนวคิดที่เชื่อว่ามีวิธีการที่ดีที่สุดเพียงวิธีการเดียว (One
                  Best Way) ในการบริหารองค์การ
                </li>
                <li>รูปแบบการจัดการแบบมีส่วนร่วม</li>
                <li>หลักการของตาข่าย (เครือข่าย)</li>
                <li>
                  แนวคิดที่เชื่อว่ามีวิธีการที่ดีที่สุดเพียงวิธีการเดียว (One
                  Best Way) ในการบริหารองค์การ
                </li>
                <p>
                  4. มาจากรากฐานผลิตภาพและคุณภาพชีวิตในการทำงาน (Productivity
                  และ Quality-of-Work-Life)
                </p>
                <li>
                  4.1
                  มุ่งพัฒนารูปแบบการทำงานที่ให้ความสำคัญกับความสอดคล้องระหว่างเทคโนโลยีกับมนุษย์
                </li>
                <li>4.2 เน้นการมีส่วนร่วมของพนักงาน </li>
                <li>4.3การจัดการทั่วทั้งองค์การ (Total Quality Management)</li>
                <li>-Total = ทุกคน ทุกระดับ กระทรวง กรม กอง หน่วย</li>
                <li>
                  -Quality = คุณภาพการให้บริการ ความพึงพอใจของผู้รับบริการ
                </li>
                <li>-Management = การบริหารองค์การ</li>
                <li>4.4คุณภาพชีวิตในการทำงาน (Quality of Work Life)</li>
                4.คุณภาพชีวิตในการทำงาน (Quality of Work Life)
                <p>5. มาจากรากฐาน Strategic Change</p>
                <p className="lead">
                  รูปแบบในการพัฒนาองค์การ: OD (Models of Planned Change)
                </p>
                <ul className="ml-4" style={{ listStyleType: "decimal" }}></ul>
                1.รูปแบบการเปลี่ยนแปลงของ Lewin (Lewin’s Change Model)
                <p>
                  -1. Unfreezing: การเตรียมพร้อมกับการเปลี่ยนแปลง
                  <li>
                    กระบวนการนำเสนอข้อมูลความแตกต่างระหว่างพฤติกรรมที่ต้องการให้สมาชิกขององค์การแสดงออกกับพฤติกรรมปรากฏในปัจจุบัน
                  </li>
                  <li>-เพื่อจูงใจให้สมาชิกเข้าร่วมกิจกรรมการเปลี่ยนแปลง</li>
                  <li>-การสร้างแรงจูงใจหรือความพร้อมในการเปลี่ยนแปลง</li>
                  <li>
                    -การทำให้ความไม่พึงพอใจต่อสถานะปัจจุบันปรากฏขึ้นชัดเจน
                  </li>
                  <li>-การค้นหาทางเลือกที่ดีกว่าหรือน่าพึงพอใจมากกว่า</li>
                  <li>-กระบวนการพัฒนาองค์การ</li>
                  <li>
                    -การทำให้องค์การมีความพร้อมสำหรับการเปลี่ยนแปลงไปสู่สถานะใหม่ที่ดีขึ้น
                  </li>
                  ทำให้สมาชิกในองค์การตระหนักว่าองค์การมีความจำเป็นต้องเปลี่ยนแปลง
                  มิฉะนั้น จะไม่สามารถสร้างผลลัพธ์ที่ดีขึ้น เช่น
                  <li>-ไม่สามารถมีผลประกอบการทางการเงินที่ดีขึ้น </li>
                  <li>-ไม่สามารถยกระดับคุณภาพชีวิตในการทำงานของพนักงาน</li>
                  <li>-ไม่สามารถดำเนินกิจการต่อไปได้</li>
                  <li>
                    -Disruptive Technology
                    เกิดการทำลายเพื่อให้เกิดสิ่งใหม่ที่ดีขึ้นหรือดีกว่าเดิม
                  </li>
                  2. Moving/ Change: การดำเนินการเปลี่ยนแปลง
                  การยกระดับพฤติกรรมขององค์การ ฝ่ายหรือบุคคลไปสู่ระดับใหม่
                  <li>
                    -การแทรกแซงระบบด้วยการเปลี่ยนโครงสร้างและกระบวนการขององค์การ
                    เพื่อหล่อหลอมพฤติกรรมและค่านิยมและทัศนคติใหม่
                  </li>
                  <li>
                    -ยึดมั่นในพฤติกรรมใหม่
                    เพื่อให้สถานะในอนาคตตามที่ต้องการเกิดขึ้น
                  </li>
                  <li>
                    -รับรู้ถึงความจำเป็นของการเปลี่ยนแปลง
                    ต้องทำให้ก้าวสู่สถานะใหม่ที่ดีกว่าเดิม
                  </li>
                  การจัดกิจกรรมพัฒนาองค์การที่สามารถเปลี่ยนแปลงองค์การให้ก้าวสู่สถานะใหม่ตามที่ต้องการ
                  เช่น
                  <li>-การเปลี่ยนแปลงโครงสร้างองค์การ</li>
                  <li>-การเปลี่ยนแปลงค่านิยมขององค์การ</li>
                  <li>-การพัฒนาศักยภาพของพนักงาน</li>
                  <li>-การเปลี่ยนแปลงระบบให้รางวัลขององค์การ</li>
                  3. Refreezing: การรักษาผลของการเปลี่ยนแปลง
                  เป็นขั้นตอนที่ทำให้สมาชิกในองค์การแสดงพฤติกรรมใหม่ที่สอดคล้องกับการเปลี่ยนแปลงองค์การด้วยกิจกรรมพัฒนาองค์การในขั้นตอน
                  Moving/Change และไม่หวนกลับไปแสดงพฤติกรรมเดิมอีก Refreezing
                  เป็นขั้นตอนที่ทำให้องค์การดำรงอยู่ในสถานะใหม่ที่มีความสมดุล
                  โดยกระทำผ่านกลไกสนับสนุน ที่ส่งเสริมสถานะใหม่ขององค์การ ด้าน
                  <li>-วัฒนธรรม</li>
                  <li>-บรรทัดฐาน</li>
                  <li>-นโยบาย</li>
                  <li>-โครงสร้างองค์การ</li>
                </p>
                Refreezing
                คือกระบวนการที่จะทำให้สถานะใหม่ตามที่ต้องการดำรงอยู่อย่างมั่นคง
                ยั่งยืน ระยะยาว และรักษาผลของการเปลี่ยนแปลงให้ดำรงอยู่ตลอดไป
                <p>2.รูปแบบ Action Research (Action Research Model)</p>
                Action Research (การวิจัยเชิงปฏิบัติการ)
                เป็นกระบวนการที่ดำเนินต่อเนื่องจากขั้นตอนแรกไปจนถึงขั้นตอนสุดท้าย
                แล้วย้อนกลับไปเริ่มต้นที่ขั้นตอนแรกใหม่และดำเนินไปตามวงจรเดิมตลอดเวลา
                <p>-วงจรของ Action Research มีลักษณะคล้ายกับวงจรคุณภาพ PDCA</p>
                <li>Planning: การวางแผน (กำหนดเป้าหมาย, กำหนดตัวชี้วัด)</li>
                <li> Do:ดำเนินการ (กระบวนการ, กิจกรรม, โครงการ)</li>
                <li>Check: ประเมินผล (กระบวนการ, กิจกรรม, โครงการ)</li>
                <li>Act: นำผลการประเมินไปพัฒนาปรับปรุง</li>
                <ul className="ml-4" style={{ listStyleType: "decimal" }}></ul>
                <p>Action Research มี 8 ขั้นตอน ดังนี้</p>
                <p>
                  <li>1. การรับรู้ปัญหา (Problem Identification)
                  เป็นขั้นตอนที่ผู้บริหารหรือผู้มีอำนาจและบทบาทสำคัญในองค์การตระหนักว่าองค์การมีปัญหาและต้องการให้ที่ปรึกษาด้านการพัฒนาองค์การช่วยแก้ปัญหาดังกล่าว
                  และต้องการให้ที่ปรึกษาด้านการพัฒนาองค์การช่วยแก้ปัญหาดังกล่าว</li>
                </p>
                <li>2. การปรึกษากับผู้เชี่ยวชาญด้านการพัฒนาองค์การ (Consultation with a Behavioral Sciences Export) </li>
                <li>3.การรวบรวมข้อมูลและการวิเคราะห์เบื้องต้น (Data Gathering and Preliminary Diagnosis)</li> 
                <li>4.การป้อนกลับข้อมูลและผลการวิเคราะห์ให้ตัวแทนองค์การ (Feedback to a Key Client or Group) </li>
                5. การวิเคราะห์ปัญหาร่วมกัน (Joint Diagnosis of the Problem) 
                6. การวางแผนปฏิบัติร่วมกัน (Joint Action Planning) 
                7. การดำเนินการตามแผนปฏิบัติการ (Action) 
                8.การรวบรวมข้อมูลหลังการดำเนินการ (Data Gathering after Action)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor
                quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
                quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                recusandae? Qui, necessitatibus, est!
              </p>
              <hr />
              <div className="blog-right-side">
                {/* Comments Form */}
                <div className="card my-4">
                  <h5 className="card-header">Leave a Comment:</h5>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Single Comment */}
              <div className="ml-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_01.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
              {/* Comment with nested comments */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_02.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_01.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_03.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Widgets Column */}
            <div className="col-md-4 blog-right-side">
              {/* Search Widget */}
              <div className="card mb-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              {/* Categories Widget */}
              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Widget */}
              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
