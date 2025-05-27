import { SERVICES } from '../../constants/services.ts'
import { LEGAL } from '../../constants/legal.ts'

export default {
  company: {
    name: "Elegant Space Designs",
    description: "Transforming businesses through professional design solutions."
  },
  components: {
    footer: {
      copyright: "© 2025 Elegant Space Designs. All rights reserved."
    },
    contactForm: {
      title: "Contact Form",
      description: "Fill out the form below to get in touch with our team. We'll respond to your inquiry within 24 hours."
    },
    cookieConsent: {
      title: "We use cookies",
      description: "This website uses cookies to enhance your experience. By continuing to use this site, you agree to our use of cookies.",
      acceptButton: "Accept",
      declineButton: "Decline"
    },
    header: {
      ctaButton: "Contact Us"
    },
    newsletter: {
      title: "Subscribe to Our Newsletter",
      placeholder: "Enter your email address",
      buttonText: "Subscribe",
      successMessage: "Thank you for subscribing!"
    },
    humanVerification: {
      title: "Human Verification",
      description: "Please confirm that you are a real person to continue.",
      buttonText: "I am a human"
    },
    service: [
      {
        title: "Professional Web Design",
        description: "Professional, responsive websites designed specifically for your business needs.",
        linkText: "Learn More"
      },
      {
        title: "Brand Identity",
        description: "Create a unique and memorable brand identity that resonates with your audience.",
        linkText: "Learn More"
      },
      {
        title: "UI/UX Design",
        description: "User-centered design solutions that enhance user experience and engagement.",
        linkText: "Learn More"
      },
      {
        title: "Print Design",
        description: "Professional print materials that effectively communicate your brand message.",
        linkText: "Learn More"
      },
      {
        title: "Motion Design",
        description: "Engaging motion graphics and animations that bring your brand to life.",
        linkText: "Learn More"
      }
    ],
    testimonials: {
      title: "What Our Clients Say",
      items: [
        {
          name: "James Wilson",
          position: "CEO, Digital Solutions AU",
          quote: "Elegant Space Designs transformed our brand identity with their exceptional design approach."
        },
        {
          name: "Sarah Thompson",
          position: "Marketing Director, Tech Innovations",
          quote: "Their UI/UX design expertise significantly improved our user engagement."
        },
        {
          name: "Michael Brown",
          position: "CTO, Enterprise Solutions",
          quote: "A team that truly understands modern design needs."
        }
      ],
      downloadButton: 'Download Testimonial'
    },
    navigation: {
      menu: 'Menu',
      errorMessage: 'An error occurred while submitting the form. Please try again.'
    }
  },
  homePage: {
    meta: {
      title: "Your Trusted Design Partner in Australia",
      description: "Professional design solutions tailored for Australian businesses. We transform your brand with innovative, responsive, and business-focused designs."
    },
    hero: {
      title: "Your Trusted Design Partner in Australia",
      description: "Professional design solutions tailored for Australian businesses. We transform your brand with innovative, responsive, and business-focused designs.",
      buttonText: "Contact Us",
      secondaryButtonText: "Our Services"
    },
    benefits: {
      title: "Why Choose Us?",
      items: [
        {
          title: "Design-Focused Approach",
          description: "We create designs that drive business growth and enhance your professional image."
        },
        {
          title: "Australian Market Expertise",
          description: "Deep understanding of the Australian business landscape and market requirements."
        },
        {
          title: "Innovative Solutions",
          description: "Cutting-edge design technologies combined with proven business strategies."
        }
      ]
    },
    services: {
      title: "Our Services",
      buttonText: "View All Services"
    },
    cta: {
      title: "Let's Transform Your Brand",
      description: "Ready to elevate your business with Elegant Space Designs? Contact us today to discuss your project.",
      buttonText: "Get in Touch"
    }
  },
  aboutPage: {
    meta: {
      title: "About Us",
      description: "Learn about our journey, mission, and the team behind Elegant Space Designs."
    },
    whoWeAre: {
      title: "Who We Are",
      description: "We are a team of passionate design experts dedicated to helping businesses succeed in the digital world."
    },
    mission: {
      title: "Our Mission",
      description: "Our mission is to empower businesses with innovative design solutions that drive growth and success."
    },
    vision: {
      title: "Our Vision",
      description: "To be the leading design partner for businesses, known for our expertise, innovation, and commitment to client success."
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Innovation",
          description: "Constantly pushing boundaries to deliver cutting-edge solutions"
        },
        {
          title: "Excellence",
          description: "Committed to delivering the highest quality in everything we do"
        },
        {
          title: "Integrity",
          description: "Building trust through honest and transparent relationships"
        },
        {
          title: "Collaboration",
          description: "Working together to achieve exceptional results"
        }
      ]
    },
    team: {
      title: "Our Team",
      description: "Meet the experts behind our success",
      members: [
        {
          name: "John Doe",
          position: "Creative Director & Founder",
          description: "With over 15 years of experience in design solutions",
          image: "/team/john-doe.jpg"
        },
        {
          name: "Jane Smith",
          position: "Art Director",
          description: "Award-winning designer with a passion for innovation",
          image: "/team/jane-smith.jpg"
        }
      ]
    },
    history: {
      title: "Our Journey",
      description: "From humble beginnings to industry leaders",
      timeline: [
        {
          year: "2015",
          title: "Studio Founded",
          description: "Started with a vision to transform design experiences"
        },
        {
          year: "2018",
          title: "Expansion",
          description: "Grew our team and expanded services across Australia"
        },
        {
          year: "2020",
          title: "Innovation Award",
          description: "Recognized for breakthrough design solutions"
        }
      ]
    }
  },
  contactPage: {
    meta: {
      title: "Contact Us",
      description: "Get in touch with our team to discuss how we can help transform your business with professional design solutions."
    },
    title: "Contact Us",
    description: "Reach out to us to discuss how we can help transform your business with professional design solutions.",
    info: {
      address: "Address",
      businessHours: "Business Hours",
      phone: "Phone",
      email: "Email"
    }
  },
  thankYouPage: {
    meta: {
      title: "Thank You - Message Received",
      description: "Your message has been successfully received. Our team will get back to you shortly."
    },
    title: "Thank You!",
    description: "Your message has been successfully received. Our team will get back to you within 24 hours.",
    additionalInfo: "In the meantime, if you have any other questions, please don't hesitate to email or call us.",
    buttonText: "Return to Home"
  },
  servicesPage: {
    meta: {
      title: "Our Design Services",
      description: "Professional design solutions tailored for Australian businesses"
    },
    common: {
      buttonText: "Learn More",
      viewAllServices: "View All Services"
    },
    [SERVICES.WEB_DESIGN]: {
      meta: {
        title: "Professional Web Design Services",
        description: "Transform your online presence with our expert web design services. We create stunning, responsive websites that drive business growth."
      },
      title: "Professional Web Design Services",
      description: "Transform your online presence with our expert web design services. We create stunning, responsive websites that drive business growth.",
      sections: [
        {
          title: "Why Choose Our Web Design Services?",
          content: "Our web design services are tailored to meet your business needs and help you achieve your online goals. We combine creativity with technical expertise to deliver websites that not only look great but also perform exceptionally well.",
          items: []
        },
        {
          title: "Our Web Design Process",
          content: "We follow a comprehensive process to ensure your website meets your business objectives:",
          items: [
            {
              title: "Discovery & Planning",
              description: "Understanding your business goals, analyzing your target audience, and creating a strategic plan"
            },
            {
              title: "Design & Development",
              description: "Creating wireframes and mockups, developing responsive layouts, and implementing modern design trends"
            },
            {
              title: "Testing & Launch",
              description: "Quality assurance testing, performance optimization, and smooth deployment"
            }
          ]
        }
      ],
      features: {
        title: "Key Features",
        items: [
          "Responsive design for all devices",
          "Modern and clean aesthetics",
          "Fast loading times",
          "SEO-friendly structure",
          "User-friendly navigation",
          "Custom functionality"
        ]
      },
      cta: {
        title: "Get Started Today",
        description: "Ready to transform your online presence? Contact us today to discuss your web design project."
      }
    },
    [SERVICES.BRAND_IDENTITY]: {
      meta: {
        title: "Brand Identity Design",
        description: "Create a unique and memorable brand identity that resonates with your target audience and sets you apart from competitors."
      },
      title: "Brand Identity Design",
      description: "Create a unique and memorable brand identity that resonates with your target audience and sets you apart from competitors.",
      sections: [
        {
          title: "Our Brand Identity Services",
          content: "We offer comprehensive brand identity solutions:",
          items: [
            {
              title: "Logo Design",
              description: "Unique and memorable logos that represent your brand values"
            },
            {
              title: "Brand Guidelines",
              description: "Comprehensive guidelines for consistent brand application"
            },
            {
              title: "Visual Identity",
              description: "Cohesive visual elements that strengthen your brand"
            },
            {
              title: "Brand Strategy",
              description: "Strategic positioning and messaging for your brand"
            }
          ]
        }
      ],
      features: {
        title: "Key Features",
        items: [
          "Unique Logo Design",
          "Brand Guidelines",
          "Visual Identity System",
          "Brand Strategy",
          "Typography Selection",
          "Color Palette Development"
        ]
      },
      cta: {
        title: "Get Started Today",
        description: "Ready to build your brand identity? Contact us today to discuss your project."
      }
    },
    [SERVICES.UI_UX_DESIGN]: {
      meta: {
        title: "UI/UX Design Services",
        description: "Create intuitive and engaging user experiences with our professional UI/UX design services."
      },
      title: "UI/UX Design Services",
      description: "Create intuitive and engaging user experiences with our professional UI/UX design services.",
      sections: [
        {
          title: "Our UI/UX Design Process",
          content: "We follow a user-centered design approach:",
          items: [
            {
              title: "User Research",
              description: "Understanding user needs and behaviors"
            },
            {
              title: "Information Architecture",
              description: "Organizing content and features for optimal user flow"
            },
            {
              title: "Wireframing & Prototyping",
              description: "Creating interactive prototypes for testing and refinement"
            },
            {
              title: "Visual Design",
              description: "Implementing beautiful and functional interfaces"
            }
          ]
        }
      ],
      features: {
        title: "Key Features",
        items: [
          "User Research",
          "Wireframing",
          "Prototyping",
          "Visual Design",
          "Usability Testing",
          "Design Systems"
        ]
      },
      cta: {
        title: "Get Started Today",
        description: "Ready to improve your user experience? Contact us today to discuss your UI/UX needs."
      }
    },
    [SERVICES.PRINT_DESIGN]: {
      meta: {
        title: "Print Design Services",
        description: "Professional print design solutions that effectively communicate your brand message."
      },
      title: "Print Design Services",
      description: "Professional print design solutions that effectively communicate your brand message.",
      sections: [
        {
          title: "Our Print Design Services",
          content: "We offer a wide range of print design solutions:",
          items: [
            {
              title: "Marketing Materials",
              description: "Brochures, flyers, and promotional materials"
            },
            {
              title: "Business Stationery",
              description: "Business cards, letterheads, and envelopes"
            },
            {
              title: "Packaging Design",
              description: "Product packaging and labels"
            },
            {
              title: "Publication Design",
              description: "Magazines, catalogs, and books"
            }
          ]
        }
      ],
      features: {
        title: "Key Features",
        items: [
          "Marketing Materials",
          "Business Stationery",
          "Packaging Design",
          "Publication Design",
          "Print Production",
          "Quality Control"
        ]
      },
      cta: {
        title: "Get Started Today",
        description: "Ready to enhance your print materials? Contact us today to discuss your project."
      }
    },
    [SERVICES.MOTION_DESIGN]: {
      meta: {
        title: "Motion Design Services",
        description: "Engaging motion graphics and animations that bring your brand to life."
      },
      title: "Motion Design Services",
      description: "Engaging motion graphics and animations that bring your brand to life.",
      sections: [
        {
          title: "Our Motion Design Services",
          content: "We create dynamic motion design solutions:",
          items: [
            {
              title: "Animated Logos",
              description: "Dynamic logo animations that capture attention"
            },
            {
              title: "Explainer Videos",
              description: "Engaging videos that explain your products or services"
            },
            {
              title: "Social Media Content",
              description: "Eye-catching animations for social media"
            },
            {
              title: "UI Animations",
              description: "Smooth and intuitive interface animations"
            }
          ]
        }
      ],
      features: {
        title: "Key Features",
        items: [
          "Logo Animation",
          "Explainer Videos",
          "Social Media Content",
          "UI Animations",
          "Motion Graphics",
          "Visual Effects"
        ]
      },
      cta: {
        title: "Get Started Today",
        description: "Ready to add motion to your brand? Contact us today to discuss your project."
      }
    }
  },
  legalPage: {
    meta: {
      title: "Legal Information",
      description: "Important legal information about our services and policies."
    },
    common: {
      lastUpdated: "2025",
      effectiveDate: "07/03/2025",
      contactInfo: {
        title: "Contact Information",
        content: "If you have any questions about our legal policies, please contact us."
      }
    },
    [LEGAL.TERMS]: {
      title: "Terms of Service",
      description: "Information about our terms of service and service conditions.",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By using our design services, you accept these terms. If you disagree with these terms, please do not use our website and services.",
          items: []
        },
        {
          title: "2. Services Offered",
          content: "We provide professional design services, including:",
          items: [
            {
              title: "",
              description: "Custom website design and development."
            },
            {
              title: "",
              description: "Brand identity design."
            },
            {
              title: "",
              description: "UI/UX design services."
            },
            {
              title: "",
              description: "Print design solutions."
            },
            {
              title: "",
              description: "Motion design and animation."
            }
          ]
        },
        {
          title: "3. Client Responsibilities",
          content: "By using our services, you agree to:",
          items: [
            {
              title: "",
              description: "Provide accurate and complete information about your business."
            },
            {
              title: "",
              description: "Not use our services for illegal or fraudulent purposes."
            },
            {
              title: "",
              description: "Not attempt unauthorized access to our systems or information."
            }
          ]
        },
        {
          title: "4. Intellectual Property",
          content: "All content on this site, including texts, images, and documentation, is owned by us or licensed for use. You may not reproduce, modify, or distribute this content without prior permission.",
          items: []
        },
        {
          title: "5. Payments and Refund Policy",
          content: "Payment terms will be specified in service agreements. All payments are non-refundable unless otherwise stated.",
          items: []
        },
        {
          title: "6. Limitation of Liability",
          content: "We are not liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid by the client for the contracted service.",
          items: []
        },
        {
          title: "7. Service Termination",
          content: "We reserve the right to suspend or terminate access to our services if these terms are violated.",
          items: []
        },
        {
          title: "8. Governing Law",
          content: "These Terms are governed by applicable laws. Any disputes will be resolved in the appropriate courts.",
          items: []
        },
        {
          title: "9. Changes to Terms",
          content: "We may update these Terms of Service at any time. We will notify you of significant changes through our website.",
          items: []
        },
        {
          title: "10. Contact Us",
          content: "If you have questions about our cookie and security policy, please contact us.",
          items: []
        }
      ]
    },
    [LEGAL.PRIVACY]: {
      title: "Privacy Policy",
      description: "Information about our privacy policy and personal data protection.",
      sections: [
        {
          title: "1. Information We Collect",
          content: "To provide you with the best experience in our design services, we collect personal and non-personal information:",
          items: [
            {
              title: "Personal Data",
              description: "Name, email, phone number, and company information when you contact us or request our services."
            },
            {
              title: "Usage Data",
              description: "Information about how you interact with our website, such as IP address, browser type, and pages visited."
            },
            {
              title: "Cookies",
              description: "Small files used to improve user experience and analyze site traffic."
            }
          ]
        },
        {
          title: "2. How We Use Your Information",
          content: "We use your information for the following purposes:",
          items: [
            {
              title: "",
              description: "To provide design and development services."
            },
            {
              title: "",
              description: "To process service requests and manage client communication."
            },
            {
              title: "",
              description: "To improve user experience on our website."
            },
            {
              title: "",
              description: "To send updates, informative content, and relevant news (with your permission)."
            },
            {
              title: "",
              description: "To fulfill legal and regulatory obligations."
            }
          ]
        },
        {
          title: "3. Information Sharing",
          content: "We do not sell or share your personal data with third parties, except in the following cases:",
          items: [
            {
              title: "",
              description: "With strategic partners who assist in delivering our services."
            },
            {
              title: "",
              description: "When required by law or regulatory authorities."
            }
          ]
        },
        {
          title: "4. Data Security",
          content: "We implement advanced security measures to protect your personal information. However, no method of data transmission over the internet is completely secure.",
          items: []
        },
        {
          title: "5. Cookie Usage",
          content: "Our website uses cookies to enhance your browsing experience. You can manage cookie usage through your browser settings.",
          items: []
        },
        {
          title: "6. Your Rights",
          content: "As a user, you have the following rights:",
          items: [
            {
              title: "",
              description: "Access to your personal information."
            },
            {
              title: "",
              description: "Request correction of inaccurate data."
            },
            {
              title: "",
              description: "Request deletion of your information."
            },
            {
              title: "",
              description: "Withdraw consent for data processing."
            }
          ]
        },
        {
          title: "7. Third-Party Links",
          content: "Our website may contain links to third-party sites. We are not responsible for their privacy practices.",
          items: []
        },
        {
          title: "8. Changes to This Policy",
          content: "We may update this Privacy Policy at any time. We will notify you of significant changes through our website.",
          items: []
        },
        {
          title: "9. Contact Us",
          content: "If you have questions about our Privacy Policy, please contact us.",
          items: []
        }
      ]
    },
    [LEGAL.DISCLAIMER]: {
      title: "Legal Disclaimer",
      description: "Legal disclaimers and liability limitations related to the use of our website.",
      sections: [
        {
          title: "Disclaimer of Liability",
          content: "The information provided on this website is for general informational purposes only and does not constitute professional advice. We are not liable for any damages or losses arising from decisions made based on information obtained from this website.",
          items: []
        },
        {
          title: "Information Accuracy",
          content: "While we strive to ensure the accuracy of information on our site, we cannot guarantee its complete accuracy. All content is provided \"as is\" without any warranties.",
          items: []
        },
        {
          title: "Third-Party Links",
          content: "Third-party links on our website indicate that we have no control over and are not responsible for the content of these sites. We do not monitor or endorse the content of these links.",
          items: []
        },
        {
          title: "Intellectual Property",
          content: "All content on this website (including text, graphics, logos, icons, images, audio clips, digital downloads, and software) is our property and is protected by copyright laws.",
          items: []
        },
        {
          title: "Professional Services Disclaimer",
          content: "Our design services are provided on a professional basis. While we strive for excellence, we cannot guarantee specific results or outcomes from our services. Each project's success depends on various factors including client requirements, market conditions, and technical constraints.",
          items: []
        },
        {
          title: "Service Limitations",
          content: "Our services are subject to the following limitations:",
          items: [
            {
              title: "",
              description: "We reserve the right to refuse service to any client."
            },
            {
              title: "",
              description: "Project timelines are estimates and may vary based on complexity."
            },
            {
              title: "",
              description: "Final deliverables are subject to client approval and feedback."
            },
            {
              title: "",
              description: "Technical support is provided according to the terms of each service agreement."
            }
          ]
        },
        {
          title: "Licensing and Regulation",
          content: "We operate in compliance with applicable laws and regulations governing design services. All our business operations are conducted transparently and ethically.",
          items: []
        },
        {
          title: "Contact",
          content: "If you have any questions about this legal disclaimer, please contact us.",
          items: []
        }
      ]
    },
    [LEGAL.COOKIES]: {
      title: "Cookie Policy and Security",
      description: "Information about our cookie usage and security policy.",
      sections: [
        {
          title: "1. Cookie Usage",
          content: "Our website uses cookies to enhance user experience and provide personalized content. By continuing to use our site, you consent to the use of cookies in accordance with this policy.",
          items: []
        },
        {
          title: "2. Types of Cookies We Use",
          content: "The cookies we use can be classified as follows:",
          items: [
            {
              title: "Essential Cookies",
              description: "Required for the website to function properly."
            },
            {
              title: "Analytical Cookies",
              description: "Help us understand how users interact with our site."
            },
            {
              title: "Personalization Cookies",
              description: "Allow us to adapt content based on your preferences."
            },
            {
              title: "Marketing Cookies",
              description: "Used to display relevant advertisements."
            }
          ]
        },
        {
          title: "3. Information Security",
          content: "We implement advanced security measures to protect our clients' data, including encryption, firewalls, and restricted access protocols.",
          items: []
        },
        {
          title: "4. Personal Data Protection",
          content: "We comply with applicable data protection regulations. We do not share your information with third parties without your explicit consent.",
          items: []
        },
        {
          title: "5. Cookie Management",
          content: "You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect website functionality.",
          items: []
        },
        {
          title: "6. Policy Changes",
          content: "We reserve the right to update this cookie and security policy at any time. We will notify you of significant changes through our website.",
          items: []
        },
        {
          title: "7. Contact Us",
          content: "If you have questions about our cookie and security policy, please contact us.",
          items: []
        }
      ]
    }
  }
} 