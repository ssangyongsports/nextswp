import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
function Home() {
  return (
<>
  {/* This site was created in ssport */}
  {/* Last Published: Tue Jul 12 2022 02:33:50 GMT+0000 (Coordinated Universal Time) */}
  <meta charSet="utf-8" />
  <title>雙龍體育</title>
  <meta
    content="雙龍職籃 ... ​籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止 ..."
    name="description"
  />
  <meta content="雙龍體育" property="og:title" />
  <meta
    content="雙龍職籃 ... ​籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止 ..."
    property="og:description"
  />
  <meta
    content="https://img.ssangyongsports.eu.org/undraw_basketball_agx4.svg.webp"
    property="og:image"
  />
  <meta content="雙龍體育" property="twitter:title" />
  <meta
    content="雙龍職籃 ... ​籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止 ..."
    property="twitter:description"
  />
  <meta
    content="https://img.ssangyongsports.eu.org/undraw_basketball_agx4.svg.webp"
    property="twitter:image"
  />
  <meta property="og:type" content="website" />
  <meta content="summary_large_image" name="twitter:card" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <meta content="Webflow" name="generator" />
  <link
    href="https://uploads-ssl.webflow.com/62ccdc35fa8b20bd790e1f76/css/ssporttest.webflow.1314b844b.css"
    rel="stylesheet"
    type="text/css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d47"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d1a"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d39"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-50%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d39"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d47"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d1a"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d39"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d47"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d1a"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d39"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d47"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d1a"] {display:none;height:0px;opacity:0;-webkit-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}'
    }}
  />
  {/*[if lt IE 9]><![endif]*/}
  <link
    href="https://uploads-ssl.webflow.com/62ccdc35fa8b20bd790e1f76/62ccdcf4ce0fa3341567b2e5_%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A8%AD%E8%A8%88%20(1)%20(1).jpg"
    rel="shortcut icon"
    type="image/x-icon"
  />
  <link
    href="https://uploads-ssl.webflow.com/62ccdc35fa8b20bd790e1f76/62ccdcf75b92a3e26f4df0b7_%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A8%AD%E8%A8%88%20(1).jpg"
    rel="apple-touch-icon"
  />
  <div
    data-animation="default"
    className="header-wrapper---brix w-nav"
    data-easing2="ease"
    data-easing="ease"
    data-collapse="medium"
    style={{ opacity: 0 }}
    data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d08"
    role="banner"
    data-duration={400}
  >
    <div className="container-default w-container">
      <div className="header-content-wrapper---brix">
        <a href="/" className="header-logo-link---brix w-nav-brand">
          <img
            src="https://img.ssangyongsports.eu.org/logo2.png"
            width={182}
            alt=""
            className="header-logo---brix"
          />
        </a>
        <div className="header-right-side">
          <nav
            role="navigation"
            className="header-nav-menu-wrapper---brix w-nav-menu"
          >
            <ul role="list" className="header-nav-menu-list---brix">
              <li className="header-nav-list-item---brix">
                <a
                  href="/"
                  aria-current="page"
                  className="header-nav-link---brix w-nav-link w--current"
                >
                  首頁
                </a>
              </li>
              <li className="header-nav-list-item---brix" />
              <li className="header-nav-list-item---brix">
                <div
                  data-hover="true"
                  data-delay={0}
                  data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d15"
                  className="dropdown-wrapper---brix w-dropdown"
                >
                  <div className="dropdown-toggle---brix w-dropdown-toggle">
                    <div>體育</div>
                    <img
                      src="https://uploads-ssl.webflow.com/62ccd191dc4db47eff558608/62ccd191dc4db463c355862e_arrow-black-brix-templates.svg"
                      loading="eager"
                      alt=""
                      className="dropdown-arrow"
                    />
                  </div>
                  <nav
                    data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d1a"
                    className="dropdown-column-wrapper w-dropdown-list"
                  >
                    <div className="dropdown-pd">
                      <div className="w-layout-grid grid-1-column dropdown-link-column">
                        <a
                          href="https://www.sbatw.ml/"
                          target="_blank"
                          className="dropdown-link w-dropdown-link"
                        >
                          雙龍職籃
                        </a>
                        <a
                          href="https://slbtw.cf/"
                          className="dropdown-link w-dropdown-link"
                        >
                          雙龍職棒
                        </a>
                        <a href="/?1" className="dropdown-link w-dropdown-link">
                          雙龍足球
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </li>
              <li className="header-nav-list-item---brix">
                <div
                  data-hover="true"
                  data-delay={0}
                  data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d24"
                  className="dropdown-wrapper---brix w-dropdown"
                >
                  <div className="dropdown-toggle---brix w-dropdown-toggle">
                    <div>條款</div>
                    <img
                      src="https://uploads-ssl.webflow.com/62ccd191dc4db47eff558608/62ccd191dc4db463c355862e_arrow-black-brix-templates.svg"
                      loading="eager"
                      alt=""
                      className="dropdown-arrow"
                    />
                  </div>
                  <nav
                    style={{
                      display: "none",
                      height: 0,
                      opacity: 0,
                      WebkitTransform:
                        "translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0%, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                    }}
                    className="dropdown-column-wrapper w-dropdown-list"
                  >
                    <div className="dropdown-pd">
                      <div className="w-layout-grid grid-1-column dropdown-link-column">
                        <a
                          href="/p/privacypolicy_18.html"
                          className="dropdown-link w-dropdown-link"
                        >
                          隱私政策
                          <br />
                        </a>
                        <a
                          href="/p/blog-page_78.html"
                          className="dropdown-link w-dropdown-link"
                        >
                          服務條款
                          <br />
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </li>
              <li className="header-nav-list-item---brix">
                <div
                  data-hover="true"
                  data-delay={0}
                  data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d33"
                  className="dropdown-wrapper---brix w-dropdown"
                >
                  <div className="dropdown-toggle---brix w-dropdown-toggle">
                    <div>支援</div>
                    <img
                      src="https://uploads-ssl.webflow.com/62ccd191dc4db47eff558608/62ccd191dc4db463c355862e_arrow-black-brix-templates.svg"
                      loading="eager"
                      alt=""
                      className="dropdown-arrow"
                    />
                    <div className="container w-container" />
                  </div>
                  <nav
                    data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d39"
                    className="dropdown-column-wrapper w-dropdown-list"
                  >
                    <div className="dropdown-pd">
                      <div className="w-layout-grid grid-1-column dropdown-link-column">
                        <a
                          href="https://help.ssangyongsports.eu.org/"
                          target="_blank"
                          className="dropdown-link w-dropdown-link"
                        >
                          幫助中心
                        </a>
                        <a
                          href="https://community.ssangyongsports.eu.org/"
                          className="dropdown-link w-dropdown-link"
                        >
                          社區
                        </a>
                        <a
                          href="/p/blog-page_14.html"
                          className="dropdown-link w-dropdown-link"
                        >
                          聯絡
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
                <div
                  data-hover="true"
                  data-delay={0}
                  data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d42"
                  className="dropdown-wrapper---brix w-dropdown"
                >
                  <div className="dropdown-toggle---brix w-dropdown-toggle">
                    <div>其他</div>
                    <img
                      src="https://uploads-ssl.webflow.com/62ccd191dc4db47eff558608/62ccd191dc4db463c355862e_arrow-black-brix-templates.svg"
                      loading="eager"
                      alt=""
                      className="dropdown-arrow"
                    />
                  </div>
                  <nav
                    data-w-id="9f71bc46-0ae4-7b31-8b4f-0daa10348d47"
                    className="dropdown-column-wrapper w-dropdown-list"
                  >
                    <div className="dropdown-pd">
                      <div className="w-layout-grid grid-1-column dropdown-link-column">
                        <a
                          href="https://blog.ssangyongsports.eu.org/"
                          target="_blank"
                          className="dropdown-link w-dropdown-link"
                        >
                          blog
                        </a>
                        <a
                          href="https://wiki.ssangyongsports.eu.org/"
                          className="dropdown-link w-dropdown-link"
                        >
                          wiki
                        </a>
                        <a
                          href="https://status.ssangyongsports.eu.org/"
                          className="dropdown-link w-dropdown-link"
                        >
                          狀態
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </li>
              <li className="header-nav-list-item---brix show-in-tablet _100-tablet" />
            </ul>
          </nav>
          <div className="hamburger-menu-wrapper w-nav-button">
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                transform:
                  "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)"
              }}
              className="hamburger-menu-bar top"
            />
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                transform:
                  "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)"
              }}
              className="hamburger-menu-bar bottom"
            />
          </div>
          <a
            href="/tv.html"
            className="btn-primary small header-btn-hidde-on-mb w-button"
          >
            雙龍體育TV
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="section hero wf-section">
    <div
      data-w-id="03aae9fe-38c7-d623-202b-69d8de992df5"
      style={{
        WebkitTransform:
          "translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        MozTransform:
          "translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        msTransform:
          "translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        transform:
          "translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        opacity: 0
      }}
      className="container-default-2 w-container"
    >
      <div className="container-700px-center">
        <div className="text-center">
          <div className="text-uppercase subtitle">
            <div className="subtitle-wrapper---brix hero-section-v1---brix">
              <div className="subtitle-dash---brix-2" />
              <div className="subtitle---brix-2">
                SSANGYONG SPORT IS THE BEST
              </div>
            </div>
          </div>
          <h1 className="heading-2">
            <strong className="bold-text-9">我們的</strong>
            <span>
              <strong className="bold-text">使命</strong>
            </span>
            <strong className="bold-text-9">是將</strong>
            <span>
              <strong className="bold-text-3">雙</strong>
            </span>
            <strong className="bold-text-3">龍</strong>
            <span>
              <strong className="bold-text-3">體</strong>
              <strong className="bold-text-3">育</strong>
            </span>
            <strong className="bold-text-10">組成</strong>
            <span>
              <strong className="bold-text-6">最棒</strong>
            </span>
            <strong>的</strong>
            <span className="text-span-6">
              <strong className="bold-text-7">體育</strong>
            </span>
            <span>
              <strong>組織</strong>
            </span>
          </h1>
        </div>
      </div>
      <img
        src="https://uploads-ssl.webflow.com/62ccdc35fa8b20bd790e1f76/62ccdc58fa8b20b2ed0e222b_undraw_basketball_agx4.svg"
        loading="lazy"
        width={363}
        alt=""
        className="image-3"
      />
    </div>
    <img
      src="https://uploads-ssl.webflow.com/62ccdc35fa8b20bd790e1f76/62ccdc58fa8b209f5b0e222a_Blob.svg"
      alt=""
      className="blob-hero"
    />
  </div>
  <div className="home-benefits_component">
    <div className="wf-section" />
    <div className="home-benefits_wrapper margin-top">
      <div
        id="w-node-_81eff2c6-e246-c2e5-a590-53ad215309eb-f20e1f77"
        data-w-id="81eff2c6-e246-c2e5-a590-53ad215309eb"
        style={{
          WebkitTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MozTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          msTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          transform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          opacity: 0
        }}
        className="home-benefits_product-images"
      >
        <img
          src="https://uploads-ssl.webflow.com/62cb8215c50496b5c1c78d9d/62cb8242aeebe95b16676acc_three-lines.svg"
          loading="lazy"
          width={48}
          alt=""
          className="decoration-benefits_lines-on-right"
        />
        <img
          src="https://uploads-ssl.webflow.com/62cb8215c50496b5c1c78d9d/62cb8242aeebe93ac9676acb_decorative-spring.svg"
          loading="lazy"
          width="37.5"
          alt=""
          className="decoration-benefits_squiggle"
        />
        <img
          src="https://uploads-ssl.webflow.com/62ccdc35fa8b20bd790e1f76/62ccdc58fa8b20b2ed0e222b_undraw_basketball_agx4.svg"
          loading="lazy"
          height={200}
          width={543}
          alt=""
          className="decoration-benefits-blue-box"
        />
      </div>
      <div
        id="w-node-_81eff2c6-e246-c2e5-a590-53ad215309ef-f20e1f77"
        className="home-benefits_content"
      >
        <div
          data-w-id="81eff2c6-e246-c2e5-a590-53ad215309f0"
          style={{
            WebkitTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="margin-bottom margin-small"
        >
          <h2>​雙龍職籃</h2>
        </div>
        <p
          data-w-id="81eff2c6-e246-c2e5-a590-53ad215309f3"
          style={{
            WebkitTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
        >
          <strong>
            籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止對方獲得控球權或得分。籃球是世界上最多人觀看
          </strong>
        </p>
      </div>
    </div>
    <div className="home-benefits_wrapper margin-top">
      <div
        id="w-node-_81eff2c6-e246-c2e5-a590-53ad215309f7-f20e1f77"
        data-w-id="81eff2c6-e246-c2e5-a590-53ad215309f7"
        style={{
          WebkitTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MozTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          msTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          transform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          opacity: 0
        }}
        className="home-benefits_product-images"
      >
        <img
          src="https://uploads-ssl.webflow.com/62cb8215c50496b5c1c78d9d/62cb8242aeebe95b16676acc_three-lines.svg"
          loading="lazy"
          width={48}
          alt=""
          className="decoration-benefits_lines-on-right"
        />
        <img
          src="https://uploads-ssl.webflow.com/62cb8215c50496b5c1c78d9d/62cb8242aeebe93ac9676acb_decorative-spring.svg"
          loading="lazy"
          width="37.5"
          alt=""
          className="decoration-benefits_squiggle"
        />
        <img
          src="https://uploads-ssl.webflow.com/62cb8215c50496b5c1c78d9d/62cb82b0aeebe91706677479_undraw_home_run_oerh.svg"
          loading="lazy"
          height={200}
          width={543}
          alt=""
          className="decoration-benefits-blue-box"
        />
      </div>
      <div
        id="w-node-_81eff2c6-e246-c2e5-a590-53ad215309fb-f20e1f77"
        className="home-benefits_content"
      >
        <div
          data-w-id="81eff2c6-e246-c2e5-a590-53ad215309fc"
          style={{
            WebkitTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="margin-bottom margin-small"
        >
          <h2>​雙龍職棒</h2>
        </div>
        <p
          data-w-id="81eff2c6-e246-c2e5-a590-53ad215309ff"
          style={{
            WebkitTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
        >
          <strong>
            棒球，（英語：Baseball、日韓稱為野球），為一種團體球類運動，由人數最少為9人的两支队伍在一個扇形的球場进行攻擊與守備。棒球球員分為攻、
          </strong>
        </p>
      </div>
    </div>
  </div>
  <div className="home-benefits_wrapper margin-top">
    <div
      id="w-node-_4f3cd9f7-07e4-b049-0f6d-d6f4982c712f-f20e1f77"
      data-w-id="4f3cd9f7-07e4-b049-0f6d-d6f4982c712f"
      style={{
        WebkitTransform:
          "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        MozTransform:
          "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        msTransform:
          "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        transform:
          "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        opacity: 0
      }}
      className="home-benefits_product-images"
    >
      <img
        src="https://uploads-ssl.webflow.com/62cb8215c50496b5c1c78d9d/62cb8242aeebe95b16676acc_three-lines.svg"
        loading="lazy"
        width={48}
        alt=""
        className="decoration-benefits_lines-on-right"
      />
      <img
        src="https://uploads-ssl.webflow.com/62cb8215c50496b5c1c78d9d/62cb8242aeebe93ac9676acb_decorative-spring.svg"
        loading="lazy"
        width="37.5"
        alt=""
        className="decoration-benefits_squiggle"
      />
      <img
        src="https://uploads-ssl.webflow.com/62cb8215c50496b5c1c78d9d/62cb833761280918cadeb1ed_wiki.svg"
        loading="lazy"
        height={200}
        width={543}
        alt=""
        className="decoration-benefits-blue-box"
      />
    </div>
    <div
      id="w-node-_4f3cd9f7-07e4-b049-0f6d-d6f4982c7133-f20e1f77"
      className="home-benefits_content"
    >
      <div
        data-w-id="4f3cd9f7-07e4-b049-0f6d-d6f4982c7134"
        style={{
          WebkitTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MozTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          msTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          transform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          opacity: 0
        }}
        className="margin-bottom margin-small"
      >
        <h2>雙龍體育wiki</h2>
      </div>
      <p
        data-w-id="4f3cd9f7-07e4-b049-0f6d-d6f4982c7137"
        style={{
          WebkitTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MozTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          msTransform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          transform:
            "translate3d(0, 70px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          opacity: 0
        }}
      >
        <strong>
          是一種可通過瀏覽器存取並由使用者協同編輯其內容的網站。沃德·坎寧安於1995年開發了最初的wiki。
        </strong>
      </p>
    </div>
  </div>
  <div className="wf-section" />
  <div className="container-default-3 w-container">
    <div className="footer-top">
      <div className="w-layout-grid grid-footer-v1---5-column">
        <div id="w-node-c6c79779-10de-7c33-7615-d2332f5e15f0-f20e1f77">
          <a href="/" className="footer-logo-wrapper w-inline-block">
            <img
              src="https://img.ssangyongsports.eu.org/logo2.png"
              width={206}
              alt=""
              className="footer-logo---brix"
            />
          </a>
          <p className="mg-bottom-40px">
            <strong>
              雙龍體育
              雙龍體育組織創立於2017由Peter,Steven共同創立，現有雙龍職籃，職棒，足球等
            </strong>
            <strong>
              <br />
            </strong>
          </p>
        </div>
        <div>
          <div className="text-300 bold footer-title">體育</div>
          <ul role="list" className="footer-list-wrapper">
            <li className="footer-list-item" />
            <li className="footer-list-item">
              <a href="https://slbtw.cf/" className="footer-link">
                SLB
              </a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.sbatw.ml/" className="footer-link">
                SBA
              </a>
              <a href="#" className="footer-link">
                <br />
                <br /> JS
              </a>
            </li>
            <li className="footer-list-item" />
            <li className="footer-list-item" />
          </ul>
        </div>
        <div>
          <div className="text-300 bold footer-title">組織</div>
          <ul role="list" className="footer-list-wrapper">
            <li className="footer-list-item" />
            <li className="footer-list-item">
              <a
                href="https://blog.ssangyongsports.eu.org/"
                className="footer-link"
              >
                blog
              </a>
            </li>
            <li className="footer-list-item">
              <a
                href="https://status.ssangyongsports.eu.org/"
                className="footer-link"
              >
                狀態
              </a>
            </li>
            <li className="footer-list-item" />
          </ul>
        </div>
        <div>
          <div>
            <div className="text-300 bold footer-title">體育</div>
            <ul role="list" className="footer-list-wrapper">
              <li className="footer-list-item">
                <a
                  href="https://help.ssangyongsports.eu.org/"
                  className="footer-link"
                >
                  幫助
                </a>
              </li>
              <li className="footer-list-item">
                <a
                  href="https://community.ssangyongsports.eu.org/"
                  className="footer-link"
                >
                  社區
                </a>
                <a href="/p/blog-page_14.html" className="footer-link">
                  <br />
                  <br /> 聯繫
                </a>
              </li>
              <li className="footer-list-item" />
              <li className="footer-list-item" />
            </ul>
          </div>
        </div>
        <div>
          <div className="text-300 bold footer-title">聯絡我們</div>
          <ul role="list" className="footer-list-wrapper">
            <li className="footer-list-item">
              <a
                href="mailto:support@ssport.eu.org"
                className="link-wrapper color-grey w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/62ccdc35fa8b20bd790e1f76/62ccdc7a08cab0e2f102b08f_placeholder-icon-contact-mail.svg"
                  loading="eager"
                  alt=""
                  className="icon-left---brix"
                />
                <div className="link-text">support@ssport.eu.org</div>
              </a>
            </li>
            <li className="footer-list-item">
              <a
                href="tel0979500472"
                className="link-wrapper color-grey w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/62ccdc35fa8b20bd790e1f76/62ccdc7a08cab0325902b090_placeholder-icon-contact-phone.svg"
                  loading="eager"
                  alt=""
                  className="icon-left---brix"
                />
                <div className="link-text">0979500472</div>
              </a>
            </li>
            <li className="footer-list-item" />
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="w-layout-grid grid-footer-v1---2-columns grid-center bottom">
        <div id="w-node-c6c79779-10de-7c33-7615-d2332f5e1637-f20e1f77">
          <p className="mg-bottom-0">
            Copyright © 2022 雙龍體育 All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
  {/*[if lte IE 9]><![endif]*/}
</>

    <Script src="js/jquery.min.js"></Script>
    <Script src="js/jquery-migrate-3.0.1.min.js"></Script>
		<Script src="js/popper.min.js"></Script>
		<Script src="js/bootstrap.min.js"></Script>
		<Script src="js/jquery.easing.1.3.js"></Script>
		<Script src="js/jquery.waypoints.min.js"></Script>
		<Script src="js/jquery.stellar.min.js"></Script>
		<Script src="js/owl.carousel.min.js"></Script>
		<Script src="js/jquery.magnific-popup.min.js"></Script>
		<Script src="js/jquery.animateNumber.min.js"></Script>
		<Script src="js/scrollax.min.js"></Script>
		<Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></Script>
		<Script src="js/google-map.js"></Script>
    <Script src="js/main.js"></Script>

  </>
  
 
    
  )
}

export default Home
