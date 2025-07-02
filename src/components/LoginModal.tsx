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
import Icon from "@/components/ui/icon";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Icon name="User" size={24} className="text-blue-600 mr-2" />
            Вход в систему
          </DialogTitle>
          <DialogDescription>
            Авторизация для сотрудников министерства финансов
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login">Логин</Label>
            <Input
              id="login"
              placeholder="Введите ваш логин"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              type="password"
              placeholder="Введите пароль"
              className="w-full"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" className="rounded" />
            <Label htmlFor="remember" className="text-sm">
              Запомнить меня
            </Label>
          </div>

          <div className="flex flex-col space-y-2">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти
            </Button>
            <Button variant="outline" className="w-full">
              <Icon name="HelpCircle" size={16} className="mr-2" />
              Забыли пароль?
            </Button>
          </div>

          <div className="text-center text-sm text-gray-500 border-t pt-4">
            <p>Только для сотрудников министерства</p>
            <p>При проблемах со входом обратитесь в IT-отдел</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
