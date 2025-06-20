import SectionTitle from "./SectionTitle"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

const ContactSection = () => {
  return (
    <section className="bg-black/25 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto ">
        <SectionTitle 
          title="Contact"
  
          subtitle="Discutons de ton projet 👇"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* FORMULAIRE */}
          <form className="space-y-6 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Nom
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-white/30 rounded-md bg-white/10 text-black placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Ton nom complet"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-white/30 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="ton@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-white/30 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Ton message ici..."
              />
            </div>
            <button
              type="submit"
              className="bg-white text-primary font-bold px-6 py-3 rounded-full shadow hover:shadow-xl transition"
            >
              Envoyer
            </button>
          </form>

          {/* INFOS DE CONTACT */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Mail className="text-black" />
              <span className="text-primary text-sm">
                contact@techfuls.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-black" />
              <span className="text-primary text-sm">
                +33 6 01 02 03 04
              </span>
            </div>
            <div className="mt-6">
              <p className="mb-2 font-medium text-black">Suivre Techfuls :</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <Github size={20} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
