import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Icon name="Building2" size={32} className="text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">ФинКонтроль</h1>
                <p className="text-xs text-gray-600">
                  Министерство финансов Оренбургской области
                </p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              О министерстве
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Документы
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="User" size={16} className="mr-2" />
              Личный кабинет
            </Button>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
