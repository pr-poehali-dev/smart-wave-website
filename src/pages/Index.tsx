import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "MessageSquareCode",
      title: "Разработка Telegram-ботов",
      description: "Быстро, качественно, надежно",
      emoji: "📌"
    },
    {
      icon: "GraduationCap", 
      title: "Репетиторы английского",
      description: "Обучение от профессионалов",
      emoji: "✨"
    },
    {
      icon: "Calculator",
      title: "Ментальная арифметика",
      description: "Развитие интеллектуальных способностей детей",
      emoji: "⚖️"
    },
    {
      icon: "Video",
      title: "Презентации и монтаж",
      description: "Создание крутых презентаций и видеороликов",
      emoji: "🎬"
    },
    {
      icon: "Users",
      title: "Тренер по презентациям",
      description: "Профессиональные навыки выступлений",
      emoji: "✅"
    }
  ];

  const advantages = [
    "Индивидуальный подход к каждому клиенту",
    "Высокий уровень профессионализма специалистов", 
    "Удобство заказа услуг онлайн",
    "Постоянное совершенствование сервисов"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-vibrant-orange to-modern-purple rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-vibrant-orange to-modern-purple bg-clip-text text-transparent">
                Умная Волна
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-vibrant-orange transition-colors">Услуги</a>
              <a href="#about" className="text-gray-600 hover:text-vibrant-orange transition-colors">О нас</a>
              <a href="#portfolio" className="text-gray-600 hover:text-vibrant-orange transition-colors">Портфолио</a>
              <a href="#reviews" className="text-gray-600 hover:text-vibrant-orange transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-vibrant-orange transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-vibrant-orange to-modern-purple hover:shadow-lg transition-all">
              Заказать услугу
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-vibrant-orange via-modern-purple to-vibrant-orange bg-clip-text text-transparent">
              Умная Волна
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Ваш надежный партнер в мире цифровых технологий и образования
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-vibrant-orange to-modern-purple hover:shadow-xl transition-all text-lg px-8 py-3">
                <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
                Начать проект
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 border-vibrant-orange text-vibrant-orange hover:bg-vibrant-orange hover:text-white">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для вашего бизнеса и развития
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 animate-scale-in border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-vibrant-orange to-modern-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800 flex items-center justify-center gap-2">
                    <span className="text-2xl">{service.emoji}</span>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full border-vibrant-orange text-vibrant-orange hover:bg-vibrant-orange hover:text-white transition-all"
                    onClick={() => window.open('https://t.me/Bogdan65829', '_blank')}
                  >
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                Почему выбирают нас?
              </h2>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 bg-gradient-to-r from-success-green to-vibrant-orange rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                      <Icon name="Check" className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                      {advantage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/3776eb8f-58e7-4998-969f-77f2a1d30b85.jpg" 
                alt="Команда Умная Волна" 
                className="rounded-2xl shadow-2xl w-full h-auto hover:shadow-3xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Наше портфолио
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры успешно реализованных проектов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all animate-scale-in bg-white/80 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-vibrant-orange/20 to-modern-purple/20 rounded-t-lg flex items-center justify-center">
                <img 
                  src="/img/fb154157-8c15-4e49-9045-e0d6cbc56acc.jpg" 
                  alt="Telegram Bot проект" 
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Telegram-бот для e-commerce</CardTitle>
                <CardDescription>Автоматизация продаж и поддержки клиентов</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all animate-scale-in bg-white/80 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-success-green/20 to-vibrant-orange/20 rounded-t-lg flex items-center justify-center">
                <Icon name="BookOpen" className="w-16 h-16 text-success-green" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Образовательная программа</CardTitle>
                <CardDescription>Курс английского языка для детей</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all animate-scale-in bg-white/80 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-modern-purple/20 to-vibrant-orange/20 rounded-t-lg flex items-center justify-center">
                <Icon name="Presentation" className="w-16 h-16 text-modern-purple" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Корпоративная презентация</CardTitle>
                <CardDescription>Презентация для крупной IT-компании</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3].map((_, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all animate-scale-in bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-vibrant-orange to-modern-purple rounded-full flex items-center justify-center">
                      <Icon name="User" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-left">Клиент {index + 1}</CardTitle>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-left text-base">
                    "Отличная команда! Проект выполнили качественно и в срок. Рекомендую всем!"
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Контакты
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in space-y-8">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-vibrant-orange to-modern-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Phone" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Телефон</h3>
                  <p className="text-gray-600">+7 (918) 564 59 31</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-vibrant-orange to-modern-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Mail" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info_umnaya-volna@mail.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-vibrant-orange to-modern-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="MapPin" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Адрес</h3>
                  <p className="text-gray-600">Ростовская обл., г. Волгодонск,<br />ул. Ленинградская, д. 30, кв. 56</p>
                </div>
              </div>
            </div>
            
            <Card className="animate-scale-in bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Оставьте заявку</CardTitle>
                <CardDescription className="text-center">
                  Мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Имя" 
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-vibrant-orange transition-colors"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-vibrant-orange transition-colors"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-vibrant-orange transition-colors"
                />
                <textarea 
                  placeholder="Расскажите о вашем проекте"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-vibrant-orange transition-colors"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-vibrant-orange to-modern-purple hover:shadow-lg transition-all text-lg py-3">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-vibrant-orange to-modern-purple rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-vibrant-orange to-modern-purple bg-clip-text text-transparent">
              Умная Волна
            </h3>
          </div>
          <p className="text-gray-400 mb-8">
            Ваш надежный партнер в мире цифровых технологий
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © 2024 Умная Волна. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;