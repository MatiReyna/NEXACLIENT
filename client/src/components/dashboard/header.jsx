import { Bell, Search, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Button from '../ui/button';
import Input from '../ui/input';
import { Separator } from '../ui/separator';
import animated1 from '@/assets/animated/animated1.jpg';

const DashboardHeader = () => {
    return (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30">
            <div className="container flex flex-wrap h-auto items-center justify-between py-4 gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-brand-800">NEXA</h1>
                    <span className="text-xs bg-brand-100 text-brand-800 px-2 py-0.5 rounded-full">Dashboard</span>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="relative">
                        <Input placeholder="Buscar..." className="w-[140px] sm:w-[200px] rounded-full bg-background pl-8 transition-all focus:ring-2 focus:ring-brand-300" />
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                    <Button variant="ghost" size="icon" aria-label="Notificaciones" title="Notificaciones" className="relative hover:bg-brand-50 text-brand-800">
                        <Bell className="h-5 w-5 transition-transform hover:scale-105" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-brand-600 text-[10px] font-medium text-primary-foreground flex items-center justify-center">3</span>
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="Configuración" title="Configuración" className="hover:bg-brand-50 text-brand-800">
                        <Settings className="h-5 w-5 transition-transform hover:scale-105" />
                    </Button>
                    <Separator orientation="vertical" className="h-8 hidden sm:block" />
                    <Button variant="ghost" className="gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={ animated1 } alt="Facundo Sagario" />
                            <AvatarFallback>FS</AvatarFallback>
                        </Avatar>
                        <span className="font-medium hidden sm:inline">Facundo</span>
                    </Button>
                </div>
            </div>
        </header>
    )
};

export default DashboardHeader;