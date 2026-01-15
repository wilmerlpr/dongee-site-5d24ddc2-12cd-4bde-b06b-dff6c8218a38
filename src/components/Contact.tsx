import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      toast.success('Mensaje enviado. Nos pondremos en contacto pronto.', {
        style: {
          background: '#1e293b',
          color: '#fff',
          border: '1px solid #d97706'
        }
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Hubo un error al enviar el mensaje. Intente de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      <Toaster position="top-center" />
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-3">Contáctenos</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">¿Necesita Asesoría Legal?</h3>
              <p className="text-slate-400 text-lg">
                La primera consulta es gratuita. Déjenos evaluar su caso y proponerle la mejor estrategia legal.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <Phone className="text-amber-500 w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-semibold text-lg">Teléfono</h5>
                  <p className="text-slate-400">+52 (555) 123-4567</p>
                  <p className="text-slate-500 text-sm">Lunes a Viernes, 9am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <Mail className="text-amber-500 w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-semibold text-lg">Email</h5>
                  <p className="text-slate-400">contacto@lexaeterna.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <MapPin className="text-amber-500 w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-semibold text-lg">Oficinas</h5>
                  <p className="text-slate-400">Av. Reforma 222, Piso 15<br/>Ciudad de México, CDMX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Teléfono</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Mensaje / Detalle del Caso</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  placeholder="Describa brevemente su situación legal..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send className="w-4 h-4" />}
                {loading ? 'Enviando...' : 'Enviar Consulta'}
              </button>
              <p className="text-xs text-slate-500 text-center">
                Su información está protegida por secreto profesional.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;