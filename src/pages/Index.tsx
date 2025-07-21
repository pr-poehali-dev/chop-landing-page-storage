import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Navigation */}
      <nav className="bg-[#002640] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Логотип по центру */}
          <div className="flex justify-center mb-4">
            <img 
              src="https://cdn.poehali.dev/files/000bcdfd-84cf-4a85-bc7c-e27c4df30253.png" 
              alt="Логотип ЧОП Единство" 
              className="h-16 w-auto"
            />
          </div>
          {/* Телефон слева, сайт справа */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">+7 903 518-7880</span>
            <span className="text-lg font-medium">ECHOP.RU</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">ОХРАНА СКЛАДОВ</h2>
          <p className="text-2xl mb-8 animate-fade-in">от 120 000 руб. / месяц</p>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Сервис безопасности "Единство" предлагает физическую охрану складов
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg">
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-primary">Наши услуги</h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Icon name="Eye" size={24} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Предотвращаем кражу товаров</h4>
                    <p className="text-muted-foreground">
                      Патрулирование, строгий контроль доступа, проверка транспорта и 
                      персонала, надзор за погрузкой/разгрузкой
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="Users" size={24} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Контролируем доступ сотрудников</h4>
                    <p className="text-muted-foreground">
                      Ручная проверка документов и пропусков, ведение журнала 
                      посетителей, сопровождение гостей, контроль въезда/выезда транспорта
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="UserX" size={24} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Контролируем несанкционированный доступ</h4>
                    <p className="text-muted-foreground">
                      Физическая охрана КПП вход/выход, обход периметра, 
                      немедленное реагирование на попытки проникновения
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="Flame" size={24} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Реагируем при срабатывании пожарной тревоги</h4>
                    <p className="text-muted-foreground">
                      Регулярные обходы для раннего обнаружения признаков возгорания, 
                      применение первичных средств пожаротушения, оповещение и организация эвакуации
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/img/cf7344a4-56c0-42dc-a511-84a9702eb915.jpg" 
                alt="Система видеонаблюдения"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Protected Objects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-primary">Обеспечиваем безопасность партнеров</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Warehouse" size={24} className="text-accent" />
                  <span>Логистический центр в Домодедово</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/img/1fd4adf3-1f4f-4115-afc7-4f02569a25d2.jpg" 
                  alt="Склад в Домодедово"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <Badge variant="secondary">Активный объект</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Building" size={24} className="text-accent" />
                  <span>Логистический склад в Подольске</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Icon name="Building2" size={48} className="text-muted-foreground" />
                </div>
                <Badge variant="secondary">Активный объект</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Package" size={24} className="text-accent" />
                  <span>Склад в Томилино</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Icon name="Boxes" size={48} className="text-muted-foreground" />
                </div>
                <Badge variant="secondary">Активный объект</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-primary">Тарифы</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <CardDescription>Основная охрана склада</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">120 000₽</div>
                <p className="text-muted-foreground mb-6">в месяц</p>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Физическая охрана</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Контроль доступа</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Патрулирование</span>
                  </li>
                </ul>
                <Button className="w-full">Выбрать тариф</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <CardDescription>Расширенная охрана</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-accent mb-4">180 000₽</div>
                <p className="text-muted-foreground mb-6">в месяц</p>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Всё из базового</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Видеонаблюдение</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Пожарная безопасность</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90">Выбрать тариф</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <CardDescription>Полная безопасность</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-secondary mb-4">250 000₽</div>
                <p className="text-muted-foreground mb-6">в месяц</p>
                <ul className="space-y-2 text-left mb-6">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Всё из стандарта</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>24/7 мониторинг</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Быстрое реагирование</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90">Выбрать тариф</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-primary">Отзывы клиентов</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle>Алексей М.</CardTitle>
                    <CardDescription>Директор логистической компании</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Отличная работа! Склад под надежной охраной, персонал профессиональный. 
                  Рекомендую сервис Единство."
                </p>
                <div className="flex mt-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle>Мария С.</CardTitle>
                    <CardDescription>Управляющая складским комплексом</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Сотрудничаем уже 2 года. Никаких инцидентов, все проблемы решаются быстро. 
                  Очень довольны качеством услуг."
                </p>
                <div className="flex mt-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle>Дмитрий К.</CardTitle>
                    <CardDescription>Владелец торговой компании</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Профессиональный подход к охране. Товары в безопасности, 
                  персонал вежливый и компетентный."
                </p>
                <div className="flex mt-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Контакты</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <Icon name="MapPin" size={48} className="text-accent" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Адрес</h4>
                <p>Москва, ул. 2-я Энтузиастов, д. 5</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Icon name="Phone" size={48} className="text-accent" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Телефон</h4>
                <p>+7 903 518-7880</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Icon name="Mail" size={48} className="text-accent" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Email</h4>
                <p>chooedinstуo@yandex.ru</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">ООО ЧОО "ЕДИНСТВО"</p>
          <p className="text-sm opacity-75">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;