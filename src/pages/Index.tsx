import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Разработка Telegram-ботов",
      description: "Быстро, качественно, надежно. Создаем ботов для автоматизации бизнеса и улучшения клиентского сервиса.",
      icon: "Bot",
      emoji: "📌"
    },
    {
      title: "Репетиторы английского языка",
      description: "Обучение от профессионалов. Индивидуальный подход для эффективного изучения языка.",
      icon: "BookOpen",
      emoji: "✨"
    },
    {
      title: "Ментальная арифметика",
      description: "Развитие интеллектуальных способностей детей через современные методики счета.",
      icon: "Calculator",
      emoji: "⚖️"
    },
    {
      title: "Презентации и видеомонтаж",
      description: "Создание крутых презентаций и профессиональный монтаж видеороликов для вашего бизнеса.",
      icon: "Video",
      emoji: "🎬"
    },
    {
      title: "Тренер по презентациям",
      description: "Обучение навыкам публичных выступлений и созданию эффективных презентаций.",
      icon: "Presentation",
      emoji: "✅"
    }
  ];

  const advantages = [
    {
      title: "Индивидуальный подход",
      description: "К каждому клиенту мы находим персональный подход, учитывая все особенности и пожелания.",
      icon: "UserCheck"
    },
    {
      title: "Высокий профессионализм",
      description: "Наши специалисты имеют многолетний опыт и постоянно совершенствуют свои навыки.",
      icon: "Award"
    },
    {
      title: "Удобство заказа",
      description: "Простой процесс заказа услуг онлайн с быстрым откликом и поддержкой.",
      icon: "Smartphone"
    },
    {
      title: "Постоянное развитие",
      description: "Мы постоянно совершенствуем наши сервисы, внедряя новые технологии и методики.",
      icon: "TrendingUp"
    }
  ];

  const contacts = {
    phone: "+7 (918) 564 59 31",
    email: "info_umnaya-volna@mail.ru",
    address: "Ростовская обл., г. Волгодонск, ул. Ленинградская, д. 30, кв. 56"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
              Умная Волна
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-300">
              Инновационные решения для вашего развития
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto animate-fade-in delay-500">
              Мы предоставляем комплексные услуги в области технологий, образования и творчества. 
              От разработки Telegram-ботов до обучения языкам и создания презентаций.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-blue-50 transition-all duration-300 animate-bounce-subtle px-8 py-6 text-lg font-semibold shadow-2xl"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Наши услуги
            <Icon name="ArrowDown" className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-200">
              Профессиональные решения для вашего успеха
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 animate-scale-in border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-3xl">{service.emoji}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="mt-6 w-full border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-sm"
                    onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Заказать услугу
                    <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in delay-200">
              Наши преимущества делают нас лучшим выбором для ваших задач
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all backdrop-blur-sm">
                  <Icon name={advantage.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in delay-200">
            Готовы обсудить ваш проект? Мы всегда на связи!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Телефон</h3>
              <p className="text-indigo-600 font-semibold">{contacts.phone}</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300 animate-scale-in delay-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-purple-600 font-semibold break-all">{contacts.email}</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl hover:shadow-lg transition-all duration-300 animate-scale-in delay-400">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Адрес</h3>
              <p className="text-green-600 font-semibold text-center">{contacts.address}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white animate-fade-in delay-600">
            <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Свяжитесь с нами любым удобным способом, и мы обсудим ваш проект!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-blue-50 transition-all duration-300 px-6 py-3 font-semibold shadow-lg"
                onClick={() => window.open(`tel:${contacts.phone}`)}
              >
                <Icon name="Phone" className="mr-2 w-5 h-5" />
                Позвонить
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-indigo-600 transition-all duration-300 px-6 py-3 font-semibold"
                onClick={() => window.open(`mailto:${contacts.email}`)}
              >
                <Icon name="Mail" className="mr-2 w-5 h-5" />
                Написать
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Умная Волна</h3>
          <p className="text-gray-400 mb-6">
            Инновационные решения для вашего развития
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">
              © 2024 Умная Волна. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}