import React, { useState } from "react";
import {
  Menu,
  X,
  Leaf,
  Heart,
  Brain,
  Droplets,
  Wind,
  Flame,
  Star,
  Users,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PanchakarmaWebsite = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navItems = [
    { name: "What is", href: "#what-is" },
    { name: "Tridosha", href: "#tridosha" },
    { name: "Treatments", href: "#treatments" },
    { name: "Lifestyle", href: "#lifestyle" },
    { name: "FAQ", href: "#faq" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];
  const treatments = [
    {
      name: "Vamana",
      description:
        "Therapeutic vomiting to eliminate excess Kapha dosha from the upper respiratory tract and stomach.",
      benefits:
        "Reduces respiratory disorders, skin diseases, and digestive issues.",
    },
    {
      name: "Virechana",
      description:
        "Medicated purgation therapy to cleanse the small intestine and eliminate excess Pitta dosha.",
      benefits:
        "Effective for liver disorders, skin conditions, and inflammatory diseases.",
    },
    {
      name: "Basti",
      description:
        "Medicated enema therapy considered the most important treatment for Vata disorders.",
      benefits:
        "Treats neurological disorders, joint pain, and digestive issues.",
    },
    {
      name: "Nasya",
      description:
        "Nasal administration of medicated oils or powders to cleanse the head and neck region.",
      benefits:
        "Improves mental clarity, treats sinusitis, and enhances sensory functions.",
    },
    {
      name: "Rakta Moksha",
      description:
        "Bloodletting therapy to purify blood and eliminate toxins from the circulatory system.",
      benefits:
        "Treats skin disorders, localized infections, and blood-related conditions.",
    },
  ];

  const doshas = [
    {
      name: "Vata",
      icon: <Wind className="w-8 h-8" />,
      element: "Air + Space",
      balanced: "Creative, energetic, flexible, good circulation",
      imbalanced: "Anxiety, insomnia, dry skin, irregular digestion",
      color: "text-blue-600",
    },
    {
      name: "Pitta",
      icon: <Flame className="w-8 h-8" />,
      element: "Fire + Water",
      balanced: "Intelligent, focused, good digestion, warm body",
      imbalanced: "Anger, inflammation, acid reflux, skin irritation",
      color: "text-red-600",
    },
    {
      name: "Kapha",
      icon: <Droplets className="w-8 h-8" />,
      element: "Earth + Water",
      balanced: "Calm, strong immunity, stable, loving nature",
      imbalanced: "Lethargy, weight gain, congestion, depression",
      color: "text-green-600",
    },
  ];

  const benefits = [
    "Deep detoxification and purification",
    "Enhanced immunity and vitality",
    "Improved mental clarity and focus",
    "Better digestion and metabolism",
    "Stress reduction and relaxation",
    "Balanced hormones and emotions",
    "Rejuvenated skin and appearance",
    "Increased energy and stamina",
  ];

  const faqs = [
    {
      question: "How long does a complete Panchakarma treatment take?",
      answer:
        "A complete Panchakarma treatment typically takes 21-28 days, including pre-purification (7-14 days), main treatments (7-14 days), and post-treatment care (7 days).",
    },
    {
      question: "Is Panchakarma suitable for everyone?",
      answer:
        "Panchakarma is generally safe but requires proper consultation with qualified Ayurvedic practitioners. It may not be suitable for pregnant women, children under 12, or people with certain medical conditions.",
    },
    {
      question: "What should I expect during the treatment?",
      answer:
        "You can expect a structured program including consultations, preparatory treatments, main purification procedures, specialized diet, and lifestyle guidelines for optimal results.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "When performed by qualified practitioners, Panchakarma is generally safe. Some people may experience temporary fatigue or mild discomfort as the body eliminates toxins.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 w-full">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">
                AyurVeda Panchakarma
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center border-2 border-green-700 px-2 m-3 rounded ">
              <button
                className="text-sm font-bold text-green-600"
                onClick={() => navigate("/dashboard")}
              >
                Login/Signup
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Introduction to Panchakarma
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the ancient Ayurvedic science of detoxification and
            rejuvenation. Panchakarma is a comprehensive healing system that
            purifies the body, mind, and spirit for optimal health and vitality.
          </p>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Heart className="w-24 h-24 text-white/80" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Panchakarma */}
      <section id="what-is" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What is Panchakarma?
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              Panchakarma, literally meaning "five actions," is a sophisticated
              detoxification and purification program from Ayurveda, the ancient
              healing system of India. This holistic approach removes
              accumulated toxins (ama) from the body while strengthening the
              immune system and restoring natural balance.
            </p>
            <p>
              Unlike modern detox programs that focus solely on elimination,
              Panchakarma works systematically to prepare the body, perform
              specific cleansing procedures, and then rebuild strength and
              vitality. This comprehensive approach addresses not just physical
              health but mental and spiritual well-being as well.
            </p>
          </div>
        </div>
      </section>

      {/* Tridosha Section */}
      <section id="tridosha" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Ayurvedic Tridosha
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              According to Ayurveda, health is maintained by the balance of
              three fundamental energies or doshas: Vata, Pitta, and Kapha.
              Panchakarma works to restore this balance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {doshas.map((dosha) => (
              <div
                key={dosha.name}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className={`mb-4 flex justify-center ${dosha.color}`}>
                  {dosha.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  {dosha.name}
                </h3>
                <p className="text-gray-600 text-center mb-4 font-medium">
                  {dosha.element}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">
                      When Balanced:
                    </h4>
                    <p className="text-sm text-gray-700">{dosha.balanced}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">
                      When Imbalanced:
                    </h4>
                    <p className="text-sm text-gray-700">{dosha.imbalanced}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Treatments Section */}
      <section id="treatments" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Five Shodanas (Key Treatments)
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            The heart of Panchakarma consists of five specialized elimination
            procedures, each targeting specific doshas and body systems for
            comprehensive purification.
          </p>

          <div className="space-y-8">
            {treatments.map((treatment) => (
              <div
                key={treatment.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-blue-100 p-8 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center">
                      <Star className="w-16 h-16 text-green-600" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {treatment.name}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {treatment.description}
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Key Benefits:
                      </h4>
                      <p className="text-green-700 text-sm">
                        {treatment.benefits}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Benefits of Panchakarma
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Experience transformative health benefits that extend far beyond
            simple detoxification.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                About Us
              </h3>
              <p className="text-gray-300 mb-4">
                We are dedicated practitioners of authentic Ayurvedic medicine
                with over 20 years of experience in Panchakarma therapy. Our
                mission is to bring the ancient wisdom of Ayurveda to modern
                life for optimal health and wellness.
              </p>
              <p className="text-gray-300">
                Our certified practitioners combine traditional knowledge with
                modern safety standards to provide you with the most effective
                and safe Panchakarma experience.
              </p>
            </div>

            <div id="contact">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-green-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-green-400" />
                  <span className="text-gray-300">
                    info@panchakarma-center.com
                  </span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-green-400 mt-1" />
                  <span className="text-gray-300">
                    123 Wellness Boulevard
                    <br />
                    Health Valley, CA 90210
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PanchakarmaWebsite;
