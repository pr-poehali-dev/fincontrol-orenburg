import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const documents = [
    {
      title: "Закон об областном бюджете на 2024 год",
      type: "Закон",
      date: "15.12.2023",
    },
    {
      title: "Постановление о финансовом контроле",
      type: "Постановление",
      date: "20.11.2023",
    },
    {
      title: "Приказ о бюджетном планировании",
      type: "Приказ",
      date: "10.10.2023",
    },
    {
      title: "Методические рекомендации по учету",
      type: "Методичка",
      date: "05.09.2023",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Icon name="Search" size={24} className="text-green-600 mr-2" />
            Поиск документов
          </DialogTitle>
          <DialogDescription>
            Найдите нормативные акты и документы министерства
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">Поиск по названию</Label>
              <Input
                id="search"
                placeholder="Введите ключевые слова"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label>Тип документа</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все документы</SelectItem>
                  <SelectItem value="law">Законы</SelectItem>
                  <SelectItem value="decree">Постановления</SelectItem>
                  <SelectItem value="order">Приказы</SelectItem>
                  <SelectItem value="method">Методические материалы</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button className="bg-green-600 hover:bg-green-700">
              <Icon name="Search" size={16} className="mr-2" />
              Найти
            </Button>
            <Button variant="outline">
              <Icon name="RotateCcw" size={16} className="mr-2" />
              Сбросить
            </Button>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3">Последние документы:</h4>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <h5 className="font-medium text-sm">{doc.title}</h5>
                    <p className="text-xs text-gray-500">
                      {doc.type} • {doc.date}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Icon name="Download" size={14} className="mr-1" />
                    Скачать
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
