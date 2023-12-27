import React from 'react'
import aboutimg from '../images/aboutimg.jpg'
const About = () => {
    return (
        <div>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src={aboutimg} alt='aboutimg' height={500} width={500} />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase fw-bold fs-1">About</h3>
                                            <h6>A library is a collection of books, and possibly other materials and media,
                                                that is accessible for use by its members and members of allied institutions.
                                                Libraries provide physical (hard copies) or digital (soft copies) materials,
                                                and may be a physical location, a virtual space, or both.
                                                A library's collection normally includes printed materials which may be borrowed,
                                                and usually also includes a reference section of publications which may only be utilized inside
                                                the premises. Resources such as commercial releases of films, television programmes,
                                                other video recordings, radio, music and audio recordings may be available in many formats.
                                                These include DVDs, Blu-rays, CDs, cassettes, or other applicable formats such as microform.
                                                They may also provide access to information,
                                                music or other content held on bibliographic databases.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
