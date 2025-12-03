export default function Contact() {
  const contactInfo = [
    {
      label: "Email",
      value: "tanaytemani1@gmail.com",
      link: "mailto:tanaytemani1@gmail.com",
      icon: "📧"
    },
    {
      label: "Phone",
      value: "+91 9136863765",
      link: "tel:+919136863765",
      icon: "📱"
    },
    {
      label: "Location",
      value: "Mumbai, India",
      link: null,
      icon: "📍"
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tanay-agarwal-43b39520b/",
      icon: "💼"
    },
    {
      name: "GitHub",
      url: "https://github.com/TANAYTEMANI",
      icon: "🐙"
    }
  ]

  return (
    <section id="contact" className="section-spacing px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
          <span className="text-terminal-accent">&gt;</span>
          <h2 className="text-terminal-text">contact</h2>
          <span className="text-terminal-accent cursor-blink">_</span>
        </div>

        {/* Contact Grid */}
        <div className="ml-8 md:ml-12 space-y-8">
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="border border-terminal-dim p-6 rounded-lg hover:border-terminal-accent transition-all card-hover"
              >
                {info.link ? (
                  <a href={info.link} className="block">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <p className="text-terminal-dim text-sm mb-1">
                          {info.label}
                        </p>
                        <p className="text-terminal-accent font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="text-terminal-dim text-sm mb-1">
                        {info.label}
                      </p>
                      <p className="text-terminal-text">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-terminal-accent mb-4">
              Connect with me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-terminal-accent text-terminal-accent rounded hover:bg-terminal-accent hover:text-terminal-bg transition-all hover:scale-105"
                >
                  <span>{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Download Resume */}
          <div className="pt-6">
            <a
              href="/Tanay_Agarwal_Resume.pdf"
              download="Tanay_Agarwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-terminal-accent text-terminal-bg font-semibold rounded hover:bg-opacity-90 transition-all hover:scale-105"
            >
              <span>📄</span>
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Exit Message */}
        <div className="ml-8 md:ml-12 pt-12">
          <p className="text-terminal-dim font-mono">
            <span className="text-terminal-accent">&gt;</span> system.exit(0)
          </p>
          <p className="text-terminal-dim text-sm mt-2">
            Built with Next.js, Tailwind CSS, and ❤️ by Tanay Agarwal
          </p>
        </div>
      </div>
    </section>
  )
}

