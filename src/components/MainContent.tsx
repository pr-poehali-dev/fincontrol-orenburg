import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import LoginModal from "./LoginModal";
import SearchModal from "./SearchModal";

export default function MainContent() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <main className="bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Министерство финансов Оренбургской области
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Управление государственными финансами региона
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Документы
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Users" size={24} className="text-blue-600 mr-3" />
                Для сотрудников
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Личные кабинеты, документооборот, отчетность
              </p>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsLoginOpen(true)}
              >
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти в систему
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon
                  name="FileCheck"
                  size={24}
                  className="text-green-600 mr-3"
                />
                Нормативные акты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Законы, постановления, приказы министерства
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsSearchOpen(true)}
              >
                <Icon name="Search" size={16} className="mr-2" />
                Найти документ
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon
                  name="BarChart3"
                  size={24}
                  className="text-orange-600 mr-3"
                />
                Отчеты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Финансовые отчеты и статистика региона
              </p>
              <Button variant="outline" className="w-full">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать отчет
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Основные функции
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Calculator" size={32} className="text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Бюджетное планирование</h3>
              <p className="text-sm text-gray-600">
                Формирование и исполнение бюджета
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Финансовый контроль</h3>
              <p className="text-sm text-gray-600">
                Контроль расходования средств
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Анализ эффективности</h3>
              <p className="text-sm text-gray-600">
                Оценка результативности программ
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Database" size={32} className="text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Учет и отчетность</h3>
              <p className="text-sm text-gray-600">Ведение финансового учета</p>
            </div>
          </div>
        </div>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </main>
  );
}
