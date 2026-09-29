import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      'service_k57hjge',      // <-- Your actual Service ID
      'template_jmbuaa4',     // <-- Your actual Template ID
      formRef.current!,
      'NZE6tk2yyv1Bgo5Fi'        // <-- Your actual Public Key
    )
    .then(() => {
      setSent(true);
      setSending(false);
      formRef.current?.reset();
    })
    .catch(() => {
      setSending(false);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you and explore how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">mikenpeace@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+250 786-898-755</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Kigali, Rwanda</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSend} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input name="first_name" placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input name="last_name" placeholder="Doe" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input name="email" type="email" placeholder="john.doe@example.com" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input name="subject" placeholder="Project Discussion" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full group" disabled={sending}>
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  {sending ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;