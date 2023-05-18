import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from 'react'
import Image from 'next/image'
import logo from "../../public/mogos-logo.png"
import hero from "../../public/image services.jpeg";
import second from "../../public/side-image.jpg"
import Link from "next/link";
export default function Home() {
  return (
    <Fragment>
      <header className='header'>
        <div className='info-bar'></div>
        <div className='bar-logo'>
          <nav className='bar-nav'>
            <Image className='logo' src={logo} width={100} height={100} alt='logo' />
          </nav>
        </div>
      </header>
      <main>
        <section>
          <div className='hero-image'>
            <Image className='hero' src={hero} width={1400} alt='hero image' height={525} />
          </div>
        </section>
        <section>
          <div className="container">
            <div className="content">
              <div className="header-title">
                <h1 className="text-center">
                  OPEN GLOBE SOLUTIONS
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className='descrition'>
          <div className='container'>
            <div className='two-column'>
              <div className='left-side'>
                <Image src={second} width={300} height={300} alt="side images" />
              </div>
              <div className='right-side'>
                <div className="content">
                  <h3 className="text-center">We Process</h3>
                  <div className="all-text">
                    <p>
                      If you&apos;re looking for professional and reliable support
                      with your immigration application, we are the team to trust.
                      Our experienced specialists have helped countless
                      individuals and families successfully navigate the complex
                      immigration process.
                    </p>
                    <p>
                      When you work with us, you can expect personalized
                      attention and customized solutions tailored to your
                      unique needs and circumstances. We understand that the
                      immigration process can be overwhelming and confusing,
                      which is why we are committed to providing clear,
                      straightforward guidance every step of the way.
                    </p>
                    <p>
                      With our proven track record of success and commitment to excellence,
                      you can trust that your immigration application is in good hands. Don&apos;t
                      hesitate to give us a call to schedule a consultation and learn more
                      about how we can help you achieve your immigration goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="column-tree">
          <div className="container">
            <div className="content">
              <div className="three-column">
                <div className="items">
                  <h3 className="text-center">Our Services</h3>
                  <ul className="text-center list-unstyled p-3">
                    <li>
                      <p>
                        We offer a wide range of immigration services,
                        including Green Card applications, citizenship
                        applications, family petitions,
                        visa applications, asylum applications, and more.
                      </p>
                    </li>
                    <li>
                      <p>
                        We are currently expanding our services
                        to include Group 5 applications.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="items">
                  <h3 className="text-center">About Us</h3>
                  <ul className="text-center list-unstyled p-3">
                    <li>
                      <p>
                        We provide professional
                        and reliable support for immigration applications.
                      </p>
                    </li>
                    <li>
                      <p>
                        Our team consists of experienced specialists.
                      </p>
                    </li>
                    <li>
                      <p>
                        We believe that everyone deserves a chance to pursue their dreams and build a better
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="items">
                  <h3 className="text-center">Contact Us</h3>
                  <ul className="text-center list-unstyled p-3">
                    <li>
                      <p>
                        To learn more about how we can help you with your immigration application, please give us a call to schedule a consultation.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="column-tree">
          <div className="container">
            <div className="one-column">
              <div className="content">
                <h2 className="text-center text-uppercase">List of our services</h2>
              </div>
              <p>
                If you have any immigration-related cases, <span className="fw-bolder">including Green Card
                  Applications, Citizenship Applications, Family Petition Applications,
                  Visa Applications, or Asylum Applications</span>, please don&apos;t hesitate
                to contact us. We are committed to providing personalized solutions
                to meet your unique needs. You can reach us through the following
                contact information:
              </p>
              <ul className="text-left list-one list-unstyled p-1 text-capitalize ">
                <li>
                  Address :
                  <span className="fw-bolder">
                    <Link className="link-address" href={"https://www.google.com/maps/place/3825+S+George+Mason+Dr,+Falls+Church,+VA+22041/@38.840955,-77.1227765,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7b3ec30b2365f:0xfb0bf18f8dd4242c!8m2!3d38.8409508!4d-77.1202016!16s%2Fg%2F11bw3xhg0d"}>
                      3825 S GEORGE MASON DR, SUIT C</Link>
                  </span>
                </li>
                <li>
                  Tel : 571-351-3940
                </li>
                <li>
                  Email Address: <p>
                    OPENGLOBESOLUTIONS@gmail.com
                  </p>
                </li>

              </ul>
              <p>Stay tuned for our upcoming service, <span className="fw-bolder">Group 5 Applications</span>. Contact us today to start achieving your immigration goals.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer-content">
        <div className="container">
          <div className="footers">
            <h3>   OPEN GLOBE SOLUTIONS </h3>
            <ul className="text-left list-one list-unstyled text-capitalize m-0 ms-0">
              <li>
                Address :
                <span className="fw-bolder">
                  <Link className="link-address" href={"https://www.google.com/maps/place/3825+S+George+Mason+Dr,+Falls+Church,+VA+22041/@38.840955,-77.1227765,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7b3ec30b2365f:0xfb0bf18f8dd4242c!8m2!3d38.8409508!4d-77.1202016!16s%2Fg%2F11bw3xhg0d"}>
                    3825 S GEORGE MASON DR, SUIT C</Link>
                </span>
              </li>
              <li>
                Tel : 571-351-3940
              </li>
              <li>
                Email Address:
                <p>
                  OPENGLOBESOLUTIONS@gmail.com
                </p>
              </li>

            </ul>
          </div>
          <p className="text-center mb-0 pb-5 text-white">
            <small>
              &copy; {` ${new Date().getFullYear()} OPEN GLOBE SOLUTIONS, LLC. All rights reserved.`}
            </small>
          </p>
        </div>
      </footer>
    </Fragment>
  );
}
