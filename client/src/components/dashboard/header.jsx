import { Bell, Search, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const DashboardHeader = () => {
    return (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30">
            <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-brand-800">NEXA</h1>
                    <span className="text-xs bg-brand-100 text-brand-800 px-2 py-0.5 rounded-full">Dashboard</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Input placeholder="Buscar..." className="w-[200px] rounded-full bg-background pl-8" />
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-brand-600 text-[10px] font-medium text-primary-foreground flex items-center justify-center">3</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Settings className="h-5 w-5" />
                    </Button>
                    <div orientation="vertical" className="mx-auto h-8 w-24 bg-primary rounded-full mt-4"></div>
                    <Button variant="ghost" className="gap-2">
                        <span className="font-medium">Facundo</span>
                    </Button>
                </div>
            </div>
        </header>
    )
};

export default DashboardHeader;